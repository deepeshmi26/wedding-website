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
      className="relative overflow-hidden bg-[#f8f3ea] px-5 pb-12 pt-0 sm:min-h-[100dvh] sm:px-8 sm:pb-16 sm:pt-0 lg:px-12 lg:pb-20 lg:pt-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 hidden w-[min(100vw,62rem)] opacity-60 sm:block"
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
        className="relative z-10 mx-auto flex max-w-3xl items-start justify-center pt-0 text-center sm:min-h-[calc(100dvh-8rem)] sm:items-center"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 110, damping: 19 }}
      >
        <div className="flex w-full flex-col items-center gap-10 sm:gap-14">
          <div className="flex w-full justify-center">
            <CountdownDisplay />
          </div>
          <div className="relative w-full sm:flex sm:min-h-[15rem] sm:items-center sm:justify-center">
            <Image
              src="/graphics/music-floral-frame-v1.png"
              alt=""
              width={1024}
              height={1536}
              className="mr-auto h-auto w-[calc(100%-2rem)] opacity-60 sm:hidden"
              sizes="(max-width: 639px) calc(100vw - 72px), 0px"
            />
            <div className="absolute right-[3%] top-[2%] w-[74%] sm:static sm:w-auto">
              <GatheringMessage />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
