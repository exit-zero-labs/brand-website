"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PRODUCTS = [
  {
    name: "threat-forge",
    version: "v2.1.0",
    status: "LIVE",
    progress: 100,
    color: "text-forge",
    barColor: "bg-forge",
    href: "#products",
  },
  {
    name: "kinnections",
    version: "v1.3.0",
    status: "LIVE",
    progress: 100,
    color: "text-ember",
    barColor: "bg-ember",
    href: "#kinnections",
  },
  {
    name: "geo-spot  ",
    version: "v0.9.0",
    status: "BETA",
    progress: 60,
    color: "text-signal",
    barColor: "bg-signal",
    href: "#geo-spot",
  },
] as const;

function ProgressBar({
  progress,
  barColor,
  delay,
}: {
  progress: number;
  barColor: string;
  delay: number;
}) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => setWidth(progress), delay * 1000 + 200);
    return () => clearTimeout(timer);
  }, [isInView, progress, delay]);

  const bars = 10;
  const filledBars = Math.round((width / 100) * bars);

  return (
    <span
      ref={ref}
      className="font-mono text-xs tracking-widest transition-all duration-700"
      aria-hidden="true"
    >
      {Array.from({ length: bars }, (_, i) => (
        <span
          key={i}
          className={i < filledBars ? `${barColor} opacity-90` : "text-mist/20"}
          style={{ transition: `opacity ${0.05 * i}s ease` }}
        >
          {i < filledBars ? "█" : "░"}
        </span>
      ))}
    </span>
  );
}

type ProductStatusProps = {
  className?: string;
};

export function ProductStatus({ className }: ProductStatusProps) {
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
    <div className={className} aria-label="Product suite status">
      <div className="border border-white/5 rounded-lg bg-white/[0.02] px-4 py-3 backdrop-blur-sm space-y-2">
        <div className="font-mono text-[10px] text-mist/40 tracking-widest uppercase mb-3">
          // system status
        </div>
        {PRODUCTS.map((product, i) => (
          <motion.a
            key={product.name}
            href={product.href}
            className="flex items-center gap-3 group cursor-pointer block"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.3, duration: 0.4 }}
            aria-label={`${product.name.trim()} ${product.version} — ${product.status}`}
          >
            <span className={`${product.color} text-xs`} aria-hidden="true">
              ●
            </span>
            <span className="font-mono text-xs text-white/70 group-hover:text-white transition-colors w-28">
              {product.name}
            </span>
            <span className="font-mono text-[10px] text-mist/50 w-14">
              {product.version}
            </span>
            <span
              className={`font-mono text-[10px] ${product.color} opacity-80 w-10`}
            >
              [{product.status}]
            </span>
            <ProgressBar
              progress={product.progress}
              barColor={product.barColor}
              delay={i * 0.3}
            />
            <span className="font-mono text-[10px] text-mist/40">
              {product.progress}%
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
