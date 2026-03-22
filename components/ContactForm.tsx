"use client";
import { useState } from "react";
import { Lang, T, t } from "@/lib/i18n";

export default function ContactForm({ lang }: { lang: Lang }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">✓</div>
        <p className="text-white/80">{t(T.contact.success, lang)}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <input required value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))}
        placeholder={t(T.contact.name, lang)}
        className="col-span-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent text-sm" />
      <input required type="email" value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))}
        placeholder={t(T.contact.email, lang)}
        className="col-span-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent text-sm" />
      <input value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))}
        placeholder={t(T.contact.phone, lang)}
        className="col-span-1 md:col-span-2 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent text-sm" />
      <textarea required value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))}
        placeholder={t(T.contact.msg, lang)} rows={4}
        className="col-span-1 md:col-span-2 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent text-sm resize-none" />
      {status === "error" && <p className="col-span-2 text-red-400 text-sm">{t(T.contact.error, lang)}</p>}
      <div className="col-span-1 md:col-span-2">
        <button type="submit" disabled={status === "sending"}
          className="px-8 py-3 bg-accent text-brand font-semibold rounded-full text-sm hover:bg-accent/90 transition-colors disabled:opacity-50">
          {status === "sending" ? t(T.contact.sending, lang) : t(T.contact.send, lang)}
        </button>
      </div>
    </form>
  );
}
