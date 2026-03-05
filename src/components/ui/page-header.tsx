"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { PillBadge } from "@/components/ui/pill-badge";
import { cn } from "@/lib/cn";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  badge?: {
    text: string;
    color: "ember" | "signal" | "forge" | "forge";
  };
  className?: string;
};

export function PageHeader({
  title,
  subtitle,
  badge,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn("bg-zero px-6 pt-32 pb-16 md:pt-40 md:pb-20", className)}
    >
      <div className="mx-auto max-w-[1200px]">
        {badge && (
          <AnimatedText>
            <PillBadge color={badge.color}>{badge.text}</PillBadge>
          </AnimatedText>
        )}

        <AnimatedText
          as="h1"
          className={cn(
            "font-display text-4xl font-bold tracking-tight text-white md:text-6xl",
            badge && "mt-4",
          )}
          delay={badge ? 0.1 : 0}
        >
          {title}
        </AnimatedText>

        {subtitle && (
          <AnimatedText
            as="p"
            className="mt-4 max-w-2xl font-body text-lg text-mist md:text-xl"
            delay={badge ? 0.2 : 0.1}
          >
            {subtitle}
          </AnimatedText>
        )}
      </div>
    </div>
  );
}
