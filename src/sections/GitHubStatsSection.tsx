import { motion } from "framer-motion";
import { SectionTitle } from "../components/SectionTitle";

const username = "KauaCampos";

export function GitHubStatsSection() {
  const streakCard = `https://streak-stats.demolab.com?user=${username}&theme=tokyonight&hide_border=true`;

  return (
    <section id="github" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="GitHub"
        title="Atividade e consistência de desenvolvimento"
        description="Visão rápida da minha frequência de commits e consistência de contribuição."
      />

      <motion.article
        whileHover={{ y: -3 }}
        className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3"
      >
        <img
          src={streakCard}
          alt="GitHub streak stats"
          className="w-full rounded-xl"
          loading="lazy"
        />
      </motion.article>
    </section>
  );
}