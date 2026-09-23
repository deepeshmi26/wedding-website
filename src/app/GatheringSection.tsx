"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const kolkataImages = [
  "/graphics/howrah-bridge-sunset-wash-v2.jpeg",
  "/graphics/kolkata-tram-wash-v2.webp",
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
    <motion.div
      className="relative overflow-hidden will-change-[transform,opacity]"
      style={{
        x: shouldReduceMotion ? "0%" : x,
      }}
    >
      <Image alt="" className="object-cover" fill sizes="100vw" src={src} />
    </motion.div>
  );
}

function InvitationCopy({ headingId }: { headingId?: string }) {
  const t = useTranslations();

  return (
    <div>
      <h2 id={headingId} className="font-serif text-6xl font-semibold italic leading-none tracking-normal text-[#592537] sm:text-7xl md:text-8xl lg:text-9xl">
        <span className="block">{t("gathering.lineOne")}</span>
        <span className="block">{t("gathering.lineTwo")}</span>
      </h2>
      <p className="mx-auto mt-8 max-w-xl font-serif text-2xl font-medium leading-relaxed text-[#5d3b38] sm:mt-10 sm:text-3xl">
        {t("gathering.copy")}
      </p>
    </div>
  );
}

export function GatheringSection() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end end"] });
  const paperCoverY = useTransform(scrollYProgress, [0.48, 1], ["100%", "0%"]);

  return (
    <section
      aria-label={`${t("gathering.lineOne")}, ${t("gathering.lineTwo")}`}
      id="gathering"
      ref={sectionRef}
      className="relative isolate min-h-[200svh] bg-[#f8f3ea]"
    >
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 grid grid-rows-5 sm:hidden">
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

        <div aria-hidden="true" className="absolute inset-0 hidden sm:block">
          <Image
            alt=""
            className="object-cover object-center"
            fill
            sizes="100vw"
            src="/graphics/howrah-bridge-sunset-wash-v2.jpeg"
          />
        </div>

        <motion.div
          className="absolute inset-0 z-[5] flex items-center justify-center bg-[linear-gradient(180deg,rgba(248,243,234,0)_0%,rgba(248,243,234,0.18)_12%,rgba(248,243,234,0.78)_42%,rgba(248,243,234,0.78)_72%,rgba(248,243,234,0.22)_92%,rgba(248,243,234,0)_100%)] px-5 text-center will-change-transform sm:flex sm:px-12"
          style={{ y: shouldReduceMotion ? "0%" : paperCoverY }}
        >
          <InvitationCopy headingId="gathering-heading" />
        </motion.div>
      </div>
    </section>
  );
}
