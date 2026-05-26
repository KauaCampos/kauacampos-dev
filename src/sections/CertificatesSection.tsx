import { SectionTitle } from "../components/SectionTitle";
const certs = [
  "Inglês Avançado C1 – Uptime",
  "Inteligência Artificial – Conquer Business School",
  "Java COMPLETO POO + Projetos – Udemy (Nelio Alves)",
  "Python Avançado – IFMG",
];
export function CertificatesSection() {
  return (
    <section id="certificacoes" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Certificações"
        title="Formação contínua e atualização técnica"
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {certs.map((c) => (
          <article
            key={c}
            className="rounded-xl border border-white/10 bg-white/5 p-5 text-slate-200"
          >
            {c}
          </article>
        ))}
      </div>
    </section>
  );
}
