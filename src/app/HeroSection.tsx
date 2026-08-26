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
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#f8f3ea] px-5 py-6 sm:px-8 lg:px-12">
      <div aria-hidden="true" className="paper-grain pointer-events-none absolute inset-0 opacity-35" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(248,243,234,0.78))]" />

      <motion.nav
        className="relative z-30 flex items-center justify-between gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#704b4c]"
        initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
      >
        <a href="#" aria-label="Wedding homepage" className="font-serif text-[1.35rem] normal-case tracking-normal text-[#842b45]">
          R &amp; D
        </a>
        <div className="hidden items-center gap-7 sm:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors duration-300 hover:text-[#842b45]">
              {item}
            </a>
          ))}
        </div>
        <a
          href="#rsvp"
          className="rounded-full border border-[#842b45]/20 bg-[#842b45] px-4 py-2 text-[#fff9f0] shadow-[0_8px_18px_rgba(100,34,56,0.16)] transition-[background,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#642238] hover:shadow-[0_12px_24px_rgba(100,34,56,0.18)] active:translate-y-0"
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
