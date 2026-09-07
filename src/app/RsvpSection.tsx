"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

export function RsvpSection() {
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations();

  return (
    <section id="rsvp" className="relative overflow-hidden bg-[#f1e7da] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div aria-hidden="true" className="paper-grain pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#842b45]">{t("rsvp.eyebrow")}</p>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-5xl">
            <div aria-hidden="true" className="absolute inset-6 rounded-[1rem] bg-[radial-gradient(circle_at_50%_40%,rgba(100,34,56,0.1),transparent_70%)] blur-2xl" />
            <motion.div
              className="relative rotate-[-0.5deg] overflow-hidden rounded-[0.9rem] bg-[linear-gradient(180deg,rgba(255,252,246,0.98),rgba(245,235,220,0.98))] px-5 py-6 shadow-[0_24px_50px_rgba(87,43,50,0.13)] sm:px-8 sm:py-8 lg:rotate-[-1deg]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 34, rotate: 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ type: "spring", stiffness: 105, damping: 18 }}
            >
              <div aria-hidden="true" className="absolute inset-0 rounded-[1.6rem] opacity-[0.13] mix-blend-multiply bg-[radial-gradient(circle_at_18%_22%,rgba(134,96,56,0.34)_0_0.6px,transparent_0.7px),radial-gradient(circle_at_74%_18%,rgba(158,116,68,0.28)_0_0.55px,transparent_0.7px),radial-gradient(circle_at_32%_76%,rgba(120,84,44,0.22)_0_0.5px,transparent_0.65px),radial-gradient(circle_at_82%_70%,rgba(150,112,69,0.24)_0_0.6px,transparent_0.72px)] [background-size:18px_18px,22px_22px,20px_20px,24px_24px]" />
              <div aria-hidden="true" className="absolute inset-[13px] rounded-[0.6rem] border border-[#c99b68]/40" />
              <div className="relative z-10 grid gap-10 px-5 py-9 sm:px-8 sm:py-11 lg:grid-cols-[minmax(0,1.15fr)_minmax(14rem,0.85fr)] lg:gap-12 lg:px-12">
                <div className="flex flex-col items-start">
                  <p className="font-serif text-[1.72rem] leading-[1.22] text-[#5e3324] sm:text-[1.9rem]">{t("rsvp.title")}</p>
                  <p className="mt-4 max-w-[18rem] text-[0.98rem] leading-7 text-[#6b4334]">{t("rsvp.copy")}</p>
                  <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#a3633d]">{t("common.names")}</p>
                  <a href="#" className="group mt-8 inline-flex -rotate-[1deg] items-center rounded-[0.4rem] border-2 border-[#8f1830] bg-[#fff5e5] px-3 py-2.5 text-left shadow-[3px_4px_0_rgba(143,24,48,0.18)] transition hover:-translate-y-0.5 hover:rotate-0 hover:shadow-[4px_5px_0_rgba(143,24,48,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8f1830]">
                    <span className="border-r border-dashed border-[#b86622]/70 pr-2 text-base leading-none text-[#8f1830] transition group-hover:translate-x-0.5">&rarr;</span>
                    <span className="pl-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#6b3028]">{t("common.rsvp")}</span>
                  </a>
                  <div className="mt-9 flex w-full items-center justify-between gap-4 border-t border-dashed border-[#c8965f]/55 pt-6 lg:hidden">
                    <div>
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#a3633d]">{t("common.location")}</p>
                      <p className="mt-1 font-serif text-[1.55rem] text-[#5e3324]">{t("common.datesLong")}</p>
                    </div>
                    <div className="relative h-20 w-20 shrink-0 rotate-[8deg] opacity-55 mix-blend-multiply">
                      <Image src="/graphics/postmark-raster.png" alt="" fill className="object-contain" sizes="80px" />
                    </div>
                  </div>
                </div>
                <div className="hidden border-l border-dashed border-[#c8965f]/55 pl-12 lg:block">
                  <div className="flex items-start justify-between gap-5 lg:block">
                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#a3633d]">{t("common.location")}</p>
                      <p className="mt-2 font-serif text-2xl text-[#5e3324]">{t("common.datesLong")}</p>
                    </div>
                    <div className="relative h-24 w-24 shrink-0 rotate-[8deg] opacity-55 mix-blend-multiply sm:h-28 sm:w-28 lg:mt-8 lg:h-36 lg:w-36">
                      <Image src="/graphics/postmark-raster.png" alt="" fill className="object-contain" sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 144px" />
                    </div>
                  </div>
                  <div aria-hidden="true" className="mt-7 space-y-4 lg:mt-10">
                    <div className="h-px w-full bg-[#d6b488]/65" />
                    <div className="h-px w-[86%] bg-[#d6b488]/55" />
                    <div className="h-px w-[70%] bg-[#d6b488]/45" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
