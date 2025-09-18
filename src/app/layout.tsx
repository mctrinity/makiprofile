import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/siteUrl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Maki Dizon",
  description: "Designer/Engineer portfolio of Maki",
  icons: { icon: "/favicon.ico" }, // will use /public/favicon.ico
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className="min-h-dvh flex flex-col bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100 font-sans"
        suppressHydrationWarning
      >
        <Navbar />
        {/* flex-1 makes the main area grow, pushing Footer to the bottom on short pages */}
        <main className="w-full flex-1 pt-24 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
