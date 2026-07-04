import Image from "next/image";
import { site } from "@/lib/site";
import { ButtonLink } from "./button-link";

export function Hero() {
  return (
    <section className="hero-section relative min-h-[calc(100svh-72px)] max-w-full overflow-hidden bg-olive text-cream sm:min-h-[calc(100svh-86px)]">
      <Image
        src="/images/hero-furniture-showroom.png"
        alt="Premium furniture showroom interior"
        fill
        priority
        sizes="100vw"
        className="hero-parallax scale-110 object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,35,27,0.98)_0%,rgba(26,35,27,0.88)_48%,rgba(26,35,27,0.48)_100%)] lg:bg-[linear-gradient(90deg,rgba(26,35,27,0.98)_0%,rgba(26,35,27,0.88)_42%,rgba(26,35,27,0.34)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-olive to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100svh-72px)] w-full max-w-[1440px] min-w-0 grid-rows-[1fr_auto] overflow-hidden px-4 py-8 sm:min-h-[calc(100svh-86px)] sm:px-8 sm:py-10 xl:px-10">
        <div className="grid min-w-0 items-center gap-8 py-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_220px]">
          <div className="min-w-0 max-w-full lg:max-w-5xl">
            <div className="hero-reveal mb-6 flex max-w-xl flex-col items-start gap-4 sm:mb-8 sm:flex-row sm:items-center sm:gap-5">
              <span className="h-px w-20 bg-gold sm:flex-1" />
              <p className="max-w-[20rem] text-[11px] font-black uppercase tracking-[0.22em] text-gold sm:max-w-none sm:text-xs sm:tracking-[0.34em]">
                Visitor registrations now open
              </p>
            </div>
            <h1 className="hero-title hero-reveal max-w-full font-montserrat font-black uppercase tracking-normal">
              Furniture
              <span className="block text-cream/76">Trade</span>
              <span className="block text-cream/76">Show</span>
            </h1>
            <div className="hero-reveal mt-7 grid w-full max-w-full gap-5 sm:mt-8 lg:max-w-4xl lg:grid-cols-[0.55fr_1fr]">
              <p className="max-w-[21rem] break-words font-montserrat text-sm font-black uppercase leading-tight tracking-[0.03em] text-gold sm:max-w-none sm:text-xl sm:tracking-[0.08em]">
                Pakistan&apos;s 1st dedicated furniture industry event
              </p>
              <p className="max-w-[21rem] break-words text-sm leading-7 text-cream/74 sm:max-w-full sm:text-lg sm:leading-8 lg:max-w-2xl">
                A focused 3-day platform for manufacturers, retailers,
                interior designers, suppliers, and trade buyers at {site.venue}.
              </p>
            </div>
            <div className="hero-reveal mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <ButtonLink href="/register">Register Free</ButtonLink>
              <ButtonLink href="/book-booth" variant="light">
                Book a Booth
              </ButtonLink>
            </div>
          </div>

          <div className="hero-reveal hidden h-full border-l border-gold/45 pl-8 lg:block align-center">
            <p className="font-montserrat text-[clamp(5.5rem,7vw,7.6rem)] font-black leading-none text-gold">
              07<br />08<br />09
            </p>
            <p className="mt-3 text-xs font-black uppercase tracking-[0.32em] text-cream/62">
              August 2026
            </p>
            <div className="mt-12 h-px bg-gold/45" />
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-cream/66">
              Expo Center
            </p>
            <p className="mt-2 font-montserrat text-3xl font-black text-cream">
              Karachi
            </p>
          </div>
        </div>

        <div className="hero-reveal grid min-w-0 gap-px border-y border-cream/16 bg-cream/16 text-[11px] font-black uppercase tracking-[0.12em] text-cream/72 sm:grid-cols-3 sm:text-xs sm:tracking-[0.18em]">
          <div className="min-w-0 break-words bg-olive/70 p-4">7, 8, 9 August 2026</div>
          <div className="min-w-0 break-words bg-olive/70 p-4">Expo Center, Karachi</div>
          <div className="min-w-0 break-words bg-olive/70 p-4">Booths from {site.boothPrice}</div>
        </div>
      </div>
    </section>
  );
}
