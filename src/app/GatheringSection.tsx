"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { CountdownDisplay } from "./Countdown";
import { GatheringMessage } from "./GatheringMessage";

export function GatheringSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="gathering-heading"
      className="relative min-h-[100dvh] overflow-hidden bg-[#f8f3ea] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-[min(100vw,62rem)] opacity-60"
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
      <motion.div
        className="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] max-w-3xl items-start justify-center pt-10 text-center sm:min-h-[calc(100dvh-8rem)] sm:items-center sm:pt-0"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 110, damping: 19 }}
      >
        <div className="flex w-full flex-col items-center gap-12 sm:gap-14">
          <div className="flex w-full justify-center">
            <CountdownDisplay />
          </div>
          <div className="ml-auto flex min-h-[17rem] w-[calc(100%-2rem)] items-center justify-center sm:ml-0 sm:min-h-[15rem] sm:w-full">
            <GatheringMessage />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
