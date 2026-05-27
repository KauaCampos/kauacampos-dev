import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { ExternalLink } from "lucide-react";

const certs = [
  {
    name: "Inglês Avançado C1",
    institution: "Uptime",
    year: "2024",
    icon: "🌐",
  },
  {
    name: "Inteligência Artificial",
    institution: "Conquer Business School",
    year: "2024",
    icon: "🤖",
  },
  {
    name: "Java COMPLETO POO + Projetos",
    institution: "Udemy (Nelio Alves)",
    year: "2023",
    icon: "☕",
  },
  {
    name: "Python Avançado",
    institution: "IFMG",
    year: "2023",
    icon: "🐍",
  },
];

export function CertificatesSection() {
  const { language } = useLanguage();
  return (
    <section id="certificacoes" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow={language === "pt" ? "Certificações" : "Certifications"}
        title={
          language === "pt"
            ? "Formação contínua e atualização técnica"
            : "Continuous learning and technical growth"
        }
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {certs.map((c) => (
          <article
            key={c.name}
            className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-300/30 hover:bg-white/8"
          >
            <span className="text-2xl">{c.icon}</span>
            <div className="flex-1">
              <p className="font-medium text-white">{c.name}</p>
              <p className="mt-1 text-sm text-slate-400">{c.institution}</p>
              <p className="mt-1 text-xs text-cyan-300">{c.year}</p>
            </div>
            <ExternalLink size={14} className="mt-1 shrink-0 text-slate-500" />
          </article>
        ))}
      </div>
    </section>
  );
}
