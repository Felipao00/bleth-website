'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import * as Icons from 'lucide-react';
import { Service } from '@/types/service';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const { ref, isInView } = useInView();
  const IconComponent = (Icons as any)[service.icon] || Icons.Code;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/20 transition-all duration-700 overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-white/0 via-white/[0.02] to-white/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
        
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/[0.03] to-transparent rounded-bl-3xl transition-all duration-500 group-hover:from-white/[0.06]" />

        <div className="relative z-10">
          {/* Icon container */}
          <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-8 group-hover:bg-white/[0.06] group-hover:border-white/20 group-hover:scale-110 transition-all duration-500">
            <IconComponent className="w-7 h-7 text-white/60 group-hover:text-white transition-all duration-500" />
          </div>

          {/* Number */}
          <span className="text-xs font-mono text-white/20 mb-4 block tracking-widest">
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-500">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-white/40 leading-relaxed mb-8 text-sm md:text-base group-hover:text-white/60 transition-colors duration-500">
            {service.description}
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-white/30 group-hover:text-white/50 transition-all duration-500"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/40 transition-all duration-500" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Hover button */}
          <div className="flex items-center gap-2 text-white/30 group-hover:text-white/70 transition-all duration-500">
            <span className="text-xs tracking-widest uppercase">Saiba mais</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </div>
        </div>

        {/* Border gradient animation */}
        <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/10 transition-all duration-700" 
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05), transparent) border-box',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
      </div>
    </motion.div>
  );
}