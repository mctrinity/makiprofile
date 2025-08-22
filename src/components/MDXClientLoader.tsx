// src/components/MDXClientLoader.tsx
"use client";

import * as React from "react";

type Props = { slug: string };

type MDXModule = {
  default: React.ComponentType<Record<string, unknown>>;
};

export default function MDXClientLoader({ slug }: Props) {
  const [Comp, setComp] =
    React.useState<React.ComponentType<Record<string, unknown>> | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      const mod: unknown = await import(`@/content/blog/${slug}.mdx`);
      const c = (mod as MDXModule).default;
      if (!cancelled) setComp(() => c);
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (!Comp) return null;
  return <Comp />;
}
