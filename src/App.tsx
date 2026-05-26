import { lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { AboutSection } from './sections/AboutSection';
import { CertificatesSection } from './sections/CertificatesSection';
import { ContactSection } from './sections/ContactSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { GitHubStatsSection } from './sections/GitHubStatsSection';
import { HeroSection } from './sections/HeroSection';
import { SkillsSection } from './sections/SkillsSection';

const ProjectsSection = lazy(() => import('./sections/ProjectsSection').then((m) => ({ default: m.ProjectsSection })));

function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <Suspense fallback={<div className="px-6 py-20 text-center text-slate-400">Carregando projetos...</div>}>
        <ProjectsSection />
      </Suspense>
      <GitHubStatsSection />
      <CertificatesSection />
      <ContactSection />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} Kauã Campos — Portfólio.</footer>
    </div>
  );
}

export default App;