// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
// If you actually have this file, keep it. Otherwise remove the next line.
// import "../styles/prose.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maki — Portfolio",
  description: "Designer/Engineer portfolio of Maki",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="w-full pt-24 pb-16">
          {children}
          {/* Rendered on every page; move to page.tsx if you only want on the homepage */}
          <About />
          <Contact />
        </main>
        <Footer />
      </body>
    </html>
  );
}
