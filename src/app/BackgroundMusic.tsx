"use client";

import { Music2, Volume2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export const BACKGROUND_MUSIC_STATE_KEY = "wedding-music-state";

type BackgroundMusicContextValue = {
  isPlaying: boolean;
  togglePlayback: () => void;
};

const BackgroundMusicContext = createContext<BackgroundMusicContextValue | null>(null);

export function BackgroundMusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.18;
    if (sessionStorage.getItem(BACKGROUND_MUSIC_STATE_KEY) === "paused") return;

    void audio.play().catch(() => setIsPlaying(false));
  }, []);

  const togglePlayback = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      sessionStorage.setItem(BACKGROUND_MUSIC_STATE_KEY, "playing");
      void audio.play().catch(() => setIsPlaying(false));
      return;
    }

    sessionStorage.setItem(BACKGROUND_MUSIC_STATE_KEY, "paused");
    audio.pause();
  }, []);

  const value = useMemo(() => ({ isPlaying, togglePlayback }), [isPlaying, togglePlayback]);

  return (
    <BackgroundMusicContext.Provider value={value}>
      <audio
        data-background-music
        loop
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        preload="auto"
        ref={audioRef}
        src="/audio/pardesiya.mp3"
      />
      {children}
    </BackgroundMusicContext.Provider>
  );
}

function useBackgroundMusic() {
  const music = useContext(BackgroundMusicContext);
  if (!music) throw new Error("BackgroundMusic must be used within BackgroundMusicProvider");
  return music;
}

export function BackgroundMusic({ className }: { className: string }) {
  const { isPlaying, togglePlayback } = useBackgroundMusic();
  const t = useTranslations();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={className}>
      <span className="relative block h-9 w-9">
        {!isPlaying && !shouldReduceMotion ? (
          <>
            <motion.span
              animate={{ opacity: [0, 0.72, 0], scale: [1, 1.65, 1.9] }}
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full border border-[#ffd27d]/90"
              transition={{ duration: 0.82, ease: "easeOut", repeat: Infinity, repeatDelay: 0.12 }}
            />
            <motion.span
              animate={{ opacity: [0, 0.58, 0], scale: [1, 1.65, 1.9] }}
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full border border-[#ffd27d]/70"
              transition={{ delay: 0.38, duration: 0.82, ease: "easeOut", repeat: Infinity, repeatDelay: 0.12 }}
            />
          </>
        ) : null}
        <motion.button
          animate={!isPlaying && !shouldReduceMotion ? { y: [0, -1.5, 0], rotate: [0, -4, 3, 0] } : undefined}
          aria-label={isPlaying ? t("audio.pause") : t("audio.play")}
          aria-pressed={isPlaying}
          className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#ffd27d]/90 bg-[#6e1836]/90 text-[#fff8ef] shadow-[0_7px_22px_rgba(45,20,13,0.34)] backdrop-blur-[2px] transition-[transform,color,border-color,background-color] duration-200 hover:border-[#fff8ef] hover:bg-[#8f2449] hover:text-[#ffd27d] active:scale-[0.94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd27d]"
          onClick={togglePlayback}
          title={isPlaying ? t("audio.pause") : t("audio.play")}
          transition={!isPlaying && !shouldReduceMotion ? { duration: 1.05, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.28 } : undefined}
          type="button"
        >
          {isPlaying ? <Volume2 aria-hidden="true" size={15} strokeWidth={1.8} /> : <Music2 aria-hidden="true" size={15} strokeWidth={1.8} />}
        </motion.button>
      </span>
    </div>
  );
}
