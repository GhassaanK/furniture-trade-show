import type { Metadata } from "next";
import { BoothForm } from "@/components/booth-form";
import { CtaBanner } from "@/components/cta-banner";
import { FeatureCard } from "@/components/feature-card";
import { Section } from "@/components/section";
import { createSeo, pageSeo } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createSeo(pageSeo.bookBooth);

export default function BookBoothPage() {
  return (
    <>
      <Section
        eyebrow="Book a booth"
        title="Exhibitor spaces are limited"
        intro={`Showcase your brand at ${site.venue}. Booth price: ${site.boothPrice}.`}
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="stagger-group grid gap-5">
            <FeatureCard title="Direct buyer reach" text="Meet furniture buyers, retailers, designers, and procurement leads." />
            <FeatureCard title="Brand visibility" text="Launch your presence early in Pakistan's first dedicated furniture show." />
            <FeatureCard title="Booth price" text={`${site.boothPrice} per booth for Phase 1 bookings.`} />
          </div>
          <BoothForm />
        </div>
      </Section>
      <Section title="Exhibitor benefits" className="bg-olive/[0.035]">
        <div className="stagger-group grid gap-5 md:grid-cols-3">
          <FeatureCard title="B2B exposure" text="A focused environment for trade conversations and qualified inquiries." />
          <FeatureCard title="Product showcase" text="Present furniture collections, materials, finishes, and services." />
          <FeatureCard title="Early positioning" text="Be visible in the first edition of a dedicated industry event." />
        </div>
      </Section>
      <CtaBanner
        title="Ready to exhibit?"
        text={`Call ${site.phone} or send your booth request and the team will follow up.`}
        primaryHref="/book-booth"
        primaryLabel="Request booth"
        secondaryHref="/faq"
        secondaryLabel="Contact"
      />
    </>
  );
}
