'use client';

import { motion } from 'framer-motion';

export default function HexagonLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
    >
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Hexágono externo - gira horário */}
        <motion.svg
          viewBox="0 0 240 80"
          className="absolute"
          style={{ width: '160px', height: '53px' }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <g transform="translate(40, 40)">
            <polygon 
              points="0,-30 26,-15 26,15 0,30 -26,15 -26,-15"
              fill="none" 
              stroke="#FFFFFF" 
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.3"
            />
          </g>
        </motion.svg>

        {/* Hexágono interno - gira anti-horário */}
        <motion.svg
          viewBox="0 0 240 80"
          className="absolute"
          style={{ width: '160px', height: '53px' }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <g transform="translate(40, 40)">
            <polygon 
              points="0,-16 13.86,-8 13.86,8 0,16 -13.86,8 -13.86,-8"
              fill="#FFFFFF"
              opacity="0.8"
            />
          </g>
        </motion.svg>
      </div>

      {/* Texto BLETH */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute mt-28 text-white/50 text-xs tracking-[0.5em] uppercase"
      >
        BLETH
      </motion.p>
    </motion.div>
  );
}