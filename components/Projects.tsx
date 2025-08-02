'use client';

import React from 'react';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/hooks/useSectionInView';
import SectionHeading from './SectionHeading';
import Project from './Project';

export default function Projects() {
  const { ref } = useSectionInView('Projets', 0.5);

  return (
    <section id="projects" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
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
