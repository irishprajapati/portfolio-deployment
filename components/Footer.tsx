import { SITE } from '@/lib/content';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-4 font-inter text-sm text-white/40 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {SITE.name}</p>
        <p className="font-mono text-xs">Built with Next.js · Tailwind · Framer Motion</p>
      </div>
    </footer>
  );
}
