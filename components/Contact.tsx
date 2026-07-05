'use client';

import type React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { FadeIn } from './motion';
import { HERO, SITE } from '@/lib/content';

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const linkClassName =
  'inline-flex h-10 items-center gap-2.5 border border-white/20 px-4 font-inter text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-black';

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/10 px-6 py-16 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-content">
        <FadeIn>
          <p className="font-inter text-xs uppercase tracking-widest text-white/50">
            Connect
          </p>
          <h2 className="mt-2 font-podium text-3xl uppercase tracking-tight text-white sm:text-4xl">
            Inquire
          </h2>
          <p className="mt-3 max-w-xl font-inter text-sm text-white/60 sm:text-base">
            Open to backend roles (Python/FastAPI/PostgreSQL) and Java/Spring
            Boot opportunities. The fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${SITE.email}`}
              aria-label={`Email ${SITE.email}`}
              className={linkClassName}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-white/10">
                <Mail className="h-3.5 w-3.5" strokeWidth={1.75} />
              </span>
              {SITE.email}
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className={linkClassName}
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className={linkClassName}
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <a
            href={`mailto:${SITE.email}`}
            className="group mt-10 inline-flex items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition hover:border-white/60 hover:bg-white/10"
          >
            {HERO.touchCta}
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
