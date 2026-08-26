"use client";

import { useState } from "react";

import { EventsSection } from "./EventsSection";
import { GatheringSection } from "./GatheringSection";
import { HeroSection } from "./HeroSection";
import type { EventsVersionId, VariantId } from "./HeroCompositionSwitcher";
import { RsvpSection } from "./RsvpSection";
import { StorySection } from "./StorySection";

export default function Home() {
  const [heroVariant, setHeroVariant] = useState<VariantId>("overlap");
  const [eventsVersion, setEventsVersion] = useState<EventsVersionId>("v3");

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fff4e1] text-[#321b12]">
      <HeroSection
        heroVariant={heroVariant}
        eventsVersion={eventsVersion}
        onHeroVariantChange={setHeroVariant}
        onEventsVersionChange={setEventsVersion}
      />
      <GatheringSection />
      <StorySection />
      <EventsSection version={eventsVersion} />
      <RsvpSection />
    </main>
  );
}
