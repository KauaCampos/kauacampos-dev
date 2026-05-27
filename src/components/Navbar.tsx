import { getNavItems } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
import brFlag from "../assets/brasil.png";
import usFlag from "../assets/eua.jpg";

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
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
          <button
            onClick={() => setLanguage("pt")}
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-300 ${
              language === "pt"
                ? "bg-white text-slate-900 shadow-lg"
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <img
              src={brFlag}
              alt="Português"
              className="h-4 w-4 rounded-full"
            />
            <span className="hidden sm:block text-sm font-medium">PT</span>
          </button>

          <button
            onClick={() => setLanguage("en")}
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-300 ${
              language === "en"
                ? "bg-white text-slate-900 shadow-lg"
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <img src={usFlag} alt="English" className="h-4 w-4 rounded-full" />
            <span className="hidden sm:block text-sm font-medium">EN</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
