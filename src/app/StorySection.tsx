import Image from "next/image";
import { useTranslations } from "next-intl";

import { storyPhotos } from "./weddingData";

type StoryPhoto = {
  copyIndex: number;
  height: number;
  layoutClassName?: string;
  rotation?: string;
  src: string;
  width: number;
};

const storyPhotosGrid: StoryPhoto[] = [
  {
    copyIndex: 0,
    height: 2048,
    layoutClassName: "row-span-3",
    src: "/photos/IMG-20240311-WA0000.jpg",
    width: 1536,
  },
  {
    copyIndex: 3,
    height: 2220,
    layoutClassName: "row-span-2 sm:col-span-2",
    src: "/photos/second-date.jpg",
    width: 2979,
  },
  {
    copyIndex: 4,
    height: 1024,
    layoutClassName: "col-start-2 row-span-2 sm:col-start-auto sm:col-span-2",
    rotation: "rotate-[0.55deg]",
    src: "/photos/rav02938-hero-clean.png",
    width: 1536,
  },
  {
    copyIndex: 11,
    height: 1013,
    layoutClassName: "col-span-2 row-span-2 sm:col-span-3 sm:row-span-5 lg:col-span-4 lg:row-span-6",
    rotation: "rotate-[-0.45deg]",
    src: "/photos/couple-portrait-retouched.png",
    width: 1552,
  },
  {
    copyIndex: 6,
    height: 7008,
    layoutClassName: "row-span-3",
    src: storyPhotos.classicCouple,
    width: 4672,
  },
  {
    copyIndex: 5,
    height: 3648,
    layoutClassName: "row-span-3",
    rotation: "rotate-[-1deg]",
    src: "/photos/PXL_20260726_161715171.RAW-01.jpg",
    width: 2736,
  },
  {
    copyIndex: 8,
    height: 3396,
    layoutClassName: "row-span-3",
    src: "/photos/PXL_20251002_101627009~2.jpg",
    width: 2613,
  },
  {
    copyIndex: 7,
    height: 3648,
    layoutClassName: "row-span-3",
    rotation: "rotate-[0.8deg]",
    src: "/photos/PXL_20260807_202233069.PORTRAIT.jpg",
    width: 2736,
  },
  {
    copyIndex: 9,
    height: 3648,
    layoutClassName: "row-span-3",
    rotation: "rotate-[-0.7deg]",
    src: "/photos/PXL_20260808_105044174.RAW-01.jpg",
    width: 2736,
  },
  {
    copyIndex: 1,
    height: 2048,
    layoutClassName: "row-span-3",
    src: "/photos/IMG-20260327-WA0044.jpg",
    width: 1536,
  },
  {
    copyIndex: 2,
    height: 7008,
    layoutClassName: "row-span-3",
    rotation: "rotate-[1.15deg]",
    src: storyPhotos.closeCouple,
    width: 4672,
  },
  {
    copyIndex: 10,
    height: 4032,
    layoutClassName: "row-span-3",
    src: "/photos/IMG-20260802-WA0016.jpg",
    width: 3024,
  },
];

export function StorySection() {
  const t = useTranslations();
  const photoCopy = t.raw("story.photos") as Array<{ alt: string; caption: string }>;
  return (
    <section id="story" className="relative bg-[#fcf8f0] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#842b45]">{t("story.eyebrow")}</p>
          <h2 className="mt-5 font-serif font-medium text-[#39202b]">
            <span className="block text-[2.35rem] leading-[1.06] sm:text-5xl">{t("story.titleOne")}</span>
            <span className="mt-1 block pb-1 text-[3.45rem] italic leading-[0.98] text-[#842b45] sm:text-7xl">{t("story.titleTwo")}</span>
          </h2>
          <p className="mt-7 max-w-[34rem] text-[1.02rem] leading-8 text-[#704b4c]">{t("story.intro")}</p>
        </div>

        <div aria-label={t("story.chatLabel")} className="mt-12 max-w-xl overflow-hidden border border-[#d5d0c7] bg-[#efeae2] shadow-[0_12px_28px_rgba(91,52,45,0.1)] sm:mt-14">
          <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white">
            <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d9fdd3] text-[0.62rem] font-bold tracking-[0.08em] text-[#075e54]">R+D</span>
            <div>
              <p className="text-sm font-semibold">{t("story.chatTitle")}</p>
              <p className="text-[0.6rem] text-white/70">{t("story.chatMembers")}</p>
            </div>
          </div>
          <div className="space-y-3 bg-[radial-gradient(rgba(115,102,87,0.1)_0.7px,transparent_0.8px)] bg-[size:12px_12px] px-4 py-4 sm:px-5">
            <div className="flex justify-start">
              <div className="max-w-[76%] rounded-[0.5rem] bg-white px-3 py-2 text-[#111b21] shadow-[0_1px_1px_rgba(11,20,26,0.13)] sm:max-w-[62%]">
                <p className="text-[0.9rem] leading-[1.28]">{t("story.chat.0")}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[76%] rounded-[0.5rem] bg-[#d9fdd3] px-3 py-2 text-[#111b21] shadow-[0_1px_1px_rgba(11,20,26,0.13)] sm:max-w-[62%]">
                <p className="text-[0.9rem] leading-[1.28]">{t("story.chat.1")}</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[76%] rounded-[0.5rem] bg-white px-3 py-2 text-[#111b21] shadow-[0_1px_1px_rgba(11,20,26,0.13)] sm:max-w-[62%]">
                <p className="text-[0.9rem] leading-[1.28]">{t("story.chat.2")}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[76%] rounded-[0.5rem] bg-[#d9fdd3] px-3 py-2 text-[#111b21] shadow-[0_1px_1px_rgba(11,20,26,0.13)] sm:max-w-[62%]">
                <p className="text-[0.9rem] leading-[1.28]">{t("story.chat.3")}</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[76%] rounded-[0.5rem] bg-white px-3 py-2 text-[#111b21] shadow-[0_1px_1px_rgba(11,20,26,0.13)] sm:max-w-[62%]">
                <p className="text-[0.9rem] leading-[1.28]">{t("story.chat.4")}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[76%] rounded-[0.5rem] bg-[#d9fdd3] px-3 py-2 text-[#111b21] shadow-[0_1px_1px_rgba(11,20,26,0.13)] sm:max-w-[62%]">
                <p className="text-[0.9rem] leading-[1.28]">{t("story.chat.5")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid auto-rows-[5rem] grid-cols-2 gap-3 sm:mt-14 sm:auto-rows-[6rem] sm:grid-cols-3 sm:gap-4 lg:auto-rows-[7rem] lg:grid-cols-4">
          {storyPhotosGrid.map((photo) => (
            <figure
              key={photo.src}
              className={`flex min-h-0 flex-col overflow-hidden bg-[#fffdf8] p-2 pb-3 shadow-[0_14px_30px_rgba(87,43,50,0.12)] transition-transform duration-300 hover:z-10 hover:scale-[1.02] sm:p-2.5 sm:pb-4 ${photo.layoutClassName ?? ""} ${photo.rotation ?? ""}`}
            >
              <Image
                alt={photoCopy[photo.copyIndex].alt}
                className="h-0 min-h-0 w-full flex-1 object-cover"
                height={photo.height}
                quality={86}
                sizes="(max-width: 639px) 44vw, (max-width: 1023px) 28vw, 22vw"
                src={photo.src}
                width={photo.width}
              />
              <figcaption className="px-1 pt-2 font-serif text-[1.05rem] italic leading-none text-[#754b49] sm:pt-2.5 sm:text-[1.15rem]">
                {photoCopy[photo.copyIndex].caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
