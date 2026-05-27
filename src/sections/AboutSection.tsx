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
              ? "Comecei minha jornada no CEFET-MG cursando o Curso Técnico em Informática e hoje sigo ampliando essa base na PUC Minas no Curso Tecnólogo em Análise e Desenvolvimento de Sistemas. Gosto de trabalhar no ponto em que arquitetura e produto se encontram: resolver problemas reais com backend bem estruturado e interfaces claras."
              : "I started my journey at CEFET-MG studying Computer Science in the Technical Informatics Program, and today I continue to expand that foundation at PUC Minas pursuing a degree in Systems Analysis and Development. I enjoy working at the intersection of architecture and product — solving real-world problems with well-structured backend systems and clean, intuitive interfaces."}
          </p>
          <p className="mt-4">
            {language === "pt"
              ? "Na Fábrica de Software Prisma (Projeto de Extensão do CEFET-MG), participei da construção de soluções para a ONG INASIM; no SIGEPP, aprofundei em Spring Boot, banco de dados e integração full stack. Meu interesse atual está em desenvolvimento fullstack, backend, arquitetura e IA aplicada a produtos úteis."
              : "At Prisma Software Factory (a CEFET-MG extension project), I contributed to the development of software solutions for the NGO INASIM; in SIGEPP, I deepened my knowledge of Spring Boot, databases, and full stack integration. My current interests are full stack development, backend engineering, software architecture, and AI applied to useful products."}
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