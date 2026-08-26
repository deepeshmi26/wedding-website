import Image from "next/image";

export function RsvpSection() {
  return (
    <section id="rsvp" className="relative overflow-hidden bg-[linear-gradient(180deg,#fbefdf_0%,#f5dfbc_100%)] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(240,167,47,0.16),transparent_24%),radial-gradient(circle_at_84%_78%,rgba(176,24,56,0.08),transparent_26%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.35em] text-[#b86622]">RSVP</p>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-5xl">
            <div aria-hidden="true" className="absolute inset-6 rounded-[1.6rem] bg-[radial-gradient(circle_at_50%_40%,rgba(120,74,40,0.14),transparent_70%)] blur-2xl" />
            <div className="relative rotate-[-1deg] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(249,239,220,0.98),rgba(238,220,190,0.98))] px-5 py-6 shadow-[0_28px_55px_rgba(101,61,35,0.18)] sm:px-8 sm:py-8 lg:rotate-[-2deg]">
              <div aria-hidden="true" className="absolute inset-0 rounded-[1.6rem] opacity-[0.13] mix-blend-multiply bg-[radial-gradient(circle_at_18%_22%,rgba(134,96,56,0.34)_0_0.6px,transparent_0.7px),radial-gradient(circle_at_74%_18%,rgba(158,116,68,0.28)_0_0.55px,transparent_0.7px),radial-gradient(circle_at_32%_76%,rgba(120,84,44,0.22)_0_0.5px,transparent_0.65px),radial-gradient(circle_at_82%_70%,rgba(150,112,69,0.24)_0_0.6px,transparent_0.72px)] [background-size:18px_18px,22px_22px,20px_20px,24px_24px]" />
              <div aria-hidden="true" className="absolute inset-[13px] rounded-[1rem] border border-[#d8b27d]/55" />
              <div className="relative z-10 grid gap-10 px-5 py-9 sm:px-8 sm:py-11 lg:grid-cols-[minmax(0,1.15fr)_minmax(14rem,0.85fr)] lg:gap-12 lg:px-12">
                <div className="flex flex-col items-start">
                  <p className="font-serif text-[1.72rem] leading-[1.22] text-[#5e3324] sm:text-[1.9rem]">Save us a yes for the wedding weekend.</p>
                  <p className="mt-4 max-w-[18rem] text-[0.98rem] leading-7 text-[#6b4334]">Send us your reply when you are ready. We cannot wait to celebrate with you in Kolkata.</p>
                  <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#a3633d]">Rajshree &amp; Deepesh</p>
                  <a href="#" className="group mt-8 inline-flex -rotate-[1deg] items-center rounded-[0.4rem] border-2 border-[#8f1830] bg-[#fff5e5] px-3 py-2.5 text-left shadow-[3px_4px_0_rgba(143,24,48,0.18)] transition hover:-translate-y-0.5 hover:rotate-0 hover:shadow-[4px_5px_0_rgba(143,24,48,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8f1830]">
                    <span className="border-r border-dashed border-[#b86622]/70 pr-2 text-base leading-none text-[#8f1830] transition group-hover:translate-x-0.5">&rarr;</span>
                    <span className="pl-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#6b3028]">RSVP</span>
                  </a>
                  <div className="mt-9 flex w-full items-center justify-between gap-4 border-t border-dashed border-[#c8965f]/55 pt-6 lg:hidden">
                    <div>
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#a3633d]">Kolkata, India</p>
                      <p className="mt-1 font-serif text-[1.55rem] text-[#5e3324]">3 &amp; 4 December</p>
                    </div>
                    <div className="relative h-20 w-20 shrink-0 rotate-[8deg] opacity-55 mix-blend-multiply">
                      <Image src="/graphics/postmark-raster.png" alt="" fill className="object-contain" sizes="80px" />
                    </div>
                  </div>
                </div>
                <div className="hidden border-l border-dashed border-[#c8965f]/55 pl-12 lg:block">
                  <div className="flex items-start justify-between gap-5 lg:block">
                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#a3633d]">Kolkata, India</p>
                      <p className="mt-2 font-serif text-2xl text-[#5e3324]">3 &amp; 4 December</p>
                    </div>
                    <div className="relative h-24 w-24 shrink-0 rotate-[8deg] opacity-55 mix-blend-multiply sm:h-28 sm:w-28 lg:mt-8 lg:h-36 lg:w-36">
                      <Image src="/graphics/postmark-raster.png" alt="" fill className="object-contain" sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 144px" />
                    </div>
                  </div>
                  <div aria-hidden="true" className="mt-7 space-y-4 lg:mt-10">
                    <div className="h-px w-full bg-[#d6b488]/65" />
                    <div className="h-px w-[86%] bg-[#d6b488]/55" />
                    <div className="h-px w-[70%] bg-[#d6b488]/45" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
