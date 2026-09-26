'use client';

import { useSectionInView } from '@/hooks/useSectionInView';
import { projectsData } from '@/lib/data';
import Project from './Project';
import SectionHeading from './SectionHeading';

export default function Projects() {
  const { ref } = useSectionInView('Créations', 0.1);

  return (
    <section id="projects" ref={ref} className="mb-28 w-full max-w-[42rem] scroll-mt-28 px-4">
      <SectionHeading>
        <span className="normal-case">Construits, déployés, en ligne</span>
      </SectionHeading>

      <div>
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
