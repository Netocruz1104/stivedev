"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData): Record<string, string> {
    const err: Record<string, string> = {};
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name) err.name = "Nome é obrigatório.";
    if (!email) err.email = "E-mail é obrigatório.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) err.email = "E-mail inválido.";
    if (!message) err.message = "Mensagem é obrigatória.";

    return err;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const err = validate(data);

    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        if (json.error && typeof json.error === "string") {
          setErrors({ form: json.error });
        }
        return;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full rounded-xl border border-zinc-600 bg-white/[0.03] px-4 py-3 text-white placeholder:text-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-400">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className={cn(inputBase, errors.name && "border-red-500/50 focus:border-red-500 focus:ring-red-500/50")}
          placeholder="Seu nome"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-400">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={cn(inputBase, errors.email && "border-red-500/50 focus:border-red-500 focus:ring-red-500/50")}
          placeholder="seu@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-400">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={cn(inputBase, "resize-none", errors.message && "border-red-500/50 focus:border-red-500 focus:ring-red-500/50")}
          placeholder="Sua mensagem..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message}</p>
        )}
      </div>

      {status === "sent" && (
        <p className="text-sm text-emerald-400">Mensagem enviada com sucesso.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">
          {errors.form ?? "Erro ao enviar. Tente novamente."}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className={cn(
          "w-full rounded-full bg-white py-3 font-medium text-black transition-all duration-300 hover:bg-zinc-200 disabled:opacity-50 sm:w-auto sm:min-w-[180px]"
        )}
      >
        {status === "sending" ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
