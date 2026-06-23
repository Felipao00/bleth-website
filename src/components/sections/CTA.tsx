'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { fadeInUp } from '@/lib/animations';
import Button from '@/components/ui/Button';
import { Mail } from 'lucide-react';

export default function CTA() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="relative bg-black section-padding border-t border-white/[0.03]">
      <div className="container-bleth">
        <motion.div          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
            Vamos construir algo incrível juntos.
          </h2>

          <p className="text-lg text-white/50 mb-12 max-w-xl mx-auto">
            Entre em contato para discutirmos seu projeto. Estamos prontos para transformar sua
            ideia em realidade.
          </p>

          <Button
            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contato@bleth.com.br'}`}
            variant="primary"
            size="lg"
          >
            <Mail className="w-5 h-5" />
            Entrar em Contato
          </Button>
        </motion.div>
      </div>
    </section>
  );
}