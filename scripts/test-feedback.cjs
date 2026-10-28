// Exercise the real route with SMTP mocked: no email is sent by these tests.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { test } = require("node:test");
const ts = require("typescript");

const root = path.resolve(__dirname, "..");

function loadRoute({ configured = true, failOnce = false } = {}) {
  const messages = [];
  let clock = 1_000;
  let shouldFail = failOnce;
  const mailer = {
    createTransport() {
      return {
        async sendMail(message) {
          if (shouldFail) { shouldFail = false; throw new Error("SMTP unavailable"); }
          messages.push(message);
        },
      };
    },
  };
  const load = (filename) => {
    const code = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
    }).outputText;
    const module = { exports: {} };
    vm.runInNewContext(code, {
      module,
      exports: module.exports,
      process: { env: configured ? { EMAIL: "owner@example.test", EMAIL_PASSWORD: "test-only" } : {} },
      Date: { now: () => clock },
      require(id) {
        if (id === "nodemailer") return mailer;
        if (id === "../../../lib/feedback") return load(path.join(root, "lib/feedback.ts"));
        return require(id);
      },
    }, { filename });
    return module.exports;
  };
  const { POST } = load(path.join(root, "app/api/feedback/route.ts"));
  return {
    messages,
    advance: (ms) => { clock += ms; },
    post: (body, headers = {}) => POST(new Request("http://localhost/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-forwarded-for": "192.0.2.1", ...headers },
      body: typeof body === "string" ? body : JSON.stringify(body),
    })),
  };
}

test("rejects malformed input and invalid ratings without contacting SMTP", async () => {
  const route = loadRoute();
  for (const body of ["{", "null", "[]", {}, { rating: 0 }, { rating: 6 }, { rating: 2.5 }, { rating: "5" }, { rating: 5, comment: 42 }, { rating: 5, comment: "x".repeat(1201) }]) {
    assert.equal((await route.post(body)).status, 400);
  }
  assert.equal((await route.post("x".repeat(10001))).status, 413);
  assert.equal(route.messages.length, 0);
});

test("sends a rating without requiring a comment or personal information", async () => {
  const route = loadRoute();
  const response = await route.post({ rating: 4 });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).success, true);
  assert.equal(route.messages.length, 1);
  assert.equal(route.messages[0].to, "owner@example.test");
  assert.match(route.messages[0].subject, /4\/5/);
  assert.match(route.messages[0].text, /No comment provided/);
});

test("keeps comments as plain text and trims surrounding whitespace", async () => {
  const route = loadRoute();
  await route.post({ rating: 5, comment: "  <b>Great work</b>\nMore mobile examples, please.  " });
  assert.match(route.messages[0].text, /Comment:\n<b>Great work<\/b>\nMore mobile examples, please\.$/);
  assert.equal(route.messages[0].html, undefined);
});

test("honors the honeypot without sending mail", async () => {
  const route = loadRoute();
  assert.equal((await route.post({ rating: 5, website: "bot.example" })).status, 200);
  assert.equal(route.messages.length, 0);
});

test("limits repeated submissions and allows another after the cooldown", async () => {
  const route = loadRoute();
  await route.post({ rating: 3 });
  const limited = await route.post({ rating: 3 });
  assert.equal(limited.status, 429);
  assert.equal(limited.headers.get("Retry-After"), "60");
  route.advance(60_001);
  assert.equal((await route.post({ rating: 4 })).status, 200);
  assert.equal(route.messages.length, 2);
});

test("reports unavailable email configuration instead of pretending to send", async () => {
  const route = loadRoute({ configured: false });
  assert.equal((await route.post({ rating: 5 })).status, 503);
  assert.equal(route.messages.length, 0);
});

test("returns an SMTP failure and allows the visitor to retry", async () => {
  const route = loadRoute({ failOnce: true });
  assert.equal((await route.post({ rating: 5 })).status, 502);
  assert.equal((await route.post({ rating: 5 })).status, 200);
  assert.equal(route.messages.length, 1);
});
