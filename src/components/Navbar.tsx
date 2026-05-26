import { getNavItems } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const navItems = getNavItems(language);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <span className="font-semibold text-white">Kauã Campos</span>
        <ul className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
         <div className="flex items-center gap-2">
          <button onClick={() => setLanguage('pt')} className={`rounded-md px-2 py-1 text-sm ${language === 'pt' ? 'bg-white/20' : 'bg-white/5'}`}>🇧🇷</button>
          <button onClick={() => setLanguage('en')} className={`rounded-md px-2 py-1 text-sm ${language === 'en' ? 'bg-white/20' : 'bg-white/5'}`}>🇺🇸</button>
        </div>
      </nav>
    </header>
  );
}
