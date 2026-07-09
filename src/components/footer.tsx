import Image from "next/image";
import Link from "next/link";
import { navItems, site } from "@/lib/site";

const footerLinks = [
  ...navItems,
  { href: "/register", label: "Register Free" },
  { href: "/book-booth", label: "Book a Booth" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M5.25 14.25 13 6.5H7.25V5h8.25v8.25H14V7.5l-7.75 7.75-1-1Z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M12.04 2a9.82 9.82 0 0 0-8.5 14.73L2.3 22l5.39-1.2A9.83 9.83 0 1 0 12.04 2Zm0 1.78a8.05 8.05 0 1 1-3.86 15.11l-.36-.2-3.24.72.75-3.15-.22-.38A8.05 8.05 0 0 1 12.04 3.78Zm-3.5 4.3c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26s.98 2.62 1.12 2.8c.14.18 1.9 3.04 4.74 4.14 2.36.92 2.84.74 3.35.69.51-.05 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33-.28-.14-1.65-.81-1.9-.9-.26-.1-.44-.14-.63.14-.18.28-.72.9-.88 1.08-.16.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.4-1.66-1.56-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.46.09-.19.05-.35-.02-.49-.07-.14-.62-1.5-.86-2.05-.22-.53-.45-.46-.62-.47h-.53Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.96 3.96 0 0 0 3.8 7.75v8.5a3.96 3.96 0 0 0 3.95 3.95h8.5a3.96 3.96 0 0 0 3.95-3.95v-8.5a3.96 3.96 0 0 0-3.95-3.95h-8.5ZM12 7.35A4.65 4.65 0 1 1 12 16.65 4.65 4.65 0 0 1 12 7.35Zm0 1.8a2.85 2.85 0 1 0 0 5.7 2.85 2.85 0 0 0 0-5.7Zm5.05-2.55a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M13.6 22v-8.2h2.76l.42-3.2H13.6V8.56c0-.93.26-1.56 1.59-1.56h1.7V4.13A22.74 22.74 0 0 0 14.42 4c-2.45 0-4.12 1.5-4.12 4.24v2.36H7.53v3.2h2.77V22h3.3Z"
      />
    </svg>
  );
}


export function Footer() {
  const phoneHref = `tel:${site.phone.replaceAll(" ", "")}`;
  const whatsappHref = `https://wa.me/${site.whatsapp}`;

  return (
    <footer className="bg-olive px-4 pb-4 pt-20 text-cream sm:px-6 lg:px-10">
      <div className="relative mx-auto max-w-[1440px]">
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="relative h-28 w-28 border-solid border-2 rounded-full sm:h-32 sm:w-32 lg:h-36 lg:w-36">
            <Image
              src="/logo.jpeg"
              alt={`${site.name} Logo`}
              fill
              priority
              sizes="(min-width:1024px) 144px, 128px"
              className="object-contain rounded-full drop-shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[30px] bg-olive px-6 pb-7 pt-20 sm:rounded-[42px] sm:px-10 sm:pb-8 sm:pt-24 lg:px-16">
          <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
            <svg className="h-full w-full" viewBox="0 0 1200 460" preserveAspectRatio="none">
              <path
                d="M-80 80C80 20 180 160 110 260C40 360 130 430 260 390C390 350 350 210 480 170C610 130 760 230 700 340C640 450 820 500 980 410C1140 320 1010 120 1280 70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M60-60C10 80 130 100 190 180C250 260 120 310 210 390C300 470 490 390 460 270C430 150 580 130 660 170C740 210 760 80 700-40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M940-40C930 100 1010 140 1010 250C1010 360 900 390 960 470"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.15fr_1fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <h3 className="font-montserrat text-lg font-black text-cream">
                Contact
              </h3>

              <div className="mt-4 grid gap-1 text-sm leading-6 text-cream/68">
                <p>{site.venue}</p>
                <a href={phoneHref} className="w-fit hover:text-gold">
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="w-fit break-words hover:text-gold">
                  {site.email}
                </a>
              </div>

              <div className="mt-5 grid gap-2 text-sm text-cream/68">
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="flex w-fit items-center gap-2 hover:text-gold">
                  WhatsApp <ArrowIcon />
                </a>
                <a href={site.instagram} target="_blank" rel="noreferrer" className="flex w-fit items-center gap-2 hover:text-gold">
                  Instagram <ArrowIcon />
                </a>
                <a href={site.facebook} target="_blank" rel="noreferrer" className="flex w-fit items-center gap-2 hover:text-gold">
                  Facebook <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="order-1 text-center lg:order-2">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-gold">
                {site.dates}
              </p>

              <h2 className="mx-auto mt-4 max-w-xl font-montserrat text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-cream sm:text-6xl">
                {site.name}
              </h2>

              <p className="mx-auto mt-4 max-w-md text-sm italic leading-6 text-cream/62">
                Pakistan&apos;s first dedicated furniture trade show.
              </p>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/book-booth"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-black text-olive transition duration-300 hover:-translate-y-0.5 hover:bg-cream"
                >
                  Book a Booth <ArrowIcon />
                </Link>

                <Link
                  href="/register"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cream/10 px-6 text-sm font-black text-cream transition duration-300 hover:-translate-y-0.5 hover:bg-cream hover:text-olive"
                >
                  Register Free <ArrowIcon />
                </Link>
              </div>
            </div>

            <div className="order-3 lg:justify-self-end">
              <h3 className="font-montserrat text-lg font-black text-cream">
                Quick Links
              </h3>

              <nav className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-cream/68 sm:max-w-sm">
                {footerLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="w-fit hover:text-gold">
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 flex items-center gap-4">
                <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-cream/70 hover:text-gold">
                  <WhatsAppIcon />
                </a>
                <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-cream/70 hover:text-gold">
                  <InstagramIcon />
                </a>
                <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-cream/70 hover:text-gold">
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="relative mt-12 flex flex-col gap-4 border-t border-cream/10 pt-5 text-xs text-cream/48 sm:flex-row sm:items-center sm:justify-between">
            <a
  href={site.organizerUrl}
  target="_blank"
  rel="noreferrer"
  className="group flex w-fit flex-col"
>
  <span className="text-[11px] uppercase tracking-[0.22em] text-cream/45">
    Organized by
  </span>

  <span className="mt-1 font-montserrat text-lg font-black tracking-tight text-cream transition duration-300 group-hover:text-gold">
    Horizon Events
  </span>
</a>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
              <p>&copy; 2026 {site.name}</p>
              <a href={site.domain} className="font-black uppercase tracking-[0.16em] text-gold hover:text-cream">
                furnituretradeshow.pk
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}