import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-24 md:pt-32">
      <div className="absolute inset-0 -z-10 bg-radial-premium" />
      <div className="mx-auto max-w-6xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-cyan-300">Kauã Magalhães Antunes Campos</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mt-4 max-w-4xl text-4xl font-bold text-white md:text-6xl">Desenvolvedor Full Stack com foco em backend, arquitetura e software real.</motion.h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-300">React • Spring Boot • TypeScript • PostgreSQL</p>
        <p className="mt-6 max-w-3xl text-slate-300">Atuar como Desenvolvedor FullStack/Backend Júnior, aplicando conhecimentos em Java, Python, React e metodologias ágeis para entrega de soluções escaláveis.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projetos" className="rounded-xl bg-white px-6 py-3 font-medium text-slate-900 transition hover:opacity-90">Ver projetos</a>
          <a href="#contato" className="rounded-xl border border-white/20 px-6 py-3 text-white hover:bg-white/10">Entrar em contato</a>
        </div>
      </div>
    </section>
  );
}
