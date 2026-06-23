import { Service } from '@/types/service';

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Desenvolvimento Web',
    description:
      'Criamos plataformas web modernas, performáticas e escaláveis utilizando as melhores tecnologias do mercado.',
    icon: 'Globe',
    features: ['Sites institucionais', 'Plataformas web', 'Dashboards', 'Landing pages'],
  },
  {
    id: 'custom-systems',
    title: 'Sistemas Personalizados',
    description:
      'Desenvolvemos sistemas sob medida para automatizar processos e resolver problemas específicos do seu negócio.',
    icon: 'Cpu',
    features: ['ERP', 'CRM', 'Sistemas de gestão', 'Portais'],
  },
  {
    id: 'automation',
    title: 'Automações',
    description:
      'Otimizamos fluxos de trabalho com automações inteligentes que reduzem custos e aumentam a produtividade.',
    icon: 'Zap',
    features: ['RPA', 'Scripts', 'Workflows', 'Integrações'],
  },
  {
    id: 'api-integrations',
    title: 'APIs e Integrações',
    description:
      'Conectamos sistemas e serviços através de APIs robustas e integrações eficientes.',
    icon: 'Link',
    features: ['REST APIs', 'GraphQL', 'Webhooks', 'Microservices'],
  },
  {
    id: 'bots-tools',
    title: 'Bots e Ferramentas',
    description:
      'Criamos bots inteligentes e ferramentas digitais para automatizar tarefas repetitivas.',
    icon: 'Bot',
    features: ['Chatbots', 'Bots Discord', 'Scrapers', 'Utilitários'],
  },
  {
    id: 'infrastructure',
    title: 'Infraestrutura Digital',
    description:
      'Configuramos e gerenciamos infraestrutura em nuvem com foco em segurança e alta disponibilidade.',
    icon: 'Server',
    features: ['Cloud', 'Docker', 'CI/CD', 'Monitoramento'],
  },
];