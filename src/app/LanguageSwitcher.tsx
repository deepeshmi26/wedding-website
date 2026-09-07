"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

import type { Locale } from "@/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    router.replace(pathname.replace(/^\/(en|bn)(?=\/|$)/, `/${nextLocale}`));
  };

  return (
    <div aria-label={t("language.switchLabel")} className={`inline-flex items-center border border-current/40 bg-black/10 p-0.5 text-[0.6rem] font-semibold tracking-[0.1em] ${className}`}>
      <button aria-pressed={locale === "en"} className={`px-2 py-1 transition ${locale === "en" ? "bg-[#fff8ef] text-[#5e2634]" : "hover:text-[#e9bd74]"}`} onClick={() => switchLocale("en")} type="button">EN</button>
      <button aria-pressed={locale === "bn"} className={`px-2 py-1 transition ${locale === "bn" ? "bg-[#fff8ef] text-[#5e2634]" : "hover:text-[#e9bd74]"}`} onClick={() => switchLocale("bn")} type="button">বাংলা</button>
    </div>
  );
}
