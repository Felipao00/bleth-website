'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Globe, 
  Sparkles,
  ArrowRight,
  Crown,
  MessageCircle,
  Server,
  ChevronDown,
  CalendarDays,
  Clock,
  MessageSquare
} from 'lucide-react';
import Button from '@/components/ui/Button';

export default function PlansPage() {
  const [activeTab, setActiveTab] = useState<'sites' | 'manutencao'>('sites');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const sitePlans = [
    {
      name: 'Start',
      price: '389,90',
      originalPrice: '589,90',
      description: 'Ideal para começar sua presença digital',
      popular: false,
      period: '',
      features: [
        'Site Institucional (One Page)',
        'Hospedagem 1 ano grátis',
        'Domínio .com.br 1 ano',
        'Design Responsivo',
        'SSL Grátis',
        'SEO Básico',
        'Formulário de Contato',
        'Integração WhatsApp',
        '1 Revisão',
      ],
      notIncluded: [
        'Painel Administrativo',
        'Blog',
        'E-commerce',
      ],
      cta: 'Começar Agora',
      highlight: true,
      badge: 'PROMOÇÃO',
      color: 'from-blue-500/20 to-purple-500/20',
    },
    {
      name: 'Pro',
      price: '1.497',
      originalPrice: '1.997',
      description: 'Para negócios que precisam de presença completa',
      popular: true,
      period: '',
      features: [
        'Site Institucional (até 5 páginas)',
        'Hospedagem 1 ano grátis',
        'Domínio .com.br 1 ano',
        'Design Premium Responsivo',
        'SSL Grátis',
        'SEO Avançado',
        'Painel Administrativo',
        'Blog Integrado',
        'Formulário de Contato',
        'Integração WhatsApp',
        'Integração Redes Sociais',
        'Google Analytics',
        '3 Revisões',
      ],
      notIncluded: [
        'E-commerce',
      ],
      cta: 'Quero Este Plano',
      highlight: true,
      badge: 'MAIS VENDIDO',
      color: 'from-white/10 to-white/5',
    },
    {
      name: 'Business',
      price: '2.997',
      originalPrice: '3.997',
      description: 'Solução completa com e-commerce integrado',
      popular: false,
      period: '',
      features: [
        'Site Completo (até 10 páginas)',
        'Hospedagem 1 ano grátis',
        'Domínio .com.br 1 ano',
        'Design Exclusivo Premium',
        'SSL Grátis',
        'SEO Premium',
        'Painel Administrativo Avançado',
        'Blog + CMS',
        'E-commerce Integrado',
        'Até 50 Produtos',
        'Gateway de Pagamento',
        'Formulário de Contato',
        'Integração WhatsApp',
        'Integração Redes Sociais',
        'Google Analytics',
        'Revisões Ilimitadas',
        'Suporte Prioritário 3 meses',
      ],
      notIncluded: [],
      cta: 'Solicitar Orçamento',
      highlight: false,
      badge: 'COMPLETO',
      color: 'from-emerald-500/20 to-teal-500/20',
    },
  ];

  const maintenancePlans = [
    {
      name: 'Básico',
      price: '97',
      period: '/mês',
      description: 'Manutenção essencial para seu site',
      popular: false,
      originalPrice: '',
      features: [
        'Atualizações de Segurança',
        'Backup Semanal',
        'Monitoramento 24/7',
        'Suporte por Email',
        '1 hora de alterações/mês',
      ],
      notIncluded: [],
      cta: 'Assinar Básico',
      highlight: false,
      badge: '',
      color: 'from-gray-500/20 to-gray-600/20',
    },
    {
      name: 'Premium',
      price: '197',
      period: '/mês',
      description: 'Manutenção completa com suporte dedicado',
      popular: true,
      originalPrice: '',
      features: [
        'Atualizações de Segurança',
        'Backup Diário',
        'Monitoramento 24/7',
        'Suporte por WhatsApp',
        '5 horas de alterações/mês',
        'Otimização de Performance',
        'Relatório Mensal',
        'Atualização de Conteúdo',
      ],
      notIncluded: [],
      cta: 'Assinar Premium',
      highlight: false,
      badge: 'RECOMENDADO',
      color: 'from-white/10 to-white/5',
    },
    {
      name: 'Enterprise',
      price: '497',
      period: '/mês',
      description: 'Solução completa para grandes projetos',
      popular: false,
      originalPrice: '',
      features: [
        'Tudo do Premium',
        'Suporte 24/7 Prioritário',
        'Horas Ilimitadas',
        'Desenvolvimento de Features',
        'Otimização SEO Contínua',
        'Gestão de Servidor',
        'Relatórios Semanais',
        'Consultoria Técnica',
        'SLA Garantido',
      ],
      notIncluded: [],
      cta: 'Falar com Consultor',
      highlight: false,
      badge: 'EMPRESARIAL',
      color: 'from-purple-500/20 to-pink-500/20',
    },
  ];

  const faqItems = [
    {
      question: 'Quanto tempo para desenvolver um site?',
      answer: 'Um site institucional leva em média 5-10 dias úteis. Sites maiores podem levar de 15-30 dias, dependendo da complexidade.',
    },
    {
      question: 'O que está incluso na hospedagem?',
      answer: 'Hospedagem em servidores de alta performance com SSL grátis, backup automático e 99.9% de uptime garantido.',
    },
    {
      question: 'Posso atualizar meu plano depois?',
      answer: 'Sim! Você pode fazer upgrade do seu plano a qualquer momento, pagando apenas a diferença.',
    },
    {
      question: 'Como funciona o suporte?',
      answer: 'Oferecemos suporte por email para todos os planos. Planos Premium e Enterprise têm suporte por WhatsApp e tempo de resposta prioritário.',
    },
    {
      question: 'Preciso ter domínio próprio?',
      answer: 'Não! Todos os planos de sites já incluem domínio .com.br grátis por 1 ano.',
    },
    {
      question: 'Fazem manutenção em sites já existentes?',
      answer: 'Sim! Nossos planos de manutenção atendem sites desenvolvidos por nós ou por terceiros.',
    },
  ];

  const currentPlans = activeTab === 'sites' ? sitePlans : maintenancePlans;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero da página de planos */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.05),transparent)]" />
        
        <div className="container-bleth relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/10 mb-8">
              <Sparkles className="w-4 h-4 text-white/60" />
              <span className="text-xs text-white/40 tracking-wider">PREÇOS TRANSPARENTES</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Invista no seu
              <span className="relative">
                <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent"> futuro digital</span>
              </span>
            </h1>
            
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Soluções completas de desenvolvimento web com o melhor custo-benefício do mercado.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-white/[0.02] border border-white/[0.05] rounded-full p-1">
              <button
                onClick={() => setActiveTab('sites')}
                className={`px-8 py-3 rounded-full text-sm tracking-wider transition-all duration-300 ${
                  activeTab === 'sites'
                    ? 'bg-white text-black'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                <Globe className="w-4 h-4 inline mr-2" />
                Sites e Apps
              </button>
              <button
                onClick={() => setActiveTab('manutencao')}
                className={`px-8 py-3 rounded-full text-sm tracking-wider transition-all duration-300 ${
                  activeTab === 'manutencao'
                    ? 'bg-white text-black'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                <Server className="w-4 h-4 inline mr-2" />
                Manutenção
              </button>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {currentPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative group ${
                  plan.popular ? 'md:-mt-4 md:mb-4' : ''
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-white text-black text-xs px-6 py-1.5 rounded-full font-semibold tracking-wider flex items-center gap-2">
                      <Crown className="w-3 h-3" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Promo badge */}
                {plan.badge === 'PROMOÇÃO' && !plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-red-500/20 border border-red-500/30 text-red-400 text-xs px-6 py-1.5 rounded-full font-semibold tracking-wider flex items-center gap-2">
                      <Zap className="w-3 h-3" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                {plan.badge === 'EMPRESARIAL' && !plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs px-6 py-1.5 rounded-full font-semibold tracking-wider flex items-center gap-2">
                      <Star className="w-3 h-3" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className={`relative rounded-3xl bg-gradient-to-br ${plan.color} border ${
                  plan.popular ? 'border-white/20' : 'border-white/[0.05]'
                } p-8 md:p-10 h-full transition-all duration-500 hover:border-white/20`}>
                  
                  <div className={`absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 ${
                    plan.popular ? 'bg-white/5' : 'bg-white/[0.02]'
                  }`} />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-white/40 text-sm mb-6">{plan.description}</p>

                    <div className="mb-8">
                      {plan.originalPrice && (
                        <span className="text-white/30 line-through text-sm mr-2">
                          R$ {plan.originalPrice}
                        </span>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="text-white/50 text-lg">R$</span>
                        <span className="text-5xl md:text-6xl font-bold text-white">
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-white/40 text-sm">{plan.period}</span>
                        )}
                      </div>
                      {plan.badge === 'PROMOÇÃO' && (
                        <p className="text-green-400 text-xs mt-1">Economia de R$ 200,00</p>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/60">{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="w-3 h-0.5 bg-white/20" />
                          </span>
                          <span className="text-white/20 line-through">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      href={`https://wa.me/5511999999999?text=Olá! Tenho interesse no plano ${plan.name}`}
                      variant={plan.popular ? 'primary' : 'outline'}
                      size="lg"
                      className="w-full"
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Garantia */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.05]">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white/40 text-sm">
                Todos os planos incluem <span className="text-white/60">garantia de satisfação</span> e <span className="text-white/60">suporte dedicado</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Promoção Destaque */}
      <section className="relative py-20 border-t border-white/[0.03]">
        <div className="container-bleth">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/[0.08]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
            
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                    <Zap className="w-4 h-4 text-red-400" />
                    <span className="text-xs text-red-400 tracking-wider">PROMOÇÃO LIMITADA</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Plano Start com Desconto
                  </h2>
                  
                  <p className="text-white/50 mb-6">
                    Site institucional + Hospedagem 1 ano + Domínio .com.br + SSL Grátis
                  </p>
                  
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-white/30 line-through text-lg">R$ 589,90</span>
                    <span className="text-white/50">por apenas</span>
                    <span className="text-6xl font-bold text-white">R$ 389,90</span>
                  </div>

                  <ul className="space-y-2 mb-8">
                    {[
                      'Site responsivo e moderno',
                      'Hospedagem 1 ano grátis',
                      'Domínio .com.br 1 ano',
                      'Certificado SSL Grátis',
                      'Otimizado para Google',
                      'Integração com WhatsApp',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/60">
                        <Check className="w-4 h-4 text-green-400" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="https://wa.me/5511999999999?text=Quero aproveitar a promoção do Plano Start por R$ 389,90!"
                    variant="primary"
                    size="lg"
                  >
                    Aproveitar Promoção
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="w-64 h-64 rounded-full border border-white/[0.05]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-7xl font-bold text-white">-35%</div>
                        <div className="text-white/40 text-sm tracking-wider">OFF</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 border-t border-white/[0.03]">
        <div className="container-bleth max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perguntas Frequentes
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/[0.05] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/[0.01] transition-colors"
                >
                  <span className="text-white/80 font-medium">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-white/40 transition-transform duration-300 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFaq === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-white/40 text-sm">{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Agendamento */}
      <section className="relative py-20 border-t border-white/[0.03]">
        <div className="container-bleth text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Ícone de calendário */}
            <motion.div
              animate={{ 
                rotateY: [0, 360],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/[0.02] border border-white/[0.08]"
            >
              <CalendarDays className="w-10 h-10 text-white/60" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Agende uma Reunião
            </h2>
            
            <p className="text-white/40 mb-4 max-w-xl mx-auto text-lg">
              Escolha o melhor dia e horário para conversarmos sobre seu projeto.
            </p>

            {/* Destaque */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/30 text-sm">Reunião gratuita • 30 minutos</span>
            </div>

            {/* Cards de benefícios */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
              {[
                { icon: 'CalendarDays', title: 'Escolha o dia', desc: 'Selecione a data que preferir' },
                { icon: 'Clock', title: 'Defina o horário', desc: 'No melhor momento para você' },
                { icon: 'MessageSquare', title: 'Conversamos', desc: 'Entenda tudo sobre seu projeto' },
              ].map((item, i) => {
                const IconComponent = (() => {
                  switch(item.icon) {
                    case 'CalendarDays': return <CalendarDays className="w-5 h-5 text-white/60" />;
                    case 'Clock': return <Clock className="w-5 h-5 text-white/60" />;
                    case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-white/60" />;
                    default: return <CalendarDays className="w-5 h-5 text-white/60" />;
                  }
                })();

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-3">
                      {IconComponent}
                    </div>
                    <h4 className="text-white/80 text-sm font-semibold mb-1">{item.title}</h4>
                    <p className="text-white/30 text-xs">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://calendly.com/rivalidade0/consultoria-bleth"
                variant="primary"
                size="lg"
              >
                <CalendarDays className="w-5 h-5" />
                Agendar Reunião
              </Button>
              <Button
                href="https://wa.me/5585998246348"
                variant="outline"
                size="lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </div>

            {/* Garantia */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-white/20 text-xs"
            >
              Sem compromisso • Sem custo • Você escolhe o melhor horário
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}