'use client';

import { useSectionInView } from '@/hooks/useSectionInView';
import { skillsByTier } from '@/lib/data';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Compétences');

  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[45rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>
        <span className="normal-case">Stack technique</span>
      </SectionHeading>

      {skillsByTier.map((group) => (
        <div key={group.tier} className="mb-8 last:mb-0">
          <h3 className="mb-4 flex items-center justify-center gap-2 font-mono text-sm">
            <span
              className={group.tier === 'core' ? 'text-sky-500 dark:text-sky-400' : 'text-gray-400 dark:text-white/30'}
            >
              {'//'}
            </span>
            <span
              className={
                group.tier === 'core'
                  ? 'font-semibold uppercase tracking-wide text-gray-700 dark:text-white/80'
                  : 'font-medium uppercase tracking-wide text-gray-500 dark:text-white/50'
              }
            >
              {group.title}
            </span>
          </h3>

          <ul className="flex flex-wrap justify-center gap-2.5">
            {group.items.map((item, index) => {
              const Icon = item.icon;
              const isCore = group.tier === 'core';

              return (
                <motion.li
                  key={item.label}
                  className={
                    isCore
                      ? 'inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-400/40 hover:shadow dark:border-white/10 dark:bg-white/10 dark:text-white/90 dark:hover:border-sky-400/30'
                      : 'inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/40 px-3.5 py-2 text-sm text-gray-700 transition hover:-translate-y-0.5 hover:bg-white/70 dark:border-white/10 dark:bg-white/[0.06] dark:text-white/70 dark:hover:bg-white/10'
                  }
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                >
                  {Icon ? (
                    <Icon
                      className={
                        isCore
                          ? 'text-base text-sky-600 dark:text-sky-400'
                          : 'text-sm text-gray-400 opacity-70 dark:text-white/40'
                      }
                    />
                  ) : null}
                  {item.label}
                </motion.li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
}
