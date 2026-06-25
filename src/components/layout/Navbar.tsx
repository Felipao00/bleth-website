'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { navLinks } from '@/data/navigation';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Navbar flutuante com efeito vidro */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`w-full max-w-[1200px] rounded-2xl transition-all duration-500 ${
            isScrolled
              ? 'bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50'
              : 'bg-black/20 backdrop-blur-xl border border-white/5'
          }`}
          style={{
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          }}
        >
          {/* Brilho sutil no topo */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* Brilho sutil embaixo */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          <div className="px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="relative z-50 flex-shrink-0">
                <Image
                  src="/images/logo.svg"
                  alt="BLETH"
                  width={110}
                  height={36}
                  className="h-8 w-auto"
                  priority
                />
              </Link>

              {/* Desktop Navigation - Centralizada */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => {
                  const isPageLink = link.href.startsWith('/');
                  
                  if (isPageLink) {
                    return (
                      <Link
                        key={link.id}
                        href={link.href}
                        className="px-4 py-2 text-xs text-white/50 hover:text-white transition-all duration-300 tracking-wider uppercase rounded-full hover:bg-white/5"
                      >
                        {link.label}
                      </Link>
                    );
                  }
                  
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      className="px-4 py-2 text-xs text-white/50 hover:text-white transition-all duration-300 tracking-wider uppercase rounded-full hover:bg-white/5"
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>

              {/* Botão */}
              <div className="hidden lg:block">
                <Button href="#contact" variant="outline" size="sm">
                  Falar Conosco
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, index) => {
                const isPageLink = link.href.startsWith('/');
                
                const linkContent = (
                  <span className="text-2xl text-white/70 hover:text-white transition-colors tracking-wider uppercase">
                    {link.label}
                  </span>
                );

                return (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {isPageLink ? (
                      <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                        {linkContent}
                      </Link>
                    ) : (
                      <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                        {linkContent}
                      </a>
                    )}
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                  href="#contact" 
                  variant="primary" 
                  size="lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Falar Conosco
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}