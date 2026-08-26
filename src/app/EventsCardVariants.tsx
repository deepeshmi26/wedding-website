"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { EventsVersionId } from "./HeroCompositionSwitcher";

type EventCard = {
  name: string;
  date: string;
  time: string;
  place: string;
  mapUrl: string;
  washImage?: string;
  washImageAlt?: string;
  dressCodeColors?: string[];
};

type EventsCardVariantsProps = {
  events: EventCard[];
  version: EventsVersionId;
};

export function EventsCardVariants({
  events,
  version,
}: EventsCardVariantsProps) {
  const isRoyalClassic = version === "v3";
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative ${isRoyalClassic ? "" : "md:mt-14"}`}>
      {isRoyalClassic ? (
        <div className="flex flex-col gap-4 px-4 pb-4 md:gap-0 md:px-0 md:pb-0">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              className="relative overflow-hidden rounded-xl bg-[#64142b] shadow-[0_18px_34px_rgba(48,7,19,0.22)] md:rounded-none md:shadow-none"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
              transition={{
                duration: 0.46,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.22 }}
              whileInView={{ opacity: 1, y: 0 }}
              >
              <article className={`relative grid min-h-[38rem] md:min-h-[36rem] md:grid-cols-2 ${index % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="absolute inset-0 min-h-full overflow-hidden md:relative md:min-h-full">
                  {event.washImage ? (
                    <motion.div
                      className="absolute inset-0"
                      initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.08 }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.12 + 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      viewport={{ once: true, amount: 0.22 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                    >
                      <Image
                        src={event.washImage}
                        alt={event.washImageAlt ?? ""}
                        fill
                        className="scale-[1.03] object-cover object-center brightness-100 saturate-100 md:scale-100 md:brightness-[0.78] md:saturate-[0.82]"
                        sizes="(max-width: 767px) 100vw, 50vw"
                      />
                    </motion.div>
                  ) : null}
                  <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,8,14,0.12),rgba(28,8,14,0.3)),radial-gradient(circle_at_50%_48%,transparent,rgba(31,8,14,0.08))] md:bg-[linear-gradient(180deg,rgba(45,7,18,0.1),rgba(45,7,18,0.58)),linear-gradient(90deg,transparent,rgba(89,12,34,0.18))]" />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-4 border border-[#f4cf8d]/55 md:inset-5 md:border-[#f4cf8d]/45" />
                  <p className="absolute bottom-8 left-8 right-8 hidden font-serif text-2xl italic leading-tight text-[#fff6e7] [text-shadow:0_2px_18px_rgba(30,7,13,0.75)] md:block md:text-3xl">
                    Kolkata, held close.
                  </p>
                </div>

                <div className="relative flex items-center overflow-hidden bg-transparent px-6 py-10 sm:px-12 md:bg-[linear-gradient(145deg,#7d1d3b_0%,#58102a_100%)] md:px-14 lg:px-16">
                  <div aria-hidden="true" className="absolute inset-0 opacity-[0.09] [background-size:20px_20px,29px_29px] bg-[radial-gradient(circle_at_18%_22%,rgba(240,198,125,0.46)_0_0.6px,transparent_0.7px),radial-gradient(circle_at_76%_74%,rgba(255,248,239,0.22)_0_0.45px,transparent_0.65px)] md:opacity-[0.13]" />
                  <div aria-hidden="true" className="absolute bottom-0 left-0 top-0 hidden w-px bg-[linear-gradient(180deg,transparent,rgba(240,198,125,0.55),transparent)] md:block" />
                  <div className="relative w-full md:hidden">
                    <h3 className={`text-center font-serif leading-[0.85] text-[#fff8ef] [text-shadow:0_2px_18px_rgba(0,0,0,0.82)] ${event.name.length > 16 ? "text-4xl sm:text-5xl" : "text-5xl"}`}>
                      {event.name}
                    </h3>
                    <p className="mt-1 text-center font-serif text-3xl italic leading-none text-[#f0c67d] [text-shadow:0_0_18px_rgba(240,198,125,0.3)]">
                      Ceremony
                    </p>
                    <div className="mt-9">
                      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4">
                        <span className="justify-self-center font-serif text-[4.5rem] font-light leading-none tracking-wide text-[#fff8ef] [font-variant-numeric:lining-nums] [text-shadow:0_0_36px_rgba(240,198,125,0.3),0_2px_18px_rgba(0,0,0,0.88)]">
                          {event.date.split(" ")[0].padStart(2, "0")}
                        </span>
                        <span aria-hidden="true" className="h-12 w-px self-center bg-[#f0c67d]/55" />
                        <div className="justify-self-center text-center">
                          <p className="font-serif text-xl font-medium leading-none tracking-[0.2em] text-[#fff8ef]">
                            DECEMBER
                          </p>
                          <p className="mt-2 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#f0c67d]/80">2026</p>
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto my-6 flex w-44 items-center gap-3">
                      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#f0c67d]/45" />
                      <span aria-hidden="true" className="text-[0.58rem] tracking-[0.28em] text-[#f0c67d]/70">✦ ✦ ✦</span>
                      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#f0c67d]/45" />
                    </div>
                    <div className="text-center">
                      <p className="text-[0.55rem] font-semibold uppercase tracking-[0.45em] text-[#f0c67d]/55">Time</p>
                      <p className="mt-3 font-serif text-5xl font-light leading-none tracking-[0.12em] text-[#fff8ef] [font-variant-numeric:lining-nums] [text-shadow:0_0_36px_rgba(240,198,125,0.3),0_2px_18px_rgba(0,0,0,0.88)]">{event.time}</p>
                    </div>
                    <div className="mx-auto my-6 flex w-44 items-center gap-3">
                      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#f0c67d]/45" />
                      <span aria-hidden="true" className="text-[0.58rem] tracking-[0.28em] text-[#f0c67d]/70">✦ ✦ ✦</span>
                      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#f0c67d]/45" />
                    </div>
                    <div className="text-center">
                      <p className="text-[0.55rem] font-semibold uppercase tracking-[0.45em] text-[#f0c67d]/55">Venue</p>
                      <a href={event.mapUrl} target="_blank" rel="noreferrer" className="mt-3 block font-serif text-xl font-medium tracking-wide text-[#fff8ef] [text-shadow:0_0_20px_rgba(240,198,125,0.25)] transition hover:text-[#f0c67d]">
                        {event.place}
                      </a>
                    </div>
                    <a href={event.mapUrl} target="_blank" rel="noreferrer" className="mx-auto mt-7 flex w-fit border-b border-[#f0c67d]/35 pb-1 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-[#f0c67d]/80 transition hover:border-[#f0c67d] hover:text-[#f0c67d]">
                      Get directions &rarr;
                    </a>
                    {index < 2 && event.dressCodeColors?.length ? (
                      <>
                        <div className="mx-auto my-6 flex w-44 items-center gap-3">
                          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#f0c67d]/45" />
                          <span aria-hidden="true" className="text-[0.58rem] tracking-[0.28em] text-[#f0c67d]/70">✦ ✦ ✦</span>
                          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#f0c67d]/45" />
                        </div>
                        <div className="text-center">
                          <p className="text-[0.55rem] font-semibold uppercase tracking-[0.34em] text-[#f0c67d]/80">
                            Dress code
                          </p>
                          <div className="mt-3 flex items-center justify-center gap-3">
                            {event.dressCodeColors.map((color) => (
                              <span
                                key={color}
                                aria-label={`Suggested color ${color}`}
                                className="h-5 w-5 rounded-full border border-[#fff8ef]/65 shadow-[inset_0_0_0_1px_rgba(65,16,32,0.35)]"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                  <div className="relative hidden w-full md:block">
                    <div className="mt-6 h-px w-16 bg-[#f0c67d]/65" />
                    <div className="mt-8 flex items-center gap-5 sm:gap-7">
                      <span aria-hidden="true" className="font-serif text-[5.8rem] leading-[0.9] text-[#f0c67d]/15 [font-variant-numeric:lining-nums] sm:text-[7.4rem]">
                        {event.date.split(" ")[0].padStart(2, "0")}
                      </span>
                      <div className="text-center">
                        <p className="font-serif text-3xl font-medium tracking-[0.12em] text-[#fff8ef] sm:text-4xl">
                          December
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.28em] text-[#f0c67d]/85">2026</p>
                      </div>
                    </div>
                    <div className="mt-8 h-px w-full bg-[#f0c67d]/20" />
                    <h3 className="mt-7 font-serif text-5xl leading-none text-[#fff8ef] sm:text-6xl">
                      {event.name}
                    </h3>
                    <div className="mt-7 space-y-6 border-l border-[#f0c67d]/45 pl-6">
                      <div>
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#f0c67d]/80">Time</p>
                        <p className="mt-2 font-serif text-2xl text-[#fff8ef] [font-variant-numeric:lining-nums]">{event.time}</p>
                      </div>
                      <div>
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#f0c67d]/80">Venue</p>
                        <a href={event.mapUrl} target="_blank" rel="noreferrer" className="mt-2 block max-w-sm text-base leading-7 text-[#fff4e1]/90 transition hover:text-[#f0c67d] hover:underline">
                          {event.place}
                        </a>
                      </div>
                    </div>
                    <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                      <a href={event.mapUrl} target="_blank" rel="noreferrer" className="border-b border-[#f0c67d]/50 pb-1 text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-[#f0c67d] transition hover:border-[#f0c67d] hover:text-[#fff8ef]">
                        Open in maps &rarr;
                      </a>
                      {event.dressCodeColors?.length ? (
                        <div className="flex items-center gap-2.5">
                          {event.dressCodeColors.map((color) => (
                            <span key={color} aria-label={`Suggested color ${color}`} className="h-4 w-4 rounded-full border border-[#fff8ef]/60" style={{ backgroundColor: color }} />
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:items-start md:gap-6">
          {events.map((event, index) => {
            const mobileOffset = "mx-auto max-w-[20rem]";
            const desktopOffset =
              index === 1 ? "md:mt-10" : index === 2 ? "md:mt-4" : "md:mt-0";

            return (
              <motion.article
                key={event.name}
                className={`relative z-10 w-full overflow-hidden rounded-[0.45rem] bg-[linear-gradient(180deg,#fff8ef_0%,#f8ead6_100%)] p-3 text-center shadow-[0_24px_56px_rgba(64,20,26,0.22)] transition hover:-translate-y-1.5 hover:shadow-[0_30px_68px_rgba(64,20,26,0.28)] ${mobileOffset} ${desktopOffset} md:mx-auto md:max-w-[21rem]`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                transition={{
                  duration: 0.46,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.22 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.24),transparent_26%,rgba(176,24,56,0.03)_100%)]" />
                <div className="relative overflow-hidden px-5 pb-8 pt-10">
                  {event.washImage ? (
                    <>
                      <motion.div
                        className="absolute inset-0"
                        initial={
                          shouldReduceMotion
                            ? false
                            : { opacity: 0, scale: 1.1 }
                        }
                        transition={{
                          duration: 0.72,
                          delay: index * 0.12 + 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        viewport={{ once: true, amount: 0.22 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                      >
                        <Image
                          src={event.washImage}
                          alt={event.washImageAlt ?? ""}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 767px) 90vw, 320px"
                        />
                      </motion.div>
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(252,243,229,0.68),rgba(246,234,214,0.58)),radial-gradient(circle_at_18%_18%,rgba(229,175,88,0.14),transparent_26%),radial-gradient(circle_at_82%_78%,rgba(166,103,60,0.05),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(231,210,181,0.10))]"
                      />
                    </>
                  ) : (
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(254,247,236,0.97),rgba(244,232,211,0.98)),radial-gradient(circle_at_15%_16%,rgba(232,187,112,0.13),transparent_28%),radial-gradient(circle_at_80%_82%,rgba(180,119,74,0.07),transparent_30%)]"
                    />
                  )}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.16] mix-blend-multiply bg-[radial-gradient(circle_at_20%_24%,rgba(134,96,56,0.34)_0_0.6px,transparent_0.7px),radial-gradient(circle_at_72%_18%,rgba(158,116,68,0.28)_0_0.55px,transparent_0.7px),radial-gradient(circle_at_34%_72%,rgba(120,84,44,0.22)_0_0.5px,transparent_0.65px),radial-gradient(circle_at_84%_68%,rgba(150,112,69,0.24)_0_0.6px,transparent_0.72px)] [background-size:18px_18px,22px_22px,20px_20px,24px_24px]"
                  />
                  <h3 className="relative z-10 font-serif text-5xl leading-none text-[#8f1830]">
                    {event.name}
                  </h3>
                  <div className="relative z-10 mx-auto mt-7 flex w-32 items-center gap-3">
                    <span className="h-px flex-1 bg-[#d69b52]" />
                    <span className="grid h-5 w-5 place-items-center rounded-full border border-[#d69b52] bg-[#fff7ea]">
                      <span className="h-2 w-2 rotate-45 bg-[#b01838]" />
                    </span>
                    <span className="h-px flex-1 bg-[#d69b52]" />
                  </div>
                  <p className="relative z-10 mt-7 text-sm font-semibold uppercase tracking-[0.22em] text-[#633628]">
                    {event.date}
                  </p>
                  <div className="relative z-10 mt-5 space-y-1 text-base leading-7 text-[#633628]">
                    <p>{event.time}</p>
                    <p>
                      <a
                        href={event.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-[#8f1830] hover:underline"
                      >
                        {event.place}
                      </a>
                    </p>
                  </div>
                  {event.dressCodeColors?.length ? (
                    <div className="relative z-10 mt-8 flex flex-col items-center gap-3 text-center">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#8b6447]">
                        Suggested dress code:
                      </p>
                      <div className="flex items-center gap-3">
                        {event.dressCodeColors.map((color) => (
                          <span
                            key={color}
                            aria-label={`Suggested color ${color}`}
                            className="h-5 w-5 rounded-full border border-[#cda574]/80 shadow-[inset_0_0_0_1px_rgba(255,248,236,0.45)]"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </div>
      )}
    </div>
  );
}
