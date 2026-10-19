"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Stay = {
  address: string[];
  characterImage: string;
  label: string;
  mapsUrl: string;
  name: string;
  side: "groom" | "bride";
};

type SharedStay = {
  address: string[];
  checkIn: string;
  checkOut: string;
  city: string;
  label: string;
  mapsUrl: string;
  name: string;
};

export function StaySection() {
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations();
  const hotels = t.raw("stay.hotels") as Stay[];
  const raigarh = t.raw("stay.raigarh") as SharedStay;

  return (
    <section id="stay" className="relative overflow-hidden bg-[#fcf8f0] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div aria-hidden="true" className="paper-grain pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#9b5a35]">{t("stay.eyebrow")}</p>
          <h2 className="mt-3 font-serif text-[clamp(2.45rem,6vw,4.75rem)] leading-[0.92] text-[#61253a]">{t("stay.title")}</h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-14 lg:gap-6">
          {hotels.map((hotel, index) => (
            <motion.article
              className={`relative overflow-hidden border p-5 shadow-[0_14px_32px_rgba(87,43,50,0.08)] sm:p-6 ${hotel.side === "groom" ? "border-[#c99b68]/55 bg-[#fffaf1]" : "border-[#d9a5ad]/60 bg-[#fff8fa]"}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              key={hotel.name}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="relative min-h-[4.75rem] pr-20 sm:min-h-[5.25rem] sm:pr-24">
                <p className={`text-[0.62rem] font-bold uppercase tracking-[0.24em] ${hotel.side === "groom" ? "text-[#9b5a35]" : "text-[#a84b67]"}`}>{hotel.label}</p>
                <h3 className="mt-4 font-serif text-[2rem] leading-none text-[#5e3324] sm:text-[2.25rem]">{hotel.name}</h3>
                <Image
                  alt=""
                  className="absolute bottom-0 right-0 h-16 w-auto object-contain sm:h-20"
                  height={hotel.side === "groom" ? 1374 : 1320}
                  sizes="(max-width: 639px) 64px, 80px"
                  src={hotel.characterImage}
                  width={hotel.side === "groom" ? 1145 : 1192}
                />
              </div>
              <div className="mt-4 flex gap-3 border-t border-[#d6b488]/55 pt-4 text-[#6b4334]">
                <MapPin aria-hidden="true" className="mt-1 shrink-0 text-[#9b5a35]" size={18} strokeWidth={1.6} />
                <address className="not-italic text-[0.95rem] leading-7">
                  {hotel.address.map((line) => <span className="block" key={line}>{line}</span>)}
                </address>
              </div>
              <div className={`mt-4 border-l-2 py-1 pl-3 text-[0.74rem] leading-6 ${hotel.side === "groom" ? "border-[#9b5a35]/65 text-[#77472f]" : "border-[#a84b67]/60 text-[#7e3b51]"}`}>
                <p>{t("stay.checkIn")}</p>
                <p>{t("stay.checkOut")}</p>
              </div>
              <a
                className={`mt-5 inline-flex items-center gap-2 border-b pb-1 text-[0.66rem] font-bold uppercase tracking-[0.16em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${hotel.side === "groom" ? "border-[#9b5a35]/50 text-[#8f1830] hover:border-[#8f1830] hover:text-[#5e172d] focus-visible:outline-[#8f1830]" : "border-[#a84b67]/50 text-[#a84b67] hover:border-[#7b2542] hover:text-[#7b2542] focus-visible:outline-[#7b2542]"}`}
                href={hotel.mapsUrl}
                rel="noreferrer"
                target="_blank"
              >
                {t("stay.maps")} <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.8} />
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex max-w-3xl gap-4 border-y border-[#c99b68]/55 py-6 sm:mt-12 sm:py-7">
          <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-[#9b5a35]" size={19} strokeWidth={1.6} />
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#a3633d]">{t("stay.arrivalLabel")}</p>
            <div className="mt-2 space-y-1 text-[0.98rem] leading-7 text-[#5e3324] sm:text-[1.05rem]">
              {(t.raw("stay.arrival") as string[]).map((line) => <p key={line}>{line}</p>)}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[#c99b68]/45 pt-10 sm:mt-16 sm:pt-12">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#9b5a35]">{raigarh.city}</p>
          <motion.article
            className="mt-5 max-w-2xl border border-[#c99b68]/55 bg-[#fffaf1] p-5 shadow-[0_12px_28px_rgba(87,43,50,0.07)] sm:p-6"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.12, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="relative min-h-[4.75rem] pr-28 sm:min-h-[5.25rem] sm:pr-32">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#9b5a35]">{raigarh.label}</p>
              <h3 className="mt-4 font-serif text-[2rem] leading-none text-[#5e3324] sm:text-[2.25rem]">{raigarh.name}</h3>
              <span aria-hidden="true" className="absolute bottom-0 right-0 flex items-end gap-0.5">
                {hotels.slice().reverse().map((hotel) => (
                  <Image
                    alt=""
                    className="h-12 w-auto object-contain"
                    height={hotel.side === "groom" ? 1374 : 1320}
                    key={hotel.side}
                    sizes="48px"
                    src={hotel.characterImage}
                    width={hotel.side === "groom" ? 1145 : 1192}
                  />
                ))}
              </span>
            </div>
            <div className="mt-4 flex gap-3 border-t border-[#d6b488]/55 pt-4 text-[#6b4334]">
              <MapPin aria-hidden="true" className="mt-1 shrink-0 text-[#9b5a35]" size={18} strokeWidth={1.6} />
              <address className="not-italic text-[0.95rem] leading-7">
                {raigarh.address.map((line) => <span className="block" key={line}>{line}</span>)}
              </address>
            </div>
            <div className="mt-4 border-l-2 border-[#9b5a35]/65 py-1 pl-3 text-[0.74rem] leading-6 text-[#77472f]">
              <p>{raigarh.checkIn}</p>
              <p>{raigarh.checkOut}</p>
            </div>
            <a
              className="mt-5 inline-flex items-center gap-2 border-b border-[#9b5a35]/50 pb-1 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-[#8f1830] transition-colors hover:border-[#8f1830] hover:text-[#5e172d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8f1830]"
              href={raigarh.mapsUrl}
              rel="noreferrer"
              target="_blank"
            >
              {t("stay.maps")} <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.8} />
            </a>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
