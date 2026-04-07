'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import profilePhoto from '@/IMG_6025.jpg';

export function Hero() {
  return (
    <section className="relative px-4 pb-12 pt-32 sm:px-6 sm:pb-16 sm:pt-40">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mb-4 text-sm font-medium tracking-wide text-zinc-500"
            >
              Backend Developer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl sm:leading-[1.08]"
            >
              Irish Prajapati
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl"
            >
              I build backends that are simple to run: clear APIs, reliable data
              models, and measurable performance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 rounded-xl border border-zinc-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-sm dark:border-white/[0.06] dark:bg-surface-card/70 dark:shadow-card sm:p-5"
            >
              <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-[15px]">
                Reduced query latency by{' '}
                <span className="font-mono text-zinc-900 dark:text-zinc-100">80%</span>{' '}
                with
                indexing + query optimization.
              </p>
              <p className="mt-3 font-mono text-xs text-zinc-500 sm:text-sm">
                Python · FastAPI · PostgreSQL
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[280px] lg:mx-0 lg:ml-auto"
          >
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-white/[0.1] dark:bg-white/[0.02] dark:shadow-card">
              <Image
                src={profilePhoto}
                alt="Irish Prajapati"
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.14),transparent_60%)] blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
