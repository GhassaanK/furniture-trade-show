import Image from "next/image";
import Link from "next/link";
import { BoothTiers } from "@/components/booth-tiers";
import { ButtonLink } from "@/components/button-link";
import { FAQList } from "@/components/faq";
import { Hero } from "@/components/hero";
import { categories, site } from "@/lib/site";

const audience = [
  ["01", "Manufacturers", "Launch collections, meet buyers, and build early authority."],
  ["02", "Retailers", "Source furniture lines and speak directly with makers."],
  ["03", "Designers", "Discover materials, finishes, and suppliers for upcoming projects."],
  ["04", "Trade buyers", "Compare products, pricing conversations, and supply opportunities."],
];

const exhibitorSignals = [
  ["Buyer rooms", "Retailers, designers, suppliers, procurement teams"],
  ["Hall proof", "Floor plan, booth zones, and Expo Center placement"],
  ["Tiered entry", "Silver to Platinum spaces from PKR 60,000"],
];

const tickerItems = [
  "Furniture expo Karachi",
  "Furniture trade show Pakistan",
  "Visitor registrations now open",
  "Limited exhibitor spaces available",
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* organizer credits */}
      <section className="bg-cream px-5 py-5 sm:px-8 lg:py-6 xl:px-10">
        <a
          href={site.organizerUrl}
          target="_blank"
          rel="noreferrer"
          className="group mx-auto grid max-w-[1440px] overflow-hidden rounded-[20px] border border-olive/10 bg-olive text-cream shadow-[0_22px_70px_rgba(26,35,27,0.16)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(26,35,27,0.22)] lg:grid-cols-[minmax(300px,0.72fr)_1fr_auto]"
          aria-label={`Visit ${site.organizer}`}
        >
          <div className="relative border-b border-cream/10 p-5 sm:p-6 lg:border-b-0 lg:border-r">
            <div className="absolute inset-y-0 left-0 w-1 bg-gold" />
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-gold sm:text-xs">
              Brought to you by
            </p>
            <div className="relative h-24 w-full max-w-[320px] overflow-hidden rounded-[14px] border border-gold/20 bg-olive shadow-[0_18px_44px_rgba(0,0,0,0.22)] transition duration-500 group-hover:border-gold/55 group-hover:shadow-[0_22px_54px_rgba(0,0,0,0.28)] sm:h-28">
              <Image
                src="/images/horizon-black-bg.jpeg"
                alt="Horizon Events logo"
                fill
                sizes="(min-width: 1024px) 320px, calc(100vw - 80px)"
                className="object-cover object-[center_52%]"
              />
            </div>
          </div>

          <div className="flex items-center p-5 sm:p-6">
            <p className="max-w-2xl font-montserrat text-xl font-black uppercase leading-tight text-cream sm:text-2xl">
              Event management and on-ground execution partner for
              Pakistan&apos;s 1st Furniture Trade Show.
            </p>
          </div>

          <div className="flex items-center justify-start border-t border-cream/10 p-5 sm:p-6 lg:justify-center lg:border-l lg:border-t-0">
            <span className="inline-flex min-h-11 items-center rounded-[14px] border border-gold/45 px-5 text-xs font-black uppercase tracking-[0.18em] text-gold transition duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-cream">
              Visit website
            </span>
          </div>
        </a>
      </section>

      {/* first edition section */}
      <section className="section-spacing overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 xl:px-10">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div className="fade-up">
              <p className="mb-6 text-xs font-black uppercase tracking-[0.32em] text-gold">
                The first edition
              </p>
              <h2 className="font-montserrat text-[clamp(3.4rem,8vw,8.5rem)] font-black uppercase leading-[0.82] text-olive">
                Built for serious furniture business.
              </h2>
            </div>
            <div className="fade-up max-w-2xl border-l border-gold/45 pl-7">
              <p className="text-xl leading-9 text-olive/74">
                Pakistan&apos;s 1st Furniture Trade Show is designed as a clean,
                high-trust meeting point for manufacturers, retailers, interior
                designers, suppliers, and trade buyers.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/register">Register Free</ButtonLink>
                <ButtonLink href="/book-booth" variant="secondary">
                  Book a Booth
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="stagger-group mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audience.map(([number, title, text]) => (
              <article
                key={title}
                className="stagger-card surface group rounded-2xl p-7 transition duration-500 hover:-translate-y-2 hover:bg-olive hover:text-cream"
              >
                <p className="font-montserrat text-5xl font-black text-gold">
                  {number}
                </p>
                <h3 className="mt-8 font-montserrat text-2xl font-black uppercase text-current">
                  {title}
                </h3>
                <p className="mt-4 leading-7 text-current/68">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-olive py-5 text-cream">
        <div className="marquee-track flex gap-8 text-xs font-black uppercase tracking-[0.32em] text-gold">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`} className="shrink-0">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section-spacing bg-olive text-cream">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 xl:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <div className="fade-up flex flex-col justify-between">
              <div>
                <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-gold">
                  Exhibitor opportunity
                </p>
                <h2 className="font-montserrat text-[clamp(3.4rem,8vw,8rem)] font-black uppercase leading-[0.84] text-cream">
                  Don&apos;t just display. Own the room.
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-cream/68">
                  Put your furniture brand inside the first dedicated trade
                  environment for Pakistan&apos;s furniture market, built for
                  product discovery, buyer conversations, and serious booth
                  visibility.
                </p>
              </div>

              <div className="mt-10 grid gap-px overflow-hidden rounded-[18px] border border-cream/10 bg-cream/10 sm:grid-cols-3">
                {exhibitorSignals.map(([title, text]) => (
                  <div
                    key={title}
                    className="bg-olive p-5 transition duration-300 hover:bg-gold hover:text-olive"
                  >
                    <p className="font-montserrat text-xl font-black uppercase">
                      {title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-current/68">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/book-booth">Book a Booth</ButtonLink>
                <ButtonLink href="/why-exhibit" variant="light">
                  Why Exhibit
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="image-mask relative min-h-[360px] overflow-hidden sm:min-h-[460px] lg:min-h-[560px]">
            <Image
              src="/images/exhibit-furniture-display.png"
              alt="Premium furniture display for exhibitors"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
                <div className="absolute inset-0 bg-gradient-to-t from-olive/70 via-olive/12 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-2">
                  <div className="border border-gold/40 bg-olive/82 p-5 backdrop-blur">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-gold">
                      Booth tiers
                    </p>
                    <p className="mt-3 font-montserrat text-4xl font-black">
                      {site.boothPriceRange}
                    </p>
                  </div>
                  <div className="border border-cream/18 bg-cream/10 p-5 backdrop-blur">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-gold">
                      Venue
                    </p>
                    <p className="mt-3 font-montserrat text-2xl font-black uppercase">
                      Expo Center Karachi
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[20px] border border-cream/10 bg-cream p-5 text-olive">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-gold">
                      Select your space
                    </p>
                    <h3 className="mt-2 font-montserrat text-2xl font-black uppercase">
                      Silver, Gold, Diamond, Platinum
                    </h3>
                  </div>
                  <Link
                    href="/book-booth"
                    className="text-xs font-black uppercase tracking-[0.18em] text-gold transition hover:text-olive"
                  >
                    Request pricing
                  </Link>
                </div>
                <BoothTiers compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-olive/[0.035]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 md:grid-cols-[0.72fr_1.28fr] md:items-center xl:px-10">
          <div className="fade-up">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-gold">
              Floor plan preview
            </p>
            <h2 className="font-montserrat text-5xl font-black uppercase leading-none text-olive md:text-7xl">
              Real hall. Real booths.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-olive/72">
              A preview of Hall No. 06 at Expo Center Karachi, showing booth
              zones, entrances, booked spaces, and exhibitor layout.
            </p>
            <ButtonLink href="/book-booth" className="mt-8">
              Book a Booth
            </ButtonLink>
          </div>

          <div className="image-mask relative overflow-hidden border border-olive/10 bg-cream shadow-[0_28px_80px_rgba(26,35,27,0.12)]">
            <Image
              src="/images/floorplan.jpeg"
              alt="Furniture Trade Show floor plan for Expo Center Karachi Hall No. 06"
              width={1600}
              height={900}
              sizes="(min-width: 768px) 58vw, 100vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="section-spacing bg-olive text-cream">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 xl:px-10">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div className="fade-up">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-gold">
                Categories
              </p>
              <h2 className="font-montserrat text-5xl font-black uppercase leading-none md:text-7xl">
                What you will find.
              </h2>
            </div>
            <div className="stagger-group grid gap-px bg-cream/14 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <div
                  key={category}
                  className="stagger-card bg-olive p-6 font-montserrat text-2xl font-black uppercase transition duration-300 hover:bg-gold hover:text-cream"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 md:grid-cols-[0.95fr_1.05fr] md:items-center xl:px-10">
          <div className="fade-up">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-gold">
              Visitor access
            </p>
            <h2 className="font-montserrat text-5xl font-black uppercase leading-none text-olive md:text-7xl">
              Free entry. Focused discovery.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-olive/72">
              Register before the show opens and get event updates for the
              first dedicated furniture trade show in Pakistan.
            </p>
            <ButtonLink href="/register" className="mt-9">
              Register Free
            </ButtonLink>
          </div>

          <div className="image-mask relative min-h-[340px] overflow-hidden sm:min-h-[420px] lg:min-h-[560px]">
            <Image
              src="/images/attend-furniture-showroom.png"
              alt="Furniture showroom with curated living and dining sets"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-spacing bg-cream">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 xl:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div className="fade-up">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-gold">
                Plan your visit
              </p>
              <h2 className="font-montserrat text-[clamp(3.4rem,8vw,8rem)] font-black uppercase leading-[0.84] text-olive">
                Expo Center Karachi.
              </h2>
            </div>
            <p className="fade-up max-w-2xl text-lg leading-8 text-olive/72">
              A central exhibition venue for furniture buyers, retailers,
              designers, manufacturers, suppliers, and trade visitors across
              Karachi.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[520px] overflow-hidden rounded-[24px] bg-olive text-cream shadow-[0_30px_100px_rgba(26,35,27,0.18)]">
              <div className="absolute inset-0 opacity-[0.18]">
                <Image
                  src="/images/floorplan.jpeg"
                  alt="Furniture Trade Show hall floor plan"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-olive via-olive/92 to-olive/68" />
              <div className="relative flex min-h-[520px] flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div className="max-w-2xl">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-gold">
                    Venue address
                  </p>
                  <h3 className="mt-4 font-montserrat text-4xl font-black uppercase leading-none sm:text-6xl">
                    {site.venue}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-7 text-cream/68">
                    Hall planning, booth zones, entrance movement, and visitor
                    flow are being shaped around a focused furniture trade
                    experience.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["Dates", site.dates],
                    ["City", "Karachi"],
                    ["Entry", "Free registration"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="border border-cream/14 bg-cream/8 p-5 backdrop-blur"
                    >
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gold">
                        {label}
                      </p>
                      <p className="mt-3 font-montserrat text-xl font-black uppercase">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[24px] border border-olive/10 bg-olive/[0.035] p-6 sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-gold">
                  Before you arrive
                </p>
                <div className="mt-6 grid gap-5">
                  {[
                    [
                      "Register first",
                      "Visitor entry is free, but registration keeps event updates and access guidance clear.",
                    ],
                    [
                      "Arrive with time",
                      "Expo Center traffic can build up around major events, especially during peak visitor hours.",
                    ],
                    [
                      "Use the floor plan",
                      "The hall preview helps visitors and exhibitors understand zones before event day.",
                    ],
                  ].map(([title, text]) => (
                    <div key={title} className="border-t border-olive/10 pt-5">
                      <h3 className="font-montserrat text-xl font-black uppercase text-olive">
                        {title}
                      </h3>
                      <p className="mt-2 leading-7 text-olive/68">{text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/location">View Location</ButtonLink>
                  <ButtonLink href="/register" variant="secondary">
                    Register Free
                  </ButtonLink>
                </div>
              </div>

              <div className="rounded-[24px] border border-olive/10 bg-cream p-6 shadow-[0_24px_70px_rgba(26,35,27,0.08)] sm:p-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-gold">
                      Quick answers
                    </p>
                    <h3 className="mt-2 font-montserrat text-2xl font-black uppercase text-olive">
                      Visit questions
                    </h3>
                  </div>
                  <Link
                    href="/faq"
                    className="shrink-0 text-xs font-black uppercase tracking-[0.18em] text-gold transition hover:text-olive"
                  >
                    All FAQs
                  </Link>
                </div>
                <FAQList limit={2} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
