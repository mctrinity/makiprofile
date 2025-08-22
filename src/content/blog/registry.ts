// src/content/blog/registry.ts
export type PostMeta = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  readingTime?: string;
  image?: string;
};

// Pure metadata (no MDX imports here)
export const postsMeta: PostMeta[] = [
  {
    slug: "devops-starter",
    title: "From Zero to CI/CD: A Practical DevOps Starter",
    description: "A minimal pipeline you can ship today.",
    date: "2025-08-10",
    readingTime: "6 min read",
    // image: "/blog/devops/cover.png",
  },
  {
    slug: "platform-engineering",
    title: "Golden Paths: Platform Engineering That Developers Love",
    description: "Reduce cognitive load with opinionated defaults.",
    date: "2025-08-05",
    readingTime: "7 min read",
  },
  {
    slug: "ai-integration",
    title: "Pragmatic AI Integration: RAG Without the Hype",
    description: "Data prep, retrieval quality, and guardrails.",
    date: "2025-08-01",
    readingTime: "5 min read",
  },
];

// Lazy MDX loaders (no imports executed on the server)
export const postLoaders: Record<string, () => Promise<{ default: any }>> = {
  "devops-starter": () => import("./devops-starter.mdx"),
  "platform-engineering": () => import("./platform-engineering.mdx"),
  "ai-integration": () => import("./ai-integration.mdx"),
};

export function getPostMetaBySlug(slug: string) {
  return postsMeta.find((p) => p.slug === slug);
}

export function getAllSlugs() {
  return postsMeta.map((p) => ({ slug: p.slug }));
}
