'use client';

import { FadeIn } from './motion';

const bullets = [
  'Defined and documented functional + non-functional requirements for a Project Management (PM) system.',
  'Built secure RESTful APIs and implemented role-based permission controls aligned with workflows.',
  'Owned database architecture and server-side logic, ensuring smooth integration with the frontend.',
  'Wrote automation scripts to improve testing, deployment, and reliability. Increased dev efficiency.',
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-zinc-200/70 px-4 py-16 sm:px-6 sm:py-20 dark:border-white/[0.06]"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            Experience
          </h2>
          <div className="mt-8 rounded-2xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm sm:p-8 dark:border-white/[0.06] dark:bg-surface-card/50 dark:shadow-card">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  Backend Developer Intern
                </h3>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                  Smart Saauzi Solutions Pvt. Ltd.
                </p>
              </div>
              <p className="mt-2 font-mono text-sm text-zinc-500 sm:mt-0">
                Aug 2025 – Nov 2025
              </p>
            </div>
            <ul className="mt-6 space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600"
                    aria-hidden
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
