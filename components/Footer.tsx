const links = [
  { label: 'Email', href: 'mailto:contact@aely.dev', external: false },
  { label: 'GitHub', href: 'https://github.com/ali-hbl', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ali-haboula', external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/ally.guitar', external: true },
];

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center">
      <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-gray-400/50 to-transparent" />

      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-white/50">
        {links.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="transition hover:text-gray-900 dark:hover:text-white"
          >
            {label}
          </a>
        ))}
      </nav>

      <p className="mt-4 text-xs text-gray-400 dark:text-white/40">© {new Date().getFullYear()} Ali</p>
    </footer>
  );
}
