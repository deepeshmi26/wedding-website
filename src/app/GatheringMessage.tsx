"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const message =
  "We are gathering our favorite people for music, food, happy chaos, loud laughter, and a weekend that feels like one big family party.";

const lines = [
  "We are gathering our favorite people",
  "for music, food, happy chaos,",
  "loud laughter, and a weekend",
  "that feels like one big family party.",
];

export function GatheringMessage() {
  const messageRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(messageRef, { amount: 0.35, once: true });
  const shouldReduceMotion = useReducedMotion();

  return (
    <h2
      aria-label={message}
      id="gathering-heading"
      ref={messageRef}
      className="mx-auto mt-5 max-w-xl font-serif text-[2.3rem] font-medium leading-[1.16] text-[#4b2b20] sm:mt-6 sm:max-w-2xl sm:text-[3rem] sm:leading-[1.12]"
    >
      {lines.map((line, index) => (
        <motion.span
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={
            shouldReduceMotion || isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 14 }
          }
          className="block"
          key={line}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.38 + index * 0.42,
            duration: shouldReduceMotion ? 0 : 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {line}
        </motion.span>
      ))}
    </h2>
  );
}
