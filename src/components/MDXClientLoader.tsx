// src/components/MDXClientLoader.tsx
"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { postLoaders } from "@/content/blog/registry";

export default function MDXClientLoader({ slug }: { slug: string }) {
  const [Comp, setComp] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    let mounted = true;
    const load = postLoaders[slug];
    if (!load) return;

    load().then((mod) => {
      if (mounted) setComp(() => mod.default);
    });

    return () => {
      mounted = false;
    };
  }, [slug]);

  if (!postLoaders[slug]) {
    return <p className="text-sm text-red-600">Post not found.</p>;
  }

  if (!Comp) {
    return <p className="text-sm text-zinc-500">Loading…</p>;
  }

  return <Comp />;
}
