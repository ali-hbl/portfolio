'use client';

import { useSectionInView } from '@/hooks/useSectionInView';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function About() {
  const { ref } = useSectionInView('À propos');

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>
        <span className="normal-case">Créons ensemble votre présence en ligne</span>
      </SectionHeading>

      <div className="space-y-6">
        <p>
          <span className="font-medium">Un site web sur mesure, qui travaille pour vous.</span>
        </p>

        <p>
          Je conçois des sites <span className="font-medium">professionnels</span>,
          <span className="font-medium"> optimisés pour les moteurs de recherche</span> et
          <span className="font-medium"> simples à administrer</span>. Idéal pour les{' '}
          <span className="font-medium">entrepreneurs</span>,<span className="font-medium"> artisans</span>,
          <span className="font-medium"> restaurateurs</span> ou
          <span className="font-medium"> associations</span> qui veulent passer au digital, simplement.
        </p>

        <p>
          <span className="font-medium">
            Réservation en ligne, prise de rendez-vous, catalogue de produits, menus interactifs, paiement sécurisé,
            formulaire de contact, intégration réseaux sociaux… tout est possible.
          </span>
        </p>

        <p>
          <span className="italic">Et quand je déconnecte</span>,{' '}
          <a
            href="https://www.instagram.com/ally.guitar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-300"
          >
            je me perds dans ma guitare
          </a>
          , j’explore la musique, j’enfile les gants de boxe ou je dévore une bonne série.
        </p>
      </div>
    </motion.section>
  );
}
