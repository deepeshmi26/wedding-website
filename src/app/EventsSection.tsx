"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { EventsCardVariants } from "./EventsCardVariants";
import type { EventsVersionId } from "./HeroCompositionSwitcher";
import { events } from "./weddingData";

function EventsSectionHeader({
  isRoyalClassicEvents = false,
}: {
  isRoyalClassicEvents?: boolean;
}) {
  const useRoyalPalette = isRoyalClassicEvents;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto max-w-6xl pt-10"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.45 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {isRoyalClassicEvents ? (
        <>
          <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 overflow-visible">
            <Image src="/graphics/alpona-watermark-v1.png" alt="" width={1254} height={1254} className="h-auto w-[13rem] rotate-[-10deg] opacity-[0.28] mix-blend-screen sm:w-[14rem] lg:w-[15rem]" sizes="(max-width: 640px) 13rem, (max-width: 1024px) 14rem, 15rem" />
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 overflow-visible">
            <Image src="/graphics/alpona-watermark-v1.png" alt="" width={1254} height={1254} className="h-auto w-[13rem] rotate-[10deg] opacity-[0.28] mix-blend-screen sm:w-[14rem] lg:w-[15rem]" sizes="(max-width: 640px) 13rem, (max-width: 1024px) 14rem, 15rem" />
          </div>
        </>
      ) : null}
      <div className="relative mx-auto max-w-3xl text-center">
        <p className={`text-[0.72rem] font-semibold uppercase tracking-[0.32em] ${useRoyalPalette ? "text-[#f0c67d]" : "text-[#b86622]"}`}>
          Come celebrate with us in
        </p>
        <h2 className={`mt-4 font-serif text-5xl leading-[0.92] sm:text-6xl ${useRoyalPalette ? "text-[#fff8ef]" : "text-[#8f1830]"}`}>
          the <span className={useRoyalPalette ? "text-[#f0c67d]" : "text-[#b01838]"}>City of Joy</span>.
        </h2>
      </div>
    </motion.div>
  );
}

function EventsSectionDivider({
  isRoyalClassicEvents = false,
}: {
  isRoyalClassicEvents?: boolean;
}) {
  if (!isRoyalClassicEvents) {
    return null;
  }

  return (
    <div className="pointer-events-none mx-auto mt-6 flex items-center justify-center md:mt-7">
      <div className="h-px w-16 bg-[#d69b52]/75" />
      <Image src="/graphics/alpona-watermark-v1.png" alt="" width={1254} height={1254} className="mx-4 h-auto w-24 opacity-[0.22] mix-blend-screen md:w-28" sizes="(max-width: 768px) 6rem, 7rem" />
      <div className="h-px w-16 bg-[#d69b52]/75" />
    </div>
  );
}

export function EventsSection({ version }: { version: EventsVersionId }) {
  const isRoyalClassicEvents = version === "v3";

  return (
    <section
      id="events"
      className={`relative ${isRoyalClassicEvents ? "text-[#fff8ef]" : "overflow-visible text-[#321b12]"}`}
      style={{
        backgroundImage: isRoyalClassicEvents
          ? "url('/graphics/events-block-print-background-v1.png')"
          : "radial-gradient(circle at 18% 16%, rgba(176,24,56,0.16), transparent 28%), radial-gradient(circle at 84% 18%, rgba(240,167,47,0.18), transparent 24%), radial-gradient(circle at 78% 82%, rgba(143,24,48,0.1), transparent 28%), linear-gradient(135deg, #f6d8b1 0%, #f7e6cf 48%, #f1cfa3 100%)",
        backgroundAttachment: "scroll",
        backgroundPosition: "center, center, center",
        backgroundRepeat: isRoyalClassicEvents ? "repeat-y" : "no-repeat, no-repeat, no-repeat",
        backgroundSize: isRoyalClassicEvents ? "100% auto" : "cover, cover, cover",
      }}
    >
      <div className="relative z-10 pb-20 lg:pb-24">
        {isRoyalClassicEvents ? (
          <div className="px-5 pt-0 md:pt-20 lg:pt-24">
            <div className="z-20 pb-6 md:pt-4 lg:pt-6">
              <EventsSectionHeader isRoyalClassicEvents />
              <EventsSectionDivider isRoyalClassicEvents />
            </div>
            <div className="relative left-1/2 w-screen -translate-x-1/2 pt-4 md:pt-8 lg:pt-8">
              <EventsCardVariants events={events} version={version} />
            </div>
          </div>
        ) : (
          <div className="z-20 px-5 pt-0 md:pt-20 lg:pt-24">
            <div className="top-0 -mx-5 px-5 pb-6 md:pt-4 lg:pt-6">
              <EventsSectionHeader />
            </div>
            <div className="mx-auto max-w-6xl md:mt-8 lg:mt-8">
              <EventsCardVariants events={events} version={version} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
