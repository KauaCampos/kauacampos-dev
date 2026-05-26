import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { socialLinks } from '../../data/portfolio';

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map(({ label, href, icon: Icon, external }) => (
        <motion.a
          key={label}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
          whileHover={{ y: -2 }}
          className="group relative inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:shadow-glow"
          aria-label={label}
        >
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-95 rounded-md bg-slate-900 px-2 py-1 text-xs text-slate-200 opacity-0 transition group-hover:opacity-100">{label}</span>
          <Icon size={14} className="text-cyan-300" />
          {label}
          {external && <ExternalLink size={12} className="opacity-70" />}
        </motion.a>
      ))}
    </div>
  );
}