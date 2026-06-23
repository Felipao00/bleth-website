import { NavLink, SocialLink } from '@/types/navigation';

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'services', label: 'Serviços', href: '#services' },
  { id: 'technologies', label: 'Tecnologias', href: '#technologies' },
  { id: 'process', label: 'Processo', href: '#process' },
  { id: 'about', label: 'Sobre', href: '#about' },
  { id: 'pricing', label: 'Planos', href: '/planos' },
  { id: 'contact', label: 'Contato', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#',
    icon: 'Instagram',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: process.env.NEXT_PUBLIC_GITHUB_URL || '#',
    icon: 'Github',
  },
  {
    id: 'discord',
    label: 'Discord',
    href: process.env.NEXT_PUBLIC_DISCORD_URL || '#',
    icon: 'MessageCircle',
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contato@bleth.com.br'}`,
    icon: 'Mail',
  },
];