"use client";

import {
  HeroCompositionSwitcher,
  type EventsVersionId,
  type VariantId,
} from "./HeroCompositionSwitcher";
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
  return (
    <section className="relative flex min-h-screen flex-col px-5 py-6 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(240,167,47,0.32),transparent_30%),radial-gradient(circle_at_84%_14%,rgba(211,63,115,0.18),transparent_28%),radial-gradient(circle_at_74%_78%,rgba(228,93,60,0.17),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.64),rgba(255,244,225,0.7))]" />
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute left-[8%] top-[16%] h-24 w-24 rounded-full bg-[#f0a72f]/10 blur-2xl" />
        <div className="absolute right-[10%] top-[22%] h-28 w-28 rounded-full bg-[#d23f73]/10 blur-2xl" />
      </div>

      <nav className="relative z-10 flex items-center justify-between gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#774231]">
        <a href="#" aria-label="Wedding homepage" className="font-serif text-xl normal-case tracking-normal text-[#b01838]">
          R &amp; D
        </a>
        <div className="hidden items-center gap-7 sm:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[#b01838]">
              {item}
            </a>
          ))}
        </div>
        <a
          href="#rsvp"
          className="rounded-full border border-[#b01838]/30 bg-[#b01838] px-4 py-2 text-[#fff8ef] shadow-[0_10px_24px_rgba(176,24,56,0.2)] transition hover:bg-[#8f1830]"
        >
          RSVP
        </a>
      </nav>
      <HeroCompositionSwitcher
        activeVariant={heroVariant}
        eventsVersion={eventsVersion}
        onHeroVariantChange={onHeroVariantChange}
        onEventsVersionChange={onEventsVersionChange}
      />
    </section>
  );
}
