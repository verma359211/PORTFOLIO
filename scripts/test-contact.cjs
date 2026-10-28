// Exercise validation and error paths without sending real email.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { test } = require("node:test");
const ts = require("typescript");
const valid = {
  name: "Visitor",
  email: "visitor@example.test",
  subject: "Working together",
  message: "Hello from the portfolio.",
};

function loadRoute({ configured = true, failOnce = false } = {}) {
  const messages = [];
  let now = 1_000;
  const module = { exports: {} };
  const filename = path.join(__dirname, "../app/api/contact/route.ts");
  const code = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
  }).outputText;
  vm.runInNewContext(
    code,
    {
      module,
      exports: module.exports,
      Date: { now: () => now },
      process: {
        env: configured
          ? { EMAIL: "owner@example.test", EMAIL_PASSWORD: "test-only" }
          : {},
      },
      require(id) {
        if (id !== "nodemailer") return require(id);
        return {
          createTransport: () => ({
            sendMail: async (message) => {
              if (failOnce) {
                failOnce = false;
                throw new Error("SMTP unavailable");
              }
              messages.push(message);
            },
          }),
        };
      },
    },
    { filename },
  );
  return {
    messages,
    advance: (ms) => {
      now += ms;
    },
    post: (body) =>
      module.exports.POST(
        new Request("http://localhost/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-forwarded-for": "192.0.2.1",
          },
          body: typeof body === "string" ? body : JSON.stringify(body),
        }),
      ),
  };
}

test("contact rejects malformed, missing, oversized and header-injection input before SMTP", async () => {
  const route = loadRoute();
  for (const body of [
    "{",
    "null",
    "[]",
    {},
    { ...valid, name: " " },
    { ...valid, email: "invalid" },
    { ...valid, name: "x\r\nBcc: injected@example.test" },
    { ...valid, subject: "x\nInjected: header" },
    { ...valid, message: "x".repeat(5001) },
  ])
    assert.equal((await route.post(body)).status, 400);
  assert.equal((await route.post("x".repeat(20001))).status, 413);
  assert.equal(route.messages.length, 0);
});

test("contact trims text and sets the visitor as reply-to without changing the recipient", async () => {
  const route = loadRoute();
  assert.equal(
    (
      await route.post({
        ...valid,
        name: " Visitor ",
        message: " <b>Hello</b> ",
      })
    ).status,
    200,
  );
  assert.equal(route.messages[0].to, "owner@example.test");
  assert.equal(route.messages[0].replyTo, valid.email);
  assert.match(route.messages[0].text, /Message:\n<b>Hello<\/b>$/);
  assert.equal(route.messages[0].html, undefined);
});

test("contact honeypot returns success without sending", async () => {
  const route = loadRoute();
  assert.equal((await route.post({ ...valid, website: "bot" })).status, 200);
  assert.equal(route.messages.length, 0);
});

test("contact limits repeat submissions and expires the cooldown", async () => {
  const route = loadRoute();
  assert.equal((await route.post(valid)).status, 200);
  assert.equal((await route.post(valid)).status, 429);
  route.advance(60_001);
  assert.equal((await route.post(valid)).status, 200);
});

test("contact returns meaningful status codes for configuration and SMTP failures", async () => {
  assert.equal(
    (await loadRoute({ configured: false }).post(valid)).status,
    503,
  );
  const route = loadRoute({ failOnce: true });
  assert.equal((await route.post(valid)).status, 502);
  assert.equal((await route.post(valid)).status, 200);
});

test("installed Nodemailer composes our message and reply-to using an offline transport", async () => {
  const transport = require("nodemailer").createTransport({
    streamTransport: true,
    buffer: true,
  });
  const result = await transport.sendMail({
    from: "owner@example.test",
    to: "owner@example.test",
    replyTo: valid.email,
    subject: valid.subject,
    text: valid.message,
  });
  assert.match(result.message.toString(), /Reply-To: visitor@example\.test/);
  assert.match(result.message.toString(), /Hello from the portfolio\./);
});
