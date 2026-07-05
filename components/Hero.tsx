'use client';

import { useState } from 'react';
import { ArrowUpRight, Award, Crown, X } from 'lucide-react';
import { HERO, NAV_LINKS, SITE, VIDEO_URL } from '@/lib/content';

function NavTouchLink({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#contact"
      onClick={onClick}
      className="group inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-xs font-medium uppercase tracking-widest text-white transition hover:border-white/60 hover:bg-white/10"
    >
      {HERO.touchCta}
      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <header className="relative z-20 px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl"
          >
            {SITE.brand}
          </a>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-inter text-sm uppercase tracking-widest text-white/80 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <NavTouchLink />
          </div>

          <button
            type="button"
            className="flex flex-col space-y-1.5 md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-4 bg-white" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <div className="flex h-full flex-col px-6 py-5 sm:px-10">
          <div className="flex items-center justify-between">
            <span className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl">
              {SITE.brand}
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-6">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="font-podium text-4xl uppercase text-white transition sm:text-5xl"
                style={{
                  transitionDelay: `${i * 80 + 100}ms`,
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transitionProperty: 'opacity, transform',
                  transitionDuration: '500ms',
                }}
              >
                {link.label}
              </a>
            ))}

            <div
              className="mt-4"
              style={{
                transitionDelay: `${NAV_LINKS.length * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transitionProperty: 'opacity, transform',
                transitionDuration: '500ms',
              }}
            >
              <NavTouchLink onClick={closeMenu} />
            </div>
          </nav>
        </div>
      </div>

      <div className="relative z-10 flex h-[calc(100vh-88px)] flex-col justify-center px-6 sm:px-10 lg:px-16 lg:h-[calc(100vh-108px)]">
        <div className="animate-fade-up mb-6 flex items-center gap-2 lg:mb-8">
          <Crown className="h-4 w-4 text-white/70" aria-hidden="true" />
          <p className="font-inter text-xs uppercase tracking-[0.3em] text-white/70 sm:text-sm">
            {HERO.tagline}
          </p>
        </div>

        <h1 className="animate-fade-up-delay-1 font-podium uppercase leading-[0.92] tracking-tight text-white">
          {HERO.lines.map((line) => (
            <span
              key={line}
              className="block text-[clamp(2.8rem,8vw,7rem)]"
            >
              {line}
            </span>
          ))}
        </h1>

        <p className="animate-fade-up-delay-2 mt-6 max-w-md font-inter text-sm leading-relaxed text-white/70 sm:text-base lg:mt-8">
          {HERO.subtextLead}
          <br />
          that don&apos;t just work —{' '}
          <span className="font-semibold text-white">{HERO.subtextBold}</span>
        </p>

        <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4 sm:gap-6 lg:mt-10">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-black px-5 py-3 font-inter text-[11px] uppercase tracking-widest text-white transition hover:bg-neutral-900 sm:px-7 sm:py-4 sm:text-xs"
          >
            {HERO.cta}
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="hidden items-center gap-3 sm:flex">
            <Award className="h-8 w-8 text-white/50" aria-hidden="true" />
            <div>
              <p className="font-inter text-xs uppercase tracking-wider text-white/60">
                {HERO.award.title}
              </p>
              <p className="font-inter text-xs uppercase tracking-wider text-white/60">
                {HERO.award.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="animate-fade-up-delay-4 mt-8 flex flex-wrap gap-6 sm:mt-10 sm:gap-12 lg:mt-14 lg:gap-16">
          {HERO.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-inter text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 font-inter text-[9px] uppercase tracking-widest text-white/50 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
