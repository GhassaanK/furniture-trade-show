export function Hero() {
  return (
    <section className="hero-section h-[100svh] w-full overflow-hidden bg-olive">
      <picture>
        <source
          srcSet="/images/9by16.png"
          media="(max-aspect-ratio: 3/4)"
        />
        <source
          srcSet="/images/4by5.png"
          media="(max-aspect-ratio: 1/1)"
        />
        <source
          srcSet="/images/16by10.png"
          media="(max-aspect-ratio: 17/10)"
        />
        <img
          src="/images/16by9.png"
          alt="Pakistan's 1st Furniture Trade Show"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      </picture>
    </section>
  );
}
