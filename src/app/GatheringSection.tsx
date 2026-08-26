import Image from "next/image";

import { CountdownDisplay } from "./Countdown";
import { GatheringMessage } from "./GatheringMessage";

export function GatheringSection() {
  return (
    <section
      aria-labelledby="gathering-heading"
      className="relative min-h-[100dvh] overflow-hidden bg-[#fff4e1] px-5 py-6 sm:px-8 sm:py-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-[min(100vw,64rem)] opacity-75"
      >
        <Image
          src="/graphics/music-floral-frame-v1.png"
          alt=""
          width={1024}
          height={1536}
          className="h-auto w-full"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-3rem)] max-w-3xl items-start justify-center pt-16 text-center sm:min-h-[calc(100dvh-4rem)] sm:items-center sm:pt-0">
        <div className="flex w-full flex-col items-center gap-8 sm:gap-10">
          <div className="flex w-full justify-center">
            <CountdownDisplay />
          </div>
          <div className="ml-auto flex min-h-[17rem] w-[calc(100%-4.5rem)] items-center justify-center sm:ml-0 sm:min-h-[15rem] sm:w-full">
            <GatheringMessage />
          </div>
        </div>
      </div>
    </section>
  );
}
