import { Bot, Database, Github, Linkedin, Mail, Globe, Server, Wrench } from 'lucide-react';
import projectNeuroflow from '../assets/neuroflow.png';
import projectPrisma from '../assets/inasimong.png';
import projectSigepp from '../assets/sigepp.png';
import type { Experience, Language, NavItem, Project, SkillCategory, SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/KauaCampos', icon: Github, external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/kauacampos/', icon: Linkedin, external: true },
  { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kauauwc@gmail.com&su=Contato%20via%20Portf%C3%B3lio', icon: Mail, external: true },
];

const navByLang: Record<Language, NavItem[]> = {
  pt: [{ label: 'Sobre', href: '#sobre' }, { label: 'Skills', href: '#skills' }, { label: 'Experiência', href: '#experiencia' }, { label: 'Projetos', href: '#projetos' }, { label: 'GitHub', href: '#github' }, { label: 'Contato', href: '#contato' }],
  en: [{ label: 'About', href: '#sobre' }, { label: 'Skills', href: '#skills' }, { label: 'Experience', href: '#experiencia' }, { label: 'Projects', href: '#projetos' }, { label: 'GitHub', href: '#github' }, { label: 'Contact', href: '#contato' }],
};

export const getNavItems = (lang: Language) => navByLang[lang];

export const devSignalsByLang: Record<Language, string[]> = {
  pt: ['Desenvolvendo aplicações Full Stack modernas com React, TypeScript e Spring Boot', 'Experiência prática em projetos acadêmicos reais validados como TCC e estágio obrigatório', 'Interesse em backend, arquitetura de software, automações e inteligência artificial', 'Workflow focado em Git, componentização, APIs REST e desenvolvimento escalável'],
  en: ['Building modern full-stack applications with React, TypeScript, and Spring Boot', 'Hands-on experience in real academic products validated as capstone and mandatory internship work', 'Strong interest in backend engineering, software architecture, automation, and applied AI', 'Workflow centered on Git, component-based architecture, REST APIs, and scalable development'],
};

export const skillCategoriesByLang: Record<Language, SkillCategory[]> = {
  pt: [
    { title: 'Frontend', icon: Globe, items: ['React', 'Vite', 'TypeScript', 'TailwindCSS', 'SCSS', 'HTML', 'CSS', 'JavaScript', 'JSP'] },
    { title: 'Backend', icon: Bot, items: ['Spring Boot', 'Flask', 'Java', 'Python', 'PHP', 'C', 'C++'] },
    { title: 'Banco de Dados', icon: Database, items: ['PostgreSQL', 'MySQL'] },
    { title: 'Ferramentas', icon: Wrench, items: ['Git', 'GitHub', 'Docker', 'n8n'] },
    { title: 'Soft Skills', icon: Bot, items: ['Trabalho em equipe', 'Comunicação interpessoal', 'Adaptabilidade', 'Comprometimento', 'Aprendizado rápido'] },
  ],
  en: [
    { title: 'Frontend', icon: Globe, items: ['React', 'Vite', 'TypeScript', 'TailwindCSS', 'SCSS', 'HTML', 'CSS', 'JavaScript', 'JSP'] },
    { title: 'Backend', icon: Bot, items: ['Spring Boot', 'Flask', 'Java', 'Python', 'PHP', 'C', 'C++'] },
    { title: 'Databases', icon: Database, items: ['PostgreSQL', 'MySQL'] },
    { title: 'Tools', icon: Wrench, items: ['Git', 'GitHub', 'Docker', 'n8n'] },
    { title: 'Soft Skills', icon: Bot, items: ['Teamwork', 'Interpersonal communication', 'Adaptability', 'Commitment', 'Fast learning'] },
  ],
};

export const experiencesByLang: Record<Language, Experience[]> = {
  pt: [
    { title: 'Prisma Software Factory – CEFET-MG', period: '2025', description: 'Participei da construção de soluções reais em parceria com a ONG INASIM, conectando necessidades administrativas e educacionais com software robusto. O projeto foi validado como TCC e também como estágio obrigatório.' },
    { title: 'SIGEPP – Sistema Integrado', period: '2024', description: 'Atuei no desenvolvimento de um sistema para gestão de estágios e projetos de pesquisa, com backend em Spring Boot, modelagem em NoSQL e frontend responsivo em React.' },
  ],
  en: [
    { title: 'Prisma Software Factory – CEFET-MG', period: '2025', description: 'I helped build real solutions in partnership with INASIM NGO, connecting educational and administrative needs through robust software. This project was validated as both a capstone and mandatory internship.' },
    { title: 'SIGEPP – Integrated System', period: '2024', description: 'I worked on an internship and research management system, delivering Spring Boot backend services, NoSQL modeling, and a responsive React frontend.' },
  ],
};

export const projectsByLang: Record<Language, Project[]> = {
  pt: [
    { title: 'Fábrica de Software Prisma', year: '2025', description: 'Plataforma para digitalizar processos educacionais e administrativos, reduzindo retrabalho com foco em confiabilidade e experiência do usuário.', stack: ['React', 'Vite', 'TypeScript', 'PostgreSQL', 'Flask'], github: 'https://github.com/KauaCampos', demo: '#', badge: 'TCC + Estágio Obrigatório', featured: true, image: projectPrisma },
    { title: 'SIGEPP', year: '2024', description: 'Sistema integrado de gestão acadêmica com arquitetura backend modular e fluxo de dados consistente para operações de estágio e pesquisa.', stack: ['Spring Boot', 'Java', 'MySQL', 'HTML', 'CSS', 'JavaScript'], github: 'https://github.com/KauaCampos', demo: '#', featured: true, image: projectSigepp },
    { title: 'NeuroFlow Analytics (SaaS)', year: 'Em breve', description: 'SaaS conceitual para produtividade em estudos com IA, dashboards de evolução e insights orientados por dados.', stack: ['React', 'Node', 'PostgreSQL', 'OpenAI', 'Docker'], github: 'https://github.com/KauaCampos', demo: '#', image: projectNeuroflow },
  ],
  en: [
    { title: 'Prisma Software Factory', year: '2025', description: 'Platform built to digitize educational and administrative workflows, reducing manual rework with reliability and UX in mind.', stack: ['React', 'Vite', 'TypeScript', 'PostgreSQL', 'Flask'], github: 'https://github.com/KauaCampos', demo: '#', badge: 'Capstone + Mandatory Internship', featured: true, image: projectPrisma },
    { title: 'SIGEPP', year: '2024', description: 'Integrated academic management system with modular backend architecture and a consistent data flow for internship and research operations.', stack: ['Spring Boot', 'Java', 'MySQL', 'HTML', 'CSS', 'JavaScript'], github: 'https://github.com/KauaCampos', demo: '#', featured: true, image: projectSigepp },
    { title: 'NeuroFlow Analytics (SaaS)', year: 'Coming soon', description: 'Concept SaaS for study productivity with AI, progress dashboards, and data-driven insights.', stack: ['React', 'Node', 'PostgreSQL', 'OpenAI', 'Docker'], github: 'https://github.com/KauaCampos', demo: '#', image: projectNeuroflow },
  ],
};