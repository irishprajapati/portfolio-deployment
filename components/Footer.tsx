export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 px-4 py-10 sm:px-6 dark:border-white/[0.06]">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Irish Prajapati</p>
        <p className="font-mono text-xs">Built with Next.js · Tailwind · Framer Motion</p>
      </div>
    </footer>
  );
}
