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
      className="scroll-mt-24 border-t border-white/10 px-6 py-16 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-content">
        <FadeIn>
          <p className="font-inter text-xs uppercase tracking-widest text-white/50">
            Knowledge
          </p>
          <h2 className="mt-2 font-podium text-3xl uppercase tracking-tight text-white sm:text-4xl">
            Tech stack
          </h2>
        </FadeIn>
        <Stagger className="mt-10 grid gap-6 sm:grid-cols-3">
          {groups.map((g) => (
            <StaggerItem key={g.title}>
              <div className="border border-white/10 bg-white/5 p-6">
                <h3 className="font-inter text-xs font-semibold uppercase tracking-wider text-white/50">
                  {g.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="border border-white/15 px-3 py-1 font-inter text-xs font-medium text-white/80"
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
