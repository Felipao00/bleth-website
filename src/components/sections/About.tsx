'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/ui/SectionHeading';
import { Target, Eye, Heart, Zap } from 'lucide-react';

export default function About() {
  const { ref, isInView } = useInView();

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Transformar ideias em soluções digitais que geram impacto real.',
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência em desenvolvimento de tecnologia com excelência.',
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Qualidade, transparência e compromisso com cada projeto.',
    },
    {
      icon: Zap,
      title: 'Diferencial',
      description: 'Unimos design, performance e escalabilidade em cada entrega.',
    },
  ];

  return (
    <section id="about" className="relative bg-black section-padding border-t border-white/[0.03]">
      <div className="container-bleth">
        <SectionHeading
          title="Quem é a BLETH?"
          subtitle="Conheça a essência por trás da tecnologia."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Main text */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-2xl md:text-3xl text-white/80 leading-relaxed font-light">
                A BLETH nasceu com o propósito de transformar ideias em soluções digitais modernas.
              </p>
              
              <div className="w-24 h-px bg-white/20 mx-auto my-8" />
              
              <p className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
                Nossa missão é desenvolver sistemas, plataformas e experiências que unem 
                tecnologia, design e performance. Cada projeto é construído com foco em 
                escalabilidade, organização e excelência técnica.
              </p>
            </motion.div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/20 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.06] group-hover:scale-110 transition-all duration-500">
                      <Icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                      <p className="text-white/40 leading-relaxed text-sm">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '50+', label: 'Projetos' },
              { number: '30+', label: 'Clientes' },
              { number: '5+', label: 'Anos Exp.' },
              { number: '99%', label: 'Satisfação' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
                  {stat.number}
                </div>
                <div className="text-sm text-white/30 tracking-widest uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}