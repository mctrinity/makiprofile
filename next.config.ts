// next.config.ts
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // optional: add remark/rehype plugins here
  },
});

const nextConfig = {
  // keep your existing config here
  // (no need to change pageExtensions for App Router)
};

export default withMDX(nextConfig);
