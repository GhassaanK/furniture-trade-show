type FeatureCardProps = {
  title: string;
  text: string;
  marker?: string;
};

export function FeatureCard({ title, text, marker = "+" }: FeatureCardProps) {
  return (
    <article className="stagger-card group surface relative overflow-hidden rounded-2xl p-7 transition duration-500 hover:-translate-y-2 hover:border-gold/45 hover:shadow-[0_32px_90px_rgba(26,35,27,0.16)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gold/50 opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-[14px] border border-gold/45 bg-gold/10 text-xl font-black text-gold transition duration-300 group-hover:bg-gold group-hover:text-cream">
        {marker}
      </div>
      <h3 className="font-montserrat text-xl font-bold text-olive">{title}</h3>
      <p className="mt-3 leading-7 text-olive/68">{text}</p>
    </article>
  );
}
