'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { useInView } from '@/hooks/useInView';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className={`mb-16 md:mb-24 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent ${
          align === 'left' ? 'mx-0' : 'mx-auto'
        } max-w-md`}
      />
    </motion.div>
  );
}