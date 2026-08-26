import Image from "next/image";

import { storyPhotos } from "./weddingData";

export function StorySection() {
  return (
    <section id="story" className="relative px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="relative mx-auto h-[520px] w-full max-w-[520px] sm:h-[620px] lg:mx-0 lg:max-w-none">
          <div className="absolute left-0 top-0 z-10 h-[76%] w-[78%] overflow-hidden rounded-[1.15rem] bg-[#fff8ef] p-2 shadow-[0_22px_60px_rgba(99,54,40,0.16)]">
            <div className="relative h-full overflow-hidden rounded-[0.85rem]">
              <Image alt="Rajshree and Deepesh smiling close together" className="object-cover object-[48%_48%]" fill quality={88} sizes="(max-width: 640px) 78vw, (max-width: 1024px) 410px, 520px" src={storyPhotos.closeCouple} />
            </div>
          </div>
          <div className="absolute bottom-[9%] right-[1%] z-30 h-[32%] w-[44%] rotate-[1.5deg] overflow-hidden rounded-[1rem] bg-[#fff8ef] p-2 shadow-[0_18px_48px_rgba(176,24,56,0.16)]">
            <div className="relative h-full overflow-hidden rounded-[0.75rem]">
              <Image alt="Rajshree and Deepesh showing their rings" className="object-cover object-[50%_60%]" fill quality={88} sizes="(max-width: 640px) 44vw, (max-width: 1024px) 230px, 290px" src={storyPhotos.handsDetail} />
            </div>
          </div>
          <div className="absolute bottom-[1%] left-[11%] z-20 h-[22%] w-[34%] -rotate-[1.5deg] overflow-hidden rounded-[0.9rem] bg-[#fff8ef] p-2 shadow-[0_14px_38px_rgba(99,54,40,0.13)]">
            <div className="relative h-full overflow-hidden rounded-[0.65rem]">
              <Image alt="Rajshree and Deepesh looking at each other" className="object-cover object-[50%_54%]" fill quality={82} sizes="(max-width: 640px) 34vw, (max-width: 1024px) 180px, 225px" src={storyPhotos.classicCouple} />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.35em] text-[#b86622]">Our story</p>
          <h2 className="mt-4 font-serif text-5xl leading-[0.98] text-[#321b12] sm:text-6xl">A few favorite frames, shared with our favorite people.</h2>
          <p className="mt-8 text-lg leading-8 text-[#633628]">Here are a few pieces of us before the celebrations begin: quiet smiles, small details, and the people who have seen us become who we are together. We cannot wait to gather with you.</p>
          <div className="mt-10 flex flex-col items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#8f1830] sm:flex-row sm:justify-center sm:gap-5 lg:justify-start">
            <span>Rajshree &amp; Deepesh</span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-[#f0a72f] sm:block" />
            <span>3 &amp; 4 Dec 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
