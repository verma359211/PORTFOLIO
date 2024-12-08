import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type EmailPayload = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export async function POST(request: Request) {
    const body: EmailPayload = await request.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL, // Your email
            pass: process.env.EMAIL_PASSWORD, // App password
        },
    });

    try {
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL}>`,
            to: process.env.EMAIL, // Receiver email (your email)
            subject: `New Message from ${body.name}: ${body.subject}`,
            text: `From: ${body.name}\nEmail: ${body.email}\n\nMessage:\n${body.message}`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json({ success: false, error: "Failed to send email" });
    }
}
