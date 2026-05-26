import { LucideIcon } from 'lucide-react';

export type NavItem = { label: string; href: string };

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export type Project = {
  title: string;
  year: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  badge?: string;
};

export type Experience = {
  title: string;
  period: string;
  description: string;
};
