import Image from "next/image";
import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-olive py-14 text-cream">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 md:grid-cols-[1.2fr_0.8fr_0.8fr] xl:px-10">
        <div>
          <h2 className="font-montserrat text-3xl font-black">{site.name}</h2>
          <div className="mt-5 h-px w-28 bg-gold" />
          <p className="mt-4 max-w-md leading-7 text-cream/70">
            A focused platform for Pakistan&apos;s furniture industry to meet,
            discover, exhibit, and grow.
          </p>
          <a
            href={site.organizerUrl}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 inline-grid gap-3"
            aria-label={`Visit ${site.organizer}`}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.26em] text-gold">
              Brought to you by
            </span>
            <span className="relative block h-20 w-64 max-w-full overflow-hidden rounded-[12px] border border-gold/20 bg-olive transition duration-300 group-hover:border-gold/70">
              <Image
                src="/images/horizon-black-bg.jpeg"
                alt="Horizon Events logo"
                fill
                sizes="256px"
                className="object-cover object-[center_52%] transition duration-500 group-hover:scale-[1.035]"
              />
            </span>
          </a>
        </div>
        <div>
          <h3 className="font-montserrat font-bold text-gold">Pages</h3>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-cream/72 transition hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-montserrat font-bold text-gold">Contact</h3>
          <div className="mt-4 grid gap-2 text-cream/72">
            <a href={`tel:${site.phone.replaceAll(" ", "")}`} className="hover:text-gold">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-gold">
              {site.email}
            </a>
            <span>{site.social}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[1440px] border-t border-cream/12 px-5 pt-6 text-sm text-cream/55 sm:px-8 xl:px-10">
        © 2026 Pakistan&apos;s 1st Furniture Trade Show. All rights reserved.
      </div>
    </footer>
  );
}
