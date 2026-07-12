const events = [
  {
    name: "Mehendi",
    date: "Friday, 14 February",
    time: "4:00 PM",
    place: "Garden Courtyard",
  },
  {
    name: "Sangeet",
    date: "Friday, 14 February",
    time: "7:30 PM",
    place: "The Grand Hall",
  },
  {
    name: "Wedding",
    date: "Saturday, 15 February",
    time: "10:30 AM",
    place: "Mandap Lawn",
  },
];

const navItems = ["Story", "Events", "Travel", "RSVP"];

const heroPetals = [
  "left-[12%] top-[18%] h-7 w-3 rotate-[28deg] bg-[#f0a72f]",
  "left-[20%] top-[32%] h-5 w-2.5 -rotate-[18deg] bg-[#e45d3c]",
  "left-[28%] top-[20%] h-6 w-3 rotate-[54deg] bg-[#d23f73]",
  "right-[16%] top-[19%] h-7 w-3 -rotate-[34deg] bg-[#b01838]",
  "right-[25%] top-[34%] h-5 w-2.5 rotate-[22deg] bg-[#f0a72f]",
  "right-[8%] top-[42%] h-6 w-3 rotate-[58deg] bg-[#e45d3c]",
  "left-[9%] top-[52%] h-5 w-2.5 -rotate-[42deg] bg-[#d23f73]",
  "right-[14%] top-[58%] h-5 w-2.5 rotate-[18deg] bg-[#f0a72f]",
  "left-[38%] top-[14%] hidden h-4 w-2 rotate-[18deg] bg-[#b01838] sm:block",
  "right-[37%] top-[13%] hidden h-4 w-2 -rotate-[24deg] bg-[#e45d3c] sm:block",
];

const photoMoments = [
  {
    label: "dance-floor laughs",
    rotate: "-rotate-3",
    bg: "from-[#f5b83b] via-[#ec6a42] to-[#b01838]",
    placement: "left-[4%] top-[8%] w-[44%] lg:left-[8%] lg:top-[6%] lg:w-[46%]",
  },
  {
    label: "mehendi smiles",
    rotate: "rotate-2",
    bg: "from-[#e95d95] via-[#f0a72f] to-[#fff4a8]",
    placement: "right-[2%] top-[22%] w-[40%] lg:right-[8%] lg:top-[18%] lg:w-[42%]",
  },
  {
    label: "family hugs",
    rotate: "-rotate-1",
    bg: "from-[#ffcf6b] via-[#d23f73] to-[#8f1830]",
    placement: "left-[30%] bottom-[0%] w-[44%] lg:left-[30%] lg:bottom-[4%] lg:w-[45%]",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff4e1] text-[#321b12]">
      <section className="relative flex min-h-screen flex-col px-5 py-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(240,167,47,0.32),transparent_30%),radial-gradient(circle_at_84%_14%,rgba(211,63,115,0.18),transparent_28%),radial-gradient(circle_at_74%_78%,rgba(228,93,60,0.17),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.64),rgba(255,244,225,0.7))]" />
        <div aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute left-[8%] top-[16%] h-24 w-24 rounded-full bg-[#f0a72f]/10 blur-2xl" />
          <div className="absolute right-[10%] top-[22%] h-28 w-28 rounded-full bg-[#d23f73]/10 blur-2xl" />
          {heroPetals.map((petal, index) => (
            <span
              className={`absolute rounded-[70%_30%_70%_30%] opacity-80 shadow-[0_8px_18px_rgba(176,24,56,0.13)] ${petal}`}
              key={`${petal}-${index}`}
            />
          ))}
        </div>

        <nav className="relative z-10 flex items-center justify-between gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#774231]">
          <a href="#" aria-label="Wedding homepage" className="font-serif text-xl normal-case tracking-normal text-[#b01838]">
            A & M
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

        <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 py-14 text-center lg:grid-cols-[0.9fr_1.1fr] lg:py-10 lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <p className="mb-5 max-w-sm text-[0.72rem] font-bold uppercase tracking-[0.34em] text-[#c24a2b]">
              Come for the vows, stay for the dancing
            </p>
            <h1 className="max-w-4xl font-serif text-[clamp(3.45rem,10vw,7.4rem)] leading-[0.9] text-[#b01838]">
              Aarav
              <span className="block text-[#ee9b22]">&</span>
              Meera
            </h1>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-14 bg-[#f0a72f]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#d23f73]" />
              <span className="h-px w-14 bg-[#f0a72f]" />
            </div>
            <p className="mt-8 max-w-2xl text-balance text-lg leading-8 text-[#633628] sm:text-xl">
              We are gathering our favorite people for music, food, happy chaos,
              loud laughter, and a weekend that feels like one big family party.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#774231] sm:flex-row sm:gap-6 lg:items-start">
              <span>15 February 2027</span>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-[#f0a72f] sm:block" />
              <span>Jaipur, India</span>
            </div>
          </div>

          <div className="relative mx-auto h-[340px] w-full max-w-[430px] lg:h-[540px] lg:max-w-none">
            <div className="absolute left-[18%] top-[18%] h-48 w-48 rounded-full bg-[#f0a72f]/20 blur-3xl lg:left-[26%] lg:top-[20%] lg:h-72 lg:w-72" />
            {photoMoments.map((moment) => (
              <div
                className={`absolute ${moment.placement} ${moment.rotate} rounded-[1.25rem] bg-white/75 p-2 shadow-[0_18px_45px_rgba(176,24,56,0.18)]`}
                key={moment.label}
              >
                <div
                  className={`flex aspect-[4/5] items-end rounded-[0.95rem] bg-gradient-to-br ${moment.bg} p-3 text-left lg:p-4`}
                >
                  <span className="max-w-[7rem] text-[0.56rem] font-bold uppercase leading-4 tracking-[0.18em] text-white drop-shadow lg:text-[0.62rem]">
                    {moment.label}
                  </span>
                </div>
              </div>
            ))}
            <div className="absolute bottom-[18%] right-[8%] rounded-full bg-[#fff8ef]/85 px-4 py-3 text-left shadow-[0_14px_36px_rgba(176,24,56,0.13)] lg:bottom-[20%] lg:right-[2%]">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[#b01838]">
                music
              </p>
              <p className="mt-1 font-serif text-2xl leading-none text-[#ee9b22]">
                all night
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="bg-[linear-gradient(135deg,#94162e,#c13a27)] px-5 py-20 text-[#fff8ef] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.35em] text-[#ffd27d]">
              The weekend
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">
              Three gatherings, one bright beginning.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.name}
                className="border border-[#ffd27d]/45 bg-[#fff8ef]/10 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-[#fff8ef]/14"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#ffd27d]">
                  {event.date}
                </p>
                <h3 className="mt-8 font-serif text-4xl">{event.name}</h3>
                <div className="mt-6 space-y-2 text-base leading-7 text-[#ffe8c7]">
                  <p>{event.time}</p>
                  <p>{event.place}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="aspect-[4/5] border border-[#d69b52]/45 bg-[#f7dfbd] p-4">
            <div className="flex h-full items-center justify-center border border-[#a31f34]/20 bg-[#fff8ef] text-center">
              <p className="max-w-xs font-serif text-4xl leading-tight text-[#8f1830]">
                Add a favorite photo here
              </p>
            </div>
          </div>

          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.35em] text-[#b86622]">
              Our story
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.98] text-[#321b12] sm:text-7xl">
              A celebration that should feel like us.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#633628]">
              This section is where the design can become personal: a small
              story, a favorite place, a shared ritual, or a photograph that
              makes the whole site feel less like a template.
            </p>
            <a
              href="#travel"
              className="mt-10 inline-flex rounded-full border border-[#a31f34]/25 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#8f1830] transition hover:bg-[#a31f34] hover:text-[#fff8ef]"
            >
              Guest details
            </a>
          </div>
        </div>
      </section>

      <section id="travel" className="border-y border-[#d69b52]/35 bg-[#f7dfbd] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.35em] text-[#8f1830]">
              Travel
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight">Come for the vows, stay for Jaipur.</h2>
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
