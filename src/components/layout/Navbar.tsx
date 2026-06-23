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
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-bleth">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <Image
                src="/images/logo.svg"
                alt="BLETH"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isPageLink = link.href.startsWith('/');
                
                if (isPageLink) {
                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-300 tracking-wider uppercase"
                    >
                      {link.label}
                    </Link>
                  );
                }
                
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300 tracking-wider uppercase"
                  >
                    {link.label}
                  </a>
                );
              })}
              <Button href="#contact" variant="outline" size="sm">
                Falar Conosco
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => {
                const isPageLink = link.href.startsWith('/');
                
                if (isPageLink) {
                  return (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl text-white/70 hover:text-white transition-colors tracking-wider uppercase"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                }
                
                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-2xl text-white/70 hover:text-white transition-colors tracking-wider uppercase"
                  >
                    {link.label}
                  </motion.a>
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