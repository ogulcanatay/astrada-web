import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "astrADA Web <onboarding@resend.dev>",
    to: ["eylul.arikan@kww.com.tr"],
    subject: `Web sitesi iletişim formu — ${name}`,
    html: `
      <h2>Yeni İletişim Formu Mesajı</h2>
      <p><strong>Ad Soyad:</strong> ${name}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone || "—"}</p>
      <hr />
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json({ ok: true });
}
