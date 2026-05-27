import { motion, useScroll, useTransform } from "framer-motion";
import { Download, FileText } from "lucide-react";
import profileImage from "../assets/kaua-profile.jpg";
import { SocialLinks } from "../components/ui/SocialLinks";
import { useLanguage } from "../context/LanguageContext";

const copy = {
  pt: {
    title:
      "Desenvolvedor Full Stack que transforma demandas reais em software escalável.",
    summary:
      "Atuo com foco em backend e arquitetura, mas com visão de produto para entregar aplicações completas, performáticas e com experiência de uso refinada.",
    ctaProjects: "Explorar projetos",
    ctaResumeOpen: "Abrir currículo",
    ctaResumeDownload: "Baixar CV",
    alt: "Foto de Kauã Campos",
  },
  en: {
    title:
      "Full-Stack Developer turning real-world demands into scalable software.",
    summary:
      "I focus on backend engineering and architecture while keeping a product mindset to deliver complete, high-performance applications with refined UX.",
    ctaProjects: "Explore projects",
    ctaResumeOpen: "Open resume",
    ctaResumeDownload: "Download resume",
    alt: "Photo of Kauã Campos",
  },
};

export function HeroSection() {
  const { language } = useLanguage();
  const t = copy[language as keyof typeof copy];
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 35]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-8 lg:py-2">
      <div className="absolute inset-0 -z-10 bg-radial-premium" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div style={{ y }}>
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">
            Kauã Magalhães Antunes Campos
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            {t.title}
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            React • Spring Boot • TypeScript • Java • Python • C++ • PostgreSQL
          </p>
          <p className="mt-6 max-w-2xl text-slate-300">{t.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="rounded-xl bg-white px-6 py-3 font-medium text-slate-900 transition hover:opacity-90"
            >
              {t.ctaProjects}
            </a>
            <a
              href="/cv-kaua-campos.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-white hover:bg-white/10"
            >
              <FileText size={16} />
              {t.ctaResumeOpen}
            </a>
            <a
              href="/cv-kaua-campos.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-5 py-3 text-cyan-200 hover:bg-cyan-400/20"
            >
              <Download size={16} />
              {t.ctaResumeDownload}
            </a>
          </div>
          <div className="mt-6"><SocialLinks /></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-cyan-400/30 via-violet-500/25 to-emerald-400/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
            <img src={profileImage} alt={t.alt} className="h-auto w-full rounded-[1.4rem] transition duration-500 hover:scale-[1.02] object-cover object-top" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
