// src/app/contacts/layout.tsx
import type { Metadata } from "next";
import { siteUrl } from "@/lib/siteUrl";

export const metadata: Metadata = {
  title: "Contact — Maki Dizon",
  description: "Get in touch with Maki Dizon for project inquiries and collaborations.",
  alternates: { canonical: `${siteUrl}/contacts` },
  openGraph: {
    type: "website",
    url: `${siteUrl}/contacts`,
    title: "Contact — Maki Dizon",
    description: "Get in touch with Maki Dizon for project inquiries and collaborations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Maki Dizon",
    description: "Get in touch with Maki Dizon for project inquiries and collaborations.",
  },
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}