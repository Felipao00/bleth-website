'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium tracking-wider uppercase transition-all duration-300 rounded-full';

  const variants = {
    primary:
      'bg-white text-black hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]',
    secondary:
      'bg-white/5 text-white hover:bg-white/10 border border-white/10',
    outline:
      'bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/[0.02]',
  };

  const sizes = {
    sm: 'px-6 py-2.5 text-xs',
    md: 'px-8 py-3.5 text-sm',
    lg: 'px-10 py-4 text-sm',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes} onClick={onClick}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}