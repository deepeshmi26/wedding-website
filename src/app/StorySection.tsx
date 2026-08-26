import Image from "next/image";

import { storyPhotos } from "./weddingData";

type StoryPhoto = {
  alt: string;
  height: number;
  src: string;
  width: number;
};

const storyPhotosGrid: StoryPhoto[] = [
  {
    alt: "Rajshree and Deepesh laughing together on a bench",
    height: 4672,
    src: storyPhotos.sharedLaughter,
    width: 7008,
  },
  {
    alt: "Rajshree and Deepesh sharing a laugh together",
    height: 4672,
    src: storyPhotos.sharedLaughterPortrait,
    width: 2561,
  },
  {
    alt: "Rajshree and Deepesh looking at each other",
    height: 7008,
    src: storyPhotos.classicCouple,
    width: 4672,
  },
  {
    alt: "Rajshree and Deepesh with their wedding rings",
    height: 7008,
    src: storyPhotos.closeCouple,
    width: 4672,
  },
  {
    alt: "Rajshree and Deepesh showing their wedding rings",
    height: 7008,
    src: storyPhotos.handsDetail,
    width: 4672,
  },
];

export function StorySection() {
  return (
    <section id="story" className="relative bg-[#fcf8f0] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="font-serif text-[2.75rem] leading-[1.02] text-[#39202b] sm:text-6xl">A few favorite frames, shared with our favorite people.</h2>
          <p className="mt-8 max-w-[34rem] text-[1.02rem] leading-8 text-[#704b4c]">Here are a few pieces of us before the celebrations begin: quiet smiles, small details, and the people who have seen us become who we are together. We cannot wait to gather with you.</p>
          <div className="mt-10 flex flex-col items-start gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#842b45] sm:flex-row sm:gap-5">
            <span>Rajshree &amp; Deepesh</span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-[#f0a72f] sm:block" />
            <span>3 &amp; 4 Dec 2026</span>
          </div>
        </div>

        <div className="mt-14 columns-2 gap-3 sm:mt-16 sm:columns-3 sm:gap-4 lg:columns-4">
          {storyPhotosGrid.map((photo) => (
            <figure
              key={photo.src}
              className="mb-3 break-inside-avoid rounded-[0.7rem] bg-[#fffdf8] p-1.5 shadow-[0_16px_36px_rgba(87,43,50,0.11)] sm:mb-4 sm:p-2"
            >
              <Image
                alt={photo.alt}
                className="h-auto w-full rounded-[0.45rem]"
                height={photo.height}
                quality={86}
                sizes="(max-width: 639px) 44vw, (max-width: 1023px) 28vw, 22vw"
                src={photo.src}
                width={photo.width}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
