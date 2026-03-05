"use client";

import Link from "next/link";
import { useState } from "react";

const FOOTER_LINKS = {
  products: [
    {
      label: "Threat Forge",
      href: "/products/threat-forge",
      hoverColor: "hover:text-forge",
    },
    {
      label: "Kinnections",
      href: "/products/kinnections",
      hoverColor: "hover:text-ember",
    },
    {
      label: "Geo Spot",
      href: "/products/geo-spot",
      hoverColor: "hover:text-signal",
    },
  ],
  company: [
    { label: "About", href: "/about", hoverColor: "hover:text-white" },
    { label: "Contact", href: "/contact", hoverColor: "hover:text-white" },
  ],
  legal: [
    {
      label: "Privacy",
      href: "/legal/privacy",
      hoverColor: "hover:text-white",
    },
    { label: "Terms", href: "/legal/terms", hoverColor: "hover:text-white" },
    {
      label: "Refund Policy",
      href: "/legal/refund",
      hoverColor: "hover:text-white",
    },
  ],
} as const;

export function Footer() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <footer className="bg-zero px-6 py-12 md:py-16">
      <div className="mx-auto max-w-[1200px]">
        {/* Link groups */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Wordmark */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-display text-lg font-semibold text-white transition-colors hover:text-signal"
            >
              Exit Zero Labs LLC
            </Link>
            <p className="mt-2 font-body text-sm text-mist">
              Ship clean. Build forward.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-mist/60">
              Products
            </h3>
            <nav aria-label="Products" className="mt-3 flex flex-col gap-2">
              {FOOTER_LINKS.products.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-body text-sm text-mist transition-colors ${link.hoverColor}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-mist/60">
              Company
            </h3>
            <nav aria-label="Company" className="mt-3 flex flex-col gap-2">
              {FOOTER_LINKS.company.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-body text-sm text-mist transition-colors ${link.hoverColor}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-mist/60">
              Legal
            </h3>
            <nav aria-label="Legal" className="mt-3 flex flex-col gap-2">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-body text-sm text-mist transition-colors ${link.hoverColor}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 border-t border-dusk pt-8">
          {/* Stack line */}
          <p className="font-mono text-[11px] text-mist/30 mb-3">
            &gt; built with Next.js, Tauri, Three.js, and unreasonable standards
          </p>

          <p className="font-body text-sm text-mist">
            &copy; 2026 Exit{" "}
            <button
              type="button"
              className="relative cursor-default border-none bg-transparent p-0 font-body text-sm text-mist"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onFocus={() => setShowTooltip(true)}
              onBlur={() => setShowTooltip(false)}
            >
              Zero
              {showTooltip && (
                <span
                  className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-dusk px-3 py-1.5 font-mono text-xs text-signal shadow-lg"
                  role="tooltip"
                >
                  exit 0 ✓ process exited successfully
                </span>
              )}
            </button>{" "}
            Labs
          </p>
        </div>
      </div>
    </footer>
  );
}
