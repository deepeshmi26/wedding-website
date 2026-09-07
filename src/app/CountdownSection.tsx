"use client";

import { CountdownDisplay } from "./Countdown";
import { useTranslations } from "next-intl";

export function CountdownSection() {
  const t = useTranslations();
  return (
    <section aria-label={t("accessibility.countdownSection")} className="bg-[#f8f3ea] px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto flex max-w-[25rem] justify-center">
        <CountdownDisplay compact />
      </div>
    </section>
  );
}
