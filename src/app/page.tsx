"use client";

import { useState } from "react";

import { CountdownSection } from "./CountdownSection";
import { OurJourneySection } from "./OurJourneySection";
import { EventsSection } from "./EventsSection";
import { GatheringSection } from "./GatheringSection";
import { HeroSection } from "./HeroSection";
import type { EventsVersionId, VariantId } from "./HeroCompositionSwitcher";
import { RsvpSection } from "./RsvpSection";
import { SaveTheDateSection } from "./SaveTheDateSection";
import { StorySection } from "./StorySection";

export default function Home() {
  const [heroVariant, setHeroVariant] = useState<VariantId>("overlap");
  const [eventsVersion, setEventsVersion] = useState<EventsVersionId>("v3");

  return (
    <main className="min-h-screen overflow-x-clip bg-[#fff4e1] text-[#321b12]">
      <HeroSection
        heroVariant={heroVariant}
        eventsVersion={eventsVersion}
        onHeroVariantChange={setHeroVariant}
        onEventsVersionChange={setEventsVersion}
      />
      <CountdownSection />
      <GatheringSection />
      <StorySection />
      <OurJourneySection />
      <EventsSection version={eventsVersion} />
      <SaveTheDateSection />
      <RsvpSection />
      <footer className="bg-[#f1e7da] px-5 pb-10 pt-1 text-center sm:px-8 sm:pb-12">
        <p className="font-serif text-base italic text-[#7a4b42] sm:text-lg">
          <span className="block">
            Made with <span aria-label="love">❤️</span>
          </span>
          <span className="block">by Deepesh &amp; Rajshree</span>
        </p>
      </footer>
    </main>
  );
}
