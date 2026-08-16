"use client";

import Image from "next/image";
import { useState } from "react";

export type VariantId =
  | "joyful-collage"
  | "right-photo"
  | "asymmetry-card"
  | "overlap"
  | "centered";

export type EventsVersionId = "v2" | "v3";

type Variant = {
  id: VariantId;
  label: string;
  note: string;
};

type FramedImageProps = {
  alt: string;
  className?: string;
  imageClassName?: string;
  quality?: number;
  sizes: string;
  src: string;
};

const photos = {
  classicCouple: "/photos/rav03150.jpg",
  closeCouple: "/photos/rav03380.jpg",
  handsDetail: "/photos/rav03383.jpg",
  wideCouple: "/photos/rav03100.jpg",
};

const joyfulPetals = [
  "left-[12%] top-[8%] h-7 w-3 rotate-[28deg] bg-[#f0a72f]",
  "left-[20%] top-[28%] h-5 w-2.5 -rotate-[18deg] bg-[#e45d3c]",
  "left-[28%] top-[10%] h-6 w-3 rotate-[54deg] bg-[#d23f73]",
  "right-[16%] top-[9%] h-7 w-3 -rotate-[34deg] bg-[#b01838]",
  "right-[25%] top-[30%] h-5 w-2.5 rotate-[22deg] bg-[#f0a72f]",
  "right-[8%] top-[38%] h-6 w-3 rotate-[58deg] bg-[#e45d3c]",
  "left-[9%] top-[54%] h-5 w-2.5 -rotate-[42deg] bg-[#d23f73]",
  "right-[14%] top-[58%] h-5 w-2.5 rotate-[18deg] bg-[#f0a72f]",
  "left-[38%] top-[4%] hidden h-4 w-2 rotate-[18deg] bg-[#b01838] sm:block",
  "right-[37%] top-[3%] hidden h-4 w-2 -rotate-[24deg] bg-[#e45d3c] sm:block",
];

const joyfulMoments = [
  {
    label: "dance-floor laughs",
    rotate: "-rotate-3",
    frame: "from-[#f5b83b] via-[#ec6a42] to-[#b01838]",
    src: photos.wideCouple,
    alt: "Rajshree and Deepesh sitting together and smiling",
    imageClassName: "object-[62%_50%]",
    placement:
      "left-[4%] top-[8%] w-[44%] lg:left-[8%] lg:top-[6%] lg:w-[46%]",
  },
  {
    label: "mehendi smiles",
    rotate: "rotate-2",
    frame: "from-[#e95d95] via-[#f0a72f] to-[#fff4a8]",
    src: photos.closeCouple,
    alt: "Rajshree and Deepesh smiling close together",
    imageClassName: "object-[48%_48%]",
    placement:
      "right-[2%] top-[22%] w-[40%] lg:right-[8%] lg:top-[18%] lg:w-[42%]",
  },
  {
    label: "family hugs",
    rotate: "-rotate-1",
    frame: "from-[#ffcf6b] via-[#d23f73] to-[#8f1830]",
    src: photos.classicCouple,
    alt: "Rajshree and Deepesh looking at each other",
    imageClassName: "object-[50%_54%]",
    placement:
      "left-[30%] bottom-[0%] w-[44%] lg:left-[30%] lg:bottom-[4%] lg:w-[45%]",
  },
];

const variants: Variant[] = [
  {
    id: "joyful-collage",
    label: "Joyful collage",
    note: "Colorful, lively, fun.",
  },
  {
    id: "right-photo",
    label: "Formal invite",
    note: "Clean, focused, formal.",
  },
  {
    id: "asymmetry-card",
    label: "Asymmetry",
    note: "Joyful, intimate, expressive",
  },
  {
    id: "overlap",
    label: "Overlap story",
    note: "Couple focussed intimate",
  },
  {
    id: "centered",
    label: "Photo first",
    note: "Personal, direct, quieter.",
  },
];

const eventsVersions: {
  id: EventsVersionId;
  label: string;
  note: string;
}[] = [
  {
    id: "v2",
    label: "Classic original",
    note: "The earlier lighter invitation-card layout from the last commit.",
  },
  {
    id: "v3",
    label: "Classic original copy",
    note: "A fresh copy of the lighter invitation-card layout for new experiments.",
  },
];

function HeroCopy({
  compact = false,
  narrow = false,
  tone = "warm",
}: {
  compact?: boolean;
  narrow?: boolean;
  tone?: "warm" | "photo";
}) {
  const isPhotoTone = tone === "photo";

  return (
    <div className="flex flex-col items-center lg:items-start">
      <p
        className={`mb-5 max-w-sm text-[0.72rem] font-bold uppercase tracking-[0.34em] ${
          isPhotoTone ? "text-[#ffd27d]" : "text-[#c24a2b]"
        }`}
      >
        Come for the vows, stay for the dancing
      </p>
      <h1
        className={`max-w-4xl font-serif leading-[0.92] ${
          isPhotoTone
            ? "text-[#fff8ef] [text-shadow:0_10px_34px_rgba(50,27,18,0.38)]"
            : "text-[#b01838]"
        } ${
          compact
            ? "text-[clamp(2.8rem,7vw,5.65rem)]"
            : "text-[clamp(3rem,8.5vw,6.4rem)]"
        }`}
      >
        Rajshree
        <span
          className={`block ${isPhotoTone ? "text-[#ffd27d]" : "text-[#ee9b22]"}`}
        >
          &
        </span>
        Deepesh
      </h1>
      <div className="mt-8 flex items-center gap-3">
        <span
          className={`h-px w-14 ${isPhotoTone ? "bg-[#ffd27d]" : "bg-[#f0a72f]"}`}
        />
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            isPhotoTone ? "bg-[#fff8ef]" : "bg-[#d23f73]"
          }`}
        />
        <span
          className={`h-px w-14 ${isPhotoTone ? "bg-[#ffd27d]" : "bg-[#f0a72f]"}`}
        />
      </div>
      <p
        className={`mt-8 ${
          narrow ? "max-w-lg" : "max-w-2xl"
        } text-balance text-lg leading-8 sm:text-xl ${
          isPhotoTone
            ? "text-[#fff4e1] [text-shadow:0_8px_24px_rgba(50,27,18,0.38)]"
            : "text-[#633628]"
        }`}
      >
        We are gathering our favorite people for music, food, happy chaos, loud
        laughter, and a weekend that feels like one big family party.
      </p>
      <div
        className={`mt-10 flex flex-col items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] sm:flex-row sm:gap-6 lg:items-start ${
          isPhotoTone ? "text-[#ffe8c7]" : "text-[#774231]"
        }`}
      >
        <span>3 & 4 Dec 2026</span>
        <span
          className={`hidden h-1.5 w-1.5 rounded-full sm:block ${
            isPhotoTone ? "bg-[#ffd27d]" : "bg-[#f0a72f]"
          }`}
        />
        <span>Kolkata, India</span>
      </div>
    </div>
  );
}

function FramedImage({
  alt,
  className = "",
  imageClassName = "",
  quality = 88,
  sizes,
  src,
}: FramedImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.4rem] bg-white/80 p-2 shadow-[0_20px_55px_rgba(128,37,58,0.16)] ${className}`}
    >
      <div className="relative h-full overflow-hidden rounded-[1rem]">
        <Image
          alt={alt}
          className={`object-cover ${imageClassName}`}
          fill
          quality={quality}
          sizes={sizes}
          src={src}
        />
      </div>
    </div>
  );
}

function MobileIntroNameDate() {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="mb-4 max-w-xs text-[0.66rem] font-bold uppercase tracking-[0.28em] text-[#c24a2b]">
        Come for the vows, stay for the dancing
      </p>
      <h1 className="max-w-xs font-serif text-[clamp(2.55rem,15vw,4.7rem)] leading-[0.9] text-[#b01838]">
        Rajshree
        <span className="block text-[#ee9b22]">&</span>
        Deepesh
      </h1>
      <div className="mt-6 flex items-center gap-3">
        <span className="h-px w-10 bg-[#f0a72f]" />
        <span className="h-2 w-2 rounded-full bg-[#d23f73]" />
        <span className="h-px w-10 bg-[#f0a72f]" />
      </div>
      <div className="mt-6 flex flex-col items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#774231]">
        <span>3 & 4 Dec 2026</span>
        <span>Kolkata, India</span>
      </div>
    </div>
  );
}

function MobileParagraphCopy() {
  return (
    <p className="mx-auto max-w-sm text-balance text-base leading-8 text-[#633628]">
      We are gathering our favorite people for music, food, happy chaos, loud
      laughter, and a weekend that feels like one big family party.
    </p>
  );
}

function JoyfulCollageComposition() {
  return (
    <>
      <div className="relative flex flex-col items-center gap-8 text-center lg:hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          {joyfulPetals.map((petal, index) => (
            <span
              className={`absolute rounded-[70%_30%_70%_30%] opacity-80 shadow-[0_8px_18px_rgba(176,24,56,0.13)] ${petal}`}
              key={`${petal}-mobile-${index}`}
            />
          ))}
        </div>

        <MobileIntroNameDate />

        <div className="relative mx-auto h-[340px] w-full max-w-[430px]">
          <div className="absolute left-[18%] top-[18%] h-48 w-48 rounded-full bg-[#f0a72f]/20 blur-3xl" />
          {joyfulMoments.map((moment) => (
            <div
              className={`absolute ${moment.placement} ${moment.rotate} rounded-[1.25rem] bg-gradient-to-br ${moment.frame} p-2 shadow-[0_18px_45px_rgba(176,24,56,0.18)]`}
              key={`${moment.label}-mobile`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[0.95rem]">
                <Image
                  alt={moment.alt}
                  className={`object-cover ${moment.imageClassName}`}
                  fill
                  quality={82}
                  sizes="(max-width: 480px) 44vw, 190px"
                  src={moment.src}
                />
              </div>
            </div>
          ))}
          <div className="absolute bottom-[18%] right-[8%] rounded-full bg-[#fff8ef]/85 px-4 py-3 text-left shadow-[0_14px_36px_rgba(176,24,56,0.13)]">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[#b01838]">
              music
            </p>
            <p className="mt-1 font-serif text-2xl leading-none text-[#ee9b22]">
              all night
            </p>
          </div>
        </div>

        <MobileParagraphCopy />
      </div>

      <div className="relative hidden items-center gap-10 text-center lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:text-left">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          {joyfulPetals.map((petal, index) => (
            <span
              className={`absolute rounded-[70%_30%_70%_30%] opacity-80 shadow-[0_8px_18px_rgba(176,24,56,0.13)] ${petal}`}
              key={`${petal}-${index}`}
            />
          ))}
        </div>

        <HeroCopy />

        <div className="relative mx-auto h-[340px] w-full max-w-[430px] lg:h-[540px] lg:max-w-none">
          <div className="absolute left-[18%] top-[18%] h-48 w-48 rounded-full bg-[#f0a72f]/20 blur-3xl lg:left-[26%] lg:top-[20%] lg:h-72 lg:w-72" />
          {joyfulMoments.map((moment) => (
            <div
              className={`absolute ${moment.placement} ${moment.rotate} rounded-[1.25rem] bg-gradient-to-br ${moment.frame} p-2 shadow-[0_18px_45px_rgba(176,24,56,0.18)]`}
              key={moment.label}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[0.95rem]">
                <Image
                  alt={moment.alt}
                  className={`object-cover ${moment.imageClassName}`}
                  fill
                  quality={82}
                  sizes="(max-width: 1279px) 24vw, 300px"
                  src={moment.src}
                />
              </div>
            </div>
          ))}
          <div className="absolute bottom-[20%] right-[2%] rounded-full bg-[#fff8ef]/85 px-4 py-3 text-left shadow-[0_14px_36px_rgba(176,24,56,0.13)]">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[#b01838]">
              music
            </p>
            <p className="mt-1 font-serif text-2xl leading-none text-[#ee9b22]">
              all night
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function RightPhotoComposition() {
  return (
    <>
      <div className="flex flex-col items-center gap-8 text-center lg:hidden">
        <MobileIntroNameDate />
        <div className="relative mx-auto h-[390px] w-full max-w-[430px]">
          <div className="absolute left-[18%] top-[18%] h-48 w-48 rounded-full bg-[#f0a72f]/20 blur-3xl" />
          <FramedImage
            alt="Rajshree and Deepesh smiling at each other"
            className="h-full w-full"
            imageClassName="object-[50%_48%]"
            quality={88}
            sizes="(max-width: 480px) calc(100vw - 40px), 430px"
            src={photos.closeCouple}
          />
        </div>
        <MobileParagraphCopy />
      </div>

      <div className="hidden items-center gap-10 text-center lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:text-left">
        <HeroCopy />
        <div className="relative mx-auto h-[560px] w-full max-w-none">
          <div className="absolute left-[26%] top-[20%] h-72 w-72 rounded-full bg-[#f0a72f]/20 blur-3xl" />
          <FramedImage
            alt="Rajshree and Deepesh smiling at each other"
            className="h-full w-full"
            imageClassName="object-[50%_48%]"
            quality={88}
            sizes="(max-width: 1279px) 48vw, 560px"
            src={photos.closeCouple}
          />
        </div>
      </div>
    </>
  );
}

function DetailCardComposition() {
  return (
    <>
      <div className="flex flex-col items-center gap-8 text-center lg:hidden">
        <MobileIntroNameDate />
        <div className="relative mx-auto mb-14 h-[420px] w-full max-w-[430px]">
          <div className="absolute left-[12%] top-[16%] h-56 w-56 rounded-full bg-[#d23f73]/14 blur-3xl" />
          <FramedImage
            alt="Rajshree and Deepesh smiling close together"
            className="absolute right-[3%] top-0 h-[84%] w-[78%] rotate-1"
            imageClassName="object-[48%_48%]"
            quality={88}
            sizes="(max-width: 480px) 78vw, 330px"
            src={photos.closeCouple}
          />
          <FramedImage
            alt="Rajshree and Deepesh showing their rings"
            className="absolute bottom-[2%] left-[1%] h-[38%] w-[45%] -rotate-3"
            imageClassName="object-[50%_60%]"
            quality={88}
            sizes="(max-width: 480px) 45vw, 190px"
            src={photos.handsDetail}
          />
          <div className="absolute bottom-[13%] right-[2%] rounded-full bg-[#fff8ef]/90 px-4 py-3 text-left shadow-[0_14px_36px_rgba(176,24,56,0.13)]">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[#b01838]">
              just us
            </p>
            <p className="mt-1 font-serif text-2xl leading-none text-[#ee9b22]">
              with you
            </p>
          </div>
        </div>
        <MobileParagraphCopy />
      </div>

      <div className="hidden items-center gap-10 text-center lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:text-left">
        <HeroCopy />
        <div className="relative mx-auto h-[560px] w-full max-w-none">
          <div className="absolute left-[24%] top-[18%] h-72 w-72 rounded-full bg-[#d23f73]/14 blur-3xl" />
          <FramedImage
            alt="Rajshree and Deepesh smiling close together"
            className="absolute right-[3%] top-0 h-[84%] w-[78%] rotate-1"
            imageClassName="object-[48%_48%]"
            quality={88}
            sizes="(max-width: 1279px) 38vw, 460px"
            src={photos.closeCouple}
          />
          <FramedImage
            alt="Rajshree and Deepesh showing their rings"
            className="absolute bottom-[2%] left-[1%] h-[38%] w-[45%] -rotate-3"
            imageClassName="object-[50%_60%]"
            quality={88}
            sizes="(max-width: 1279px) 18vw, 220px"
            src={photos.handsDetail}
          />
          <div className="absolute bottom-[13%] right-[2%] rounded-full bg-[#fff8ef]/90 px-4 py-3 text-left shadow-[0_14px_36px_rgba(176,24,56,0.13)]">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[#b01838]">
              just us
            </p>
            <p className="mt-1 font-serif text-2xl leading-none text-[#ee9b22]">
              with you
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function OverlapComposition() {
  return (
    <>
      <div className="relative left-1/2 -mt-24 min-h-screen w-screen -translate-x-1/2 overflow-hidden bg-[#321b12] px-5 pb-10 pt-32 text-center lg:hidden">
        <Image
          alt="Rajshree and Deepesh sitting together and smiling"
          className="object-cover object-[76%_34%]"
          fill
          quality={92}
          sizes="100vw"
          src={photos.wideCouple}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(50,27,18,0)_0%,rgba(50,27,18,0.08)_46%,rgba(50,27,18,0.54)_76%,rgba(50,27,18,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[#b01838]/5" />

        <div className="relative z-10 flex min-h-[calc(100vh-10.5rem)] items-end justify-center">
          <div className="w-full max-w-sm">
            <p className="mx-auto max-w-xs text-[0.58rem] font-bold uppercase tracking-[0.24em] text-[#ffd27d]">
              Come for the vows, stay for the dancing
            </p>
            <h1 className="mx-auto mt-4 max-w-xs font-serif text-[clamp(1.85rem,9.5vw,3rem)] leading-[0.95] text-[#fff8ef] [text-shadow:0_10px_34px_rgba(50,27,18,0.46)]">
              Rajshree
              <span className="block text-[#ffd27d]">&</span>
              Deepesh
            </h1>
            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#ffd27d]" />
              <span className="h-2 w-2 rounded-full bg-[#fff8ef]" />
              <span className="h-px w-10 bg-[#ffd27d]" />
            </div>
            <div className="mt-5 flex flex-col items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#ffe8c7]">
              <span>3 & 4 Dec 2026</span>
              <span>Kolkata, India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden px-5 py-10 text-center lg:hidden">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute -left-10 top-4 h-28 w-28 rounded-full bg-[#f0a72f]/10 blur-2xl" />
          <div className="absolute -right-8 bottom-2 h-24 w-24 rounded-full bg-[#d23f73]/10 blur-2xl" />
        </div>
        <p className="relative mx-auto max-w-sm text-balance text-base leading-8 text-[#633628]">
          We are gathering our favorite people for music, food, happy chaos,
          loud laughter, and a weekend that feels like one big family party.
        </p>
      </div>

      <div className="relative left-1/2 -mt-24 hidden min-h-screen w-screen -translate-x-1/2 overflow-hidden px-5 pb-16 pt-32 text-center sm:px-8 lg:block lg:px-12 lg:text-left">
        <Image
          alt="Rajshree and Deepesh sitting together and smiling"
          className="object-cover object-[62%_50%]"
          fill
          quality={92}
          sizes="100vw"
          src={photos.wideCouple}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(50,27,18,0.06)_0%,rgba(50,27,18,0.18)_54%,rgba(50,27,18,0.48)_100%)] lg:bg-[linear-gradient(90deg,rgba(50,27,18,0.56)_0%,rgba(50,27,18,0.34)_34%,rgba(50,27,18,0.08)_64%,rgba(50,27,18,0)_100%)]" />
        <div className="absolute inset-0 bg-[#b01838]/5" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-14rem)] max-w-6xl items-end lg:items-center">
          <div className="relative mx-auto max-w-lg lg:mx-0 lg:max-w-[34rem]">
            <HeroCopy compact narrow tone="photo" />
          </div>
        </div>
      </div>
    </>
  );
}

function CenteredComposition() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
      <FramedImage
        alt="Rajshree and Deepesh looking at each other"
        className="h-[320px] w-full max-w-[620px] sm:h-[420px]"
        imageClassName="object-[50%_54%]"
        quality={88}
        sizes="(max-width: 640px) calc(100vw - 40px), 620px"
        src={photos.classicCouple}
      />
      <div className="mt-10">
        <HeroCopy compact />
      </div>
    </div>
  );
}

function CompositionPreview({ activeVariant }: { activeVariant: VariantId }) {
  if (activeVariant === "joyful-collage") {
    return <JoyfulCollageComposition />;
  }

  if (activeVariant === "right-photo") {
    return <RightPhotoComposition />;
  }

  if (activeVariant === "asymmetry-card") {
    return <DetailCardComposition />;
  }

  if (activeVariant === "overlap") {
    return <OverlapComposition />;
  }

  return <CenteredComposition />;
}

export function HeroCompositionSwitcher({
  activeVariant,
  eventsVersion,
  onHeroVariantChange,
  onEventsVersionChange,
}: {
  activeVariant: VariantId;
  eventsVersion: EventsVersionId;
  onHeroVariantChange: (variant: VariantId) => void;
  onEventsVersionChange: (version: EventsVersionId) => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentVariant =
    variants.find((variant) => variant.id === activeVariant) ?? variants[0];
  const currentEventsVersion =
    eventsVersions.find((version) => version.id === eventsVersion) ??
    eventsVersions[0];

  return (
    <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-6 py-10">
      <div className="fixed bottom-4 right-4 z-[120] flex flex-col items-end sm:bottom-6 sm:right-6">
        {isMenuOpen ? (
          <div
            className="mb-2 w-[min(88vw,22rem)] rounded-[1.15rem] border border-[#b01838]/12 bg-[#fff8ef]/90 p-2 shadow-[0_18px_48px_rgba(99,54,40,0.16)] backdrop-blur-md"
            id="hero-composition-menu"
          >
            <p className="px-2 pb-1 pt-1 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[#b01838]">
              Hero composition
            </p>
            <div className="grid gap-1">
              {variants.map((variant) => {
                const isActive = variant.id === activeVariant;

                return (
                  <button
                    aria-pressed={isActive}
                    className={`rounded-[0.85rem] px-3 py-2 text-left transition ${
                      isActive
                        ? "bg-[#b01838] text-[#fff8ef] shadow-[0_8px_18px_rgba(176,24,56,0.16)]"
                        : "text-[#774231] hover:bg-[#f0a72f]/18 hover:text-[#b01838]"
                    }`}
                    key={variant.id}
                    onClick={() => {
                      onHeroVariantChange(variant.id);
                      setIsMenuOpen(false);
                    }}
                    type="button"
                  >
                    <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em]">
                      {variant.label}
                    </span>
                    <span
                      className={`mt-0.5 block text-xs leading-5 ${
                        isActive ? "text-[#fff8ef]/80" : "text-[#774231]/82"
                      }`}
                    >
                      {variant.note}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-3 border-t border-[#b01838]/10 px-2 pb-1 pt-3">
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[#b01838]">
                Events section
              </p>
            </div>
            <div className="grid gap-1">
              {eventsVersions.map((version) => {
                const isActive = version.id === eventsVersion;

                return (
                  <button
                    aria-pressed={isActive}
                    className={`rounded-[0.85rem] px-3 py-2 text-left transition ${
                      isActive
                        ? "bg-[#b01838] text-[#fff8ef] shadow-[0_8px_18px_rgba(176,24,56,0.16)]"
                        : "text-[#774231] hover:bg-[#f0a72f]/18 hover:text-[#b01838]"
                    }`}
                    key={version.id}
                    onClick={() => {
                      onEventsVersionChange(version.id);
                      setIsMenuOpen(false);
                    }}
                    type="button"
                  >
                    <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em]">
                      {version.label}
                    </span>
                    <span
                      className={`mt-0.5 block text-xs leading-5 ${
                        isActive ? "text-[#fff8ef]/80" : "text-[#774231]/82"
                      }`}
                    >
                      {version.note}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}

        <button
          aria-label={`Change hero composition. Current hero: ${currentVariant.label}. ${currentVariant.note} Current events design: ${currentEventsVersion.label}. ${currentEventsVersion.note}`}
          aria-controls="hero-composition-menu"
          aria-expanded={isMenuOpen}
          className="grid h-12 w-12 place-items-center rounded-full border border-[#b01838]/12 bg-[#fff8ef]/86 text-[#b01838] shadow-[0_12px_34px_rgba(99,54,40,0.14)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-[#fff8ef]"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          <span aria-hidden="true" className="grid h-5 w-5 grid-cols-2 gap-1">
            <span className="rounded-full bg-current" />
            <span className="rounded-full bg-current opacity-55" />
            <span className="rounded-full bg-current opacity-55" />
            <span className="rounded-full bg-current" />
          </span>
        </button>
      </div>

      <CompositionPreview activeVariant={activeVariant} />
    </div>
  );
}
