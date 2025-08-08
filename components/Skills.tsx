'use client';

import { useSectionInView } from '@/hooks/useSectionInView';
import { skillsByCategory } from '@/lib/data';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index, // allow the li's to be displayed one after the other, each one get a larger delay due to the index
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Compétences');

  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[60rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>
        <span className="normal-case">Outils et technologies que j’utilise pour créer vos projets</span>
      </SectionHeading>

      <p className="mx-auto mb-8 max-w-[42rem] text-base text-gray-600 dark:text-white/70">
        Voici les outils que j’emploie au quotidien pour livrer des sites
        <span className="font-medium"> rapides</span>, <span className="font-medium">fiables</span> et{' '}
        <span className="font-medium">faciles à gérer</span>.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillsByCategory.map((cat, i) => (
          <div
            key={cat.title}
            className="rounded-2xl border border-black/10 bg-white/70 p-5 text-left shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="mb-1 text-lg font-semibold">{cat.title}</h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-white/60">{cat.benefit}</p>

            <ul className="flex flex-wrap gap-2">
              {cat.items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.li
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-gray-800 
  transition-transform duration-200 hover:bg-gray-50 dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    {Icon ? <Icon className="text-base opacity-80" /> : null}
                    {item.label}
                  </motion.li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// export default function Skills() {
//   const { ref } = useSectionInView('Compétences');

//   return (
//     <section id="skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
//       <SectionHeading><span className='normal-case'>Outils et technologies que j’utilise pour créer vos projets</span></SectionHeading>
//       <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
//         {skillsData.map((skill, index) => (
//           <motion.li
//             className="rounded-xl border border-black bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
//             key={index}
//             variants={fadeInAnimationVariants}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             custom={index}
//           >
//             {skill}
//           </motion.li>
//         ))}
//       </ul>
//     </section>
//   );
// }
