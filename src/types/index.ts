import { LucideIcon } from 'lucide-react';

export type Language = 'pt' | 'en';

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
  featured?: boolean;
  image: string;
};

export type Experience = {
  title: string;
  period: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};