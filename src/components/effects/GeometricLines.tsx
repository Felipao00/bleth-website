'use client';

import { motion } from 'framer-motion';

export default function GeometricLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] opacity-[0.03]"
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <line x1="0" y1="100" x2="200" y2="100" stroke="white" strokeWidth="0.3" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="white" strokeWidth="0.3" />
          <line x1="30" y1="30" x2="170" y2="170" stroke="white" strokeWidth="0.2" />
          <line x1="170" y1="30" x2="30" y2="170" stroke="white" strokeWidth="0.2" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="white" strokeWidth="0.3" />
        </svg>
      </motion.div>
    </div>
  );
}