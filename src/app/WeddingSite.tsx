"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

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
  const [isRsvpBannerVisible, setIsRsvpBannerVisible] = useState(true);
  const locale = useLocale();
  const t = useTranslations();

  return (
    <BackgroundMusicProvider>
      <main lang={locale} className="min-h-screen overflow-x-clip bg-[#fff4e1] text-[#321b12]">
        {isRsvpBannerVisible && (
          <div className="border-b border-[#d8a64b]/60 bg-[#f3ddd4] text-[#641329]">
            <div className="mx-auto flex max-w-7xl items-center gap-2 px-3 py-1 sm:justify-center sm:px-8">
              <p className="min-w-0 flex-1 text-[0.68rem] font-medium leading-4 sm:flex-none sm:text-center sm:text-xs">{t("rsvp.banner")}</p>
              <a
                href="#rsvp"
                className="inline-flex shrink-0 items-center gap-1 rounded-sm bg-[#641329] px-2 py-1 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-[#fff4e1] transition-colors hover:bg-[#842b45] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#641329]"
              >
                {t("common.rsvp")}
                <ArrowUpRight aria-hidden="true" size={12} strokeWidth={2.2} />
              </a>
              <button
                type="button"
                aria-label={t("rsvp.dismiss")}
                onClick={() => setIsRsvpBannerVisible(false)}
                className="inline-flex size-6 shrink-0 items-center justify-center rounded-sm text-[#641329]/75 transition-colors hover:bg-[#641329]/10 hover:text-[#641329] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#641329]"
              >
                <X aria-hidden="true" size={14} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        )}
        <HeroSection heroVariant={heroVariant} eventsVersion={eventsVersion} onHeroVariantChange={setHeroVariant} onEventsVersionChange={setEventsVersion} />
        <CountdownSection />
        <GatheringSection />
        <StorySection />
        <OurJourneySection />
        <EventsSection version={eventsVersion} />
        <RsvpSection />
        <StaySection />
        <SaveTheDateSection />
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
