import type { Metadata } from "next";
import { site } from "./site";

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

const defaultKeywords = [
  "furniture expo Karachi",
  "furniture trade show Pakistan",
  "furniture exhibition Pakistan",
  "Karachi furniture event",
  "Pakistan furniture expo",
  "furniture manufacturers Pakistan",
  "furniture suppliers Karachi",
  "interior designers Karachi",
];

export const defaultOgImage = "/images/hero-furniture-showroom.png";

export function absoluteUrl(path: string) {
  return `${site.domain}${path}`;
}

export function createSeo({
  title,
  description,
  path,
  keywords = [],
  image = defaultOgImage,
}: SeoConfig): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: path,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 900,
          alt: `${site.name} - ${title}`,
        },
      ],
      locale: "en_PK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const pageSeo = {
  home: {
    title: site.name,
    description:
      "Register free for Pakistan's first dedicated furniture trade show at Expo Center Karachi, 7-9 August 2026. Visitor registrations and booth bookings are open.",
    path: "/",
    keywords: [
      "Pakistan's 1st Furniture Trade Show",
      "Expo Center Karachi furniture show",
      "register furniture expo Karachi",
    ],
    image: "/images/hero-furniture-showroom.png",
  },
  register: {
    title: "Register Free for the Furniture Trade Show",
    description:
      "Register free as a visitor for Pakistan's 1st Furniture Trade Show at Expo Center Karachi on 7, 8, and 9 August 2026.",
    path: "/register",
    keywords: [
      "free furniture expo registration",
      "register furniture trade show Karachi",
      "visitor registration furniture exhibition Pakistan",
    ],
    image: "/images/attend-furniture-showroom.png",
  },
  bookBooth: {
    title: "Book a Booth at Pakistan's Furniture Trade Show",
    description:
      "Book an exhibitor booth for Pakistan's 1st Furniture Trade Show. Silver, Gold, Diamond, and Platinum booth tiers are available from PKR 60,000 to PKR 75,000.",
    path: "/book-booth",
    keywords: [
      "book furniture exhibition booth",
      "furniture expo exhibitor booth Karachi",
      "furniture trade show booth Pakistan",
    ],
    image: "/images/exhibit-furniture-display.png",
  },
  whyAttend: {
    title: "Why Attend Pakistan's Furniture Trade Show",
    description:
      "Discover furniture categories, suppliers, materials, networking, and product ideas at Pakistan's dedicated furniture trade show in Karachi.",
    path: "/why-attend",
    keywords: [
      "why attend furniture expo",
      "furniture product discovery Karachi",
      "furniture networking event Pakistan",
    ],
    image: "/images/attend-furniture-showroom.png",
  },
  whyExhibit: {
    title: "Why Exhibit at Pakistan's Furniture Trade Show",
    description:
      "Reach retailers, designers, buyers, and suppliers by exhibiting at Pakistan's first dedicated furniture trade show.",
    path: "/why-exhibit",
    keywords: [
      "why exhibit furniture expo",
      "furniture B2B event Pakistan",
      "furniture brand visibility Karachi",
    ],
    image: "/images/exhibit-furniture-display.png",
  },
  location: {
    title: "Location - Expo Center Karachi",
    description:
      "Venue details, dates, travel guidance, and location information for Pakistan's 1st Furniture Trade Show at Expo Center Karachi.",
    path: "/location",
    keywords: [
      "Expo Center Karachi furniture show",
      "furniture expo location Karachi",
      "Karachi furniture event venue",
    ],
    image: "/images/hero-furniture-showroom.png",
  },
  faq: {
    title: "FAQ and Contact",
    description:
      "Answers about free entry, registration, booth booking, timings, parking, and contact details for Pakistan's 1st Furniture Trade Show.",
    path: "/faq",
    keywords: [
      "furniture trade show FAQ",
      "furniture expo contact Karachi",
      "furniture exhibition booth questions",
    ],
    image: "/images/hero-furniture-showroom.png",
  },
} satisfies Record<string, SeoConfig>;
