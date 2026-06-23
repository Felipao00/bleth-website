export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'planning',
    number: 1,
    title: 'Planejamento',
    description: 'Entendemos suas necessidades, definimos escopo e traçamos a estratégia ideal.',
  },
  {
    id: 'architecture',
    number: 2,
    title: 'Arquitetura',
    description: 'Projetamos a estrutura técnica, definimos tecnologias e modelamos o sistema.',
  },
  {
    id: 'development',
    number: 3,
    title: 'Desenvolvimento',
    description: 'Codificamos com as melhores práticas, código limpo e versionamento contínuo.',
  },
  {
    id: 'testing',
    number: 4,
    title: 'Testes',
    description: 'Realizamos testes rigorosos para garantir qualidade, performance e segurança.',
  },
  {
    id: 'launch',
    number: 5,
    title: 'Lançamento',
    description: 'Deploy em produção, monitoramento e suporte contínuo para seu projeto.',
  },
];