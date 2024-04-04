'use client';

import { LinkType } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';

// type ProjectProps = (typeof projectsData)[number]; // will get the specific type of any field of any project in the datas

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  link: LinkType;
};

export default function Project({ title, description, tags, imageUrl, link }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const linkContent = typeof link === 'string' ? link : undefined;
  const onClickHandler = typeof link === 'function' ? link : undefined;

  const { scrollYProgress } = useScroll({
    target: ref,
    // animation starts when the bottom of the viewport crosses the top of the target
    // animations ends when the bottom of the viewport has gone 33% beyond the end of the projects
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:pr-8 sm:group-even:even:pl-8">
        <a href={linkContent} onClick={onClickHandler} target="_blank" rel="noopener noreferrer">
          <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[20rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="my-3 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
            <ul className="mt-4 flex flex-wrap gap-2 py-2 sm:mt-auto">
              {tags.map((tag, i) => (
                <li
                  className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                  key={i}
                >
                  {tag}
                </li>
              ))}
            </ul>
            {/* <small className="mt-4 italic text-gray-500 hover:text-gray-800 hover:underline dark:text-white/60 dark:hover:text-white/40 dark:hover:underline">
              Click to visit
            </small> */}
          </div>

          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40
          group-even:right-[initial]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
          
          group-hover:scale-[1.04]
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
          sm:block"
          />
        </a>
      </section>
    </motion.div>
  );
}
