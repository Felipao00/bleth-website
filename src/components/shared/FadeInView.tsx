'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Variants } from 'framer-motion';

interface FadeInViewProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
}

export default function FadeInView({ children, variants, className }: FadeInViewProps) {
  const { ref, isInView } = useInView();

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}