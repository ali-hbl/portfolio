'use client';

import { LinkType } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';
import { BsArrowUpRight, BsLockFill } from 'react-icons/bs';

type ProjectProps = {
  title: string;
  description: string;
  tags: ReadonlyArray<string>;
  imageUrl: StaticImageData;
  link: LinkType;
};

const hostOf = (url?: string) => {
  if (!url) return 'projet';
  try {
    return new URL(url).host.replace(/^www\./, '');
  } catch {
    return 'projet';
  }
};

// Couleur de point stable par techno, dans l'esprit des langages GitHub.
const DOT_COLORS: Record<string, string> = {
  React: 'bg-sky-400',
  'Next.js': 'bg-gray-300',
  TypeScript: 'bg-blue-400',
  'Node.js': 'bg-emerald-400',
  Express: 'bg-gray-400',
  MySQL: 'bg-orange-400',
  Sass: 'bg-pink-400',
  Tailwind: 'bg-cyan-400',
  Python: 'bg-yellow-400',
  crewAI: 'bg-violet-400',
  'GitHub Actions': 'bg-indigo-400',
};
const FALLBACK_DOTS = ['bg-emerald-400', 'bg-sky-400', 'bg-amber-400', 'bg-fuchsia-400'];
const dotFor = (tag: string, i: number) => DOT_COLORS[tag] ?? FALLBACK_DOTS[i % FALLBACK_DOTS.length];

export default function Project({ title, description, tags, imageUrl, link }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const linkContent = typeof link === 'string' ? link : undefined;
  const onClickHandler = typeof link === 'function' ? link : undefined;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-10 last:mb-0 sm:mb-14"
    >
      <a
        href={linkContent}
        onClick={onClickHandler}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
      >
        {/* Fenêtre de navigateur */}
        <div className="overflow-hidden rounded-t-xl border border-black/10 bg-gray-100 shadow-xl shadow-black/10 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl dark:border-white/10 dark:bg-[#161b22]">
          <div className="flex items-center gap-3 border-b border-black/5 px-4 py-2.5 dark:border-white/10">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            </div>

            <div className="flex flex-1 items-center gap-2 truncate rounded-md bg-white px-3 py-1 text-xs text-gray-500 dark:bg-white/5 dark:text-white/50">
              <BsLockFill className="shrink-0 text-[0.6rem] text-gray-400 dark:text-white/30" />
              <span className="truncate">{hostOf(linkContent)}</span>
            </div>

            <BsArrowUpRight className="shrink-0 text-gray-400 transition group-hover:text-gray-700 dark:text-white/30 dark:group-hover:text-white/70" />
          </div>

          <div className="relative aspect-[16/9] overflow-hidden bg-white dark:bg-black/20">
            <Image
              src={imageUrl}
              alt={`Aperçu de ${title}`}
              quality={95}
              fill
              sizes="(min-width: 704px) 672px, 100vw"
              className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Infos */}
        <div className="rounded-b-xl border border-t-0 border-black/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03] sm:p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-600 dark:text-white/70">{description}</p>

          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {tags.map((tag, i) => (
              <li key={tag} className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-white/50">
                <span className={`h-2 w-2 rounded-full ${dotFor(tag, i)}`} />
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </motion.div>
  );
}
