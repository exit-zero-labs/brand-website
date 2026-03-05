import { cn } from "@/lib/cn";

type PillBadgeProps = {
  children: React.ReactNode;
  color?: "ember" | "signal" | "forge";
  className?: string;
};

export function PillBadge({
  children,
  color = "ember",
  className,
}: PillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-4 py-1 text-sm font-semibold font-body uppercase tracking-wide",
        color === "ember" && "bg-ember text-white",
        color === "signal" && "bg-signal text-zero",
        color === "forge" && "bg-forge text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
