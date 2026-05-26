import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';

const username = 'KauaCampos';

export function GitHubStatsSection() {
  const cards = [
    `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&title_color=67e8f9&text_color=cbd5e1&icon_color=67e8f9&border_color=1f2937`,
    `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&ring=67e8f9&fire=a78bfa&currStreakLabel=67e8f9&sideLabels=cbd5e1&dates=94a3b8&border=1f2937`,
    `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&title_color=67e8f9&text_color=cbd5e1&border_color=1f2937`,
  ];

  return (
    <section id="github" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle eyebrow="GitHub" title="Atividade e consistência de desenvolvimento" description="Visão rápida da minha cadência de commits, linguagens mais utilizadas e constância de contribuição." />
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {cards.map((src) => (
          <motion.article key={src} whileHover={{ y: -3 }} className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <img src={src} alt="GitHub stats" className="w-full rounded-xl" loading="lazy" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
