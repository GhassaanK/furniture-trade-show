import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`section-spacing ${className}`}>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 xl:px-10">
        <div className="fade-up mb-12 max-w-3xl">
          {eyebrow ? (
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
                {eyebrow}
              </p>
            </div>
          ) : null}
          <h2 className="font-montserrat text-4xl font-black leading-[1.05] text-olive md:text-6xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-5 text-base leading-8 text-olive/72 md:text-lg">
              {intro}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}