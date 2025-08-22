import About from "@/components/About";
import Contact from "@/components/Contact";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <About />
      <Contact />
    </>
  );
}
