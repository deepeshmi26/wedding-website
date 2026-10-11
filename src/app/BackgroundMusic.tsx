"use client";

import { Volume2, VolumeX } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export function BackgroundMusic({ className }: { className: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const t = useTranslations();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.18;
    void audio.play().catch(() => setIsPlaying(false));
  }, []);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      void audio.play().catch(() => setIsPlaying(false));
      return;
    }

    audio.pause();
  };

  return (
    <div className={className}>
      <audio
        autoPlay
        loop
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        preload="auto"
        ref={audioRef}
        src="/audio/pardesiya.mp3"
      />
      <span className="relative block h-9 w-9">
        {!isPlaying && !shouldReduceMotion ? (
          <motion.span
            animate={{ opacity: [0, 0.42, 0], scale: [1, 1.7, 1.95] }}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full border border-[#ffd27d]/70"
            transition={{ duration: 2.8, ease: "easeOut", repeat: Infinity, repeatDelay: 1.4 }}
          />
        ) : null}
        <button
          aria-label={isPlaying ? t("audio.pause") : t("audio.play")}
          aria-pressed={isPlaying}
          className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#fff8ef]/70 bg-[#321b12]/35 text-[#fff8ef] shadow-[0_5px_18px_rgba(45,20,13,0.18)] backdrop-blur-[2px] transition-[transform,color,border-color,background-color] duration-200 hover:border-[#ffd27d] hover:bg-[#321b12]/55 hover:text-[#ffd27d] active:scale-[0.94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd27d]"
          onClick={togglePlayback}
          title={isPlaying ? t("audio.pause") : t("audio.play")}
          type="button"
        >
          {isPlaying ? <Volume2 aria-hidden="true" size={15} strokeWidth={1.5} /> : <VolumeX aria-hidden="true" size={15} strokeWidth={1.5} />}
        </button>
      </span>
    </div>
  );
}
