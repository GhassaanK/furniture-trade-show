import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { LocationBlock } from "@/components/location-block";
import { Section } from "@/components/section";
import { createSeo, pageSeo } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createSeo(pageSeo.location);

export default function LocationPage() {
  return (
    <>
      <Section
        eyebrow="Location"
        title={site.venue}
        intro="Venue information, travel guidance, and a reserved map area for launch."
      >
        <LocationBlock />
      </Section>
      <Section title="Before you visit" className="bg-olive/[0.035]">
        <div className="stagger-group grid gap-5 md:grid-cols-3">
          {[
            ["Dates", site.dates],
            ["Registration", "Register free before arrival."],
            ["Travel", "Plan early for Expo Center Karachi traffic."],
          ].map(([title, text]) => (
            <div key={title} className="stagger-card surface rounded-2xl p-6">
              <h3 className="font-montserrat text-xl font-bold text-olive">{title}</h3>
              <p className="mt-3 text-olive/68">{text}</p>
            </div>
          ))}
        </div>
      </Section>
      <CtaBanner
        title="Plan your visit"
        text="Visitor registration is free and open."
        secondaryHref="/faq"
        secondaryLabel="Read FAQ"
      />
    </>
  );
}
