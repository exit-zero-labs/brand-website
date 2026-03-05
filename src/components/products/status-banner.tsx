import { PillBadge } from "@/components/ui/pill-badge";
import { cn } from "@/lib/cn";

type StatusBannerProps = {
  badge: string;
  badgeColor?: "ember" | "signal" | "forge";
  title: string;
  description: string;
  className?: string;
};

export function StatusBanner({
  badge,
  badgeColor = "signal",
  title,
  description,
  className,
}: StatusBannerProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-dusk bg-dusk/30 p-6 md:p-8",
        className,
      )}
    >
      <PillBadge color={badgeColor}>{badge}</PillBadge>
      <h3 className="mt-4 font-display text-xl font-semibold text-white">
        {title}
      </h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-mist">
        {description}
      </p>
    </div>
  );
}
