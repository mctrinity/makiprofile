// src/components/ShapeDivider.tsx
"use client";

export type ShapeDividerProps = {
  position?: "top" | "bottom";
  height?: number | string;
  fillClassName?: string;
  className?: string;
  /** Overlap by 1px to hide hairline seams */
  seamless?: boolean;
};

export default function ShapeDivider({
  position = "top",
  height = 150,
  fillClassName = "fill-[#077777]",
  className = "",
  seamless = false,
}: ShapeDividerProps) {
  const posClass = position === "top" ? "top-0" : "bottom-0";
  const overlapClass = position === "top" ? "-translate-y-px" : "translate-y-px";

  return (
    <div
      className={`pointer-events-none absolute inset-x-0 ${posClass} overflow-hidden leading-[0] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`relative block w-[calc(100%+1.3px)] ${
          seamless ? `transform-gpu ${overlapClass}` : ""
        }`}
        style={{ height }}
        role="presentation"
        focusable="false"
      >
        <path
          className={fillClassName}
          stroke="none"
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        />
      </svg>
    </div>
  );
}
