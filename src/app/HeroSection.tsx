"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  HeroCompositionSwitcher,
  type EventsVersionId,
  type VariantId,
} from "./HeroCompositionSwitcher";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { navItems } from "./weddingData";

type HeroSectionProps = {
  heroVariant: VariantId;
  eventsVersion: EventsVersionId;
  onHeroVariantChange: (variant: VariantId) => void;
  onEventsVersionChange: (version: EventsVersionId) => void;
};

export function HeroSection({
  heroVariant,
  eventsVersion,
  onHeroVariantChange,
  onEventsVersionChange,
}: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <section className="relative min-h-[100svh] overflow-x-hidden bg-[#f8f3ea]">
      <div aria-hidden="true" className="paper-grain pointer-events-none absolute inset-0 opacity-35" />

      <a
        href="#"
        aria-label="Wedding homepage"
        className="absolute left-3 top-2 z-40 block h-12 w-20 transition-transform duration-300 active:scale-[0.97] sm:hidden"
      >
        <Image
          alt="Rajshree and Deepesh monogram"
          className="object-contain object-left"
          fill
          priority
          sizes="80px"
          src="/graphics/rd-monogram-transparent-v1.png"
        />
      </a>

      <motion.button
        type="button"
        aria-controls="site-menu"
        aria-expanded={isMenuOpen}
        aria-label="Open site navigation"
        className="absolute right-3 top-3 z-40 inline-flex min-h-11 min-w-11 items-center justify-center text-[#fff8ef] [filter:drop-shadow(0_2px_8px_rgba(45,20,13,0.55))] sm:hidden"
        onClick={() => setIsMenuOpen(true)}
        initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
      >
        <span className="flex w-6 flex-col gap-1.5" aria-hidden="true">
          <span className="h-px w-6 bg-current" />
          <span className="h-px w-4 self-end bg-current" />
        </span>
      </motion.button>

      <motion.nav
        aria-label="Primary navigation"
        className="absolute inset-x-0 top-0 z-40 hidden items-center justify-between gap-8 px-8 py-6 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#fff8ef] [text-shadow:0_2px_8px_rgba(45,20,13,0.62)] sm:flex lg:px-12"
        initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
      >
        <a
          href="#"
          aria-label="Wedding homepage"
          className="relative block h-14 w-24 transition-transform duration-300 hover:scale-[1.03]"
        >
          <Image
            alt="Rajshree and Deepesh monogram"
            className="object-contain object-left"
            fill
            priority
            sizes="96px"
            src="/graphics/rd-monogram-transparent-v1.png"
          />
        </a>
        <div className="flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="border-b border-transparent pb-1 transition-colors duration-300 hover:border-current hover:text-[#e9bd74]"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#rsvp"
          className="inline-flex min-h-11 items-center border-b border-[#fff8ef]/70 pb-0.5 transition-[border-color,color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#e9bd74] hover:text-[#e9bd74] active:translate-y-0"
        >
          RSVP
        </a>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-[100] text-[#fff8ef]"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.26, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <button
              type="button"
              aria-label="Close site navigation"
              className="absolute inset-0 cursor-default bg-[#21130f]/10"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.aside
              className="relative ml-auto flex min-h-[100dvh] w-[min(76vw,21rem)] overflow-y-auto border-l border-[#fff8ef]/20 bg-[#321b12]/52 text-[#fff8ef] shadow-[-18px_0_48px_rgba(31,16,11,0.16)] backdrop-blur-sm"
              initial={shouldReduceMotion ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.26, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <div aria-hidden="true" className="paper-grain pointer-events-none absolute inset-0 opacity-15" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(123,58,42,0.2),transparent_42%,rgba(23,13,9,0.15))]" />

              <motion.button
                type="button"
                autoFocus
                aria-label="Close site navigation"
                className="absolute right-3 top-3 z-10 inline-flex min-h-11 min-w-11 items-center justify-center border border-[#fff8ef]/30 text-[#fff8ef] transition-colors duration-200 hover:border-[#e9bd74] hover:text-[#e9bd74] sm:right-6 sm:top-5"
                onClick={() => setIsMenuOpen(false)}
                initial={shouldReduceMotion ? false : { opacity: 0, rotate: -20 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.12, duration: 0.24 }}
              >
                <span className="relative block h-5 w-5" aria-hidden="true">
                  <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 -rotate-45 bg-current" />
                </span>
              </motion.button>

              <nav className="relative flex min-h-[100dvh] w-full flex-col justify-center px-7 py-24 sm:px-12">
                <p className="mb-8 text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[#e9bd74] sm:mb-11">
                  Rajshree &amp; Deepesh
                </p>
                <div className="flex flex-col items-start gap-5 sm:gap-7">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="group inline-flex items-baseline gap-3 font-serif text-[clamp(3.2rem,10vw,5.5rem)] leading-[0.87] tracking-normal text-[#fff8ef] transition-colors duration-300 hover:text-[#e9bd74] focus-visible:text-[#e9bd74] focus-visible:outline-none"
                      onClick={() => setIsMenuOpen(false)}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: shouldReduceMotion ? 0 : 0.1 + index * 0.08, duration: 0.42, ease: "easeOut" }}
                    >
                      <span className="text-[0.62rem] font-sans font-semibold tracking-[0.16em] text-[#e9bd74]/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                        0{index + 1}
                      </span>
                      {item}
                    </motion.a>
                  ))}
                </div>
                <p className="mt-12 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#fff8ef]/60 sm:mt-16">
                  3 &amp; 4 Dec 2026 · Kolkata, India
                </p>
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
      <HeroCompositionSwitcher
        activeVariant={heroVariant}
        eventsVersion={eventsVersion}
        onHeroVariantChange={onHeroVariantChange}
        onEventsVersionChange={onEventsVersionChange}
      />
    </section>
  );
}
