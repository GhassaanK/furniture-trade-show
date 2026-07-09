import type { Metadata } from "next";
import { BoothTiers } from "@/components/booth-tiers";
import { CtaBanner } from "@/components/cta-banner";
import { FeatureCard } from "@/components/feature-card";
import { Section } from "@/components/section";
import { createSeo, pageSeo } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createSeo(pageSeo.whyExhibit);

export default function WhyExhibitPage() {
  return (
    <>
      <Section
        eyebrow="Why exhibit"
        title="Reach the furniture market directly"
        intro="A professional platform for manufacturers, suppliers, and brands ready for B2B exposure."
      >
        <div className="stagger-group grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard title="Direct buyer reach" text="Meet serious visitors looking for furniture, suppliers, and new product lines." />
          <FeatureCard title="B2B exposure" text="Create new trade conversations across retail, design, and supply channels." />
          <FeatureCard title="Brand visibility" text="Stand out in the first dedicated furniture trade show in Pakistan." />
          <FeatureCard title="Early positioning" text="Secure your space while limited exhibitor booths are available." />
        </div>
      </Section>
      <Section title="Booth details" className="bg-olive/[0.035]">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Silver to Platinum
          </p>
          <h2 className="mt-3 font-montserrat text-5xl font-black text-olive">
            {site.boothPriceRange}
          </h2>
          <p className="mt-4 text-olive/72">
            Submit your booth request and the event team will confirm tier
            availability, placement details, and next steps.
          </p>
        </div>
        <BoothTiers />
      </Section>
      <CtaBanner
        title="Book your exhibitor booth"
        text="Limited exhibitor spaces are available for the first edition."
        primaryHref="/book-booth"
        primaryLabel="Book a Booth"
        secondaryHref="/register"
        secondaryLabel="Register Free"
      />
    </>
  );
}
