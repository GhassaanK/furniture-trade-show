import { ButtonLink } from "./button-link";

type CtaBannerProps = {
  title: string;
  text: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBanner({
  title,
  text,
  primaryHref = "/register",
  primaryLabel = "Register Free",
  secondaryHref = "/book-booth",
  secondaryLabel = "Book a Booth",
}: CtaBannerProps) {
  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="fade-up dark-surface relative overflow-hidden rounded-[20px] p-8 text-cream md:p-14">
          <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(90deg,rgba(143,118,77,0.24)_1px,transparent_1px),linear-gradient(0deg,rgba(143,118,77,0.16)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="font-montserrat text-3xl font-black md:text-5xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-cream/78">{text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
              <ButtonLink href={secondaryHref} variant="light">
                {secondaryLabel}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}