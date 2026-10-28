import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { FEEDBACK_COMMENT_LIMIT } from "../../../lib/feedback";

export const runtime = "nodejs";

// A small, best-effort per-instance limit for this anonymous form.
const recentSubmissions = new Map<string, number>();
const COOLDOWN_MS = 60_000;

export async function POST(request: Request) {
  let body: unknown;
  try {
    if (Number(request.headers.get("content-length")) > 10_000) {
      return NextResponse.json(
        { error: "Feedback is too long." },
        { status: 413 },
      );
    }
    const text = await request.text();
    if (text.length > 10_000) {
      return NextResponse.json(
        { error: "Feedback is too long." },
        { status: 413 },
      );
    }
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: "Invalid feedback." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid feedback." }, { status: 400 });
  }
  const { rating, comment, website } = body as Record<string, unknown>;
  if (
    typeof rating !== "number" ||
    !Number.isInteger(rating) ||
    rating < 1 ||
    rating > 5 ||
    (comment !== undefined && typeof comment !== "string") ||
    (typeof comment === "string" && comment.length > FEEDBACK_COMMENT_LIMIT) ||
    (website !== undefined && typeof website !== "string")
  ) {
    return NextResponse.json(
      {
        error: "Choose 1–5 stars and keep your comment under 1,200 characters.",
      },
      { status: 400 },
    );
  }

  // Hidden from people and assistive technology; catches basic form-filling bots.
  if (website) return NextResponse.json({ success: true });

  if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD) {
    return NextResponse.json(
      { error: "Feedback is temporarily unavailable." },
      { status: 503 },
    );
  }

  const now = Date.now();
  for (const [key, until] of recentSubmissions) {
    if (until <= now) recentSubmissions.delete(key);
  }
  const visitor =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if ((recentSubmissions.get(visitor) ?? 0) > now) {
    return NextResponse.json(
      { error: "Please wait a minute before sending again." },
      {
        status: 429,
        headers: { "Retry-After": "60" },
      },
    );
  }
  if (recentSubmissions.size >= 2_000) {
    return NextResponse.json(
      { error: "Please try again in a minute." },
      { status: 503 },
    );
  }
  recentSubmissions.set(visitor, now + COOLDOWN_MS);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASSWORD },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Feedback" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: `Portfolio feedback: ${rating}/5 stars`,
      text: [
        "an ongoing experiment — visitor feedback",
        `Rating: ${rating}/5`,
        "",
        "Comment:",
        typeof comment === "string" && comment.trim()
          ? comment.trim()
          : "No comment provided.",
      ].join("\n"),
    });
    return NextResponse.json({ success: true });
  } catch {
    recentSubmissions.delete(visitor);
    return NextResponse.json(
      { error: "Feedback could not be sent. Please try again." },
      { status: 502 },
    );
  }
}
