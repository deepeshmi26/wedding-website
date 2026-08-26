"use client";

import {
  HeroCompositionSwitcher,
  type EventsVersionId,
  type VariantId,
} from "./HeroCompositionSwitcher";
import { motion, useReducedMotion } from "motion/react";
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

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#f8f3ea]">
      <div aria-hidden="true" className="paper-grain pointer-events-none absolute inset-0 opacity-35" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-20 h-12 bg-[linear-gradient(180deg,rgba(249,235,219,0.74),rgba(249,235,219,0))] backdrop-blur-[2px] sm:h-32 sm:bg-[linear-gradient(180deg,rgba(248,243,234,0.88),rgba(248,243,234,0))] sm:backdrop-blur-none" />

      <motion.nav
        className="absolute inset-x-0 top-0 z-30 flex items-center justify-between gap-4 px-5 py-0 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#704b4c] sm:px-8 sm:py-6 lg:px-12"
        initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
      >
        <a href="#" aria-label="Wedding homepage" className="font-serif text-[1.45rem] normal-case tracking-[0.04em] text-[#842b45]">
          R &amp; D
        </a>
        <div className="hidden items-center gap-7 sm:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="border-b border-transparent pb-1 transition-colors duration-300 hover:border-current hover:text-[#842b45]">
              {item}
            </a>
          ))}
        </div>
        <a
          href="#rsvp"
          className="inline-flex min-h-11 items-center border-b border-[#842b45]/70 pb-0.5 text-[#842b45] transition-[border-color,color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#642238] hover:text-[#642238] active:translate-y-0"
        >
          RSVP
        </a>
      </motion.nav>
      <HeroCompositionSwitcher
        activeVariant={heroVariant}
        eventsVersion={eventsVersion}
        onHeroVariantChange={onHeroVariantChange}
        onEventsVersionChange={onEventsVersionChange}
      />
    </section>
  );
}
