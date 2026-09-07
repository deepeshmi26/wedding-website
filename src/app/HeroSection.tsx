"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  HeroCompositionSwitcher,
  type EventsVersionId,
  type VariantId,
} from "./HeroCompositionSwitcher";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

type HeroSectionProps = {
  heroVariant: VariantId;
  eventsVersion: EventsVersionId;
  onHeroVariantChange: (variant: VariantId) => void;
  onEventsVersionChange: (version: EventsVersionId) => void;
};

export function HeroSection({
  heroVariant,
  eventsVersion,
  onHeroVariantChange,
  onEventsVersionChange,
}: HeroSectionProps) {
  const t = useTranslations();
  const navItems = [
    { label: t("nav.story"), href: "#story" }, { label: t("nav.journey"), href: "#about" }, { label: t("nav.events"), href: "#events" }, { label: t("nav.calendar"), href: "#save-the-date" }, { label: t("nav.rsvp"), href: "#rsvp" }
  ];
  const shouldReduceMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <section className="relative min-h-[100svh] overflow-x-hidden bg-[#f8f3ea]">
      <div aria-hidden="true" className="paper-grain pointer-events-none absolute inset-0 opacity-35" />

      <a
        href="#"
        aria-label={t("accessibility.homepage")}
        className="absolute left-3 top-2 z-40 block h-12 w-20 transition-transform duration-300 active:scale-[0.97] lg:hidden"
      >
        <Image
          alt={t("common.names")}
          className="object-contain object-left"
          fill
          priority
          sizes="80px"
          src="/graphics/rd-monogram-transparent-v1.png"
        />
      </a>

      <motion.button
        type="button"
        aria-controls="site-menu"
        aria-expanded={isMenuOpen}
        aria-label={t("accessibility.openNavigation")}
        className="absolute right-3 top-3 z-40 inline-flex min-h-11 min-w-11 items-center justify-center text-[#fff8ef] [filter:drop-shadow(0_2px_8px_rgba(45,20,13,0.55))] lg:hidden"
        onClick={() => setIsMenuOpen(true)}
        initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
      >
        <span className="flex w-6 flex-col gap-1.5" aria-hidden="true">
          <span className="h-px w-6 bg-current" />
          <span className="h-px w-4 self-end bg-current" />
        </span>
      </motion.button>

      <motion.nav
        aria-label={t("accessibility.navigation")}
        className="absolute inset-x-0 top-0 z-40 hidden items-center justify-between gap-8 px-8 py-6 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#fff8ef] [text-shadow:0_2px_8px_rgba(45,20,13,0.62)] lg:flex lg:px-12"
        initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
      >
        <a
          href="#"
          aria-label="Wedding homepage"
          className="relative block h-14 w-24 transition-transform duration-300 hover:scale-[1.03]"
        >
          <Image
            alt={t("common.names")}
            className="object-contain object-left"
            fill
            priority
            sizes="96px"
            src="/graphics/rd-monogram-transparent-v1.png"
          />
        </a>
        <div className="flex items-center gap-5 xl:gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-transparent pb-1 transition-colors duration-300 hover:border-current hover:text-[#e9bd74]"
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitcher />
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label={t("accessibility.siteNavigation")}
            className="fixed inset-0 z-[100] text-[#fff8ef]"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.26, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <button
              type="button"
              aria-label={t("accessibility.closeNavigation")}
              className="absolute inset-0 cursor-default bg-[#21130f]/10"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.aside
              className="relative ml-auto flex min-h-[100dvh] w-[min(84vw,25rem)] overflow-y-auto border-l border-[#f2cc84]/35 bg-[#291319]/92 text-[#fff8ef] shadow-[-20px_0_52px_rgba(24,10,12,0.3)] backdrop-blur-md"
              initial={shouldReduceMotion ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.26, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <div aria-hidden="true" className="paper-grain pointer-events-none absolute inset-0 opacity-20" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(115,47,45,0.32),transparent_26%,rgba(14,7,10,0.38)_100%)]" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-7 top-[5.5rem] h-px bg-[#f2cc84]/35 sm:inset-x-12" />

              <motion.button
                type="button"
                autoFocus
                aria-label={t("accessibility.closeNavigation")}
                className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center border border-[#f2cc84]/45 text-[#fff8ef] transition-colors duration-200 hover:border-[#e9bd74] hover:bg-[#f2cc84]/10 hover:text-[#e9bd74] sm:right-8 sm:top-6"
                onClick={() => setIsMenuOpen(false)}
                initial={shouldReduceMotion ? false : { opacity: 0, rotate: -20 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.12, duration: 0.24 }}
              >
                <span className="relative block h-5 w-5" aria-hidden="true">
                  <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 -rotate-45 bg-current" />
                </span>
              </motion.button>

              <nav className="relative flex min-h-[100dvh] w-full flex-col px-7 pb-9 pt-8 sm:px-12 sm:pb-11 sm:pt-10">
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#e9bd74]">
                    {t("common.names")}
                  </p>
                </div>
                <div className="mt-10 border-b border-[#f2cc84]/30 sm:mt-12">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="group grid grid-cols-[2rem_minmax(0,1fr)] items-baseline gap-3 border-t border-[#f2cc84]/30 py-4 font-serif text-[clamp(2.15rem,7.5vw,3.25rem)] leading-[0.95] tracking-normal text-[#fff8ef] transition-colors duration-300 hover:border-[#e9bd74] hover:text-[#e9bd74] focus-visible:border-[#e9bd74] focus-visible:text-[#e9bd74] focus-visible:outline-none sm:py-5"
                      onClick={() => setIsMenuOpen(false)}
                      initial={shouldReduceMotion ? false : { opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: shouldReduceMotion ? 0 : 0.1 + index * 0.08, duration: 0.42, ease: "easeOut" }}
                    >
                      <span className="font-sans text-[0.6rem] font-semibold tracking-[0.16em] text-[#e9bd74]/80">
                        0{index + 1}
                      </span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1">
                        {item.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
                <div className="mt-8"><LanguageSwitcher /></div>
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
      <HeroCompositionSwitcher
        activeVariant={heroVariant}
        eventsVersion={eventsVersion}
        onHeroVariantChange={onHeroVariantChange}
        onEventsVersionChange={onEventsVersionChange}
      />
    </section>
  );
}
