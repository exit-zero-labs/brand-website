"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ProductQuickLinks } from "./product-quick-links";
import { ProductStatus } from "./product-status";
import { TerminalTyper } from "./terminal-typer";

/* Lazy-load particle field — not in critical render path */
const ParticleField = dynamic(
  () => import("./particle-field").then((m) => m.ParticleField),
  { ssr: false },
);

export function HeroSection() {
  return (
    <header className="relative flex min-h-screen items-center overflow-hidden bg-zero px-6">
      {/* Particle network field */}
      <ParticleField />

      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Forge radial accent — subtle top-left */}
      <div
        className="pointer-events-none absolute -left-64 -top-64 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Giant "exit 0" watermark */}
      <div
        className="pointer-events-none absolute bottom-4 right-4 select-none font-mono leading-none text-white/[0.06]"
        style={{ fontSize: "clamp(7rem, 28vw, 22rem)" }}
        aria-hidden="true"
      >
        exit 0
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: headline + CTAs */}
          <div className="max-lg:mx-auto max-lg:max-w-xl max-lg:text-center">
            <TerminalTyper className="mb-6" />

            <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl xl:text-7xl">
              Ship clean.
              <br />
              <span className="text-signal">Build forward.</span>
            </h1>

            <p className="mt-6 font-display text-lg text-mist md:text-xl">
              Indie software, made with care.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 max-lg:justify-center">
              <Button variant="solid" href="#products">
                See our products
              </Button>
              <Button variant="ghost" href="/about">
                Our story
              </Button>
            </div>

            <ProductQuickLinks className="mt-8 max-lg:justify-center" />
          </div>

          {/* Right: system status panel */}
          <div className="max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
            <ProductStatus />
          </div>
        </div>
      </div>
    </header>
  );
}
