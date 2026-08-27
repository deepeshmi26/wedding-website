import { CountdownDisplay } from "./Countdown";

export function CountdownSection() {
  return (
    <section aria-label="Countdown to the wedding" className="bg-[#f8f3ea] px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto flex max-w-[25rem] justify-center">
        <CountdownDisplay compact />
      </div>
    </section>
  );
}
