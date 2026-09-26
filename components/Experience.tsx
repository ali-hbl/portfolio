'use client';

import { useSectionInView } from '@/hooks/useSectionInView';
import { experiencesData } from '@/lib/data';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function Experience() {
  const { ref } = useSectionInView('Expérience', 0.5);

  return (
    <section id="experience" ref={ref} className="mb-28 w-full max-w-[42rem] scroll-mt-28 px-4 sm:mb-40">
      <SectionHeading>
        <span className="normal-case">Mon expérience</span>
      </SectionHeading>

      {experiencesData.map((exp) => (
        <div key={exp.company}>
          {/* Carte principale : l'employeur */}
          <motion.div
            className="flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg [&>*]:h-full [&>*]:w-full">
              <exp.icon />
            </span>
            <div className="min-w-0 text-left">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.company}</h3>
                <span className="text-sm text-gray-500 dark:text-white/50">{exp.date}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-white/50">{exp.location}</p>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/75">{exp.role}</p>
            </div>
          </motion.div>

          {/* Sous-cartes : missions et projet interne, reliées à Staizen */}
          <div className="relative ml-5 border-l-2 border-dashed border-black/10 pl-6 dark:border-white/10 sm:ml-9">
            {exp.items.map((item, index) => (
              <motion.div
                key={`${item.client}-${item.date}`}
                className="relative mt-4 first:mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: 0.05 * index }}
              >
                <span
                  aria-hidden
                  className="absolute -left-[1.9375rem] top-4 h-2.5 w-2.5 rounded-full border-2 border-gray-400 bg-white dark:border-white/40 dark:bg-[#0b0f14]"
                />

                <div className="flex items-start gap-3 rounded-lg border border-black/5 bg-gray-50 p-4 dark:border-white/5 dark:bg-white/[0.03]">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded [&>*]:h-full [&>*]:w-full">
                    <item.icon />
                  </span>
                  <div className="min-w-0 text-left">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span
                        className={
                          item.type === 'mission'
                            ? 'rounded-full bg-sky-500/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-sky-600 dark:text-sky-300'
                            : 'rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300'
                        }
                      >
                        {item.type === 'mission' ? 'Mission' : 'Projet interne'}
                      </span>
                      <h4 className="font-medium text-gray-900 dark:text-white">{item.client}</h4>
                      <span className="text-xs text-gray-500 dark:text-white/40">{item.date}</span>
                    </div>
                    <p className="dark:text-white/65 mt-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
