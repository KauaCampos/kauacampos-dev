import { motion } from "framer-motion";
import { SectionTitle } from "../components/SectionTitle";
import { skillCategoriesByLang } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
export function SkillsSection() {
  const { language } = useLanguage();
  const skillCategories = skillCategoriesByLang[language];
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Skills"
        title={
          language === "pt"
            ? "Stack técnica e competências profissionais"
            : "Technical stack and professional capabilities"
        }
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map(({ title, icon: Icon, items }) => (
          <motion.article
            key={title}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="mb-4 flex items-center gap-3">
              <Icon className="text-cyan-300" size={18} />
              <h3 className="text-white">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((i) => (
                <span
                  key={i}
                  className="rounded-lg bg-slate-800 px-3 py-1 text-xs text-slate-200"
                >
                  {i}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
