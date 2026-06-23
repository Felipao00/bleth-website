'use client';

import { motion } from 'framer-motion';
import { socialLinks } from '@/data/navigation';
import * as Icons from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="container-bleth py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.svg"
                alt="BLETH"
                width={100}
                height={33}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-md">
              Desenvolvendo o futuro através da tecnologia. Transformamos ideias em soluções
              digitais modernas e escaláveis.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-4">
            <h4 className="text-white/60 text-xs tracking-widest uppercase mb-6">Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/40 hover:text-white text-sm transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/40 hover:text-white text-sm transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#technologies" className="text-white/40 hover:text-white text-sm transition-colors">
                  Tecnologias
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/40 hover:text-white text-sm transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/40 hover:text-white text-sm transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-3">
            <h4 className="text-white/60 text-xs tracking-widest uppercase mb-6">Conecte-se</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = (Icons as any)[social.icon] || Icons.ExternalLink;
                return (
                  <motion.a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4 text-white/50 hover:text-white transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} BLETH. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Desenvolvido com excelência técnica.
          </p>
        </div>
      </div>
    </footer>
  );
}