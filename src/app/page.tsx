import Image from "next/image";

import { EventsCardVariants } from "./EventsCardVariants";
import { HeroCompositionSwitcher } from "./HeroCompositionSwitcher";

const events = [
  {
    name: "Sangeet",
    date: "3 December",
    time: "7:00 PM",
    place: "Peerlese Nagar, Sodepur, Kolkata",
    mapUrl: "https://maps.app.goo.gl/DbBByduhva9tPuuaA",
    landmarkImage: "/graphics/howrah-bridge-night-card.jpg",
    landmarkAlt: "Howrah Bridge at night in Kolkata",
    landmarkWidth: 960,
    landmarkHeight: 466,
    landmarkClassName: "w-[84%]",
    washImage: "/graphics/howrah-bridge-sunset-wash.jpeg",
    washImageAlt: "Howrah Bridge at sunset over the river",
    dressCodeColors: ["#7f1d3f", "#d66b43", "#f1b24f", "#4a2c35"],
  },
  {
    name: "Haldi",
    date: "4 December",
    time: "7:00 AM",
    place: "Shrishti Garden, Jessore Rd, Kolkata",
    mapUrl: "https://maps.app.goo.gl/ur6KqC3tBMqw4i7NA",
    landmarkImage: "/graphics/victoria-memorial-card.jpg",
    landmarkAlt: "Victoria Memorial in Kolkata",
    landmarkWidth: 960,
    landmarkHeight: 472,
    washImage: "/graphics/kolkata-tram-wash.webp",
    washImageAlt: "Kolkata tram on a rainy street",
    dressCodeColors: ["#f1be3d", "#f5d97a", "#8a9d6f", "#fff4d6"],
  },
  {
    name: "Wedding",
    date: "4 December",
    time: "5:45 PM",
    place: "Shrishti Garden, Jessore Rd, Kolkata",
    mapUrl: "https://maps.app.goo.gl/ur6KqC3tBMqw4i7NA",
    landmarkImage: "/graphics/belur-math-card.jpg",
    landmarkAlt: "Belur Math near Kolkata",
    landmarkWidth: 960,
    landmarkHeight: 380,
    washImage: "/graphics/dakshineswar-temple-wash.jpg",
    washImageAlt: "Dakshineswar Kali Temple in Kolkata",
    dressCodeColors: ["#b31e3f", "#d6a64a", "#f5e7c7", "#6b3b34"],
  },
];

const navItems = ["Story", "Events", "Travel", "RSVP"];

const storyPhotos = {
  closeCouple: "/photos/rav03380.jpg",
  handsDetail: "/photos/rav03383.jpg",
  classicCouple: "/photos/rav03150.jpg",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff4e1] text-[#321b12]">
      <section className="relative flex min-h-screen flex-col px-5 py-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(240,167,47,0.32),transparent_30%),radial-gradient(circle_at_84%_14%,rgba(211,63,115,0.18),transparent_28%),radial-gradient(circle_at_74%_78%,rgba(228,93,60,0.17),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.64),rgba(255,244,225,0.7))]" />
        <div aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute left-[8%] top-[16%] h-24 w-24 rounded-full bg-[#f0a72f]/10 blur-2xl" />
          <div className="absolute right-[10%] top-[22%] h-28 w-28 rounded-full bg-[#d23f73]/10 blur-2xl" />
        </div>

        <nav className="relative z-10 flex items-center justify-between gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#774231]">
          <a href="#" aria-label="Wedding homepage" className="font-serif text-xl normal-case tracking-normal text-[#b01838]">
            R & D
          </a>
          <div className="hidden items-center gap-7 sm:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[#b01838]">
                {item}
              </a>
            ))}
          </div>
          <a
            href="#rsvp"
            className="rounded-full border border-[#b01838]/30 bg-[#b01838] px-4 py-2 text-[#fff8ef] shadow-[0_10px_24px_rgba(176,24,56,0.2)] transition hover:bg-[#8f1830]"
          >
            RSVP
          </a>
        </nav>

        <HeroCompositionSwitcher />
      </section>

      <section id="story" className="relative px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="relative mx-auto h-[520px] w-full max-w-[520px] sm:h-[620px] lg:mx-0 lg:max-w-none">
            <div className="absolute left-0 top-0 z-10 h-[76%] w-[78%] overflow-hidden rounded-[1.15rem] bg-[#fff8ef] p-2 shadow-[0_22px_60px_rgba(99,54,40,0.16)]">
              <div className="relative h-full overflow-hidden rounded-[0.85rem]">
                <Image
                  alt="Rajshree and Deepesh smiling close together"
                  className="object-cover object-[48%_48%]"
                  fill
                  quality={88}
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 410px, 520px"
                  src={storyPhotos.closeCouple}
                />
              </div>
            </div>

            <div className="absolute bottom-[9%] right-[1%] z-30 h-[32%] w-[44%] rotate-[1.5deg] overflow-hidden rounded-[1rem] bg-[#fff8ef] p-2 shadow-[0_18px_48px_rgba(176,24,56,0.16)]">
              <div className="relative h-full overflow-hidden rounded-[0.75rem]">
                <Image
                  alt="Rajshree and Deepesh showing their rings"
                  className="object-cover object-[50%_60%]"
                  fill
                  quality={88}
                  sizes="(max-width: 640px) 44vw, (max-width: 1024px) 230px, 290px"
                  src={storyPhotos.handsDetail}
                />
              </div>
            </div>

            <div className="absolute bottom-[1%] left-[11%] z-20 h-[22%] w-[34%] -rotate-[1.5deg] overflow-hidden rounded-[0.9rem] bg-[#fff8ef] p-2 shadow-[0_14px_38px_rgba(99,54,40,0.13)]">
              <div className="relative h-full overflow-hidden rounded-[0.65rem]">
                <Image
                  alt="Rajshree and Deepesh looking at each other"
                  className="object-cover object-[50%_54%]"
                  fill
                  quality={82}
                  sizes="(max-width: 640px) 34vw, (max-width: 1024px) 180px, 225px"
                  src={storyPhotos.classicCouple}
                />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.35em] text-[#b86622]">
              Our story
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.98] text-[#321b12] sm:text-6xl">
              A few favorite frames, shared with our favorite people.
            </h2>
            <p className="mt-8 text-lg leading-8 text-[#633628]">
              Here are a few pieces of us before the celebrations begin: quiet
              smiles, small details, and the people who have seen us become who
              we are together. We cannot wait to gather with you.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#8f1830] sm:flex-row sm:justify-center sm:gap-5 lg:justify-start">
              <span>Rajshree & Deepesh</span>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-[#f0a72f] sm:block" />
              <span>3 & 4 Dec 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="relative overflow-hidden bg-[linear-gradient(135deg,#f6d8b1_0%,#f7e6cf_48%,#f1cfa3_100%)] px-5 py-20 text-[#321b12] sm:px-8 lg:px-12 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(176,24,56,0.16),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(240,167,47,0.18),transparent_24%),radial-gradient(circle_at_78%_82%,rgba(143,24,48,0.1),transparent_28%)]"
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.35em] text-[#b86622]">
              The weekend
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-none text-[#8f1830] sm:text-6xl">
              Three invitations into the same celebration.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#6a3a2b]">
              Each gathering carries its own mood, but they all lead us toward
              the same weekend of music, color, and being together.
            </p>
          </div>

          <EventsCardVariants events={events} />
        </div>
      </section>

      <section id="travel" className="border-y border-[#d69b52]/35 bg-[#f7dfbd] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.35em] text-[#8f1830]">
              Travel
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight">Come for the vows, stay for Kolkata.</h2>
          </div>
          <p className="text-lg leading-8 text-[#633628] md:col-span-2">
            Practical sections need calmer design. This area can hold hotels,
            airport notes, dress code, and transport without competing with the
            emotional hero.
          </p>
        </div>
      </section>

      <section id="rsvp" className="px-5 py-20 text-center sm:px-8 lg:px-12">
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.35em] text-[#b86622]">
          Save your place
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-5xl leading-none text-[#8f1830] sm:text-7xl">
          We hope you can celebrate with us.
        </h2>
        <a
          href="mailto:hello@example.com"
          className="mt-10 inline-flex rounded-full bg-[#321b12] px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-[#fff8ef] shadow-[0_16px_40px_rgba(50,27,18,0.22)] transition hover:bg-[#8f1830]"
        >
          RSVP by email
        </a>
      </section>
    </main>
  );
}
