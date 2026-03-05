"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { AnimatedText } from "@/components/ui/animated-text";
import { PillBadge } from "@/components/ui/pill-badge";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EmailCapture } from "./email-capture";

/* Lazy-load the globe — not in critical path, no SSR */
const Globe = dynamic(() => import("./globe").then((m) => m.Globe), {
  ssr: false,
  loading: () => (
    <div className="flex aspect-square w-full items-center justify-center">
      <span className="font-mono text-xs text-mist/40">loading globe...</span>
    </div>
  ),
});

const GAME_MODES = [
  {
    emoji: "🎯",
    name: "Pin Point",
    description: "Place the pin. Beat the clock.",
    status: "Free",
  },
  {
    emoji: "⛳",
    name: "Flag Master",
    description: "Every flag. Every nation.",
    status: "Paid",
  },
  {
    emoji: "🥸",
    name: "Odd One Out",
    description: "Find what doesn't belong.",
    status: "Paid",
  },
] as const;

export function GeoSpotSection() {
  return (
    <SectionWrapper
      id="geo-spot"
      ariaLabel="Geo Spot — geography gaming platform"
      className="relative overflow-hidden bg-zero"
    >
      {/* Topographic-style pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M0 50 Q25 30 50 50 Q75 70 100 50' stroke='%2300D97E' fill='none' stroke-width='1'/%3E%3Cpath d='M0 30 Q25 10 50 30 Q75 50 100 30' stroke='%2300D97E' fill='none' stroke-width='1'/%3E%3Cpath d='M0 70 Q25 50 50 70 Q75 90 100 70' stroke='%2300D97E' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
        aria-hidden="true"
      />

      {/* Signal radial accent */}
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,217,126,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Section divider */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-signal/20"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
        aria-hidden="true"
      />

      <div className="grid items-center gap-12 py-20 md:grid-cols-2 md:gap-16">
        {/* Globe — left on desktop, below on mobile */}
        <div className="order-2 md:order-1 max-md:mx-auto max-md:max-w-xs">
          {/* Globe with signal glow halo */}
          <div
            className="relative"
            style={{ filter: "drop-shadow(0 0 40px rgba(0,217,126,0.12))" }}
          >
            <Globe />
          </div>
        </div>

        {/* Text + form — right on desktop, first on mobile */}
        <div className="order-1 md:order-2">
          <AnimatedText>
            <PillBadge color="signal">Coming Soon</PillBadge>
          </AnimatedText>

          <AnimatedText
            as="h2"
            className="mt-6 font-display text-4xl font-bold text-white md:text-5xl"
            delay={0.1}
          >
            The world is your
            <br />
            <span className="text-signal">playing field.</span>
          </AnimatedText>

          {/* Game modes */}
          <AnimatedText as="div" className="mt-8 space-y-3" delay={0.2}>
            {GAME_MODES.map((mode) => (
              <div key={mode.name} className="flex items-center gap-3">
                <span className="text-lg" aria-hidden="true">
                  {mode.emoji}
                </span>
                <div className="flex-1">
                  <span className="font-mono text-sm text-white">
                    {mode.name}
                  </span>
                  <span className="font-mono text-sm text-mist/50">
                    {" "}
                    — {mode.description}
                  </span>
                </div>
                <span
                  className={`font-mono text-[10px] rounded-full px-2 py-0.5 ${
                    mode.status === "Free"
                      ? "bg-signal/10 text-signal border border-signal/20"
                      : "bg-white/5 text-mist/50 border border-white/10"
                  }`}
                >
                  {mode.status}
                </span>
              </div>
            ))}
          </AnimatedText>

          {/* Key features */}
          <AnimatedText delay={0.3}>
            <p className="mt-6 font-body text-sm text-mist/60">
              Offline-first · No subscriptions · One-time packs · iOS & Web
            </p>
          </AnimatedText>

          {/* Email capture */}
          <AnimatedText delay={0.4}>
            <div className="mt-8">
              <EmailCapture />
              <p className="mt-2 font-body text-xs text-mist/40 italic">
                Join 847 early explorers
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </SectionWrapper>
  );
}
