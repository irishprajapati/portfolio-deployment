'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
];

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93 6.34 6.34" />
      <path d="M17.66 17.66 19.07 19.07" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 19.07 6.34 17.66" />
      <path d="M17.66 6.34 19.07 4.93" />
    </svg>
  );
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 12.6A8.5 8.5 0 1 1 11.4 3 6.5 6.5 0 0 0 21 12.6Z" />
    </svg>
  );
}

export function SiteNav() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl dark:border-white/[0.06] dark:bg-surface/80"
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center px-4 sm:px-6">
        <a
          href="#"
          className="text-sm font-medium tracking-tight text-zinc-900 transition hover:text-black dark:text-zinc-100 dark:hover:text-white"
        >
          Irish Prajapati
        </a>

        <div className="ml-auto flex items-center gap-2 pr-1 sm:pr-2">
          <nav className="hidden items-center gap-6 sm:flex" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-800 shadow-sm transition hover:bg-zinc-50 dark:border-white/[0.12] dark:bg-white/[0.06] dark:text-zinc-200 dark:hover:bg-white/[0.1] sm:text-sm"
          >
            Get in touch
          </a>
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() =>
              setTheme((mounted ? resolvedTheme : 'dark') === 'dark' ? 'light' : 'dark')
            }
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50 dark:border-white/[0.12] dark:bg-white/[0.06] dark:text-zinc-200 dark:hover:bg-white/[0.1]"
          >
            {mounted && resolvedTheme === 'dark' ? (
              <SunIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
