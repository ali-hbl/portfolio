import React from 'react';

import thirdFadeImg from '@/public/3rd-Fade.png';
import seikoImg from '@/public/seiko.png';
import zaytoonImg from '@/public/zaytoon.png';

import BelfiusLogo from '../public/BelfiusLogo.svg';
import CIMB_Logo from '../public/CIMB_Logo.svg';
import staizenLogo from '../public/staizenLogo.svg';
// import BelfiusLogoWhite from '../public/BelfiusLogoWhite.svg';
// import { FaReact } from 'react-icons/fa';
// import { SiAngular } from 'react-icons/si';

import { FaJava } from 'react-icons/fa';
import {
  SiAdobexd,
  SiAngular,
  SiCss3,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiSass,
  SiStripe,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
} from 'react-icons/si';

export const links = [
  {
    name: 'Accueil',
    hash: '#home',
  },
  {
    name: 'À propos',
    hash: '#about',
  },
  {
    name: 'Créations',
    hash: '#projects',
  },
  {
    name: 'Compétences',
    hash: '#skills',
  },
  {
    name: 'Expérience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

// export const experiencesData = [
//   {
//     title: 'Formation et premières réalisations',
//     location: 'Bruxelles, Belgique',
//     description:
//       'Lors de mon alternance, j’ai développé mes premiers sites et applications pour des clients, en proposant des solutions modernes et performantes.',
//     icon: React.createElement(FaLaptopCode),
//     date: '2020 - 2023',
//   },
//   {
//     title: 'CIMB Bank',
//     location: 'Bruxelles, Belgique',
//     description:
//       'Création d’interfaces sur mesure pour le portail en ligne de la banque, offrant une expérience fluide, un accès rapide aux services et une image de marque renforcée.',
//     icon: React.createElement(CIMB_Logo),
//     date: '2021 - 2022',
//   },
//   {
//     title: 'Belfius',
//     location: 'Bruxelles, Belgique',
//     description:
//       'Refonte et optimisation de pages web pour Belfius, l’une des plus grandes banques belges, afin d’améliorer la performance et l’image en ligne de la marque.',
//     icon: React.createElement(BelfiusLogo),
//     date: '2022 - 2023',
//   },
//   {
//     title: 'CIMB Bank',
//     location: 'Bruxelles, Belgique',
//     description:
//       'Développement de nouvelles fonctionnalités et optimisation des performances de l’application mobile bancaire pour offrir une expérience plus fluide et fiable.',
//     icon: React.createElement(CIMB_Logo),
//     date: '2023 - 2024',
//   },
//   {
//     title: 'Staizen',
//     location: 'Bruxelles, Belgique',
//     description:
//       "Développement de l'application « Gembaa », plateforme innovante de planification d’entreprise, afin de faciliter la collaboration entre équipes.",
//     icon: React.createElement(staizenLogo, { style: { borderRadius: '5px' } }),
//     date: '2023 - 2024',
//   },
//   {
//     title: 'Bachelier en informatique de gestion',
//     location: 'Bruxelles, Belgique',
//     description:
//       'Renforcement des compétences en développement, bases de données et réseaux à travers des projets pratiques orientés entreprise.',
//     icon: React.createElement(LuGraduationCap),
//     date: '2025 - en cours',
//   },
// ] as const;

export const experiencesData = [
  {
    title: 'Staizen',
    location: 'Bruxelles, Belgique',
    description:
      "Développeur frontend (React, Angular), d'abord en alternance puis en CDI. Développement de Gembaa, une plateforme de planification d'entreprise, et missions chez des clients bancaires.",
    icon: React.createElement(staizenLogo, { style: { borderRadius: '5px' } }),
    date: '2021 - 2024',
  },
  {
    title: 'Belfius',
    location: 'Bruxelles, Belgique',
    description: 'Refonte de pages web du site de la banque, avec un travail sur la performance.',
    icon: React.createElement(BelfiusLogo),
    date: '2022 - 2023',
  },
  {
    title: 'CIMB Bank',
    location: 'Bruxelles, Belgique',
    description:
      "Interfaces du portail en ligne (2021-2022), puis nouvelles fonctionnalités et optimisation de l'application mobile (2023-2024).",
    icon: React.createElement(CIMB_Logo),
    date: '2021 - 2024',
  },
] as const;

export type LinkType = string | (() => void);

export const projectsData = [
  {
    title: 'Restaurant Zaytoon',
    description:
      'Application de restauration complète : commande en ligne, réservation de tables, paiements, e-mails transactionnels et espace gérant. Conçue et développée seul, du front au back.',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Sass'],
    imageUrl: zaytoonImg,
    link: 'https://restaurant-zaytoon.vercel.app',
  },
  {
    title: '3rd Fade',
    description:
      "Site vitrine pour un vidéaste professionnel : portfolio vidéo et formulaire de contact. Livré à un client réel, développé avec l'aide de l'IA.",
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    imageUrl: thirdFadeImg,
    link: 'https://www.3rdfade.com',
  },
  {
    title: 'Moniteur de stock Seiko',
    description:
      "Agent IA autonome qui surveille le prix et la disponibilité d'une montre et m'alerte sur Telegram. Projet d'apprentissage pour maîtriser la création d'agents.",
    tags: ['Python', 'crewAI', 'GitHub Actions'],
    imageUrl: seikoImg,
    link: 'https://palm-steel-8a7.notion.site/Agent-IA-2e10f45d211080d98fb0c3e64967ca3e',
  },
  // {
  //   title: 'CarHub',
  //   description:
  //     'Une plateforme simple et rapide pour rechercher des véhicules par marque, modèle, année ou type de carburant. Parfait pour les garages ou vendeurs automobiles souhaitant moderniser leur catalogue.',
  //   tags: ['Next.js', 'TypeScript', 'Tailwind'],
  //   imageUrl: carhubImg,
  //   link: 'https://carhubpro.vercel.app',
  // },
  // {
  //   title: '🦸 Marvel Quiz',
  //   description:
  //     'Un quiz interactif sur l’univers Marvel. Il permet aux fans de tester leurs connaissances, de progresser par niveaux et de sauvegarder leur score. Un bon exemple d’application ludique avec système de connexion sécurisé.',
  //   tags: ['React', 'CSS3', 'Redux', 'Firebase'],
  //   imageUrl: marvelImg,
  //   link: 'https://marvel-quiz-d7f65.firebaseapp.com',
  // },
] as const;

export const skillsByCategory = [
  {
    title: 'Création de sites & applications web',
    benefit: 'Interfaces modernes, rapides et accessibles.',
    items: [
      { label: 'HTML', icon: SiHtml5 },
      { label: 'CSS', icon: SiCss3 },
      { label: 'JavaScript', icon: SiJavascript },
      { label: 'TypeScript', icon: SiTypescript },
      { label: 'React', icon: SiReact },
      { label: 'Next.js', icon: SiNextdotjs },
      { label: 'Angular', icon: SiAngular },
      { label: 'Tailwind', icon: SiTailwindcss },
      { label: 'Sass', icon: SiSass },
    ],
  },
  {
    title: 'Paiements en ligne & gestion des données',
    benefit: 'Logique métier fiable, gestion des données et sécurité de votre site.',
    items: [
      { label: 'PHP', icon: SiPhp },
      { label: 'Node.js', icon: SiNodedotjs },
      { label: 'Express', icon: SiExpress },
      { label: 'Java', icon: FaJava },
      { label: 'PostgreSQL', icon: SiPostgresql },
      { label: 'MySQL', icon: SiMysql },
      { label: 'MongoDB', icon: SiMongodb },
      { label: 'Firebase', icon: SiFirebase },
      { label: 'Stripe', icon: SiStripe },
    ],
  },
  {
    title: 'Qualité & tests',
    benefit: 'Moins de bugs, déploiements sereins.',
    items: [
      { label: 'Jest', icon: SiJest },
      { label: 'React Testing Library', icon: SiTestinglibrary },
    ],
  },
  {
    title: 'Design & outils',
    benefit: 'Maquettes claires et collaboration fluide.',
    items: [
      { label: 'Figma', icon: SiFigma },
      { label: 'Adobe XD', icon: SiAdobexd },
      { label: 'Git', icon: SiGit },
    ],
  },
] as const;

// export const skillsData = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'TypeScript',
//   'React',
//   'Angular',
//   'Node.js',
//   'Next.js',
//   'PHP',
//   'Git',
//   'Tailwind',
//   'Sass',
//   'MongoDB',
//   'MySQL',
//   'Firebase',
//   'Redux',
//   'Express',
//   'Framer Motion',
//   'CMS',
//   'Jest',
//   'React Testing Library',
//   'Figma',
//   'Adobe XD',
// ] as const;
