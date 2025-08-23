import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#077777",
          50: "#E6F4F4",
          100: "#CFEAEA",
          200: "#A0D5D5",
          300: "#72C0C0",
          400: "#43ABAB",
          500: "#159696",
          600: "#0F7A7A",
          700: "#0C6262",
          800: "#094B4B",
          900: "#063434",
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: "75ch",
            color: theme("colors.zinc.700"),
            a: {
              color: theme("colors.brand.700"),
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              fontWeight: "500",
              "&:hover": { color: theme("colors.brand.800") },
            },
            "h1, h2, h3, h4": { color: theme("colors.zinc.900") },
            h2: { scrollMarginTop: "7rem" },
            h3: { scrollMarginTop: "7rem" },
            blockquote: {
              borderLeftColor: theme("colors.brand.DEFAULT"),
              fontStyle: "italic",
            },
            code: {
              backgroundColor: theme("colors.zinc.100"),
              borderRadius: "0.375rem",
              padding: "0.15rem 0.35rem",
              fontWeight: "500",
            },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
            pre: {
              backgroundColor: theme("colors.zinc.950"),
              color: theme("colors.zinc.100"),
              borderRadius: "0.75rem",
              border: `1px solid ${theme("colors.zinc.800")}`,
              padding: "1rem",
              overflowX: "auto",
            },
            "pre code": { backgroundColor: "transparent", padding: 0 },
            hr: { borderColor: theme("colors.zinc.200") },
            img: {
              borderRadius: "0.75rem",
              border: `1px solid ${theme("colors.zinc.200")}`,
            },
            table: { width: "100%" },
            th: {
              backgroundColor: theme("colors.zinc.50"),
              fontWeight: "600",
            },
            strong: { color: theme("colors.zinc.900") },
            kbd: {
              backgroundColor: theme("colors.zinc.100"),
              border: `1px solid ${theme("colors.zinc.200")}`,
              padding: "0.15rem 0.35rem",
              borderRadius: "0.375rem",
              fontWeight: "600",
            },
            mark: {
              backgroundColor: theme("colors.brand.100"),
              color: theme("colors.brand.900"),
              padding: "0.05rem 0.25rem",
              borderRadius: "0.25rem",
            },
          },
        },
        invert: {
          css: {
            color: theme("colors.zinc.300"),
            a: {
              color: theme("colors.brand.300"),
              "&:hover": { color: theme("colors.brand.200") },
            },
            "h1, h2, h3, h4": { color: theme("colors.white") },
            blockquote: { borderLeftColor: theme("colors.brand.300") },
            code: {
              backgroundColor: theme("colors.zinc.900"),
              color: theme("colors.zinc.100"),
            },
            pre: {
              backgroundColor: theme("colors.zinc.900"),
              borderColor: theme("colors.zinc.800"),
            },
            hr: { borderColor: theme("colors.zinc.800") },
            img: { borderColor: theme("colors.zinc.800") },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
