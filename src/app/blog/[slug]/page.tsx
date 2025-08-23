// src/app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image"; // ⬅️ add this
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import { siteUrl } from "@/lib/siteUrl";
import { getAllSlugs, getPostMetaBySlug } from "@/content/blog/registry";
import MDXClientLoader from "@/components/MDXClientLoader";
import Breadcrumbs from "@/components/Breadcrumbs";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const meta = getPostMetaBySlug(slug);
  if (!meta) return {};

  const canonical = `${siteUrl}/blog/${slug}`;
  const ogImage = meta.image ? new URL(meta.image, siteUrl).toString() : undefined;

  return {
    title: `${meta.title} — Maki Dizon`,
    description: meta.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: meta.title,
      description: meta.description,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const meta = getPostMetaBySlug(slug);
  if (!meta) notFound();

  const canonical = `${siteUrl}/blog/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description ?? "",
    datePublished: meta.date ?? undefined,
    dateModified: meta.date ?? undefined,
    author: { "@type": "Person", name: "Maki Dizon" },
    image: meta.image ? new URL(meta.image, siteUrl).toString() : undefined,
    url: canonical,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: meta.title, item: canonical },
    ],
  };

  const tint = meta.tintClass ?? "bg-[#077777]/5 dark:bg-[#077777]/10";

  return (
    <Section id="post" title={meta.title}>
      {/* Canonical + JSON-LD */}
      <link rel="canonical" href={canonical} />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
          { label: meta.title },
        ]}
      />

      {/* 🔽 Post hero image with optional tint background */}
      {meta.image && (
        <div className={`mb-8 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 ${tint}`}>
          <div className="relative h-56 w-full sm:h-72 lg:h-96">
            <Image
              src={meta.image}
              alt={meta.imageAlt ?? meta.title}
              fill
              sizes="(min-width:1024px) 960px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      <article
        className="prose prose-zinc max-w-none dark:prose-invert
                   prose-headings:scroll-mt-28
                   prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                   prose-img:rounded-2xl prose-img:border prose-img:border-zinc-200 dark:prose-img:border-zinc-800
                   prose-pre:shadow-sm"
      >
        <p className="mt-0 text-sm text-zinc-500">
          {meta.date}
          {meta.readingTime ? ` • ${meta.readingTime}` : ""}
        </p>
        <MDXClientLoader slug={slug} />
      </article>
    </Section>
  );
}
