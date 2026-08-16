"use client";

import Image from "next/image";
import { useState } from "react";

import { EventsCardVariants } from "./EventsCardVariants";
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

const navItems = ["Story", "Events", "Travel", "RSVP"];

const storyPhotos = {
  closeCouple: "/photos/rav03380.jpg",
  handsDetail: "/photos/rav03383.jpg",
  classicCouple: "/photos/rav03150.jpg",
};

export default function Home() {
  const [heroVariant, setHeroVariant] = useState<VariantId>("overlap");
  const [eventsVersion, setEventsVersion] = useState<EventsVersionId>("v1");
  const isPostcardEvents = eventsVersion === "v1";

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
              <span>Rajshree & Deepesh</span>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-[#f0a72f] sm:block" />
              <span>3 & 4 Dec 2026</span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="events"
        className={`relative overflow-visible ${isPostcardEvents ? "min-h-[180vh] text-[#fff8ef]" : "text-[#321b12]"
          }`}
        style={{
          backgroundImage: isPostcardEvents
            ? "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0) 28%, rgba(0,0,0,0.08) 100%), linear-gradient(145deg, #9d2140 0%, #8f1830 28%, #781229 62%, #691123 100%)"
            : "radial-gradient(circle at 18% 16%, rgba(176,24,56,0.16), transparent 28%), radial-gradient(circle at 84% 18%, rgba(240,167,47,0.18), transparent 24%), radial-gradient(circle at 78% 82%, rgba(143,24,48,0.1), transparent 28%), linear-gradient(135deg, #f6d8b1 0%, #f7e6cf 48%, #f1cfa3 100%)",
          backgroundAttachment: isPostcardEvents
            ? "fixed, fixed"
            : "scroll, scroll, scroll",
          backgroundPosition: "center, center, center",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
          backgroundSize: isPostcardEvents
            ? "cover, cover"
            : "cover, cover, cover",
        }}
      >
        <div className="relative z-10">
          <div className="pb-20 lg:pb-24">
            <div className="relative mb-10 lg:mb-14">
              {isPostcardEvents ? (
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
                      className="block h-auto w-[15rem] rotate-[-10deg] opacity-[0.18] mix-blend-screen sm:w-[18rem]"
                      sizes="(max-width: 640px) 15rem, 18rem"
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
                      className="block h-auto w-[15rem] rotate-[10deg] opacity-[0.18] mix-blend-screen sm:w-[18rem]"
                      sizes="(max-width: 640px) 15rem, 18rem"
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 flex -translate-y-1/2 justify-center"
                  >
                    <div className="flex items-center justify-center gap-6 lg:gap-8 xl:gap-10">
                      <Image
                        src="/graphics/alpona-watermark-v1.png"
                        alt=""
                        width={1254}
                        height={1254}
                        className="hidden h-auto w-[9rem] opacity-[0.14] mix-blend-screen 2xl:block"
                        sizes="9rem"
                      />
                      <Image
                        src="/graphics/alpona-watermark-v1.png"
                        alt=""
                        width={1254}
                        height={1254}
                        className="hidden h-auto w-[9rem] opacity-[0.14] mix-blend-screen xl:block"
                        sizes="9rem"
                      />
                      <Image
                        src="/graphics/alpona-watermark-v1.png"
                        alt=""
                        width={1254}
                        height={1254}
                        className="hidden h-auto w-[9rem] opacity-[0.14] mix-blend-screen lg:block"
                        sizes="9rem"
                      />
                      <Image
                        src="/graphics/alpona-watermark-v1.png"
                        alt=""
                        width={1254}
                        height={1254}
                        className="block h-auto w-[9rem] opacity-[0.14] mix-blend-screen lg:w-[9rem]"
                        sizes="9rem"
                      />
                      <Image
                        src="/graphics/alpona-watermark-v1.png"
                        alt=""
                        width={1254}
                        height={1254}
                        className="hidden h-auto w-[9rem] opacity-[0.14] mix-blend-screen lg:block"
                        sizes="9rem"
                      />
                      <Image
                        src="/graphics/alpona-watermark-v1.png"
                        alt=""
                        width={1254}
                        height={1254}
                        className="hidden h-auto w-[9rem] opacity-[0.14] mix-blend-screen xl:block"
                        sizes="9rem"
                      />
                      <Image
                        src="/graphics/alpona-watermark-v1.png"
                        alt=""
                        width={1254}
                        height={1254}
                        className="hidden h-auto w-[9rem] opacity-[0.14] mix-blend-screen 2xl:block"
                        sizes="9rem"
                      />
                    </div>
                  </div>
                </>
              ) : null}
            </div>

            <div className="relative z-10 px-5 pt-20 lg:pt-24">
              <div className="mx-auto mb-12 max-w-6xl lg:mb-14">
                <div className="mx-auto max-w-3xl text-center">
                  <h2
                    className={`font-serif text-5xl leading-none sm:text-6xl ${
                      isPostcardEvents ? "text-[#fff8ef]" : "text-[#8f1830]"
                    }`}
                  >
                    Music, color, vows, and Kolkata.
                  </h2>
                </div>
              </div>
              <div className="mx-auto max-w-6xl">
                <EventsCardVariants events={events} version={eventsVersion} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="travel" className="border-y border-[#d69b52]/35 bg-[#f7dfbd] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.35em] text-[#8f1830]">
              Travel
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight">Come for the vows, stay for Kolkata.</h2>
          </div>
          <p className="text-lg leading-8 text-[#633628] md:col-span-2">
            Practical sections need calmer design. This area can hold hotels,
            airport notes, dress code, and transport without competing with the
            emotional hero.
          </p>
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
            <div className="relative w-full max-w-4xl">
              <div
                aria-hidden="true"
                className="absolute inset-6 rounded-[1.6rem] bg-[radial-gradient(circle_at_50%_40%,rgba(120,74,40,0.14),transparent_70%)] blur-2xl"
              />
              <div
                className="relative rotate-[-3deg] overflow-hidden rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(249,239,220,0.98),rgba(238,220,190,0.98))] px-7 py-8 shadow-[0_28px_55px_rgba(101,61,35,0.18)] sm:px-9"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-[1.6rem] opacity-[0.13] mix-blend-multiply bg-[radial-gradient(circle_at_18%_22%,rgba(134,96,56,0.34)_0_0.6px,transparent_0.7px),radial-gradient(circle_at_74%_18%,rgba(158,116,68,0.28)_0_0.55px,transparent_0.7px),radial-gradient(circle_at_32%_76%,rgba(120,84,44,0.22)_0_0.5px,transparent_0.65px),radial-gradient(circle_at_82%_70%,rgba(150,112,69,0.24)_0_0.6px,transparent_0.72px)] [background-size:18px_18px,22px_22px,20px_20px,24px_24px]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-[14px] rounded-[1.2rem] border border-[#d8b27d]/55"
                />
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-8 h-[1px] w-[calc(100%-4.5rem)] -translate-x-1/2 bg-[#d6b488]/55"
                />
                <div
                  aria-hidden="true"
                  className="absolute right-8 top-14 h-24 w-24 rounded-[1rem] border border-dashed border-[#c8965f]/70"
                />
                <div
                  aria-hidden="true"
                  className="absolute right-3 top-6 h-40 w-40 rotate-[10deg] opacity-[0.22] mix-blend-darken"
                >
                  <Image
                    src="/graphics/postmark-raster.png"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute right-8 top-[11rem] h-px w-28 bg-[#d6b488]/65"
                />
                <div
                  aria-hidden="true"
                  className="absolute right-8 top-[13rem] h-px w-28 bg-[#d6b488]/55"
                />
                <div
                  aria-hidden="true"
                  className="absolute right-8 top-[15rem] h-px w-28 bg-[#d6b488]/45"
                />
                <div className="relative z-10 min-h-[24rem] pt-8 sm:min-h-[20rem]">
                  <div className="max-w-[18rem] sm:max-w-[20rem]">
                    <p className="font-serif text-[1.72rem] leading-[1.22] text-[#5e3324] sm:text-[1.9rem]">
                      Save us a yes for the wedding weekend.
                    </p>
                    <p className="mt-4 max-w-[15rem] text-[0.98rem] leading-7 text-[#6b4334]">
                      Send us your reply when you are ready. We cannot wait to celebrate with you in Kolkata.
                    </p>
                    <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#a3633d]">
                      Rajshree & Deepesh
                    </p>
                  </div>

                  <div className="absolute bottom-0 right-0 flex items-center gap-3 sm:right-4">
                    <button
                      type="button"
                      onClick={() => {
                        console.log("Versions button clicked");
                      }}
                    >
                      Versions
                    </button>

                    <a
                      href="#"
                      className="group inline-flex rotate-[1.5deg] items-center rounded-[0.8rem] bg-[#8f1830] p-[2px] text-left shadow-[0_12px_22px_rgba(84,30,33,0.16)] transition hover:-translate-y-0.5 hover:rotate-0"
                    >
                      <span className="flex items-center gap-2 rounded-[0.7rem] bg-[#fff5e9] px-3 py-2 text-[#4b2418] shadow-[inset_0_0_0_1px_rgba(184,126,71,0.24)]">
                        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#321b12] text-xs font-bold text-[#fff8ef] transition group-hover:bg-[#8f1830]">
                          &gt;
                        </span>
                        <span className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#4b2418]">
                          RSVP
                        </span>
                      </span>
                    </a>
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
