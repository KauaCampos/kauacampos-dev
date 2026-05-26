import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import profileImage from '../assets/profile-placeholder.svg';
import { SocialLinks } from '../components/ui/SocialLinks';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 35]);

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-16 md:pt-24">
      <div className="absolute inset-0 -z-10 bg-radial-premium" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div style={{ y }}>
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">Kauã Magalhães Antunes Campos</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">Desenvolvedor Full Stack que transforma demandas reais em software escalável.</h1>
          <p className="mt-4 max-w-2xl text-slate-300">React • Spring Boot • TypeScript • PostgreSQL</p>
          <p className="mt-6 max-w-2xl text-slate-300">Atuo com foco em backend e arquitetura, mas com visão de produto para entregar aplicações completas, performáticas e com experiência de uso refinada.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projetos" className="rounded-xl bg-white px-6 py-3 font-medium text-slate-900 transition hover:opacity-90">Explorar projetos</a>
            <a href="/cv-kaua-campos.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-white hover:bg-white/10"><FileText size={16}/>Abrir currículo</a>
            <a href="/cv-kaua-campos.pdf" download className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-5 py-3 text-cyan-200 hover:bg-cyan-400/20"><Download size={16}/>Baixar CV</a>
          </div>
          <div className="mt-6"><SocialLinks /></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-cyan-400/20 via-violet-500/20 to-emerald-400/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/5 p-3 backdrop-blur-xl">
            <img src={profileImage} alt="Foto de Kauã Campos" className="h-auto w-full rounded-[1.4rem]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
