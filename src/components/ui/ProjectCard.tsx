'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { useInView } from '@/hooks/useInView';
import { Project } from '@/types/project';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, isInView } = useInView();
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ delay: index * 0.15 }}
      className="group relative bg-white/[0.02] border border-white/[0.05] hover:border-white/10 overflow-hidden transition-all duration-500 card-hover"
    >
      <div className="aspect-[16/10] relative overflow-hidden bg-white/[0.02]">
        {!imgError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-white/[0.02]">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 border border-white/10 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" opacity="0.3">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <p className="text-white/20 text-sm">{project.title}</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="p-8 md:p-10 relative">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-white/40 border border-white/10 px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight">
          {project.title}
        </h3>

        <p className="text-white/50 mb-6 leading-relaxed">{project.description}</p>

        <button className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group/btn">
          <span className="text-sm tracking-wider uppercase">Ver Projeto</span>
          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}