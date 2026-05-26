import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { projectsByLang } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

export function ProjectsSection() {
  const { language } = useLanguage();
  const projects = projectsByLang[language];
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow={language === "pt" ? "Projetos" : "Projects"}
        title={
          language === "pt"
            ? "Produtos e sistemas que eu realmente construo"
            : "Products and systems I actually build"
        }
        description={
          language === "pt"
            ? "Foco em aplicações de verdade: backend sólido, dados bem modelados e UX com padrão de produto."
            : "Focused on real applications: robust backend, clean data modeling, and product-grade UX."
        }
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <motion.article
            key={p.title}
            whileHover={{ y: -5 }}
            className={`group overflow-hidden rounded-2xl border ${p.featured ? "border-cyan-300/50 shadow-glow" : "border-white/10"} bg-white/5 backdrop-blur`}
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
            </div>
            <div className="p-6">
              <p className="text-sm text-cyan-300">
                {p.year} {p.badge ? `• ${p.badge}` : ""}
              </p>
              <h3 className="mt-2 text-xl text-white">{p.title}</h3>
              <p className="mt-3 text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-white/10 bg-slate-900/60 px-2 py-1 text-xs text-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm text-white"
                >
                  <Github size={14} />
                  {language === "pt" ? "GitHub" : "GitHub"}
                  <ArrowUpRight size={12} />
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-slate-900"
                >
                  {language === "pt" ? "Demo" : "Live Demo"}
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
