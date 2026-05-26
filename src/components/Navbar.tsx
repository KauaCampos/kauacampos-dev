import { navItems } from '../data/portfolio';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-semibold text-white">Kauã Campos</span>
        <ul className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}><a href={item.href} className="text-sm text-slate-300 transition hover:text-white">{item.label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
