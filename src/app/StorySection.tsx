"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { storyPhotos } from "./weddingData";

type PhotoFrame = {
  alt: string;
  className: string;
  initialY: number;
  primary?: boolean;
  rotate: number;
  src: string;
};

const photoFrames: PhotoFrame[] = [
  {
    alt: "Rajshree and Deepesh smiling close together",
    className: "left-[17%] top-[13%] z-30 h-[67%] w-[62%]",
    initialY: -26,
    rotate: 0,
    src: storyPhotos.closeCouple,
    primary: true,
  },
  {
    alt: "Rajshree and Deepesh showing their rings",
    className: "left-[1%] top-[7%] z-10 h-[28%] w-[27%]",
    initialY: -18,
    rotate: -9,
    src: storyPhotos.handsDetail,
  },
  {
    alt: "Rajshree and Deepesh looking at each other",
    className: "right-[0%] top-[2%] z-10 h-[27%] w-[29%]",
    initialY: -22,
    rotate: 10,
    src: storyPhotos.classicCouple,
  },
  {
    alt: "Rajshree and Deepesh smiling close together",
    className: "right-[0%] top-[39%] z-40 h-[26%] w-[28%]",
    initialY: 18,
    rotate: -6,
    src: storyPhotos.closeCouple,
  },
  {
    alt: "Rajshree and Deepesh showing their rings",
    className: "bottom-[1%] right-[12%] z-20 h-[25%] w-[27%]",
    initialY: 24,
    rotate: 9,
    src: storyPhotos.handsDetail,
  },
  {
    alt: "Rajshree and Deepesh looking at each other",
    className: "bottom-[4%] left-[1%] z-20 h-[25%] w-[29%]",
    initialY: 28,
    rotate: -10,
    src: storyPhotos.classicCouple,
  },
  {
    alt: "Rajshree and Deepesh smiling close together",
    className: "left-[0%] top-[39%] z-20 h-[23%] w-[25%]",
    initialY: 16,
    rotate: 7,
    src: storyPhotos.closeCouple,
  },
];

export function StorySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="story" className="relative bg-[#fcf8f0] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-24">
        <div className="relative mx-auto h-[500px] w-full max-w-[520px] sm:h-[620px] lg:mx-0 lg:max-w-none">
          {photoFrames.map((frame, index) => (
            <motion.div
              key={`${frame.alt}-${index}`}
              className={`absolute overflow-hidden rounded-[0.75rem] bg-[#fffdf8] p-1.5 shadow-[0_18px_42px_rgba(87,43,50,0.12)] sm:p-2 ${frame.className}`}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: frame.initialY, rotate: frame.rotate + (frame.rotate > 0 ? 4 : -4) }
              }
              whileInView={{ opacity: 1, y: 0, rotate: frame.rotate }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: "spring",
                stiffness: frame.primary ? 100 : 120,
                damping: frame.primary ? 19 : 20,
                delay: index * 0.07,
              }}
            >
              <div className="relative h-full overflow-hidden rounded-[0.5rem]">
                <Image
                  alt={frame.alt}
                  className={frame.primary ? "object-cover object-[48%_48%]" : "object-cover object-[50%_55%]"}
                  fill
                  quality={frame.primary ? 88 : 82}
                  sizes={frame.primary ? "(max-width: 640px) 62vw, (max-width: 1024px) 320px, 400px" : "(max-width: 640px) 29vw, (max-width: 1024px) 150px, 180px"}
                  src={frame.src}
                />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ type: "spring", stiffness: 110, damping: 20, delay: 0.1 }}
        >
          <h2 className="font-serif text-[2.75rem] leading-[1.02] text-[#39202b] sm:text-6xl">A few favorite frames, shared with our favorite people.</h2>
          <p className="mt-8 max-w-[34rem] text-[1.02rem] leading-8 text-[#704b4c]">Here are a few pieces of us before the celebrations begin: quiet smiles, small details, and the people who have seen us become who we are together. We cannot wait to gather with you.</p>
          <div className="mt-10 flex flex-col items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#842b45] sm:flex-row sm:justify-center sm:gap-5 lg:justify-start">
            <span>Rajshree &amp; Deepesh</span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-[#f0a72f] sm:block" />
            <span>3 &amp; 4 Dec 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
