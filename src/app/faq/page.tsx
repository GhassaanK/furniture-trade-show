import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { FAQList } from "@/components/faq";
import { Section } from "@/components/section";
import { createSeo, pageSeo } from "@/lib/seo";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = createSeo(pageSeo.faq);

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Section
        eyebrow="FAQ"
        title="Questions and contact"
        intro="Quick answers for visitors and exhibitors."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <FAQList />
          <aside className="rounded-2xl bg-olive p-6 text-cream md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
              Contact
            </p>
            <h2 className="mt-3 font-montserrat text-3xl font-black">
              Talk to the event team
            </h2>
            <div className="mt-6 grid gap-3 text-cream/76">
              <a href={`tel:${site.phone.replaceAll(" ", "")}`} className="hover:text-gold">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
              <span>{site.social}</span>
            </div>
          </aside>
        </div>
      </Section>
      <CtaBanner
        title="Still deciding?"
        text="Register free as a visitor or request exhibitor booth information."
      />
    </>
  );
}
