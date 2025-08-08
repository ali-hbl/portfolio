'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  // Thème par défaut = "dark"
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
      document.documentElement.classList.toggle('dark', localTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      // Si l'utilisateur préfère explicitement le clair, on applique "light"
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      // Sinon on garde le dark par défaut
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }

  return context;
}
