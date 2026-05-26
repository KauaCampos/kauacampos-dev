import { SectionTitle } from "../components/SectionTitle";
import { experiencesByLang } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
export function ExperienceSection() {
  const { language } = useLanguage();
  const experiences = experiencesByLang[language];
  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow={language === "pt" ? "Experiência" : "Experience"}
        title={
          language === "pt"
            ? "Projetos reais com impacto acadêmico e técnico"
            : "Real projects with academic and technical impact"
        }
      />
      <div className="mt-8 space-y-4">
        {experiences.map((e) => (
          <article
            key={e.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-cyan-300">{e.period}</p>
            <h3 className="mt-2 text-xl text-white">{e.title}</h3>
            <p className="mt-2 text-slate-300">{e.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
