import { ReactNode } from "react";

type Props = {
  label: string;
  className?: string;
  tone?: "leaf" | "cream" | "peach" | "deep";
  children?: ReactNode;
};

const tones: Record<NonNullable<Props["tone"]>, string> = {
  leaf: "bg-gradient-to-br from-bloom-200 via-bloom-300 to-bloom-500",
  cream: "bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200",
  peach: "bg-gradient-to-br from-peach-200 via-peach-300 to-bloom-200",
  deep: "bg-gradient-to-br from-bloom-700 via-bloom-800 to-bloom-950 text-cream-50",
};

export function Placeholder({
  label,
  className = "",
  tone = "leaf",
  children,
}: Props) {
  return (
    <div
      className={`placeholder-img relative overflow-hidden ${tones[tone]} ${className}`}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_60%)]" />
      <span className="relative z-10 px-3 py-1.5 text-[10px] sm:text-xs">
        {label}
      </span>
      {children}
    </div>
  );
}
