"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const BOOT_LINES = [
  {
    text: "> initializing product suite...",
    color: "text-mist",
    delay: 0,
  },
  {
    text: "> loading threat-forge",
    suffix: "  ✓",
    suffixColor: "text-forge",
    color: "text-white/70",
    delay: 0.2,
  },
  {
    text: "> loading kinnections ",
    suffix: "  ✓",
    suffixColor: "text-ember",
    color: "text-white/70",
    delay: 0.4,
  },
  {
    text: "> loading geo-spot    ",
    suffix: "  ···",
    suffixColor: "text-signal",
    color: "text-white/70",
    delay: 0.6,
  },
] as const;

export function ScrollHook() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="flex items-center justify-center bg-zero px-6 py-16"
      aria-hidden="true"
    >
      <div className="space-y-1">
        {BOOT_LINES.map((line) => (
          <motion.div
            key={line.text}
            className="flex items-center"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -8 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
            transition={{
              delay: line.delay,
              duration: 0.35,
              ease: "easeOut",
            }}
          >
            <span className={`font-mono text-sm ${line.color}`}>
              {line.text}
            </span>
            {"suffix" in line && (
              <motion.span
                className={`font-mono text-sm ${line.suffixColor}`}
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: line.delay + 0.15, duration: 0.3 }}
              >
                {line.suffix}
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
