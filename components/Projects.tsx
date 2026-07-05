'use client';

import type React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, Stagger, StaggerItem } from './motion';

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M14 3h7v7" />
      <path d="M10 14L21 3" />
      <path d="M21 14v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h7" />
    </svg>
  );
}

const projects = [
  {
    title: 'Project Management API',
    points: [
      'Multi-tenant system with RBAC',
      'Optimized query (280ms → 45ms)',
      'Clean service-based architecture',
    ],
    stack: 'FastAPI, PostgreSQL, SQLAlchemy, JWT',
    github: 'https://github.com/irishprajapati/Project-Management-System',
    live: 'https://project-management-system-ln1h.onrender.com/swagger/',
  },
  {
    title: 'Library Management API',
    points: [
      'Transaction-safe borrow/return system',
      'Enforced rules and constraints',
      'OpenAPI documentation',
    ],
    stack: 'FastAPI, PostgreSQL',
    github: 'https://github.com/Erishprajapati/LibraryAPI-Creatio',
    live: 'https://libraryapi-creatio-1.onrender.com',
  },
  {
    title: 'E-Commerce API',
    points: [
      'Idempotent order handling',
      'Transaction-safe stock updates',
      'Strong validation with Pydantic',
    ],
    stack: 'FastAPI, PostgreSQL',
    github: 'https://github.com/irishprajapati/Ecommerce',
    live: 'https://ecommerce-5ti5.onrender.com/docs',
  },
  {
    title: 'Hospital Management System',
    points: [
      'Structured relational models',
      'Token-based auth',
      'Data integrity with constraints',
    ],
    stack: 'FastAPI, PostgreSQL',
    github: 'https://github.com/Erishprajapati/hospital-management-system1',
    live:
      'https://hospital-management-system1-o63yod5j9-erishprajatis-projects.vercel.app/api/v1/login_view',
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-white/10 px-6 py-16 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-content">
        <FadeIn>
          <p className="font-inter text-xs uppercase tracking-widest text-white/50">
            Projects
          </p>
          <h2 className="mt-2 font-podium text-3xl uppercase tracking-tight text-white sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-3 max-w-2xl font-inter text-sm text-white/60 sm:text-base">
            Clean APIs, solid data models, and performance you can measure.
          </p>
        </FadeIn>
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <StaggerItem key={p.title}>
              <motion.article
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="group h-full border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-white/25 hover:bg-white/[0.08]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-inter text-lg font-semibold tracking-tight text-white">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${p.title} on GitHub`}
                      className="inline-flex h-9 w-9 items-center justify-center border border-white/15 text-white transition hover:border-white hover:bg-white hover:text-black"
                    >
                      <GitHubIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live demo for ${p.title}`}
                      className="inline-flex h-9 w-9 items-center justify-center border border-white/15 text-white transition hover:border-white hover:bg-white hover:text-black"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 font-inter text-sm text-white/60">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40"
                        aria-hidden
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-white/10 pt-4 font-mono text-xs text-white/40">
                  {p.stack}
                </p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
