import { site } from "@/lib/site";

export function VenueCard() {
  return (
    <div className="surface h-full rounded-2xl p-7">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
        Venue
      </p>
      <h3 className="mt-3 font-montserrat text-3xl font-black text-olive">
        {site.venue}
      </h3>
      <p className="mt-4 leading-8 text-olive/68">
        A central Karachi venue for trade buyers, retailers, designers,
        manufacturers, and suppliers.
      </p>
      <dl className="mt-6 grid gap-4">
        <div>
          <dt className="font-bold text-olive">Dates</dt>
          <dd className="text-olive/68">{site.dates}</dd>
        </div>
        <div>
          <dt className="font-bold text-olive">Travel guidance</dt>
          <dd className="text-olive/68">
            Plan for Expo Center traffic and arrive early for registration.
          </dd>
        </div>
      </dl>
    </div>
  );
}

export function MapPlaceholder() {
  return (
    <div className="surface flex min-h-80 items-center justify-center rounded-[20px] border border-dashed border-gold/45 p-8 text-center">
      <div>
        <p className="font-montserrat text-2xl font-black text-olive">
          Google Maps embed area
        </p>
        <p className="mt-3 text-olive/62">
          Reserved for Phase 1 launch content.
        </p>
      </div>
    </div>
  );
}

export function LocationBlock() {
  return (
    <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
      <VenueCard />
      <MapPlaceholder />
    </div>
  );
}