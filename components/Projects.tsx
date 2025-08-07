'use client';

import React from 'react';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/hooks/useSectionInView';
import SectionHeading from './SectionHeading';
import Project from './Project';

export default function Projects() {
  const { ref } = useSectionInView('Créations', 0.5);

  return (
    <section id="projects" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading><span className="normal-case">Ce que je peux créer pour vous</span></SectionHeading>
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
