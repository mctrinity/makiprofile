// src/components/Section.tsx
interface Props {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  noChrome?: boolean; // ← add
}

export default function Section({ id, title, children, className = "", noChrome }: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 py-16 ${noChrome ? "border-0 ring-0 shadow-none outline-none" : ""} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
