'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/hooks/useSectionInView';
import { skillsData } from '@/lib/data';

export default function Experience() {
  const { ref } = useSectionInView('Experience');

  return (
    <section id="experience" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
    </section>
  );
}
