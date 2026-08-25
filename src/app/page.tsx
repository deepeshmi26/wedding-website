"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

import { CountdownDisplay } from "./Countdown";
import { EventsCardVariants } from "./EventsCardVariants";
import { GatheringMessage } from "./GatheringMessage";
import {
  HeroCompositionSwitcher,
  type EventsVersionId,
  type VariantId,
} from "./HeroCompositionSwitcher";

const events = [
  {
    name: "Sangeet",
    date: "3 December",
    time: "7:00 PM",
    place: "Peerlese Nagar, Sodepur, Kolkata",
    mapUrl: "https://maps.app.goo.gl/DbBByduhva9tPuuaA",
    landmarkImage: "/graphics/howrah-bridge-night-card.jpg",
    landmarkAlt: "Howrah Bridge at night in Kolkata",
    landmarkWidth: 960,
    landmarkHeight: 466,
    landmarkClassName: "w-[84%]",
    washImage: "/graphics/howrah-bridge-sunset-wash.jpeg",
    washImageAlt: "Howrah Bridge at sunset over the river",
    dressCodeColors: ["#7f1d3f", "#d66b43", "#f1b24f", "#4a2c35"],
  },
  {
    name: "Haldi",
    date: "4 December",
    time: "7:00 AM",
    place: "Shrishti Garden, Jessore Rd, Kolkata",
    mapUrl: "https://maps.app.goo.gl/ur6KqC3tBMqw4i7NA",
    landmarkImage: "/graphics/victoria-memorial-card.jpg",
    landmarkAlt: "Victoria Memorial in Kolkata",
    landmarkWidth: 960,
    landmarkHeight: 472,
    washImage: "/graphics/kolkata-tram-wash.webp",
    washImageAlt: "Kolkata tram on a rainy street",
    dressCodeColors: ["#f1be3d", "#f5d97a", "#8a9d6f", "#fff4d6"],
  },
  {
    name: "Wedding",
    date: "4 December",
    time: "5:45 PM",
    place: "Shrishti Garden, Jessore Rd, Kolkata",
    mapUrl: "https://maps.app.goo.gl/ur6KqC3tBMqw4i7NA",
    landmarkImage: "/graphics/belur-math-card.jpg",
    landmarkAlt: "Belur Math near Kolkata",
    landmarkWidth: 960,
    landmarkHeight: 380,
    washImage: "/graphics/dakshineswar-temple-wash.jpg",
    washImageAlt: "Dakshineswar Kali Temple in Kolkata",
    dressCodeColors: ["#b31e3f", "#d6a64a", "#f5e7c7", "#6b3b34"],
  },
];

const navItems = ["Story", "Events", "RSVP"];

const storyPhotos = {
  closeCouple: "/photos/rav03380.jpg",
  handsDetail: "/photos/rav03383.jpg",
  classicCouple: "/photos/rav03150.jpg",
};

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
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 overflow-visible"
          >
            <Image
              src="/graphics/alpona-watermark-v1.png"
              alt=""
              width={1254}
              height={1254}
              className="h-auto w-[10rem] rotate-[-10deg] opacity-[0.28] mix-blend-screen sm:w-[11rem] lg:w-[12rem]"
              sizes="(max-width: 640px) 10rem, (max-width: 1024px) 11rem, 12rem"
            />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 overflow-visible"
          >
            <Image
              src="/graphics/alpona-watermark-v1.png"
              alt=""
              width={1254}
              height={1254}
              className="h-auto w-[10rem] rotate-[10deg] opacity-[0.28] mix-blend-screen sm:w-[11rem] lg:w-[12rem]"
              sizes="(max-width: 640px) 10rem, (max-width: 1024px) 11rem, 12rem"
            />
          </div>
        </>
      ) : null}
      <div className="relative mx-auto max-w-3xl text-center">
        <p
          className={`text-[0.72rem] font-semibold uppercase tracking-[0.32em] ${useRoyalPalette ? "text-[#f0c67d]" : "text-[#b86622]"
            }`}
        >
          Come celebrate with us in
        </p>
        <h2
          className={`mt-4 font-serif text-5xl leading-[0.92] sm:text-6xl ${useRoyalPalette ? "text-[#fff8ef]" : "text-[#8f1830]"
            }`}
        >
          the{" "}
          <span className={useRoyalPalette ? "text-[#f0c67d]" : "text-[#b01838]"}>
            City of Joy
          </span>
          .
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
      <Image
        src="/graphics/alpona-watermark-v1.png"
        alt=""
        width={1254}
        height={1254}
        className="mx-4 h-auto w-24 opacity-[0.22] mix-blend-screen md:w-28"
        sizes="(max-width: 768px) 6rem, 7rem"
      />
      <div className="h-px w-16 bg-[#d69b52]/75" />
    </div>
  );
}

export default function Home() {
  const [heroVariant, setHeroVariant] = useState<VariantId>("overlap");
  const [eventsVersion, setEventsVersion] = useState<EventsVersionId>("v3");
  const isRoyalClassicEvents = eventsVersion === "v3";

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fff4e1] text-[#321b12]">
      <section className="relative flex min-h-screen flex-col px-5 py-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(240,167,47,0.32),transparent_30%),radial-gradient(circle_at_84%_14%,rgba(211,63,115,0.18),transparent_28%),radial-gradient(circle_at_74%_78%,rgba(228,93,60,0.17),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.64),rgba(255,244,225,0.7))]" />
        <div aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute left-[8%] top-[16%] h-24 w-24 rounded-full bg-[#f0a72f]/10 blur-2xl" />
          <div className="absolute right-[10%] top-[22%] h-28 w-28 rounded-full bg-[#d23f73]/10 blur-2xl" />
        </div>

        <nav className="relative z-10 flex items-center justify-between gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#774231]">
          <a href="#" aria-label="Wedding homepage" className="font-serif text-xl normal-case tracking-normal text-[#b01838]">
            R & D
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
          onHeroVariantChange={setHeroVariant}
          onEventsVersionChange={setEventsVersion}
        />
      </section>
      <section
        aria-labelledby="gathering-heading"
        className="relative min-h-[100dvh] overflow-hidden bg-[#fff4e1] px-5 py-6 sm:px-8 sm:py-8 lg:px-12"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 w-[min(100vw,64rem)] opacity-75"
        >
          <Image
            src="/graphics/music-floral-frame-v1.png"
            alt=""
            width={1024}
            height={1536}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-3rem)] max-w-3xl items-start justify-center pt-16 text-center sm:min-h-[calc(100dvh-4rem)] sm:items-center sm:pt-0">
          <div className="flex w-full flex-col items-center gap-8 sm:gap-10">
            <div className="flex w-full justify-center">
              <CountdownDisplay />
            </div>
            <div className="ml-auto flex min-h-[17rem] w-[calc(100%-4.5rem)] items-center justify-center sm:ml-0 sm:min-h-[15rem] sm:w-full">
              <GatheringMessage />
            </div>
          </div>
        </div>
      </section>
      <section id="story" className="relative px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="relative mx-auto h-[520px] w-full max-w-[520px] sm:h-[620px] lg:mx-0 lg:max-w-none">
            <div className="absolute left-0 top-0 z-10 h-[76%] w-[78%] overflow-hidden rounded-[1.15rem] bg-[#fff8ef] p-2 shadow-[0_22px_60px_rgba(99,54,40,0.16)]">
              <div className="relative h-full overflow-hidden rounded-[0.85rem]">
                <Image
                  alt="Rajshree and Deepesh smiling close together"
                  className="object-cover object-[48%_48%]"
                  fill
                  quality={88}
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 410px, 520px"
                  src={storyPhotos.closeCouple}
                />
              </div>
            </div>

            <div className="absolute bottom-[9%] right-[1%] z-30 h-[32%] w-[44%] rotate-[1.5deg] overflow-hidden rounded-[1rem] bg-[#fff8ef] p-2 shadow-[0_18px_48px_rgba(176,24,56,0.16)]">
              <div className="relative h-full overflow-hidden rounded-[0.75rem]">
                <Image
                  alt="Rajshree and Deepesh showing their rings"
                  className="object-cover object-[50%_60%]"
                  fill
                  quality={88}
                  sizes="(max-width: 640px) 44vw, (max-width: 1024px) 230px, 290px"
                  src={storyPhotos.handsDetail}
                />
              </div>
            </div>

            <div className="absolute bottom-[1%] left-[11%] z-20 h-[22%] w-[34%] -rotate-[1.5deg] overflow-hidden rounded-[0.9rem] bg-[#fff8ef] p-2 shadow-[0_14px_38px_rgba(99,54,40,0.13)]">
              <div className="relative h-full overflow-hidden rounded-[0.65rem]">
                <Image
                  alt="Rajshree and Deepesh looking at each other"
                  className="object-cover object-[50%_54%]"
                  fill
                  quality={82}
                  sizes="(max-width: 640px) 34vw, (max-width: 1024px) 180px, 225px"
                  src={storyPhotos.classicCouple}
                />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.35em] text-[#b86622]">
              Our story
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.98] text-[#321b12] sm:text-6xl">
              A few favorite frames, shared with our favorite people.
            </h2>
            <p className="mt-8 text-lg leading-8 text-[#633628]">
              Here are a few pieces of us before the celebrations begin: quiet
              smiles, small details, and the people who have seen us become who
              we are together. We cannot wait to gather with you.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#8f1830] sm:flex-row sm:justify-center sm:gap-5 lg:justify-start">
              <span>Rajshree &amp; Deepesh</span>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-[#f0a72f] sm:block" />
              <span>3 &amp; 4 Dec 2026</span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="events"
        className={`relative ${
          isRoyalClassicEvents ? "text-[#fff8ef]" : "overflow-visible text-[#321b12]"
        }`}
        style={{
          backgroundImage: isRoyalClassicEvents
            ? "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0) 28%, rgba(0,0,0,0.08) 100%), linear-gradient(145deg, #9d2140 0%, #8f1830 28%, #781229 62%, #691123 100%)"
            : "radial-gradient(circle at 18% 16%, rgba(176,24,56,0.16), transparent 28%), radial-gradient(circle at 84% 18%, rgba(240,167,47,0.18), transparent 24%), radial-gradient(circle at 78% 82%, rgba(143,24,48,0.1), transparent 28%), linear-gradient(135deg, #f6d8b1 0%, #f7e6cf 48%, #f1cfa3 100%)",
          backgroundAttachment: isRoyalClassicEvents
            ? "fixed, fixed"
            : "scroll, scroll, scroll",
          backgroundPosition: "center, center, center",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
          backgroundSize: isRoyalClassicEvents
            ? "cover, cover"
            : "cover, cover, cover",
        }}
      >
        <div className={`relative z-10 ${isRoyalClassicEvents ? "pb-20 lg:pb-24" : "pb-20 lg:pb-24"}`}>
          {isRoyalClassicEvents ? (
            <div className="px-5 pt-0 md:pt-20 lg:pt-24">
              <div className="z-20 pb-6 md:pt-4 lg:pt-6">
                <EventsSectionHeader isRoyalClassicEvents />
                <EventsSectionDivider isRoyalClassicEvents />
              </div>
              <div className="mx-auto max-w-6xl pt-4 md:pt-8 lg:pt-8">
                <EventsCardVariants events={events} version={eventsVersion} />
              </div>
            </div>
          ) : (
            <div className="z-20 px-5 pt-0 md:pt-20 lg:pt-24">
              <div className="top-0 -mx-5 px-5 pb-6 md:pt-4 lg:pt-6">
                <EventsSectionHeader
                  isRoyalClassicEvents={isRoyalClassicEvents}
                />
                <EventsSectionDivider
                  isRoyalClassicEvents={isRoyalClassicEvents}
                />
              </div>
              <div className="mx-auto max-w-6xl md:mt-8 lg:mt-8">
                <EventsCardVariants events={events} version={eventsVersion} />
              </div>
            </div>
          )}
        </div>
      </section>
      <section
        id="rsvp"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#fbefdf_0%,#f5dfbc_100%)] px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(240,167,47,0.16),transparent_24%),radial-gradient(circle_at_84%_78%,rgba(176,24,56,0.08),transparent_26%)]"
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.35em] text-[#b86622]">
              RSVP
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="relative w-full max-w-5xl">
              <div
                aria-hidden="true"
                className="absolute inset-6 rounded-[1.6rem] bg-[radial-gradient(circle_at_50%_40%,rgba(120,74,40,0.14),transparent_70%)] blur-2xl"
              />
              <div
                className="relative rotate-[-1deg] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(249,239,220,0.98),rgba(238,220,190,0.98))] px-5 py-6 shadow-[0_28px_55px_rgba(101,61,35,0.18)] sm:px-8 sm:py-8 lg:rotate-[-2deg]"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-[1.6rem] opacity-[0.13] mix-blend-multiply bg-[radial-gradient(circle_at_18%_22%,rgba(134,96,56,0.34)_0_0.6px,transparent_0.7px),radial-gradient(circle_at_74%_18%,rgba(158,116,68,0.28)_0_0.55px,transparent_0.7px),radial-gradient(circle_at_32%_76%,rgba(120,84,44,0.22)_0_0.5px,transparent_0.65px),radial-gradient(circle_at_82%_70%,rgba(150,112,69,0.24)_0_0.6px,transparent_0.72px)] [background-size:18px_18px,22px_22px,20px_20px,24px_24px]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-[13px] rounded-[1rem] border border-[#d8b27d]/55"
                />
                <div className="relative z-10 grid gap-10 px-5 py-9 sm:px-8 sm:py-11 lg:grid-cols-[minmax(0,1.15fr)_minmax(14rem,0.85fr)] lg:gap-12 lg:px-12">
                  <div className="flex flex-col items-start">
                    <p className="font-serif text-[1.72rem] leading-[1.22] text-[#5e3324] sm:text-[1.9rem]">
                      Save us a yes for the wedding weekend.
                    </p>
                    <p className="mt-4 max-w-[18rem] text-[0.98rem] leading-7 text-[#6b4334]">
                      Send us your reply when you are ready. We cannot wait to celebrate with you in Kolkata.
                    </p>
                    <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#a3633d]">
                      Rajshree & Deepesh
                    </p>
                    <a
                      href="#"
                      className="group mt-8 inline-flex -rotate-[1deg] items-center rounded-[0.4rem] border-2 border-[#8f1830] bg-[#fff5e5] px-3 py-2.5 text-left shadow-[3px_4px_0_rgba(143,24,48,0.18)] transition hover:-translate-y-0.5 hover:rotate-0 hover:shadow-[4px_5px_0_rgba(143,24,48,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8f1830]"
                    >
                      <span className="border-r border-dashed border-[#b86622]/70 pr-2 text-base leading-none text-[#8f1830] transition group-hover:translate-x-0.5">
                        &rarr;
                      </span>
                      <span className="pl-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#6b3028]">
                        RSVP
                      </span>
                    </a>

                    <div className="mt-9 flex w-full items-center justify-between gap-4 border-t border-dashed border-[#c8965f]/55 pt-6 lg:hidden">
                      <div>
                        <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#a3633d]">
                          Kolkata, India
                        </p>
                        <p className="mt-1 font-serif text-[1.55rem] text-[#5e3324]">
                          3 &amp; 4 December
                        </p>
                      </div>
                      <div className="relative h-20 w-20 shrink-0 rotate-[8deg] opacity-55 mix-blend-multiply">
                        <Image
                          src="/graphics/postmark-raster.png"
                          alt=""
                          fill
                          className="object-contain"
                          sizes="80px"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="hidden border-l border-dashed border-[#c8965f]/55 pl-12 lg:block">
                    <div className="flex items-start justify-between gap-5 lg:block">
                      <div>
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#a3633d]">
                          Kolkata, India
                        </p>
                        <p className="mt-2 font-serif text-2xl text-[#5e3324]">
                          3 &amp; 4 December
                        </p>
                      </div>
                      <div className="relative h-24 w-24 shrink-0 rotate-[8deg] opacity-55 mix-blend-multiply sm:h-28 sm:w-28 lg:mt-8 lg:h-36 lg:w-36">
                        <Image
                          src="/graphics/postmark-raster.png"
                          alt=""
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 144px"
                        />
                      </div>
                    </div>
                    <div aria-hidden="true" className="mt-7 space-y-4 lg:mt-10">
                      <div className="h-px w-full bg-[#d6b488]/65" />
                      <div className="h-px w-[86%] bg-[#d6b488]/55" />
                      <div className="h-px w-[70%] bg-[#d6b488]/45" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
