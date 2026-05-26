import { Bot, Database, ExternalLink, Github, Globe, Linkedin, Mail, Server, Wrench } from 'lucide-react';
import type { Experience, NavItem, Project, SkillCategory, SocialLink } from '../types';

export const navItems: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contato', href: '#contato' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/KauaCampos', icon: Github, external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/kauacampos/', icon: Linkedin, external: true },
  { label: 'Email', href: 'mailto:kauauwc@gmail.com', icon: Mail },
];

export const devSignals = [
  'Currently building: NeuroFlow Analytics (SaaS de estudos com IA)',
  'Foco atual: arquitetura backend com Spring Boot + PostgreSQL',
  'Workflow: GitHub Projects, Commits pequenos e code review contínuo',
  'Setup: VS Code + Docker + n8n para automações',
];

export const skillCategories: SkillCategory[] = [
  { title: 'Frontend', icon: Globe, items: ['React', 'Vite', 'TypeScript', 'TailwindCSS', 'SCSS', 'HTML', 'CSS', 'JavaScript', 'JSP'] },
  { title: 'Backend', icon: Server, items: ['Spring Boot', 'Flask', 'Java', 'Python', 'PHP', 'C', 'C++'] },
  { title: 'Banco de Dados', icon: Database, items: ['PostgreSQL', 'MySQL'] },
  { title: 'Ferramentas', icon: Wrench, items: ['Git', 'GitHub', 'Docker', 'n8n'] },
  { title: 'Soft Skills', icon: Bot, items: ['Trabalho em equipe', 'Comunicação interpessoal', 'Adaptabilidade', 'Comprometimento', 'Aprendizado rápido'] },
];

export const experiences: Experience[] = [
  { title: 'Prisma Software Factory – CEFET-MG', period: '2025', description: 'Participei da construção de soluções reais em parceria com a ONG INASIM, conectando necessidades administrativas e educacionais com software robusto. O projeto foi validado como TCC e também como estágio obrigatório.' },
  { title: 'SIGEPP – Sistema Integrado', period: '2024', description: 'Atuei no desenvolvimento de um sistema para gestão de estágios e projetos de pesquisa, com backend em Spring Boot, modelagem em PostgreSQL e frontend responsivo em React.' },
];

export const projects: Project[] = [
  { title: 'Prisma Software Factory', year: '2025', description: 'Plataforma para digitalizar processos educacionais e administrativos, reduzindo retrabalho com foco em confiabilidade e experiência do usuário.', stack: ['React', 'Vite', 'TypeScript', 'PostgreSQL', 'Flask'], github: 'https://github.com/KauaCampos', demo: '#', badge: 'TCC + Estágio Obrigatório', featured: true },
  { title: 'SIGEPP', year: '2024', description: 'Sistema integrado de gestão acadêmica com arquitetura backend modular e fluxo de dados consistente para operações de estágio e pesquisa.', stack: ['Spring Boot', 'Java', 'PostgreSQL', 'React'], github: 'https://github.com/KauaCampos', demo: '#', featured: true },
  { title: 'Portfólio Pessoal Premium', year: '2026', description: 'Experiência web pensada para recrutadores, mostrando clareza técnica, identidade visual forte e qualidade de execução front-end.', stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'], github: 'https://github.com/KauaCampos', demo: '#' },
  { title: 'NeuroFlow Analytics (SaaS)', year: '2026', description: 'SaaS fictício para produtividade em estudos com IA, painéis de evolução, insights e analytics para tomada de decisão acadêmica.', stack: ['React', 'Node', 'PostgreSQL', 'OpenAI', 'Docker'], github: 'https://github.com/KauaCampos', demo: '#' },
];

export const externalIcon = ExternalLink;