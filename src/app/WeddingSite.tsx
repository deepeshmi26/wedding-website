"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { CountdownSection } from "./CountdownSection";
import { BackgroundMusicProvider } from "./BackgroundMusic";
import { OurJourneySection } from "./OurJourneySection";
import { EventsSection } from "./EventsSection";
import { GatheringSection } from "./GatheringSection";
import { HeroSection } from "./HeroSection";
import type { EventsVersionId, VariantId } from "./HeroCompositionSwitcher";
import { RsvpSection } from "./RsvpSection";
import { SaveTheDateSection } from "./SaveTheDateSection";
import { StaySection } from "./StaySection";
import { StorySection } from "./StorySection";

export default function WeddingSite() {
  const [heroVariant, setHeroVariant] = useState<VariantId>("overlap");
  const [eventsVersion, setEventsVersion] = useState<EventsVersionId>("v3");
  const locale = useLocale();
  const t = useTranslations();

  return (
    <BackgroundMusicProvider>
      <main lang={locale} className="min-h-screen overflow-x-clip bg-[#fff4e1] text-[#321b12]">
        <HeroSection heroVariant={heroVariant} eventsVersion={eventsVersion} onHeroVariantChange={setHeroVariant} onEventsVersionChange={setEventsVersion} />
        <CountdownSection />
        <GatheringSection />
        <StorySection />
        <OurJourneySection />
        <EventsSection version={eventsVersion} />
        <SaveTheDateSection />
        <StaySection />
        <RsvpSection />
        <footer className="bg-[#f1e7da] px-5 pb-10 pt-1 text-center sm:px-8 sm:pb-12">
          <p className="font-serif text-base italic text-[#7a4b42] sm:text-lg">
            <span className="block">{t("footer.madeWith")} <span aria-label={t("accessibility.love")}>❤️</span></span>
            <span className="block">{t("footer.by")}</span>
          </p>
        </footer>
      </main>
    </BackgroundMusicProvider>
  );
}
