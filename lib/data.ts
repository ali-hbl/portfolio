import thirdFadeImg from '@/public/3rd-Fade.png';
import seikoImg from '@/public/seiko.png';
import zaytoonImg from '@/public/zaytoon.png';
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { DiMongodb } from 'react-icons/di';
import { FaAngular, FaFigma, FaGitAlt, FaJava, FaNodeJs, FaPhp, FaReact, FaSass, FaStripe } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { IoLogoFirebase } from 'react-icons/io5';
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
import { TbBrandNextjs } from 'react-icons/tb';
import BelfiusLogo from '../public/BelfiusLogo.svg';
import CIMB_Logo from '../public/CIMB_Logo.svg';
import staizenLogo from '../public/staizenLogo.svg';

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
    company: 'Staizen',
    companyLink: 'https://www.staizen.com/',
    location: 'Bruxelles, Belgique',
    role: "Développeur frontend (React, Angular), d'abord en alternance puis en CDI.",
    date: '2021 - 2024',
    icon: staizenLogo,
    items: [
      {
        type: 'mission' as const,
        client: 'CIMB Bank',
        clientLink: 'https://apps.apple.com/us/app/cgscimb-cfd/id1619308199',
        date: '2021 - 2022',
        description: 'Interfaces du portail en ligne.',
        icon: CIMB_Logo,
      },
      {
        type: 'mission' as const,
        client: 'Belfius',
        clientLink: 'https://www.belfius.be/site/retail/fr/produits/paiement/banque-en-ligne/belfius-direct-net',
        date: '2022 - 2023',
        description: 'Refonte de pages web, avec un travail sur la performance.',
        icon: BelfiusLogo,
      },
      {
        type: 'projet interne' as const,
        client: 'Gembaa',
        clientLink: 'https://www.gembaa.com/',
        date: '2023 - 2024',
        description: "Plateforme de planification d'entreprise — mon dernier projet chez Staizen.",
        icon: staizenLogo,
      },
    ],
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
      'Site vitrine pour un vidéaste professionnel : portfolio vidéo et formulaire de contact. Livré à un client réel.',
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

export const skillsByTier = [
  {
    tier: 'core' as const,
    title: 'Au quotidien',
    items: [
      { label: 'React', icon: FaReact },
      { label: 'Next.js', icon: TbBrandNextjs },
      { label: 'TypeScript', icon: BiLogoTypescript },
      { label: 'Node', icon: FaNodeJs },
      { label: 'Tailwind', icon: SiTailwindcss },
      { label: 'Angular', icon: FaAngular },
      { label: 'MySQL', icon: GrMysql },
      { label: 'Git', icon: FaGitAlt },
      { label: 'Figma', icon: FaFigma },
    ],
  },
  {
    tier: 'also' as const,
    title: 'Déjà utilisé',
    items: [
      { label: 'Sass', icon: FaSass },
      { label: 'PHP', icon: FaPhp },
      { label: 'Express', icon: SiExpress },
      { label: 'Java', icon: FaJava },
      { label: 'PostgreSQL', icon: BiLogoPostgresql },
      { label: 'MongoDB', icon: DiMongodb },
      { label: 'Firebase', icon: IoLogoFirebase },
      { label: 'Stripe', icon: FaStripe },
      { label: 'Jest', icon: SiJest },
      { label: 'React Testing Library', icon: SiTestinglibrary },
      // { label: 'Adobe XD', icon: SiAdobexd },
    ],
  },
] as const;
