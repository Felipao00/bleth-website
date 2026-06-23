'use client';

import { motion } from 'framer-motion';

export default function HexagonPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        className="absolute w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="hexagons" x="0" y="0" width="120" height="104" patternUnits="userSpaceOnUse">
            <polygon
              points="60,0 120,30 120,90 60,120 0,90 0,30"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
            <polygon
              points="60,20 94.64,40 94.64,80 60,100 25.36,80 25.36,40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-[0.04]">
          <polygon
            points="100,10 186.6,60 186.6,160 100,210 13.4,160 13.4,60"
            fill="none"
            stroke="white"
            strokeWidth="0.3"
          />
          <polygon
            points="100,40 151.96,70 151.96,130 100,160 48.04,130 48.04,70"
            fill="none"
            stroke="white"
            strokeWidth="0.3"
          />
          <polygon
            points="100,70 125.98,85 125.98,115 100,130 74.02,115 74.02,85"
            fill="none"
            stroke="white"
            strokeWidth="0.3"
          />
        </svg>
      </motion.div>
    </div>
  );
}