'use client';

import { useSectionInView } from '@/hooks/useSectionInView';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Passionate about <span className="font-medium">technology, music and sports,</span> I am a driven individual
        with a <span className="font-medium">strong desire to learn.</span> With a{' '}
        <span className="font-medium">commitment to excellence,</span> I am constantly seeking new challenges and
        opportunities to <span className="font-medium">expand my skills and knowledge.</span> Whether it's writing code
        or creating a melodious composition, I approach each task with{' '}
        <span className="font-medium">energy and dedication, always striving to improve and succeed.</span>
        <br />
        <br />I <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My
        core stack is <span className="font-medium">React, Next.js, Node.js and MongoDB</span>. I am also familiar with
        TypeScript and Prisma. I am always looking to learn new technologies.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing guitar, composing music, watching series
        and boxing.
      </p>
    </motion.section>
  );
}
