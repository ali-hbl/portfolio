'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/useSectionInView';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-6 text-gray-700">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:nwah.ally@gmail.com">
          nwah.ally@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col">
        <input className="h-14 rounded-lg border border-black px-4" type="email" placeholder="Your email" />
        <textarea className="my-3 h-52 rounded-lg border-black p-4" placeholder="Your message" />
        <button
          className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
          type="submit"
        >
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
        </button>
      </form>
    </motion.section>
  );
}
