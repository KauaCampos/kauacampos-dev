import { motion } from "framer-motion";

type Props = { eyebrow: string; title: string; description?: string };

export function SectionTitle({ eyebrow, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-slate-300">{description}</p>
      )}
    </motion.div>
  );
}
