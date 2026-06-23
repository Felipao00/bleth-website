'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black section-padding border-t border-white/[0.03]">
      <div className="container-bleth">
        <SectionHeading
          title="Projetos"
          subtitle="Conheça alguns dos trabalhos que desenvolvemos com excelência e dedicação."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}