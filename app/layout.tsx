import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ThemeSwitch from '@/components/ThemeSwitch';
import ActiveSectionContextProvider from '@/context/ActiveSectionContext';
import ThemeContextProvider from '@/context/ThemeContext';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ali | Développeur freelance — Création de sites web modernes',
  description:
    'Conception de sites vitrines, boutiques en ligne et applications web modernes. Développeur freelance spécialisé en sites performants et bien référencés.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
<html lang="fr" className="!scroll-smooth">
  <body
    className={`${inter.className} relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
  >
    {/* Blob droit */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full
                 bg-[#fbe2e3] opacity-70 blur-none sm:opacity-100 sm:blur-[10rem] sm:w-[68.75rem]
                 transform-gpu will-change-transform dark:bg-[#946263]"
    ></div>

    {/* Blob gauche */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full
                 bg-[#dbd7fb] opacity-70 blur-none sm:opacity-100 sm:blur-[10rem] sm:w-[68.75rem]
                 md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
                 transform-gpu will-change-transform dark:bg-[#676394]"
    ></div>

    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <Header />
        {children}
        <Footer />
        <Toaster position="top-right" />
        <ThemeSwitch />
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  </body>
</html>

  );
}
