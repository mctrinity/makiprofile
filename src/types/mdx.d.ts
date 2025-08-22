// src/types/mdx.d.ts
declare module "*.mdx" {
  import type { FC, ComponentType } from "react";
  export const metadata: {
    title: string;
    description?: string;
    date?: string;
    readingTime?: string;
    image?: string;
  };
  const MDXContent: FC<{ components?: Record<string, ComponentType<any>> }>;
  export default MDXContent;
}
