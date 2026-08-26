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
  landmarkImage: string;
  landmarkAlt: string;
  landmarkWidth: number;
  landmarkHeight: number;
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
    <div className="relative md:mt-14">
      {isRoyalClassic ? (
        <div className="flex flex-col items-center gap-5 md:gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              className="relative z-10 mx-auto w-full max-w-[20rem] rounded-[0.45rem] shadow-[0_24px_56px_rgba(64,20,26,0.22)] transition hover:-translate-y-1.5 hover:shadow-[0_30px_68px_rgba(64,20,26,0.28)] md:max-w-[21rem]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
              transition={{
                duration: 0.46,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.22 }}
              whileInView={{ opacity: 1, y: 0 }}
              >
              <article
                className="relative text-center"
              >
                <div className="relative z-10 overflow-hidden rounded-[0.32rem] px-5 pb-8 pt-10">
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
                        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(94,15,33,0.44),rgba(94,15,33,0.38)),radial-gradient(circle_at_18%_18%,rgba(240,198,125,0.14),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.08))]"
                      />
                    </>
                  ) : (
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(132,20,44,0.95),rgba(96,14,34,0.98)),radial-gradient(circle_at_15%_16%,rgba(240,198,125,0.12),transparent_28%)]"
                    />
                  )}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 [background-size:18px_18px,22px_22px,20px_20px,24px_24px] opacity-[0.1] mix-blend-screen bg-[radial-gradient(circle_at_20%_24%,rgba(240,198,125,0.28)_0_0.6px,transparent_0.7px),radial-gradient(circle_at_72%_18%,rgba(240,198,125,0.2)_0_0.55px,transparent_0.7px),radial-gradient(circle_at_34%_72%,rgba(255,248,239,0.14)_0_0.5px,transparent_0.65px),radial-gradient(circle_at_84%_68%,rgba(240,198,125,0.16)_0_0.6px,transparent_0.72px)]"
                  />
                  <h3 className="relative z-10 font-serif text-5xl leading-none text-[#fff8ef]">
                    {event.name}
                  </h3>
                  <div className="relative z-10 mx-auto mt-7 flex w-32 items-center gap-3">
                    <span className="h-px flex-1 bg-[#d69b52]" />
                    <span className="grid h-5 w-5 place-items-center rounded-full border border-[#d69b52] bg-[#fff8ef]/12">
                      <span className="h-2 w-2 rotate-45 bg-[#fff8ef]" />
                    </span>
                    <span className="h-px flex-1 bg-[#d69b52]" />
                  </div>
                  <p className="relative z-10 mt-7 text-sm font-semibold uppercase tracking-[0.22em] text-[#f0c67d]">
                    {event.date}
                  </p>
                  <div className="relative z-10 mt-5 space-y-1 text-base leading-7 text-[#fff4e1]">
                    <p>{event.time}</p>
                    <p>
                      <a
                        href={event.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-[#f0c67d] hover:underline"
                      >
                        {event.place}
                      </a>
                    </p>
                  </div>
                  {event.dressCodeColors?.length ? (
                    <div className="relative z-10 mt-8 flex flex-col items-center gap-3 text-center">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#f0c67d]">
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
