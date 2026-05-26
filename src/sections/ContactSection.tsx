import { SectionTitle } from "../components/SectionTitle";
import { SocialLinks } from "../components/ui/SocialLinks";
import { useLanguage } from "../context/LanguageContext";

export function ContactSection() {
  const { language } = useLanguage();

  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow={language === "pt" ? "Contato" : "Contact"}
        title={
          language === "pt"
            ? "Vamos construir algo relevante"
            : "Let's build something meaningful"
        }
        description={
          language === "pt"
            ? "Aberto a oportunidades de estágio e posições júnior para desenvolvimento full stack/backend."
            : "Open to internship opportunities and junior full-stack/backend roles."
        }
      />
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <SocialLinks />
        <p className="mt-4 text-slate-300">
          {language === "pt" ? "Email direto" : "Direct email"}:
          kauauwc@gmail.com
        </p>
        <p className="text-slate-400">
          {language === "pt" ? "Idiomas" : "Languages"}: Português (Nativo) •
          English (Fluent C1)
        </p>
      </div>
    </section>
  );
}
