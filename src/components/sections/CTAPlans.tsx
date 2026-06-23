'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Zap, Sparkles, Eye, MousePointer } from 'lucide-react';
import Link from 'next/link';

export default function CTAPlans() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <section ref={ref} className="relative py-32 md:py-40 overflow-hidden bg-black">
      {/* Background dramático */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
        
        {/* Linhas diagonais */}
        <div className="absolute inset-0 opacity-[0.03]">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-white"
              style={{
                top: `${i * 8}%`,
                transform: `rotate(-15deg) scale(${1 + i * 0.5})`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-bleth relative z-10">
        <motion.div
          style={{ scale, opacity, y }}
          className="text-center"
        >
          {/* Badge chamativo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-8"
          >
            <MousePointer className="w-4 h-4 text-white/60 animate-pulse" />
            <span className="text-xs text-white/40 tracking-widest">NÃO SAIA SEM VER ISSO</span>
          </motion.div>

          {/* Título impactante */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tighter">
              ISSO É
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">POSSÍVEL?</span>
                <motion.div
                  className="absolute -inset-4 bg-red-500/20 blur-2xl rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </span>
            </h2>
          </motion.div>

          {/* Preço chamativo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <div className="inline-flex flex-col items-center">
              <p className="text-white/40 text-lg mb-2">Site profissional completo por apenas</p>
              <div className="flex items-baseline gap-3">
                <span className="text-white/40 text-3xl">R$</span>
                <motion.span
                  className="text-8xl md:text-9xl font-bold text-white"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  389
                </motion.span>
                <span className="text-white/40 text-3xl">,90</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-white/30 line-through text-lg">R$ 589,90</span>
                <span className="bg-red-500/20 text-red-400 text-xs px-3 py-1 rounded-full font-semibold">
                  -35%
                </span>
              </div>
            </div>
          </motion.div>

          {/* Features em linha */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {[
              'Site One Page',
              'Hospedagem 1 Ano',
              'Domínio .com.br',
              'SSL Grátis',
              'WhatsApp',
              'SEO',
            ].map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] text-white/50 text-sm"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          {/* Botão gigante e chamativo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-4"
          >
            <Link href="/planos">
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow pulsante */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Botão */}
                <div className="relative px-12 py-6 bg-white rounded-full flex items-center gap-3 group-hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all duration-500">
                  <Eye className="w-6 h-6 text-black" />
                  <span className="text-xl md:text-2xl font-bold text-black tracking-tight">
                    VER TODOS OS PLANOS
                  </span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6 text-black" />
                  </motion.div>
                </div>
              </motion.div>
            </Link>

            <p className="text-white/20 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Clique e descubra o plano ideal para você
              <Sparkles className="w-4 h-4" />
            </p>
          </motion.div>

          {/* Contador fake de pessoas vendo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-green-400 text-xs">
              12 pessoas estão vendo esta página agora
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}