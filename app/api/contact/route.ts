import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
// Best-effort per-instance protection, matching the anonymous feedback form.
const recentSubmissions = new Map<string, number>();
const COOLDOWN_MS = 60_000;

export async function POST(request: Request) {
  let body: unknown;
  try {
    if (Number(request.headers.get("content-length")) > 20_000)
      return NextResponse.json(
        { error: "Message is too long." },
        { status: 413 },
      );
    const text = await request.text();
    if (text.length > 20_000)
      return NextResponse.json(
        { error: "Message is too long." },
        { status: 413 },
      );
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: "Invalid message." }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body))
    return NextResponse.json({ error: "Invalid message." }, { status: 400 });
  const fields = body as Record<string, unknown>;
  const limits = { name: 100, email: 254, subject: 160, message: 5_000 };
  for (const [key, limit] of Object.entries(limits)) {
    if (
      typeof fields[key] !== "string" ||
      !fields[key].trim() ||
      fields[key].length > limit
    )
      return NextResponse.json(
        { error: "Please check your contact details and message." },
        { status: 400 },
      );
  }
  const name = (fields.name as string).trim();
  const email = (fields.email as string).trim();
  const subject = (fields.subject as string).trim();
  const message = (fields.message as string).trim();
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    /[\r\n]/.test(name + subject)
  )
    return NextResponse.json(
      { error: "Please check your contact details." },
      { status: 400 },
    );
  if (fields.website !== undefined && typeof fields.website !== "string")
    return NextResponse.json({ error: "Invalid message." }, { status: 400 });
  if (fields.website) return NextResponse.json({ success: true });
  if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD)
    return NextResponse.json(
      { error: "Contact is temporarily unavailable." },
      { status: 503 },
    );

  const now = Date.now();
  for (const [ip, until] of recentSubmissions)
    if (until <= now) recentSubmissions.delete(ip);
  const visitor =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if ((recentSubmissions.get(visitor) ?? 0) > now)
    return NextResponse.json(
      { error: "Please wait a minute before sending again." },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  if (recentSubmissions.size >= 2_000)
    return NextResponse.json(
      { error: "Please try again shortly." },
      { status: 503 },
    );
  recentSubmissions.set(visitor, now + COOLDOWN_MS);
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASSWORD },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      replyTo: email,
      subject: `New Message from ${name}: ${subject}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    return NextResponse.json({ success: true });
  } catch {
    recentSubmissions.delete(visitor);
    return NextResponse.json(
      { success: false, error: "Failed to send email. Please try again." },
      { status: 502 },
    );
  }
}
