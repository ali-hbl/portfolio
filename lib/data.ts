import carhubImg from '@/public/carhub.png';
import marvelImg from '@/public/marvel.png';
import zaytoonImg from '@/public/zaytoon.png';
import React from 'react';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { SiAngular } from 'react-icons/si';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
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
    icon: React.createElement(FaReact),
    date: '2021 - 2022',
  },
  {
    title: 'Front-end Engineer/Webmaster (Belfius)',
    location: 'Brussels, Belgium',
    description:
      "I worked as both a front-end developer and webmaster at Belfius, one of Belgium's largest banks. I utilized various tools, including Angular, Dexie.js, SDL Tridion CMS, Figma, and Photoshop, to develop programs and create pages for the bank.",
    icon: React.createElement(SiAngular),
    date: '2022 - 2023',
  },
  ,
  {
    title: 'Front-end Engineer (CGS-CIMB Bank - ProsperUs)',
    location: 'Brussels, Belgium',
    description:
      'I led feature development, ensured app performance, resolved conflicts, updated server versions, and managed the mobile app for a seamless user experience using React, TypeScript, and Android Studio.',
    icon: React.createElement(FaReact),
    date: '2023 - 2024',
  },
  {
    title: 'Front-end Engineer (Gembaa - Staizen internal project)',
    location: 'Brussels, Belgium',
    description:
      'I designed and built components for this internal tool whose purpose is to be sold to potential customers.',
    icon: React.createElement(FaReact),
    date: '2023 - 2024',
  },
] as const;

export type LinkType = string | (() => void);

export const projectsData = [
  {
    title: 'Restaurant Zaytoon',
    description:
      'A restaurant app for ordering, table booking, payments, and personalized emails, with a private dashboard for owners. It has features like filtering, sorting and pagination.',
    tags: ['React', 'Node.js', 'Sass', 'Express', 'MySQL'],
    imageUrl: zaytoonImg,
    link: 'https://restaurant-zaytoon.vercel.app',
  },
  {
    title: 'Marvel Quiz',
    description:
      'A Marvel quiz app that tests users knowledge about Marvel, calculates points, offers multiple levels based on scores, and allows sign-up/sign-in to access the quiz.',
    tags: ['React', 'CSS3', 'Redux', 'Firebase'],
    imageUrl: marvelImg,
    link: 'https://marvel-quiz-d7f65.firebaseapp.com',
  },
  {
    title: 'CarHub',
    description:
      'Navigate through a comprehensive catalog of cars, effortlessly filter by years and fuels, and easily search by model or manufacturer. Your go-to app for discovering the perfect ride!',
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
