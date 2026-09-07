import Image from "next/image";
import { useTranslations } from "next-intl";

function CalendarMark() {
  return (
    <span
      aria-hidden="true"
      className="relative inline-block h-4 w-4 shrink-0 rounded-[3px] border border-current"
    >
      <span className="absolute inset-x-0 top-[4px] border-t border-current" />
      <span className="absolute -top-[3px] left-[3px] h-1.5 w-[2px] rounded-full bg-current" />
      <span className="absolute -top-[3px] right-[3px] h-1.5 w-[2px] rounded-full bg-current" />
    </span>
  );
}

export function SaveTheDateSection() {
  const t = useTranslations();
  const calendarUrl = `https://calendar.google.com/calendar/render?${new URLSearchParams({ action: "TEMPLATE", text: t("calendar.calendarTitle"), dates: "20261203/20261204", details: t("calendar.calendarDetails"), location: t("calendar.calendarLocation") }).toString()}`;
  return (
    <section
      id="save-the-date"
      className="relative bg-[#fff4e1] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="relative mx-auto max-w-3xl pt-4 sm:pt-5">
        <div aria-hidden="true" className="absolute left-1/2 top-0 z-20 flex -translate-x-1/2 gap-16 sm:gap-20">
          <span className="h-9 w-3.5 rounded-full border-2 border-[#e4ad63] bg-[#9d2440] shadow-[0_2px_5px_rgba(55,9,23,0.28)] sm:h-10 sm:w-4" />
          <span className="h-9 w-3.5 rounded-full border-2 border-[#e4ad63] bg-[#9d2440] shadow-[0_2px_5px_rgba(55,9,23,0.28)] sm:h-10 sm:w-4" />
        </div>

        <div className="relative overflow-hidden rounded-[1.7rem] bg-[#fffdf8] px-5 py-7 shadow-[0_18px_40px_rgba(100,56,45,0.14)] sm:px-10 sm:py-9">
          <div className="paper-grain pointer-events-none absolute inset-0 opacity-45" />

          <div className="relative z-10 mx-auto max-w-xl text-center">
            <div className="relative h-52 overflow-hidden rounded-[0.9rem] sm:h-64">
              <Image
                src="/graphics/kolkata-cab.jpg"
                alt={t("calendar.taxiAlt")}
                fill
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 767px) calc(100vw - 4.5rem), 36rem"
              />
            </div>

            <div className="mx-auto my-5 h-px max-w-[13rem] bg-[#dcbf94] sm:my-6" />

            <div>
              <div className="flex items-center justify-center gap-2 text-[#a86129]">
                <CalendarMark />
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] sm:text-[0.7rem]">
                  {t("calendar.eyebrow")}
                </p>
              </div>

              <div className="mt-5 grid grid-cols-[minmax(0,1fr)_6rem_minmax(0,1fr)] sm:mt-6 sm:grid-cols-[minmax(0,1fr)_8rem_minmax(0,1fr)]">
                <p className="col-start-1 w-full text-right text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#80595a] sm:text-[0.66rem]">
                  {t("calendar.weekday")}
                </p>
              </div>

              <div className="mt-1 grid grid-cols-[minmax(0,1fr)_6rem_minmax(0,1fr)] items-center sm:grid-cols-[minmax(0,1fr)_8rem_minmax(0,1fr)]">
                <p className="col-start-1 w-full text-right font-serif text-6xl leading-none text-[#8c1e3d] [font-variant-numeric:lining-nums] sm:text-8xl">
                  {t("calendar.dateDay")}
                </p>
                <div className="col-start-2 flex items-center justify-center gap-2 text-[#d38345]">
                  <span className="h-px w-6 bg-current sm:w-10" />
                  <span aria-hidden="true" className="text-xl leading-none sm:text-2xl">♥</span>
                  <span className="h-px w-6 bg-current sm:w-10" />
                </div>
                <div className="col-start-3 w-full text-left">
                  <div className="inline-flex flex-col items-center">
                    <p className="font-serif text-[2.1rem] italic leading-none text-[#74434a] sm:text-5xl">
                      {t("calendar.dateMonth")}
                    </p>
                    <p className="mt-2 text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-[#80595a] sm:text-[0.66rem]">
                      {t("common.year")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={calendarUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#b9143c] px-5 py-3.5 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-[#fff9f1] shadow-[0_9px_18px_rgba(134,14,43,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#94102f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b9143c] sm:mt-6 sm:text-[0.68rem]"
            >
              <span aria-hidden="true" className="text-base leading-none text-[#ffd58f]">
                ♥
              </span>
              {t("calendar.add")}
              <span className="text-[#ffd58f]">
                <CalendarMark />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
