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
      className="scroll-mt-24 border-t border-white/10 px-6 py-16 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-content">
        <FadeIn>
          <p className="font-inter text-xs uppercase tracking-widest text-white/50">
            Experience
          </p>
          <div className="mt-8 border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-inter text-lg font-semibold text-white">
                  Backend Developer Intern
                </h3>
                <p className="mt-1 font-inter text-white/60">
                  Smart Saauzi Solutions Pvt. Ltd.
                </p>
              </div>
              <p className="mt-2 font-mono text-sm text-white/40 sm:mt-0">
                Aug 2025 – Nov 2025
              </p>
            </div>
            <ul className="mt-6 space-y-2.5 font-inter text-sm text-white/65">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40"
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
