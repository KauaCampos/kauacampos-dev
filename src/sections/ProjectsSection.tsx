import { motion } from 'framer-motion';
import { Github, Rocket } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { projects } from '../data/portfolio';

export function ProjectsSection() {
  return <section id="projetos" className="mx-auto max-w-6xl px-6 py-20"><SectionTitle eyebrow="Projetos" title="Portfólio de construção de software" description="Projetos com foco em arquitetura, experiência do usuário e resultados reais." /><div className="mt-10 grid gap-6 md:grid-cols-2">{projects.map((p)=> <motion.article key={p.title} whileHover={{ scale: 1.01 }} className="overflow-hidden rounded-2xl border border-white/10 bg-surface"><div className="h-28 bg-gradient-to-r from-cyan-500/30 via-violet-500/20 to-emerald-500/30" /><div className="p-6"><p className="text-sm text-cyan-300">{p.year} {p.badge ? `• ${p.badge}` : ''}</p><h3 className="mt-2 text-xl text-white">{p.title}</h3><p className="mt-3 text-slate-300">{p.description}</p><div className="mt-4 flex flex-wrap gap-2">{p.stack.map(s=><span key={s} className="rounded-lg border border-white/10 px-2 py-1 text-xs text-slate-200">{s}</span>)}</div><div className="mt-5 flex gap-3"><a href={p.github} className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm text-white"><Github size={14}/>GitHub</a><a href={p.demo} className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-slate-900"><Rocket size={14}/>Demo</a></div></div></motion.article>)}</div></section>;
}
