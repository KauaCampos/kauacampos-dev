import { SectionTitle } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
const certs = [
  "Inglês Avançado C1 – Uptime",
  "Inteligência Artificial – Conquer Business School",
  "Java COMPLETO POO + Projetos – Udemy (Nelio Alves)",
  "Python Avançado – IFMG",
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
            key={c}
            className="rounded-xl border border-white/10 bg-white/5 p-5 text-slate-200"
          >
            {c}
          </article>
        ))}
      </div>
    </section>
  );
}
