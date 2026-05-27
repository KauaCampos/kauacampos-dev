import { useState } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { SocialLinks } from "../components/ui/SocialLinks";
import { useLanguage } from "../context/LanguageContext";
import { Send } from "lucide-react";

export function ContactSection() {
  const { language } = useLanguage();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    const subject = encodeURIComponent(
      language === "pt"
        ? `Contato via Portfólio – ${form.name}`
        : `Portfolio Contact – ${form.name}`
    );
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=kauauwc@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const t = {
    pt: {
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      placeholder: "Como posso te ajudar?",
      send: "Enviar mensagem",
      sent: "Mensagem enviada!",
      direct: "Email direto",
      languages: "Idiomas",
    },
    en: {
      name: "Name",
      email: "Email",
      message: "Message",
      placeholder: "How can I help you?",
      send: "Send message",
      sent: "Message sent!",
      direct: "Direct email",
      languages: "Languages",
    },
  }[language];

  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow={language === "pt" ? "Contato" : "Contact"}
        title={
          language === "pt"
            ? "Vamos construir algo relevante"
            : "Let's build something meaningful"
        }
        description={
          language === "pt"
            ? "Aberto a oportunidades de estágio e posições júnior para desenvolvimento full stack/backend."
            : "Open to internship opportunities and junior full-stack/backend roles."
        }
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Formulário */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4">
          <div>
            <label className="mb-1 block text-sm text-slate-400">{t.name}</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-2.5 text-white placeholder-slate-500 outline-none focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/20"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-slate-400">{t.email}</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-2.5 text-white placeholder-slate-500 outline-none focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/20"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-slate-400">{t.message}</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t.placeholder}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-2.5 text-white placeholder-slate-500 outline-none focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/20 resize-none"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400/20 border border-cyan-300/30 px-5 py-3 text-cyan-200 font-medium transition hover:bg-cyan-400/30"
          >
            <Send size={15} />
            {sent ? t.sent : t.send}
          </button>
        </div>

        {/* Info */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col justify-between">
          <div>
            <SocialLinks />
            <p className="mt-6 text-slate-300">
              {t.direct}: <span className="text-white">kauauwc@gmail.com</span>
            </p>
            <p className="mt-2 text-slate-400">
              {t.languages}: Português (Nativo) • English (Fluent C1)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
