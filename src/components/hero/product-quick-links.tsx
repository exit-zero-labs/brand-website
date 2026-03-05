"use client";

import { motion } from "framer-motion";

const LINKS = [
  {
    emoji: "🔐",
    label: "Threat Forge",
    href: "#products",
    color:
      "hover:border-forge/60 hover:text-forge hover:shadow-[0_0_16px_rgba(99,102,241,0.25)]",
  },
  {
    emoji: "🌐",
    label: "Kinnections",
    href: "#kinnections",
    color:
      "hover:border-ember/60 hover:text-ember hover:shadow-[0_0_16px_rgba(249,115,22,0.25)]",
  },
  {
    emoji: "🗺️",
    label: "Geo Spot",
    href: "#geo-spot",
    color:
      "hover:border-signal/60 hover:text-signal hover:shadow-[0_0_16px_rgba(0,217,126,0.25)]",
  },
] as const;

type ProductQuickLinksProps = {
  className?: string;
};

export function ProductQuickLinks({ className }: ProductQuickLinksProps) {
  return (
    <div
      className={`flex flex-wrap gap-3 ${className ?? ""}`}
      aria-label="Jump to product"
    >
      {LINKS.map((link, i) => (
        <motion.a
          key={link.label}
          href={link.href}
          className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-body text-sm text-mist/70 backdrop-blur-sm transition-all duration-200 ${link.color}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <span aria-hidden="true">{link.emoji}</span>
          {link.label}
        </motion.a>
      ))}
    </div>
  );
}
