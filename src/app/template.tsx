'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setShowContent(false);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center gap-10"
          >
            {/* LOGO EXATA DA BLETH */}
            <div className="relative w-48 h-16 flex items-center justify-center">
              
              {/* Hexágono externo (vazado) - gira HORÁRIO */}
              <motion.svg
                viewBox="0 0 240 80"
                className="absolute w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <g transform="translate(40, 40)">
                  <polygon 
                    points="0,-30 26,-15 26,15 0,30 -26,15 -26,-15"
                    fill="none" 
                    stroke="#FFFFFF" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.4"
                  />
                </g>
              </motion.svg>

              {/* Hexágono interno (preenchido) - gira ANTI-HORÁRIO */}
              <motion.svg
                viewBox="0 0 240 80"
                className="absolute w-full h-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <g transform="translate(40, 40)">
                  <polygon 
                    points="0,-16 13.86,-8 13.86,8 0,16 -13.86,8 -13.86,-8"
                    fill="#FFFFFF"
                    opacity="0.9"
                  />
                </g>
              </motion.svg>
              
            </div>

            {/* Texto */}
            <motion.p
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white/40 text-xs tracking-[0.3em] uppercase"
            >
              Carregando
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Conteúdo só aparece depois da animação */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}