"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const WEDDING_START = new Date("2026-12-04T17:45:00+05:30");

type CountdownValue = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

function getCountdownValue(): CountdownValue {
  const remaining = Math.max(0, WEDDING_START.getTime() - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86_400);
  const hours = Math.floor((totalSeconds % 86_400) / 3_600);
  const minutes = Math.floor((totalSeconds % 3_600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

function FlipUnit({
  compact = false,
  label,
  value,
}: {
  compact?: boolean;
  label: string;
  value: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const valueSize =
    value.length > 2
      ? compact
        ? "text-[1.85rem] sm:text-[2.55rem] lg:text-[2.8rem]"
        : "text-[2.2rem] sm:text-4xl lg:text-[3.15rem]"
      : compact
        ? "text-[2.3rem] sm:text-[3rem] lg:text-[3.25rem]"
        : "text-[2.7rem] sm:text-5xl lg:text-[3.8rem]";

  const faceTextClass = `absolute inset-0 grid place-items-center font-serif leading-none text-[#76152d] ${valueSize}`;

  return (
    <div className="min-w-0 text-center">
      <div
        className={`relative isolate aspect-[0.96/1] min-w-0 overflow-hidden rounded-[0.45rem] border border-[#c58a58]/55 bg-[#fff9ed] shadow-[0_8px_0_rgba(177,106,61,0.13),0_15px_25px_rgba(94,51,36,0.1)] ${
          compact ? "sm:min-w-[4.6rem] lg:min-w-[5.1rem]" : "sm:min-w-[5.7rem] lg:min-w-[6.6rem]"
        }`}
        style={{ perspective: "680px" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(180deg,#fffdf7_0%,#f8ecd7_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,#f4dfbd_0%,#fff9ed_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 overflow-hidden"
          style={{ clipPath: "inset(0 0 50% 0)" }}
        >
          <span className={faceTextClass}>{value}</span>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 overflow-hidden"
          style={{ clipPath: "inset(50% 0 0 0)" }}
        >
          <span className={faceTextClass}>{value}</span>
        </div>
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={value}
            initial={shouldReduceMotion ? false : { rotateX: -88 }}
            animate={{ rotateX: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.455, 0.03, 0.515, 0.955] }}
            className="absolute inset-0 z-20 overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              clipPath: "inset(0 0 50% 0)",
              transformOrigin: "50% 100%",
            }}
          >
            <span className={faceTextClass}>{value}</span>
          </motion.div>
        </AnimatePresence>
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 top-1/2 z-30 h-px -translate-y-1/2 bg-[#a8673b]/35 shadow-[0_1px_0_rgba(255,255,255,0.7)]"
        />
        <span aria-hidden="true" className="absolute left-0 top-1/2 z-30 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a8673b]/45" />
        <span aria-hidden="true" className="absolute right-0 top-1/2 z-30 h-1 w-1 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a8673b]/45" />
      </div>
      <p className={`font-bold uppercase tracking-[0.18em] text-[#8d4e30] ${compact ? "mt-2.5 text-[0.5rem] sm:text-[0.55rem]" : "mt-3 text-[0.58rem] sm:text-[0.64rem]"}`}>
        {label}
      </p>
    </div>
  );
}

export function CountdownDisplay({ compact = false }: { compact?: boolean }) {
  const [countdown, setCountdown] = useState(getCountdownValue);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCountdown(getCountdownValue());
    }, 1_000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className={compact ? "mt-7" : "mt-10 sm:mt-12"} aria-label="Countdown to the wedding ceremony">
      <p className="text-[0.58rem] font-bold uppercase tracking-[0.25em] text-[#b86622]">
        Until the vows
      </p>
      <div className={`mt-3 grid grid-cols-4 ${compact ? "max-w-[25rem] gap-2 sm:gap-3" : "max-w-[32rem] gap-2.5 sm:gap-5"}`}>
        <FlipUnit compact={compact} label="Days" value={countdown.days} />
        <FlipUnit compact={compact} label="Hours" value={countdown.hours} />
        <FlipUnit compact={compact} label="Minutes" value={countdown.minutes} />
        <FlipUnit compact={compact} label="Seconds" value={countdown.seconds} />
      </div>
    </div>
  );
}
