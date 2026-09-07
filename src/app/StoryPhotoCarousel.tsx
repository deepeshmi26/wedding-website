"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export type CarouselPhoto = {
  height: number;
  objectPosition?: string;
  src: string;
  width: number;
};

type StoryPhotoCarouselProps = {
  photos: Array<CarouselPhoto & { alt: string; caption: string }>;
};

export function StoryPhotoCarousel({ photos }: StoryPhotoCarouselProps) {
  const shouldReduceMotion = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollBackward, setCanScrollBackward] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);
  const [viewportRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    duration: shouldReduceMotion ? 0 : 28,
    loop: false,
  });

  const syncControls = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollBackward(emblaApi.canScrollPrev());
    setCanScrollForward(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const animationFrame = window.requestAnimationFrame(syncControls);
    emblaApi.on("reInit", syncControls).on("select", syncControls);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      emblaApi.off("reInit", syncControls).off("select", syncControls);
    };
  }, [emblaApi, syncControls]);

  return (
    <div className="mt-12 sm:mt-14">
      <div className="-mx-5 overflow-hidden sm:-mx-8 lg:-mx-12" ref={viewportRef}>
        <div
          aria-label="Photo album"
          className="flex touch-pan-y [-webkit-tap-highlight-color:transparent]"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") emblaApi?.scrollPrev();
            if (event.key === "ArrowRight") emblaApi?.scrollNext();
          }}
          role="region"
          tabIndex={0}
        >
          {photos.map((photo, index) => {
            const isSelected = index === selectedIndex;

            return (
              <div className="min-w-0 flex-[0_0_86%] px-2.5 sm:flex-[0_0_68%] sm:px-3.5 lg:flex-[0_0_56%]" key={photo.src}>
                <figure
                  aria-hidden={!isSelected}
                  className={`bg-[#fffdf8] p-2.5 pb-4 shadow-[0_18px_36px_rgba(87,43,50,0.14)] transition-[transform,opacity] duration-500 ease-out sm:p-3 sm:pb-5 ${
                    isSelected ? "scale-100 opacity-100" : "scale-[0.96] opacity-55"
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#e7ded4]">
                    <Image
                      alt={photo.alt}
                      className="object-cover"
                      fill
                      quality={88}
                      sizes="(max-width: 639px) 82vw, (max-width: 1023px) 64vw, 52vw"
                      src={photo.src}
                      style={{ objectPosition: photo.objectPosition }}
                    />
                  </div>
                  <figcaption className="px-1 pt-3 font-serif text-[1.25rem] italic leading-[1.1] text-[#754b49] sm:pt-4 sm:text-[1.4rem]">
                    {photo.caption}
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-[42rem] items-center justify-between gap-4 px-1 sm:mt-7">
        <p aria-live="polite" className="font-serif text-[1.05rem] italic text-[#754b49]">
          {String(selectedIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
        </p>
        <div aria-hidden="true" className="h-px flex-1 bg-[#c68c66]/35" />
        <div className="flex items-center gap-2">
          <button
            aria-label="Previous photo"
            className="flex h-10 w-10 items-center justify-center border border-[#a66259]/45 text-[#842b45] transition hover:border-[#842b45] hover:bg-[#842b45] hover:text-[#fffdf8] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#a66259]/45 disabled:hover:bg-transparent disabled:hover:text-[#842b45]"
            disabled={!canScrollBackward}
            onClick={() => emblaApi?.scrollPrev()}
            type="button"
          >
            <ArrowLeft aria-hidden="true" size={18} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Next photo"
            className="flex h-10 w-10 items-center justify-center border border-[#a66259]/45 text-[#842b45] transition hover:border-[#842b45] hover:bg-[#842b45] hover:text-[#fffdf8] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#a66259]/45 disabled:hover:bg-transparent disabled:hover:text-[#842b45]"
            disabled={!canScrollForward}
            onClick={() => emblaApi?.scrollNext()}
            type="button"
          >
            <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
