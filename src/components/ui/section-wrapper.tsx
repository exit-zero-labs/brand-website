import { cn } from "@/lib/cn";
import type { CSSProperties } from "react";

type SectionWrapperProps = {
  children: React.ReactNode;
  id?: string;
  ariaLabel: string;
  className?: string;
  innerClassName?: string;
  style?: CSSProperties;
};

export function SectionWrapper({
  children,
  id,
  ariaLabel,
  className,
  innerClassName,
  style,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("px-4 sm:px-6 py-[--spacing-4xl] md:py-[--spacing-5xl]", className)}
      style={style}
    >
      <div className={cn("mx-auto max-w-[1200px]", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
