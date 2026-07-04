import { stats } from "@/lib/site";

export function StatsStrip() {
  return (
    <section className="bg-cream py-8">
      <div className="stagger-group mx-auto grid max-w-7xl gap-px overflow-hidden rounded-[20px] border border-olive/10 bg-olive/10 px-0 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="stagger-card bg-cream p-7 transition duration-300 hover:bg-olive hover:text-cream"
          >
            <strong className="font-montserrat text-5xl font-black text-current">
              {item.value}
            </strong>
            <span className="mt-3 block text-sm font-semibold text-current/70">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
