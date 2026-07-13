import { HeroCompositionSwitcher } from "./HeroCompositionSwitcher";

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
