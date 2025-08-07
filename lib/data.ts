import carhubImg from '@/public/carhub.png';
import marvelImg from '@/public/marvel.png';
import zaytoonImg from '@/public/zaytoon.png';
import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import BelfiusLogo from '../public/BelfiusLogo.svg';
import CIMB_Logo from '../public/CIMB_Logo.svg';
import staizenLogo from '../public/staizenLogo.svg';
// import BelfiusLogoWhite from '../public/BelfiusLogoWhite.svg';
// import { FaReact } from 'react-icons/fa';
// import { SiAngular } from 'react-icons/si';

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

export const experiencesData = [
  {
    title: 'Graduated Front-end Engineer',
    location: 'Brussels, Belgium',
    description:
      'I graduated after 3 years of study, including 2 years on a work-study basis. Following this work-study program, I immediately found a job as a software engineer.',
    icon: React.createElement(LuGraduationCap),
    date: '2020 - 2023',
  },
  {
    title: 'Front-end Engineer (CGS-CIMB Bank - CFD)',
    location: 'Brussels, Belgium',
    description:
      'I worked as a front-end developer for 1 year at this bank. I designed and built components for the portal and developed unit tests to ensure functionality using React, TypeScript, and Jest.',
    icon: React.createElement(CIMB_Logo),
    date: '2021 - 2022',
  },
  {
    title: 'Front-end Engineer/Webmaster (Belfius)',
    location: 'Brussels, Belgium',
    description:
      "I worked as both a front-end developer and webmaster at Belfius, one of Belgium's largest banks. I utilized various tools, including Angular, Dexie.js, SDL Tridion CMS, Figma, and Photoshop, to develop programs and create pages for the bank.",
    icon: React.createElement(BelfiusLogo),
    // icon: React.createElement(BelfiusLogoWhite),
    date: '2022 - 2023',
  },
  ,
  {
    title: 'Front-end Engineer (CGS-CIMB Bank - ProsperUs)',
    location: 'Brussels, Belgium',
    description:
      'I led feature development, ensured app performance, resolved conflicts, updated server versions, and managed the mobile app for a seamless user experience using React, TypeScript, and Android Studio.',
    icon: React.createElement(CIMB_Logo),
    date: '2023 - 2024',
  },
  {
    title: 'Front-end Engineer (Gembaa - Staizen internal project)',
    location: 'Brussels, Belgium',
    description:
      'I designed and built components for this internal tool whose purpose is to be sold to potential customers.',
    icon: React.createElement(staizenLogo, { style: { borderRadius: '5px' } }),
    date: '2023 - 2024',
  },
] as const;

export type LinkType = string | (() => void);

export const projectsData = [
  {
    title: '🥘 Restaurant Zaytoon',
    description:
      'Une application conçue pour les restaurants : commandes en ligne, réservations de table, paiements, emails personnalisés, et un espace privé pour les gérants. Idéal pour améliorer l’expérience client et simplifier la gestion au quotidien.',
    tags: ['React', 'Node.js', 'Sass', 'Express', 'MySQL'],
    imageUrl: zaytoonImg,
    link: 'https://restaurant-zaytoon.vercel.app',
  },
  {
    title: '🦸 Marvel Quiz',
    description:
      'Un quiz interactif sur l’univers Marvel. Il permet aux fans de tester leurs connaissances, de progresser par niveaux et de sauvegarder leur score. Un bon exemple d’application ludique avec système de connexion sécurisé.',
    tags: ['React', 'CSS3', 'Redux', 'Firebase'],
    imageUrl: marvelImg,
    link: 'https://marvel-quiz-d7f65.firebaseapp.com',
  },
  {
    title: '🚗 CarHub',
    description:
      'Une plateforme simple et rapide pour rechercher des véhicules par marque, modèle, année ou type de carburant. Parfait pour les garages ou vendeurs automobiles souhaitant moderniser leur catalogue.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    imageUrl: carhubImg,
    link: 'https://carhubpro.vercel.app',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'Node.js',
  'Next.js',
  'PHP',
  'Git',
  'Tailwind',
  'Sass',
  'MongoDB',
  'MySQL',
  'Firebase',
  'Redux',
  'Express',
  'Framer Motion',
  'CMS',
  'Jest',
  'React Testing Library',
  'Figma',
  'Adobe XD',
] as const;
