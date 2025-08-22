// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import MDXClientLoader from "@/components/MDXClientLoader";
import { getAllSlugs, getPostMetaBySlug } from "@/content/blog/registry";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllSlugs(); // [{ slug }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const meta = getPostMetaBySlug(slug);
  if (!meta) return {};
  return {
    title: `${meta.title} — Maki Dizon`,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: meta.image ? [meta.image] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const meta = getPostMetaBySlug(slug);
  if (!meta) notFound();

  return (
    <Section id="post" title={meta.title}>
      <article className="prose max-w-none dark:prose-invert">
        <p className="mt-0 text-sm text-zinc-500">
          {meta.date}
          {meta.readingTime ? ` • ${meta.readingTime}` : ""}
        </p>
        <MDXClientLoader slug={slug} />
      </article>
    </Section>
  );
}
