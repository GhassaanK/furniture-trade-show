import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { AnimatedShell } from "@/components/animated-shell";
import { FloatingButtons } from "@/components/floating-buttons";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { createSeo, pageSeo } from "@/lib/seo";
import { boothTiers, site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...createSeo(pageSeo.home),
  metadataBase: new URL(site.domain),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  applicationName: site.name,
  creator: site.name,
  publisher: site.name,
  category: "Event",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: site.name,
    description:
      "Pakistan's first dedicated furniture trade show for visitors, manufacturers, retailers, interior designers, suppliers, and trade buyers.",
    image: [`${site.domain}/images/hero-furniture-showroom.png`],
    startDate: "2026-08-07",
    endDate: "2026-08-09",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: site.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karachi",
        addressCountry: "PK",
      },
    },
    organizer: {
      "@type": "Organization",
      name: site.name,
      url: site.domain,
      email: site.email,
      telephone: site.phone,
      sameAs: [`https://www.instagram.com/${site.social.replace("@", "")}`],
    },
    offers: [
      {
        "@type": "Offer",
        name: "Free visitor registration",
        price: "0",
        priceCurrency: "PKR",
        availability: "https://schema.org/InStock",
        url: `${site.domain}/register`,
        validFrom: "2026-07-04",
      },
      {
        "@type": "AggregateOffer",
        name: "Exhibitor booth booking",
        lowPrice: "60000",
        highPrice: "75000",
        priceCurrency: "PKR",
        availability: "https://schema.org/LimitedAvailability",
        url: `${site.domain}/book-booth`,
        validFrom: "2026-07-04",
        offerCount: boothTiers.length.toString(),
        offers: boothTiers.map((tier) => ({
          "@type": "Offer",
          name: `${tier.name} booth`,
          price: tier.numericPrice.toString(),
          priceCurrency: "PKR",
          availability: "https://schema.org/LimitedAvailability",
          url: `${site.domain}/book-booth`,
        })),
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-inter text-olive">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
        <AnimatedShell />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
