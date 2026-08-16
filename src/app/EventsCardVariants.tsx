"use client";

import Image from "next/image";

type EventCard = {
  name: string;
  date: string;
  time: string;
  place: string;
  mapUrl: string;
  landmarkImage: string;
  landmarkAlt: string;
  landmarkWidth: number;
  landmarkHeight: number;
  washImage?: string;
  washImageAlt?: string;
  dressCodeColors?: string[];
};

type EventsCardVariantsProps = {
  events: EventCard[];
};

export function EventsCardVariants({ events }: EventsCardVariantsProps) {
  return (
    <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-start">
      {events.map((event, index) => (
        <article
          key={event.name}
          className={`relative overflow-hidden rounded-[0.45rem] bg-[linear-gradient(180deg,#fff7ea_0%,#fff1dc_100%)] p-3 text-center shadow-[0_24px_56px_rgba(99,54,40,0.14)] transition hover:-translate-y-1.5 hover:shadow-[0_30px_68px_rgba(99,54,40,0.19)] ${
            index === 1 ? "md:mt-8" : index === 2 ? "md:mt-3" : ""
          }`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.28),transparent_26%,rgba(176,24,56,0.03)_100%)]" />
          <div className="relative overflow-hidden px-5 pb-8 pt-10">
            {event.washImage ? (
              <>
                <Image
                  src={event.washImage}
                  alt={event.washImageAlt ?? ""}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 767px) 90vw, 320px"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(252,243,229,0.84),rgba(246,234,214,0.78)),radial-gradient(circle_at_18%_18%,rgba(229,175,88,0.20),transparent_26%),radial-gradient(circle_at_82%_78%,rgba(166,103,60,0.09),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(231,210,181,0.20))]"
                />
              </>
            ) : (
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(254,247,236,0.97),rgba(244,232,211,0.98)),radial-gradient(circle_at_15%_16%,rgba(232,187,112,0.13),transparent_28%),radial-gradient(circle_at_80%_82%,rgba(180,119,74,0.07),transparent_30%)]"
              />
            )}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.16] mix-blend-multiply bg-[radial-gradient(circle_at_20%_24%,rgba(134,96,56,0.34)_0_0.6px,transparent_0.7px),radial-gradient(circle_at_72%_18%,rgba(158,116,68,0.28)_0_0.55px,transparent_0.7px),radial-gradient(circle_at_34%_72%,rgba(120,84,44,0.22)_0_0.5px,transparent_0.65px),radial-gradient(circle_at_84%_68%,rgba(150,112,69,0.24)_0_0.6px,transparent_0.72px)] [background-size:18px_18px,22px_22px,20px_20px,24px_24px]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(240,167,47,0.12),transparent_72%)]"
            />
            <h3 className="relative z-10 font-serif text-5xl leading-none text-[#8f1830]">
              {event.name}
            </h3>
            <div className="relative z-10 mx-auto mt-7 flex w-32 items-center gap-3">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 flex w-[15rem] -translate-x-1/2 -translate-y-1/2 justify-center opacity-[0.34]"
              >
                <Image
                  src="/graphics/alpona-watermark-v1.png"
                  alt=""
                  width={1254}
                  height={1254}
                  className="h-auto w-full sepia-[0.32] saturate-[0.82] brightness-[0.92]"
                  sizes="(max-width: 767px) 11rem, 15rem"
                />
              </div>
              <span className="h-px flex-1 bg-[#d69b52]" />
              <span className="grid h-5 w-5 place-items-center rounded-full border border-[#d69b52] bg-[#fff7ea]">
                <span className="h-2 w-2 rotate-45 bg-[#b01838]" />
              </span>
              <span className="h-px flex-1 bg-[#d69b52]" />
            </div>
            <p className="relative z-10 mt-7 text-sm font-semibold uppercase tracking-[0.22em] text-[#633628]">
              {event.date}
            </p>
            <div className="relative z-10 mt-5 space-y-1 text-base leading-7 text-[#633628]">
              <p>{event.time}</p>
              <p>
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[#8f1830] hover:underline"
                >
                  {event.place}
                </a>
              </p>
            </div>
            {event.dressCodeColors?.length ? (
              <div className="relative z-10 mt-8 flex flex-col items-center gap-3 text-center">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#8b6447]">
                  Suggested dress code:
                </p>
                <div className="flex items-center gap-3">
                  {event.dressCodeColors.map((color) => (
                    <span
                      key={color}
                      aria-label={`Suggested color ${color}`}
                      className="h-5 w-5 rounded-full border border-[#cda574]/80 shadow-[inset_0_0_0_1px_rgba(255,248,236,0.45)]"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
