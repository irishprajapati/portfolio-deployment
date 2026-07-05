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
      className="scroll-mt-24 border-t border-white/10 px-6 py-16 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-content">
        <FadeIn>
          <p className="font-inter text-xs uppercase tracking-widest text-white/50">
            Workflow
          </p>
          <h2 className="mt-2 font-podium text-3xl uppercase tracking-tight text-white sm:text-4xl">
            How I build
          </h2>
        </FadeIn>
        <Stagger className="mt-10 flex flex-col gap-4">
          {items.map((text) => (
            <StaggerItem key={text}>
              <div className="border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.08] sm:p-6">
                <p className="font-inter text-sm leading-relaxed text-white/70">
                  {text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
