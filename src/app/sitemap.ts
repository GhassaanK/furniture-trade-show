import type { MetadataRoute } from "next";
import { absoluteUrl, pageSeo } from "@/lib/seo";

const lastModified = new Date("2026-07-04");

const routes = [
  { seo: pageSeo.home, changeFrequency: "daily", priority: 1 },
  { seo: pageSeo.register, changeFrequency: "daily", priority: 0.95 },
  { seo: pageSeo.bookBooth, changeFrequency: "daily", priority: 0.95 },
  { seo: pageSeo.whyAttend, changeFrequency: "weekly", priority: 0.82 },
  { seo: pageSeo.whyExhibit, changeFrequency: "weekly", priority: 0.82 },
  { seo: pageSeo.location, changeFrequency: "monthly", priority: 0.72 },
  { seo: pageSeo.faq, changeFrequency: "monthly", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ seo, changeFrequency, priority }) => ({
    url: absoluteUrl(seo.path),
    lastModified,
    changeFrequency,
    priority,
    images: seo.image ? [absoluteUrl(seo.image)] : undefined,
  }));
}
