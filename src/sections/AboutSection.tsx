import { motion } from 'framer-motion';
import { devSignals } from '../data/portfolio';
import { SectionTitle } from '../components/SectionTitle';

export function AboutSection() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle eyebrow="Sobre" title="Trajetória real, foco técnico e evolução contínua" />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
          <p>
            Comecei minha jornada no CEFET-MG no Técnico em Informática e hoje sigo ampliando essa base na PUC Minas em ADS. Gosto de trabalhar no ponto em que arquitetura e produto se encontram: resolver problemas reais com backend bem estruturado e interfaces claras.
          </p>
          <p className="mt-4">
            No Prisma Software Factory, participei da construção de soluções para a ONG INASIM; no SIGEPP, aprofundei em Spring Boot, banco de dados e integração full stack. Meu interesse atual está em backend, arquitetura e IA aplicada a produtos úteis.
          </p>
        </article>
        <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-3">
          {devSignals.map((signal) => (
            <li key={signal} className="rounded-xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-200">{signal}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
