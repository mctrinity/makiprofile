// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/siteUrl";
import { manifest } from "@/content/blog/registry";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, lastModified: new Date() },
    { url: `${siteUrl}/blog`, lastModified: new Date() },
    ...manifest.map(p => ({
      url: `${siteUrl}/blog/${p.slug}`,
      lastModified: p.date ? new Date(p.date) : new Date(),
    })),
  ];
}
