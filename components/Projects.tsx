import React from 'react';
import { projectsData } from '@/lib/data';
import SectionHeading from './SectionHeading';
import Project from './Project';

export default function Projects() {
  return (
    <section>
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
