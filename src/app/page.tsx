import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { FAQList } from "@/components/faq";
import { Hero } from "@/components/hero";
import { LocationBlock } from "@/components/location-block";
import { categories, site } from "@/lib/site";

const audience = [
  ["01", "Manufacturers", "Launch collections, meet buyers, and build early authority."],
  ["02", "Retailers", "Source furniture lines and speak directly with makers."],
  ["03", "Designers", "Discover materials, finishes, and suppliers for upcoming projects."],
  ["04", "Trade buyers", "Compare products, pricing conversations, and supply opportunities."],
];

const reasons = [
  "Direct furniture buyer reach",
  "Focused B2B exposure",
  "Premium brand visibility",
  "Early position in the first edition",
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

      <section className="section-spacing">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:items-center xl:px-10">
          <div className="image-mask relative min-h-[380px] overflow-hidden sm:min-h-[460px] lg:min-h-[620px]">
            <Image
              src="/images/exhibit-furniture-display.png"
              alt="Premium furniture display for exhibitors"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-olive/56 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 border-t border-gold/60 pt-6 text-cream">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-gold">
                Exhibitor booth price
              </p>
              <p className="mt-3 font-montserrat text-5xl font-black">
                {site.boothPrice}
              </p>
            </div>
          </div>

          <div className="fade-up">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-gold">
              Why exhibit
            </p>
            <h2 className="font-montserrat text-5xl font-black uppercase leading-none text-olive md:text-7xl">
              Put your brand where the buyers are.
            </h2>
            <div className="mt-10 border-t border-olive/10">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-center gap-4 border-b border-olive/10 py-6"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/12 text-sm font-black text-gold">
                    ✓
                  </span>
                  <span className="font-montserrat text-xl font-black uppercase text-olive">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
            <ButtonLink href="/book-booth" className="mt-9">
              Book a Booth
            </ButtonLink>
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

      <section className="section-spacing bg-olive/[0.035]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 xl:px-10">
          <div className="mb-12 grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <h2 className="fade-up font-montserrat text-5xl font-black uppercase leading-none text-olive md:text-7xl">
              Venue Details.
            </h2>
            <p className="fade-up max-w-2xl text-lg leading-8 text-olive/72">
              Event details are kept simple: register free, plan your visit to
              Expo Center Karachi, or request booth information.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <LocationBlock />
            <div>
              <FAQList limit={3} />
              <Link
                href="/faq"
                className="mt-8 inline-flex text-xs font-black uppercase tracking-[0.22em] text-gold"
              >
                View all FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
