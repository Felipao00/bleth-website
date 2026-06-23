'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const testimonials = [
  {
    id: 1,
    name: 'Alexandre Silva',
    role: 'CEO - TechStart',
    content: 'A BLETH transformou completamente nossa infraestrutura digital. O sistema que eles desenvolveram aumentou nossa produtividade em 200%.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marina Costa',
    role: 'Diretora - DigitalWave',
    content: 'Profissionalismo e excelência técnica definem a BLETH. Nossa plataforma ficou incrível e superou todas as expectativas.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Rafael Oliveira',
    role: 'Founder - CreatorsLab',
    content: 'Trabalhar com a BLETH foi uma experiência única. Eles entenderam exatamente o que precisávamos e entregaram além do esperado.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Camila Santos',
    role: 'CTO - InovaTech',
    content: 'As automações que a BLETH implementou economizaram milhares de horas de trabalho manual. Recomendo fortemente!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Pedro Henrique',
    role: 'Product Manager - CloudSys',
    content: 'Desde o planejamento até a entrega, a BLETH demonstrou um nível de profissionalismo raro no mercado.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      if (newDirection === 1) {
        return prev === testimonials.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <section id="testimonials" className="relative bg-black section-padding border-t border-white/[0.03] overflow-hidden">
      <div className="container-bleth">
        <SectionHeading
          title="O que dizem sobre nós"
          subtitle="Depoimentos de quem já transformou ideias em realidade com a BLETH."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Carousel */}
          <div className="relative min-h-[300px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <div className="text-center px-8 md:px-16">
                  {/* Quote icon */}
                  <div className="mb-8 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center">
                      <Quote className="w-8 h-8 text-white/20" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-white/20 text-white/20" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-8 font-light italic">
                    &ldquo;{testimonials[current].content}&rdquo;
                  </p>

                  {/* Author */}
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-white/40 text-sm">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center transition-all duration-300 hover:bg-white/[0.02]"
            >
              <ChevronLeft className="w-5 h-5 text-white/50" />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === current
                      ? 'w-8 h-2 bg-white'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center transition-all duration-300 hover:bg-white/[0.02]"
            >
              <ChevronRight className="w-5 h-5 text-white/50" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}