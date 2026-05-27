import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { ExternalLink } from "lucide-react";

const certs = [
  {
    name: "Inglês Avançado C1",
    institution: "Uptime",
    year: "2022",
    icon: "🌐",
    href: "https://www.linkedin.com/in/kauacampos/overlay/Certifications/1108400271/treasury/?profileId=ACoAAEFXlCAB815g1FG6UCv5u84Tc0-c7ggrFJw",
  },
  {
    name: "Inteligência Artificial",
    institution: "Conquer Business School",
    year: "2024",
    icon: "🤖",
    href: "https://conquerplus.com.br/certificates/fe75b30e-f3b4-4149-95c1-2c6fae228b1d",
  },
  {
    name: "Java COMPLETO POO + Projetos",
    institution: "Udemy (Nelio Alves)",
    year: "2025",
    icon: "☕",
    href: "https://www.udemy.com/certificate/UC-902619a9-de19-4b4c-8a95-401b904d6e10/",
  },
  {
    name: "Python Avançado",
    institution: "IFMG",
    year: "2025",
    icon: "🐍",
    href: "https://www.linkedin.com/in/kauacampos/overlay/Certifications/2002509493/treasury/?profileId=ACoAAEFXlCAB815g1FG6UCv5u84Tc0-c7ggrFJw",
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
          <a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-300/30 hover:bg-white/8 cursor-pointer"
          >
            <span className="text-2xl">{c.icon}</span>
            <div className="flex-1">
              <p className="font-medium text-white">{c.name}</p>
              <p className="mt-1 text-sm text-slate-400">{c.institution}</p>
              <p className="mt-1 text-xs text-cyan-300">{c.year}</p>
            </div>
            <ExternalLink size={14} className="mt-1 shrink-0 text-slate-500" />
          </a>
        ))}
      </div>
    </section>
  );
}
