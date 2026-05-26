# Kauã Campos — Portfólio Premium

Portfólio pessoal moderno construído com **React + Vite + TypeScript + TailwindCSS + Framer Motion**, com foco em posicionamento profissional para vagas de estágio e júnior Full Stack/Backend.

## ✨ Diferenciais
- Design dark premium inspirado em Vercel/Linear/Stripe.
- Componentização escalável por domínio (`components`, `sections`, `data`, `types`, `utils`).
- Animações fluidas com Framer Motion e microinterações elegantes.
- Scroll suave, cards com glassmorphism e UI responsiva.
- SEO básico no `index.html`.
- Lazy loading da seção de projetos.

## 🧱 Arquitetura
```bash
src/
├── components/     # blocos reutilizáveis (Navbar, SectionTitle)
├── sections/       # seções da página (Hero, Sobre, Skills...)
├── data/           # conteúdos estruturados do portfólio
├── assets/         # arquivos estáticos/imagens
├── hooks/          # hooks customizados
├── types/          # tipagens globais
├── utils/          # utilitários
├── styles/         # estilos globais
└── App.tsx         # composição principal
```

## 🚀 Rodando localmente
```bash
npm install
npm run dev
```

## 🏗️ Build
```bash
npm run build
npm run preview
```

## ▲ Deploy na Vercel
1. Suba este projeto no GitHub.
2. Acesse [vercel.com](https://vercel.com) e clique em **New Project**.
3. Importe o repositório.
4. Framework detectado: **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Deploy.

## 🔭 Melhorias futuras
- Integração com CMS (ex.: Notion API/Contentlayer) para projetos dinâmicos.
- Internacionalização (PT-BR/EN).
- Tema com alternância dark/light mantendo identidade premium.
- Métricas de interação (analytics + heatmaps).
- Endpoint para formulário de contato com validação server-side.

## 🎬 Sugestões de animações sofisticadas
- Parallax suave no hero conforme rolagem.
- Stagger avançado de cards por grupo de skill.
- Cursor glow dinâmico em cards de projeto.
- Transições com layout animations entre filtros de projetos.

## ✅ Boas práticas aplicadas
- Dados isolados da UI para manutenção.
- Tipagem forte com TypeScript.
- Responsividade mobile-first.
- Classes utilitárias coesas e sem poluição visual.
- Separação entre apresentação, conteúdo e utilitários.
