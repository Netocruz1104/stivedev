import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "aristoteles.775@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Nome, e-mail e mensagem são obrigatórios." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "E-mail inválido." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY não configurada");
      return NextResponse.json(
        { error: "Serviço de e-mail não configurado." },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Contato Portfolio <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email.trim(),
      subject: `Contato do site: ${name.trim()}`,
      text: `Nome: ${name.trim()}\nE-mail: ${email.trim()}\n\nMensagem:\n${message.trim()}`,
      html: `
        <p><strong>Nome:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email.trim())}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${escapeHtml(message.trim()).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Falha ao enviar a mensagem. Tente novamente." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Erro interno. Tente novamente." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
