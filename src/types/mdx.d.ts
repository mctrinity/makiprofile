// src/types/mdx.d.ts
declare module "*.mdx" {
  import * as React from "react";

  export const metadata: {
    title: string;
    description?: string;
    date?: string;
    readingTime?: string;
    image?: string; // e.g. /blog/ai/cover.png
  };

  // Use a safe prop shape instead of `any`
  const MDXContent: React.ComponentType<Record<string, unknown>>;
  export default MDXContent;
}
