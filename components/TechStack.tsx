'use client';

import { FadeIn, Stagger, StaggerItem } from './motion';

const groups = [
  {
    title: 'Backend',
    items: ['FastAPI', 'Django', 'Spring Boot', 'REST APIs', 'JWT'],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'SQLAlchemy', 'Schema design', 'Indexing'],
  },
  {
    title: 'Languages & tools',
    items: ['Python', 'Java', 'Docker', 'Git', 'GitHub', 'Postman'],
  },
];

export function TechStack() {
  return (
    <section
      id="stack"
      className="scroll-mt-24 border-t border-zinc-200/70 px-4 py-16 sm:px-6 sm:py-20 dark:border-white/[0.06]"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            Tech stack
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
            A focused stack
          </p>
        </FadeIn>
        <Stagger className="mt-10 grid gap-6 sm:grid-cols-3">
          {groups.map((g) => (
            <StaggerItem key={g.title}>
              <div className="rounded-2xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm dark:border-white/[0.06] dark:bg-surface-card/40 dark:shadow-card">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {g.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
