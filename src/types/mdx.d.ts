// src/types/mdx.d.ts
declare module "*.mdx" {
  export const metadata: {
    title: string;
    description?: string;
    date?: string;
    readingTime?: string;
    image?: string;
    imageAlt?: string;
    tintClass?: string; // tailwind classes applied to the Section wrapper
  };
  const MDXContent: (props: Record<string, unknown>) => JSX.Element;
  export default MDXContent;
}
