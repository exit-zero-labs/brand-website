"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedText } from "@/components/ui/animated-text";
import { Button } from "@/components/ui/button";
import { PillBadge } from "@/components/ui/pill-badge";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ThreatForgeMockup } from "./threat-forge-mockup";

const FEATURES = [
  "→ STRIDE analysis on every element, automatically",
  "→ AI-powered threat discovery with Claude & GPT",
  "→ Git-diffable YAML. No binary blobs. Ever.",
] as const;

const STATS = [
  { value: "44", label: "components" },
  { value: "6", label: "templates" },
  { value: "15", label: "themes" },
  { value: "free", label: "forever" },
] as const;

export function ThreatForgeSection() {
  const mockupRef = useRef<HTMLDivElement>(null);
  const isMockupInView = useInView(mockupRef, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="products"
      ariaLabel="Threat Forge — open-source threat modeling tool"
      className="relative overflow-hidden bg-dusk"
    >
      {/* Subtle forge accent */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Section divider */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-forge/20"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
        aria-hidden="true"
      />

      <div className="grid items-center gap-12 py-20 md:grid-cols-2 md:gap-16">
        {/* Product mockup — left on desktop */}
        <motion.div
          ref={mockupRef}
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -40, filter: "blur(4px)" }}
          animate={
            isMockupInView
              ? { opacity: 1, x: 0, filter: "blur(0px)" }
              : { opacity: 0, x: -40, filter: "blur(4px)" }
          }
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          style={{ transition: "filter 0.6s ease" }}
        >
          <ThreatForgeMockup />
        </motion.div>

        {/* Text — right on desktop, first on mobile */}
        <div className="order-1 md:order-2">
          <AnimatedText>
            <PillBadge color="forge">Open Source</PillBadge>
          </AnimatedText>

          <AnimatedText
            as="h2"
            className="mt-6 font-display text-4xl font-bold text-forge md:text-5xl"
            delay={0.1}
          >
            Threat model your architecture.
            <br />
            <span className="text-white">Before someone else does.</span>
          </AnimatedText>

          <AnimatedText as="div" className="mt-6 space-y-2" delay={0.2}>
            {FEATURES.map((feature) => (
              <p
                key={feature}
                className="font-mono text-sm text-mist md:text-base"
              >
                {feature}
              </p>
            ))}
          </AnimatedText>

          {/* Stats */}
          <AnimatedText delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-1">
                  <span className="font-mono text-base font-bold text-forge">
                    {stat.value}
                  </span>
                  <span className="font-mono text-xs text-mist/60">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                variant="solid"
                href="https://threatforge.dev"
                className="bg-forge hover:shadow-[0_0_20px_rgba(99,102,241,0.35)] text-white"
              >
                Download free
              </Button>
              <Button variant="ghost" href="/products/threat-forge">
                Learn more →
              </Button>
            </div>
          </AnimatedText>
        </div>
      </div>
    </SectionWrapper>
  );
}
