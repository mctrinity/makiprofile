// src/content/blog/registry.ts
// ❗ No MDX imports here

export type PostMeta = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  readingTime?: string;
  image?: string;
};

// Keep this in sync with your actual files in src/content/blog/{slug}.mdx
export const manifest: PostMeta[] = [
  {
    slug: "devops-starter",
    title: "DevOps Starter",
    description: "Spin up CI/CD, IaC, and observability the sane way.",
    date: "2025-08-18",
    readingTime: "4 min",
    image: "/blog/devops-starter/cover.png",
  },
  {
    slug: "platform-engineering",
    title: "Platform Engineering for Small Teams",
    description: "Golden paths, paved roads, and developer experience.",
    date: "2025-08-19",
    readingTime: "5 min",
    image: "/blog/platform-engineering/cover.png",
  },
  {
    slug: "ai-integration",
    title: "AI Integration That Ships",
    description: "Retrieval, function calling, evals—without the hype.",
    date: "2025-08-20",
    readingTime: "6 min",
    image: "/blog/ai-integration/cover.png",
  },
];

export function getAllSlugs() {
  return manifest.map((p) => ({ slug: p.slug }));
}

export function getPostMetaBySlug(slug: string) {
  return manifest.find((p) => p.slug === slug) ?? null;
}
