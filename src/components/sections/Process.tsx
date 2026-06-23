'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { processSteps } from '@/data/process';

export default function Process() {
  const { ref, isInView } = useInView();

  return (
    <section id="process" className="relative bg-black section-padding border-t border-white/[0.03] overflow-hidden">
      <div className="container-bleth">
        <SectionHeading
          title="Processo"
          subtitle="Nossa metodologia de trabalho garante entregas consistentes e de alta qualidade."
        />

        {/* Timeline */}
        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } md:justify-center`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}
                  >
                    <div className={`${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                      <span className="text-white/20 text-sm tracking-widest uppercase mb-2 block">
                        Etapa {step.number}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex items-center justify-center w-4 h-4">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>

                  {/* Spacer for mobile */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}