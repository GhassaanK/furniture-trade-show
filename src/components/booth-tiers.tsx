import { boothTiers } from "@/lib/site";

type BoothTiersProps = {
  compact?: boolean;
};

export function BoothTiers({ compact = false }: BoothTiersProps) {
  return (
    <div
      className={`stagger-group grid gap-4 ${
        compact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4"
      }`}
    >
      {boothTiers.map((tier) => (
        <article
          key={tier.name}
          className="stagger-card group relative overflow-hidden rounded-[18px] border border-olive/10 bg-cream p-5 shadow-[0_20px_60px_rgba(26,35,27,0.08)] transition duration-500 hover:-translate-y-1 hover:border-gold/55 hover:shadow-[0_28px_80px_rgba(26,35,27,0.14)]"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gold opacity-70 transition duration-300 group-hover:opacity-100" />
          <p className="font-montserrat text-xl font-black uppercase text-olive">
            {tier.name}
          </p>
          <p className="mt-5 font-montserrat text-3xl font-black leading-none text-gold">
            {tier.price}
          </p>
          <p className="mt-3 text-sm leading-6 text-olive/62">{tier.note}</p>
        </article>
      ))}
    </div>
  );
}
