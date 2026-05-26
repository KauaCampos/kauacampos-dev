import { motion } from "framer-motion";
import { SectionTitle } from "../components/SectionTitle";
import { devSignalsByLang } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
export function AboutSection() {
  const { language } = useLanguage();
  const devSignals = devSignalsByLang[language];
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow={language === "pt" ? "Sobre" : "About"}
        title={
          language === "pt"
            ? "Trajetória real, foco técnico e evolução contínua"
            : "Real journey, technical focus, and continuous growth"
        }
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
          <p>
            {language === "pt"
              ? "Comecei minha jornada no CEFET-MG cursando o Curso Técnico em Informática e hoje sigo ampliando essa base na PUC Minas no Tecnólogo em ADS."
              : "I started my journey at CEFET-MG in the Computer Technician program and I am currently expanding that foundation at PUC Minas in Systems Analysis and Development."}
          </p>
        </article>
        <motion.ul className="space-y-3">
          {devSignals.map((s) => (
            <li
              key={s}
              className="rounded-xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-200"
            >
              {s}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
