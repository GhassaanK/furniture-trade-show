import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { FeatureCard } from "@/components/feature-card";
import { RegisterForm } from "@/components/register-form";
import { Section } from "@/components/section";
import { createSeo, pageSeo } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createSeo(pageSeo.register);

export default function RegisterPage() {
  return (
    <>
      <Section
        eyebrow="Register free"
        title="Visitor registration is open"
        intro={`Join us at ${site.venue} on ${site.dates}. Entry is free with registration.`}
      >
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <div className="stagger-group grid gap-5">
            <FeatureCard title="Free entry" text="Register now and keep your visit simple on event day." />
            <FeatureCard title="Trade access" text="Meet manufacturers, retailers, designers, and suppliers." />
            <FeatureCard title="Event updates" text="Receive key visitor updates before slots fill." />
          </div>
          <RegisterForm />
        </div>
      </Section>
      <Section title="Event summary" className="bg-olive/[0.035]">
        <div className="stagger-group grid gap-4 md:grid-cols-3">
          {[
            ["Dates", site.dates],
            ["Duration", "3 Days"],
            ["Venue", site.venue],
          ].map(([label, value]) => (
            <div key={label} className="stagger-card surface rounded-2xl p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">{label}</p>
              <p className="mt-2 font-montserrat text-2xl font-black text-olive">{value}</p>
            </div>
          ))}
        </div>
      </Section>
      <CtaBanner
        title="Register before slots fill"
        text="Visitor registrations are free and open for the first edition."
        secondaryHref="/why-attend"
        secondaryLabel="Why attend"
      />
    </>
  );
}
