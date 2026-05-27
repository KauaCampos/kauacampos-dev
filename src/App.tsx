import { lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./components/Navbar";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { AboutSection } from "./sections/AboutSection";
import { CertificatesSection } from "./sections/CertificatesSection";
import { ContactSection } from "./sections/ContactSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { SkillsSection } from "./sections/SkillsSection";

const ProjectsSection = lazy(() =>
  import("./sections/ProjectsSection").then((m) => ({
    default: m.ProjectsSection,
  })),
);

function Layout() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <Suspense
        fallback={
          <div className="px-6 py-20 text-center text-slate-400">
            {language === "pt"
              ? "Carregando projetos..."
              : "Loading projects..."}
          </div>
        }
      >
        <ProjectsSection />
      </Suspense>
      <CertificatesSection />
      <ContactSection />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Kauã Campos —{" "}
        {language === "pt" ? "Portfólio" : "Portfolio"}.
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Layout />
      <Analytics />
    </LanguageProvider>
  );
}
