import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { FeatureCard } from "@/components/feature-card";
import { Section } from "@/components/section";
import { createSeo, pageSeo } from "@/lib/seo";
import { categories } from "@/lib/site";

export const metadata: Metadata = createSeo(pageSeo.whyAttend);

export default function WhyAttendPage() {
  return (
    <>
      <Section
        eyebrow="Why attend"
        title="Discover furniture, suppliers, and ideas"
        intro="A focused visitor experience for product discovery, networking, and sourcing."
      >
        <div className="stagger-group grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard title="Product discovery" text="Explore furniture, lighting, decor, materials, and fittings." />
          <FeatureCard title="Networking" text="Meet makers, retailers, designers, and suppliers in one place." />
          <FeatureCard title="Free entry" text="Registration is free and open for visitors." />
          <FeatureCard title="Karachi venue" text="Attend at Expo Center Karachi over 3 event days." />
        </div>
      </Section>
      <Section title="Categories to explore" className="bg-olive/[0.035]">
        <div className="stagger-group grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category} className="stagger-card surface rounded-2xl p-5 font-montserrat font-bold text-olive transition duration-300 hover:-translate-y-1 hover:border-gold/45">
              {category}
            </div>
          ))}
        </div>
      </Section>
      <CtaBanner
        title="Register free for visitor access"
        text="Reserve your visitor registration before the show opens."
        secondaryHref="/location"
        secondaryLabel="View location"
      />
    </>
  );
}
