// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure Node.js runtime (Nodemailer isn't edge-compatible)
export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string; // honeypot
};

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Payload;
    if (data.company) return NextResponse.json({ ok: true }); // spam trap

    const name = (data.name ?? "").trim();
    const email = (data.email ?? "").trim();
    const message = (data.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const secure = String(process.env.SMTP_SECURE || "true") === "true";
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL || user;

    if (!host || !user || !pass || !to || !from) {
      return NextResponse.json(
        { error: "Server misconfigured: missing SMTP env vars" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure, // true for port 465
      auth: { user, pass },
    });

    const subject = `Portfolio Inquiry from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const html = htmlTemplate({ name, email, message });

    const info = await transporter.sendMail({
      from,           // should match your Gmail address
      to,             // your inbox
      subject,
      text,
      html,
      replyTo: email, // reply directly to the sender
    });

    // Optional: log messageId in dev
    if (process.env.NODE_ENV !== "production") {
      console.log("[CONTACT] sent:", info.messageId);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[CONTACT] error:", err);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }
}

function htmlTemplate({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const esc = (s: string) =>
    s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Inter,system-ui,Segoe UI,Roboto,Arial,sans-serif;max-width:640px;margin:0 auto;color:#0f172a">
    <tr><td style="padding:24px 0;">
      <h2 style="margin:0 0 12px;font-size:20px;line-height:1.3;">New portfolio inquiry</h2>
      <p style="margin:4px 0;"><strong>Name:</strong> ${esc(name)}</p>
      <p style="margin:4px 0;"><strong>Email:</strong> ${esc(email)}</p>
      <p style="margin:16px 0 4px;"><strong>Message</strong></p>
      <div style="white-space:pre-wrap;border:1px solid #e5e7eb;border-radius:12px;padding:12px;background:#f8fafc;">${esc(message)}</div>
      <p style="margin:16px 0 0;color:#475569;font-size:12px;">Sent from makiprofile</p>
    </td></tr>
  </table>`;
}
