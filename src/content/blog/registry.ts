// src/content/blog/registry.ts
import type * as React from "react";

// Types for the MDX module shape
export type MDXModule = {
  default: React.ComponentType<Record<string, unknown>>;
  metadata: {
    title: string;
    description?: string;
    date?: string;
    readingTime?: string;
    image?: string;
  };
};

// Import your posts (namespace import keeps both `default` and `metadata`)
import * as devops from "./devops-starter.mdx";
import * as platform from "./platform-engineering.mdx";
import * as ai from "./ai-integration.mdx";

// Registry of modules
const modules = {
  "devops-starter": devops,
  "platform-engineering": platform,
  "ai-integration": ai,
} as const;

export type Slug = keyof typeof modules;

export function getAllSlugs(): { slug: Slug }[] {
  return Object.keys(modules).map((slug) => ({ slug: slug as Slug }));
}

export function getPostMetaBySlug(slug: string) {
  const m = modules[slug as Slug] as unknown as MDXModule | undefined;
  if (!m) return null;
  return { slug, ...m.metadata };
}

export function getPostBySlug(slug: string) {
  const m = modules[slug as Slug] as unknown as MDXModule | undefined;
  if (!m) return null;
  return m; // MDXModule
}
