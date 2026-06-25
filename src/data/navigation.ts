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
    href: 'https://www.instagram.com/blethcompany?igsh=MXF2bGJzMWg4a3F5eg%3D%3D&utm_source=qr',
    icon: 'Instagram',
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contato@bleth.com.br'}`,
    icon: 'Mail',
  },
];