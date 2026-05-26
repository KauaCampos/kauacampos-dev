import { Bot, Briefcase, Database, Globe, Server, Wrench } from 'lucide-react';
import type { Experience, NavItem, Project, SkillCategory } from '../types';

export const navItems: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Certificações', href: '#certificacoes' },
  { label: 'Contato', href: '#contato' },
];

export const skillCategories: SkillCategory[] = [
  { title: 'Frontend', icon: Globe, items: ['React', 'Vite', 'TypeScript', 'TailwindCSS', 'SCSS', 'HTML', 'CSS', 'JavaScript', 'JSP'] },
  { title: 'Backend', icon: Server, items: ['Spring Boot', 'Flask', 'Java', 'Python', 'PHP', 'C', 'C++'] },
  { title: 'Banco de Dados', icon: Database, items: ['PostgreSQL', 'MySQL'] },
  { title: 'Ferramentas', icon: Wrench, items: ['Git', 'GitHub', 'Docker', 'n8n'] },
  { title: 'Soft Skills', icon: Bot, items: ['Trabalho em equipe', 'Comunicação interpessoal', 'Adaptabilidade', 'Comprometimento', 'Aprendizado rápido'] },
];

export const experiences: Experience[] = [
  { title: 'Prisma Software Factory – CEFET-MG', period: '2025', description: 'Desenvolvimento de soluções em parceria com a ONG INASIM para demandas educacionais e administrativas. Projeto validado como TCC e estágio obrigatório.' },
  { title: 'SIGEPP – Sistema Integrado', period: '2024', description: 'Sistema para gestão de estágios e pesquisas acadêmicas com backend robusto em Spring Boot e interface moderna em React.' },
];

export const projects: Project[] = [
  { title: 'Prisma Software Factory', year: '2025', description: 'Plataforma para digitalização de processos educacionais com foco em confiabilidade, usabilidade e integração entre áreas administrativas.', stack: ['React', 'Vite', 'TypeScript', 'PostgreSQL', 'Flask'], github: 'https://github.com/KauaCampos', demo: '#', badge: 'TCC + Estágio Obrigatório' },
  { title: 'SIGEPP', year: '2024', description: 'Sistema de gestão de estágios e projetos de pesquisa com modelagem de dados consistente e arquitetura backend escalável.', stack: ['Spring Boot', 'Java', 'PostgreSQL', 'React'], github: 'https://github.com/KauaCampos', demo: '#' },
  { title: 'Portfólio Pessoal Premium', year: '2026', description: 'Portfólio orientado a performance e UX premium, com animações fluidas e narrativa profissional para recrutadores.', stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'], github: 'https://github.com/KauaCampos', demo: '#' },
  { title: 'NeuroFlow Analytics (SaaS)', year: '2026', description: 'SaaS fictício para produtividade acadêmica com IA, dashboards de evolução, analytics de performance e recomendações adaptativas.', stack: ['React', 'Node', 'PostgreSQL', 'OpenAI', 'Docker'], github: 'https://github.com/KauaCampos', demo: '#' },
];
