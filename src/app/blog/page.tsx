// src/app/blog/page.tsx
import type { Metadata } from "next";
import Section from "@/components/Section";
import BlogCard from "@/components/BlogCard";
import { siteUrl } from "@/lib/siteUrl";
import { blogPosts, type BlogPost } from "@/lib/data";

export const revalidate = 60 * 60 * 24; // re-gen at most once/day

export const metadata: Metadata = {
  title: "Blog — Maki Dizon",
  description: "Notes on DevOps, Platform, and AI integration.",
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    type: "website",
    url: `${siteUrl}/blog`,
    title: "Blog — Maki Dizon",
    description: "Notes on DevOps, Platform, and AI integration.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Maki Dizon",
    description: "Notes on DevOps, Platform, and AI integration.",
  },
};

export default function BlogIndex() {
  // Structured data for the blog index
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: `${siteUrl}/blog`,
    name: "Maki Dizon — Blog",
    description: "Notes on DevOps, Platform, and AI integration.",
  };

  return (
    <Section id="blog-index" title="Blog">
      {/* Canonical + JSON-LD in DOM (helps some crawlers) */}
      <link rel="canonical" href={`${siteUrl}/blog`} />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {blogPosts.length === 0 ? (
        <p className="text-zinc-600 dark:text-zinc-300">
          No posts yet. Coming soon.
        </p>
      ) : (
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post: BlogPost) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </Section>
  );
}
