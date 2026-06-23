'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Technology } from '@/types/technology';
import { useState } from 'react';

interface TechBadgeProps {
  technology: Technology;
  index: number;
}

export default function TechBadge({ technology, index }: TechBadgeProps) {
  const { ref, isInView } = useInView();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        type: 'spring',
        stiffness: 100
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer">
        {/* Animated background on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent"
          animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        />

        {/* Glowing orb */}
        <motion.div
          className="absolute -inset-4 bg-white/5 rounded-full blur-xl"
          animate={isHovered ? { opacity: 0.5, scale: 1.2 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4 }}
        />

        <div className="relative z-10 flex flex-col items-center gap-4">
          {/* Icon with continuous animation */}
          <motion.div
            className="w-16 h-16 flex items-center justify-center"
            animate={isHovered ? {
              rotateY: 360,
              scale: [1, 1.1, 1],
            } : {
              rotateY: 0,
              scale: 1,
            }}
            transition={isHovered ? {
              rotateY: { duration: 1, ease: "easeInOut" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            } : {}}
          >
            <i 
              className={`devicon-${technology.icon} text-4xl transition-all duration-300 ${
                isHovered ? 'text-white' : 'text-white/60'
              }`} 
            />
          </motion.div>

          {/* Name */}
          <span className={`text-xs tracking-wider uppercase transition-all duration-300 ${
            isHovered ? 'text-white' : 'text-white/40'
          }`}>
            {technology.name}
          </span>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-tl-lg" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-br-lg" />
      </div>
    </motion.div>
  );
}