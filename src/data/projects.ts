import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'zeus',
    title: 'ZEUS',
    description:
      'Banco de dados privado para gerenciamento seguro de arquivos e informações sensíveis.',
    image: '/images/projects/zeus.webp',
    tags: ['Next.js', 'PostgreSQL', 'Docker', 'TypeScript'],
    featured: true,
  },
  {
    id: 'portfolio-dev',
    title: 'Portfolio Dev',
    description:
      'Plataforma pessoal de apresentação profissional com design moderno e minimalista.',
    image: '/images/projects/portfolio-dev.webp',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    id: 'automacoes',
    title: 'Automações Inteligentes',
    description:
      'Ferramentas de produtividade e integração para otimização de processos empresariais.',
    image: '/images/projects/automacoes.webp',
    tags: ['Python', 'Node.js', 'APIs', 'Docker'],
    featured: true,
  },
  {
    id: 'plataforma-gestao',
    title: 'Plataforma de Gestão',
    description:
      'Sistema completo de gestão empresarial com dashboard, relatórios e controle de estoque.',
    image: '/images/projects/plataforma-gestao.webp',
    tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
  },
];