'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import BackgroundGrid from '@/components/effects/BackgroundGrid';
import HexagonPattern from '@/components/effects/HexagonPattern';
import GeometricLines from '@/components/effects/GeometricLines';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [glitchText, setGlitchText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black texture-overlay"
    >
      {/* Efeito Scanline */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03]">
        <div className="absolute inset-0 animate-[scanline_8s_linear_infinite] bg-gradient-to-b from-transparent via-white/5 to-transparent h-[200vh]" />
      </div>

      {/* Background Effects */}
      <BackgroundGrid />
      <HexagonPattern />
      <GeometricLines />

      {/* Content */}
      <div className="container-bleth relative z-10 py-32 md:py-0">
        <div className="flex flex-col items-center text-center">
          {/* Logo com efeito glitch */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-12 relative"
          >
            <div className={glitchText ? 'animate-glitch' : ''}>
              <Image
                src="/images/logo.svg"
                alt="BLETH"
                width={160}
                height={53}
                className="h-16 md:h-20 w-auto relative z-10"
                priority
              />
            </div>
            {glitchText && (
              <>
                <div className="absolute inset-0 bg-red-500/10 blur-sm animate-pulse" />
                <div className="absolute inset-0 bg-blue-500/10 blur-sm animate-pulse" />
              </>
            )}
          </motion.div>

          {/* Main Text com efeito typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white max-w-5xl leading-tight md:leading-tight lg:leading-tight tracking-tight text-balance font-['Space_Grotesk']">
              Construindo soluções digitais que transformam
              <span className="relative inline-block ml-2">
                ideias
                <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 100 4">
                  <motion.line
                    x1="0" y1="2" x2="100" y2="2"
                    stroke="white"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                  />
                </svg>
              </span>
              {' '}em realidade.
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-lg md:text-xl text-white/50 max-w-3xl leading-relaxed font-light"
          >
            Desenvolvemos sistemas, automações e plataformas modernas para empresas,
            criadores e negócios digitais.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Button href="#services" variant="primary" size="lg">
              Conhecer Serviços
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button href="#process" variant="outline" size="lg">
              Ver Processos
            </Button>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-white/40 font-mono">DISPONÍVEL PARA PROJETOS</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}