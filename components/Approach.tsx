'use client';

import { FadeIn, Stagger, StaggerItem } from './motion';

const items = [
  'Design APIs with simple, explicit contracts. Predictable behavior.',
  'Start with the data model. Schema drives everything.',
  'Keep business logic in service layers, not scattered across routes.',
  'Enforce integrity in the database (constraints > assumptions).',
];

export function Approach() {
  return (
    <section
      id="approach"
      className="scroll-mt-24 border-t border-zinc-200/70 px-4 py-16 sm:px-6 sm:py-20 dark:border-white/[0.06]"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            Engineering approach
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
            How I build
          </p>
        </FadeIn>
        <div className="relative mt-10">
          <div
            aria-hidden
            className="absolute left-3 top-1 bottom-1 w-px bg-gradient-to-b from-blue-500/40 via-zinc-200/80 to-violet-500/30 dark:via-white/[0.06]"
          />
          <Stagger className="flex flex-col gap-4">
            {items.map((text) => (
              <StaggerItem key={text}>
                <div className="group relative pl-10">
                  <span
                    aria-hidden
                    className="absolute left-[9px] top-6 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-blue-400/90 to-violet-400/80 shadow-[0_0_18px_rgba(99,102,241,0.45)]"
                  />
                  <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/70 px-5 py-5 shadow-sm transition hover:border-zinc-300 dark:border-white/[0.08] dark:bg-surface-card/40 dark:shadow-card dark:hover:border-white/[0.14]">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-24 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.24), transparent 55%), radial-gradient(circle at 80% 70%, rgba(139,92,246,0.16), transparent 60%)',
                      }}
                    />
                    <p className="relative text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
