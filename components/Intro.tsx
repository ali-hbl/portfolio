'use client';

import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { useSectionInView } from '@/hooks/useSectionInView';
import pp from '@/public/pp.jpeg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const ghost =
  'inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 text-base font-medium text-gray-800 backdrop-blur outline-none transition hover:-translate-y-0.5 hover:bg-white focus-visible:ring-2 focus-visible:ring-gray-900/40 dark:border-white/10 dark:bg-white/10 dark:text-white/90 dark:hover:bg-white/20 dark:focus-visible:ring-white/60';

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView('Accueil', 0.6);

  return (
    <section id="home" ref={ref} className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0">
      <motion.div
        className="relative isolate mx-auto w-fit"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div
          aria-hidden
          className="absolute -inset-3 -z-10 rounded-full bg-gradient-to-tr from-violet-500/40 via-fuchsia-400/30 to-amber-300/30 blur-2xl"
        />
        <Image
          src={pp}
          alt="Photo de profil"
          width={224}
          height={224}
          quality={95}
          priority={true}
          className="h-36 w-36 rounded-full object-cover shadow-2xl ring-4 ring-white/80 dark:ring-white/10 sm:h-40 sm:w-40"
        />
      </motion.div>

      <motion.h1
        className="mt-8 font-mono text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
        {...fadeUp(0.1)}
      >
        Ali
      </motion.h1>

      <motion.p className="mt-3 text-lg font-medium text-gray-500 dark:text-white/60 sm:text-2xl" {...fadeUp(0.15)}>
        Développeur full-stack
      </motion.p>

      <motion.p
        className="mx-auto mt-6 max-w-xl px-4 text-base leading-relaxed text-gray-600 dark:text-white/70 sm:text-lg"
        {...fadeUp(0.2)}
      >
        Je conçois des applications web avec{' '}
        <span className="font-medium text-gray-900 dark:text-white">React, Next.js et Node.js</span>. J’ai passé près de
        trois ans à développer des interfaces pour des banques avant de construire mes propres produits de bout en bout.
      </motion.p>

      <motion.div className="mt-8 flex justify-center px-4" {...fadeUp(0.4)}>
        <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Disponible pour un stage à partir de février 2027
        </p>
      </motion.div>

      <motion.div className="mt-10 flex flex-col items-center justify-center gap-3 px-4 sm:flex-row" {...fadeUp(0.3)}>
        <Link
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-base font-medium text-white shadow-lg shadow-gray-900/10 outline-none transition hover:-translate-y-0.5 hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-900/40 dark:bg-white dark:text-gray-900 dark:shadow-none dark:hover:bg-white/90 dark:focus-visible:ring-white/60"
          onClick={() => {
            setActiveSection('Créations');
            setTimeOfLastClick(Date.now());
          }}
        >
          Voir mes projets
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <Link
          href="#contact"
          className={`${ghost} px-6 py-3`}
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Me contacter
        </Link>

        <Link
          className={`${ghost} px-6 py-3`}
          href="https://github.com/ali-hbl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-xl" />
          GitHub
        </Link>

        <Link
          className={`${ghost} h-12 w-12 text-xl`}
          href="https://www.linkedin.com/in/ali-haboula"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </Link>
      </motion.div>
    </section>
  );
}
