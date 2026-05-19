import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Payload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  consent: boolean;
  website?: string;
};

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  let data: Payload;

  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (data.website && data.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!data.consent) {
    return NextResponse.json({ ok: false, error: "Consent required" }, { status: 400 });
  }

  if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  if (!isEmail(data.email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const {
    CONTACT_TO_EMAIL,
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM_NAME,
    SMTP_FROM_EMAIL,
  } = process.env;

  if (
    !CONTACT_TO_EMAIL ||
    !SMTP_HOST ||
    !SMTP_PORT ||
    !SMTP_USER ||
    !SMTP_PASS ||
    !SMTP_FROM_EMAIL
  ) {
    return NextResponse.json(
      { ok: false, error: "Server email not configured" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const subject = `Formularz kontaktowy – Sylwano - Altany, Wiaty, Zadaszenia`;

  const text = [
    `Imię i nazwisko: ${data.name}`,
    `E-mail: ${data.email}`,
    "",
    "Wiadomość:",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await transporter.sendMail({
      from: `"${SMTP_FROM_NAME ?? "mebleogrodoweniewiadow.pl"}" <${SMTP_FROM_EMAIL}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: data.email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("SMTP sendMail failed:", err);

    return NextResponse.json(
      { ok: false, error: "Email send failed" },
      { status: 500 }
    );
  }
}