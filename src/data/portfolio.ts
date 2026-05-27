import {
  Bot,
  Database,
  Github,
  Linkedin,
  Mail,
  Globe,
  Server,
  Wrench,
} from "lucide-react";
import projectPrisma from "../assets/inasimong.png";
import projectSigepp from "../assets/sigepp.png";
import projectKampos from "../assets/kampos.png";
import projectPrismae from "../assets/prismae.png";
import projectNeuroflow from "../assets/neuroflow.png";

import type {
  Experience,
  Language,
  NavItem,
  Project,
  SkillCategory,
  SocialLink,
} from "../types";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/KauaCampos",
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kauacampos/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    href: "#contato",
    icon: Mail,
    external: false,
  },
];

const navByLang: Record<Language, NavItem[]> = {
  pt: [
    { label: "Sobre", href: "#sobre" },
    { label: "Skills", href: "#skills" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ],
  en: [
    { label: "About", href: "#sobre" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experiencia" },
    { label: "Projects", href: "#projetos" },
    { label: "Contact", href: "#contato" },
  ],
};

export const getNavItems = (lang: Language) => navByLang[lang];

export const devSignalsByLang: Record<Language, string[]> = {
  pt: [
    "Desenvolvendo aplicações Full Stack modernas com React, TypeScript e Spring Boot",
    "Experiência prática em projetos acadêmicos reais validados como TCC e estágio obrigatório",
    "Interesse em backend, arquitetura de software, automações e inteligência artificial",
    "Workflow focado em Git, componentização, APIs REST e desenvolvimento escalável",
  ],
  en: [
    "Building modern full-stack applications with React, TypeScript, and Spring Boot",
    "Hands-on experience in real academic products validated as capstone and mandatory internship work",
    "Strong interest in backend engineering, software architecture, automation, and applied AI",
    "Workflow centered on Git, component-based architecture, REST APIs, and scalable development",
  ],
};

export const skillCategoriesByLang: Record<Language, SkillCategory[]> = {
  pt: [
    {
      title: "Frontend",
      icon: Globe,
      items: [
        "React",
        "Vite",
        "TypeScript",
        "TailwindCSS",
        "SCSS",
        "HTML",
        "CSS",
        "JavaScript",
        "JSP",
      ],
    },
    {
      title: "Backend",
      icon: Bot,
      items: ["Spring Boot", "Flask", "Java", "Python", "PHP", "C", "C++"],
    },
    { title: "Banco de Dados", icon: Database, items: ["PostgreSQL", "MySQL"] },
    {
      title: "Ferramentas",
      icon: Wrench,
      items: ["Git", "GitHub", "Docker", "n8n"],
    },
    {
      title: "Soft Skills",
      icon: Bot,
      items: [
        "Trabalho em equipe",
        "Comunicação interpessoal",
        "Adaptabilidade",
        "Comprometimento",
        "Aprendizado rápido",
      ],
    },
  ],
  en: [
    {
      title: "Frontend",
      icon: Globe,
      items: [
        "React",
        "Vite",
        "TypeScript",
        "TailwindCSS",
        "SCSS",
        "HTML",
        "CSS",
        "JavaScript",
        "JSP",
      ],
    },
    {
      title: "Backend",
      icon: Bot,
      items: ["Spring Boot", "Flask", "Java", "Python", "PHP", "C", "C++"],
    },
    { title: "Databases", icon: Database, items: ["PostgreSQL", "MySQL"] },
    { title: "Tools", icon: Wrench, items: ["Git", "GitHub", "Docker", "n8n"] },
    {
      title: "Soft Skills",
      icon: Bot,
      items: [
        "Teamwork",
        "Interpersonal communication",
        "Adaptability",
        "Commitment",
        "Fast learning",
      ],
    },
  ],
};

export const experiencesByLang: Record<Language, Experience[]> = {
  pt: [
    {
      title: "Prisma Software Factory – CEFET-MG",
      period: "2025",
      description:
        "Participei da construção de soluções reais em parceria com a ONG INASIM, conectando necessidades administrativas e educacionais com software robusto. O projeto foi validado como TCC e também como estágio obrigatório.",
    },
    {
      title: "SIGEPP – Sistema Integrado",
      period: "2024",
      description:
        "Atuei no desenvolvimento de um sistema para gestão de estágios e projetos de pesquisa, com backend em Spring Boot, modelagem em NoSQL e frontend responsivo em React.",
    },
  ],
  en: [
    {
      title: "Prisma Software Factory – CEFET-MG",
      period: "2025",
      description:
        "I helped build real solutions in partnership with INASIM NGO, connecting educational and administrative needs through robust software. This project was validated as both a capstone and mandatory internship.",
    },
    {
      title: "SIGEPP – Integrated System",
      period: "2024",
      description:
        "I worked on an internship and research management system, delivering Spring Boot backend services, NoSQL modeling, and a responsive React frontend.",
    },
  ],
};

export const projectsByLang: Record<Language, Project[]> = {
  pt: [
    {
      title: "Fábrica de Software Prisma",
      year: "2025",
      description:
        "Plataforma desenvolvida para digitalizar processos educacionais e administrativos, reduzindo retrabalho e melhorando a experiência dos usuários com foco em confiabilidade e eficiência.",
      stack: ["React", "Vite", "TypeScript", "PostgreSQL", "Flask"],
      github: "https://github.com/KauaCampos",
      demo: "#",
      badge: "TCC + Estágio Obrigatório",
      featured: true,
      image: projectPrisma,
    },

    {
      title: "SIGEPP",
      year: "2024",
      description:
        "Sistema integrado de gestão acadêmica com arquitetura backend modular, integração full stack e fluxo de dados consistente para operações de estágio e pesquisa.",
      stack: ["Spring Boot", "Java", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/marcogrossi1/SIGEPP",
      demo: "#",
      featured: true,
      image: projectSigepp,
    },

    {
      title: "Kampos",
      year: "2026",
      description:
        "Projeto de e-commerce focado em camisas retrô de futebol, desenvolvido com interface moderna, experiência responsiva e arquitetura frontend escalável.",
      stack: ["React", "Vite", "TypeScript", "TailwindCSS"],
      github: "https://github.com/KauaCampos",
      demo: "#",
      image: projectKampos,
    },

    {
      title: "Site Prismae",
      year: "2026",
      description:
        "Website institucional moderno desenvolvido para presença digital da Prismae, com foco em responsividade, identidade visual e navegação fluida.",
      stack: ["React", "HTML", "CSS", "JavaScript"],
      github: "https://prismae.github.io/prismae-site/",
      demo: "https://prismae.github.io/prismae-site/",
      image: projectPrismae,
    },

    {
      title: "NeuroFlow Analytics (SaaS)",
      year: "Em breve",
      description:
        "SaaS conceitual para produtividade nos estudos com IA, dashboards de evolução, analytics e insights orientados por dados.",
      stack: ["React", "Node", "PostgreSQL", "OpenAI", "Docker"],
      github: "https://github.com/KauaCampos",
      demo: "#",
      image: projectNeuroflow,
    },
  ],

  en: [
    {
      title: "Prisma Software Factory",
      year: "2025",
      description:
        "Platform built to digitize educational and administrative workflows, reducing manual rework while improving reliability and user experience.",
      stack: ["React", "Vite", "TypeScript", "PostgreSQL", "Flask"],
      github: "https://github.com/KauaCampos",
      demo: "#",
      badge: "Capstone + Mandatory Internship",
      featured: true,
      image: projectPrisma,
    },

    {
      title: "SIGEPP",
      year: "2024",
      description:
        "Integrated academic management system featuring modular backend architecture, full stack integration, and consistent data flow for internship and research operations.",
      stack: ["Spring Boot", "Java", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/marcogrossi1/SIGEPP",
      demo: "#",
      featured: true,
      image: projectSigepp,
    },

    {
      title: "Kampos",
      year: "2026",
      description:
        "E-commerce project focused on retro football jerseys, built with a modern interface, responsive experience, and scalable frontend architecture.",
      stack: ["React", "Vite", "TypeScript", "TailwindCSS"],
      github: "https://github.com/KauaCampos",
      demo: "#",
      image: projectKampos,
    },

    {
      title: "Prismae Website",
      year: "2026",
      description:
        "Modern institutional website developed for Prismae, focused on responsiveness, visual identity, and smooth navigation experience.",
      stack: ["React", "HTML", "CSS", "JavaScript"],
      github: "https://prismae.github.io/prismae-site/",
      demo: "https://prismae.github.io/prismae-site/",
      image: projectPrismae,
    },

    {
      title: "NeuroFlow Analytics (SaaS)",
      year: "Coming soon",
      description:
        "Concept SaaS for study productivity powered by AI, featuring progress dashboards, analytics, and data-driven insights.",
      stack: ["React", "Node", "PostgreSQL", "OpenAI", "Docker"],
      github: "https://github.com/KauaCampos",
      demo: "#",
      image: projectNeuroflow,
    },
  ],
};
