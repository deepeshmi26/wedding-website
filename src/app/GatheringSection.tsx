"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

const kolkataImages = [
  "/graphics/howrah-bridge-sunset-wash.jpeg",
  "/graphics/kolkata-tram-wash.webp",
  "/graphics/victoria-memorial-card.jpg",
  "/graphics/dakshineswar-temple-wash.jpg",
  "/graphics/howrah-bridge-card.jpg",
];

type KolkataStripProps = {
  entryProgress: MotionValue<number>;
  index: number;
  shouldReduceMotion: boolean | null;
  src: string;
};

function KolkataStrip({ entryProgress, index, shouldReduceMotion, src }: KolkataStripProps) {
  const entryStart = 0.05 + index * 0.08;
  const x = useTransform(entryProgress, [entryStart, entryStart + 0.27], [index % 2 === 0 ? "-110%" : "110%", "0%"]);

  return (
    <motion.div className="relative overflow-hidden will-change-transform" style={{ x: shouldReduceMotion ? "0%" : x }}>
      <Image alt="" className="object-cover" fill sizes="100vw" src={src} />
    </motion.div>
  );
}

export function GatheringSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end end"] });
  const paperCoverY = useTransform(scrollYProgress, [0.68, 0.96], ["100%", "0%"]);

  return (
    <section
      aria-labelledby="gathering-heading"
      id="gathering"
      ref={sectionRef}
      className="relative isolate min-h-[200svh] bg-[#f8f3ea]"
    >
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 grid grid-rows-5">
          {kolkataImages.map((src, index) => (
            <KolkataStrip
              entryProgress={scrollYProgress}
              index={index}
              key={src}
              shouldReduceMotion={shouldReduceMotion}
              src={src}
            />
          ))}
        </div>

        <motion.div
          className="absolute inset-0 z-[5] flex items-center justify-center bg-[linear-gradient(180deg,rgba(248,243,234,0)_0%,rgba(248,243,234,0.18)_12%,rgba(248,243,234,0.78)_42%,rgba(248,243,234,0.78)_72%,rgba(248,243,234,0.22)_92%,rgba(248,243,234,0)_100%)] px-5 text-center will-change-transform sm:px-12"
          style={{ y: shouldReduceMotion ? "100%" : paperCoverY }}
        >
          <div>
            <h2 id="gathering-heading" className="font-serif text-6xl font-semibold italic leading-none tracking-normal text-[#592537] sm:text-7xl md:text-8xl lg:text-9xl">
              <span className="block">An invitation</span>
              <span className="block">to Bengal</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl font-serif text-xl leading-relaxed text-[#5d3b38] sm:mt-10 sm:text-2xl">
              We are gathering our favourite people for music, food, happy chaos, loud laughter, and a weekend that feels like one big family party.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
