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
        className={`${inter.className} relative min-h-screen overflow-x-hidden bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden will-change-transform [backface-visibility:hidden]"
        >
          <div className="absolute right-[11rem] top-[-6rem] h-[31.25rem] w-[31.25rem] transform-gpu rounded-full bg-[#fbe2e3] blur-[10rem] will-change-transform [backface-visibility:hidden] dark:bg-[#946263] sm:w-[68.75rem]" />
          <div className="absolute left-[-35rem] top-[-1rem] hidden h-[31.25rem] w-[50rem] transform-gpu rounded-full bg-[#dbd7fb] blur-[10rem] will-change-transform [backface-visibility:hidden] dark:bg-[#676394] sm:block sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
        </div>

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
