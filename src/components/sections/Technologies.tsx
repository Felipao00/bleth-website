'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import TechBadge from '@/components/ui/TechBadge';
import { technologies } from '@/data/technologies';
import { useInView } from '@/hooks/useInView';

export default function Technologies() {
  const { ref, isInView } = useInView();

  return (
    <section id="technologies" className="relative bg-black section-padding border-t border-white/[0.03] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full" />
      </div>

      <div className="container-bleth relative z-10">
        <SectionHeading
          title="Stack Tecnológico"
          subtitle="Ferramentas e tecnologias que utilizamos para construir soluções robustas e escaláveis."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <TechBadge key={tech.id} technology={tech} index={index} />
          ))}
        </motion.div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 text-white/20 text-sm font-mono"
        >
          E muitas outras tecnologias...
        </motion.p>
      </div>
    </section>
  );
}