'use client';

import { useSectionInView } from '@/hooks/useSectionInView';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import SectionHeading from './SectionHeading';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const line = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function Cmd({ children }: { children: ReactNode }) {
  return (
    <p className="mb-1 flex gap-2">
      <span className="select-none text-emerald-400">$</span>
      <span className="font-medium text-gray-100">{children}</span>
    </p>
  );
}

function Row({ k, children }: { k: string; children: ReactNode }) {
  return (
    <div className="grid gap-x-4 sm:grid-cols-[6.5rem_1fr]">
      <span className="text-sky-300">{k}</span>
      <span>{children}</span>
    </div>
  );
}

export default function About() {
  const { ref } = useSectionInView('À propos');

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 w-full max-w-[45rem] scroll-mt-28 px-4 sm:mb-40"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>
        <span className="font-mono normal-case">À propos</span>
      </SectionHeading>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-2xl shadow-black/30">
        {/* Barre de titre */}
        <div className="relative flex items-center border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-300/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <span className="absolute inset-x-0 text-center font-mono text-xs text-gray-500">ali@portfolio: ~</span>
        </div>

        {/* Contenu */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-5 p-5 text-left font-mono text-[0.8rem] leading-6 text-gray-300 sm:p-7 sm:text-sm sm:leading-7"
        >
          <motion.div variants={line}>
            <Cmd>whoami</Cmd>
            <p className="pl-5">Ali Haboula, développeur full-stack à Bruxelles.</p>
          </motion.div>

          <motion.div variants={line}>
            <Cmd>cat experience.log</Cmd>
            <div className="space-y-2 pl-5">
              <Row k="2021 → 2024">
                Staizen, alternance puis CDI. Interfaces pour Belfius et CIMB Bank, et développement de Gembaa, une
                plateforme de planification d’entreprise.
              </Row>
              <Row k="depuis">
                Mes propres projets. Zaytoon, une application complète de restauration : front, API, base de données,
                paiements. Et des agents IA, que je construis pour comprendre comment ils fonctionnent.
              </Row>
            </div>
          </motion.div>

          {/* <motion.div variants={line}>
            <Cmd>echo $STACK</Cmd>
            <p className="pl-5 text-emerald-300">React · Next.js · TypeScript · Node.js · Tailwind</p>
          </motion.div> */}

          <motion.div variants={line}>
            <Cmd>cat formation.md</Cmd>
            <ul className="space-y-1.5 pl-5">
              <li className="flex gap-2">
                <span className="shrink-0 text-gray-500">·</span>
                <span>Bachelier en informatique à l’EPFC, orienté développement d’applications.</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-gray-500">·</span>
                <span>
                  Certification de Développeur Web Front-End à l’EFP — obtenue avec grande distinction
                  <span className="text-gray-500"> (93%)</span>.
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={line}>
            <Cmd>ls ~/hors-ecran</Cmd>
            <p className="flex flex-wrap gap-x-4 pl-5">
              <a
                href="https://www.instagram.com/aely.gtr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 underline-offset-4 transition hover:text-sky-200 hover:underline"
              >
                guitare/
              </a>
              <span>gants-de-boxe/</span>
              <span>une-série-de-trop.mkv</span>
            </p>
          </motion.div>

          <motion.p variants={line} className="flex items-center gap-2">
            <span className="select-none text-emerald-400">$</span>
            <span className="inline-block h-4 w-2 animate-pulse bg-emerald-400" />
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
