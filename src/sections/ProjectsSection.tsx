import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { projects } from '../data/portfolio';

export function ProjectsSection() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle eyebrow="Projetos" title="Produtos e sistemas que eu realmente construo" description="Foco em aplicações de verdade: backend sólido, dados bem modelados e UX com padrão de produto." />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <motion.article key={p.title} whileHover={{ y: -4, rotateX: 1 }} className={`group overflow-hidden rounded-2xl border ${p.featured ? 'border-cyan-300/40' : 'border-white/10'} bg-surface transition`}>
            <div className="relative h-36 overflow-hidden bg-gradient-to-r from-cyan-500/30 via-violet-500/20 to-emerald-500/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_25%)] opacity-0 transition group-hover:opacity-100" />
            </div>
            <div className="p-6">
              <p className="text-sm text-cyan-300">{p.year} {p.badge ? `• ${p.badge}` : ''}</p>
              <h3 className="mt-2 text-xl text-white">{p.title}</h3>
              <p className="mt-3 text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{p.stack.map((s) => <span key={s} className="rounded-lg border border-white/10 bg-slate-900 px-2 py-1 text-xs text-slate-200">{s}</span>)}</div>
              <div className="mt-5 flex gap-3">
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm text-white"><Github size={14}/>GitHub<ArrowUpRight size={12}/></a>
                <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-slate-900">Demo<ArrowUpRight size={12}/></a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
