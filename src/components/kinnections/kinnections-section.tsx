"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedText } from "@/components/ui/animated-text";
import { Button } from "@/components/ui/button";
import { PillBadge } from "@/components/ui/pill-badge";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { RelationshipGraph } from "./relationship-graph";
import { TiltCard } from "./tilt-card";

const FEATURES = [
  "Infinite canvas. Pan and zoom your whole world.",
  "Zero-knowledge encryption. We can't read your data. Ever.",
  "3D globe view. See your network on the planet.",
] as const;

export function KinnectionsSection() {
  const graphRef = useRef<HTMLDivElement>(null);
  const isGraphInView = useInView(graphRef, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="kinnections"
      ariaLabel="Kinnections — encrypted relationship mapper"
      className="relative overflow-hidden bg-zero"
    >
      {/* Warm ember radial accent */}
      <div
        className="pointer-events-none absolute -right-32 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Section divider */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-ember/20"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "right" }}
        aria-hidden="true"
      />

      <div className="grid items-center gap-12 py-20 md:grid-cols-2 md:gap-16">
        {/* Relationship graph — left on desktop */}
        <motion.div
          ref={graphRef}
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -30 }}
          animate={
            isGraphInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
          }
          transition={{ type: "spring", stiffness: 80, damping: 22 }}
        >
          <TiltCard>
            <RelationshipGraph />
          </TiltCard>
        </motion.div>

        {/* Text — right on desktop, first on mobile */}
        <div className="order-1 md:order-2">
          <AnimatedText>
            <PillBadge color="ember">Now Available</PillBadge>
          </AnimatedText>

          <AnimatedText
            as="h2"
            className="mt-6 font-display text-4xl font-bold text-ember md:text-5xl"
            delay={0.1}
          >
            Every relationship,
            <br />
            <span className="text-white">one living map.</span>
          </AnimatedText>

          <AnimatedText
            as="p"
            className="mt-4 max-w-md font-body text-lg text-white/80"
            delay={0.2}
          >
            Map the relationships that matter most. Kinnections is the only
            relationship mapper that keeps your data completely private — not
            even we can see it.
          </AnimatedText>

          <AnimatedText as="div" className="mt-6 space-y-3" delay={0.25}>
            {FEATURES.map((feature) => (
              <p key={feature} className="font-body text-base text-mist">
                <span className="text-ember/70">›</span> <span>{feature}</span>
              </p>
            ))}
          </AnimatedText>

          {/* Privacy note */}
          <AnimatedText delay={0.35}>
            <div className="mt-6 flex items-center gap-2">
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="1"
                  y="7"
                  width="12"
                  height="9"
                  rx="2"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                />
                <path
                  d="M4 7V4.5a3 3 0 0 1 6 0V7"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="font-body text-sm text-mist/70">
                Your data is yours. Period.
              </span>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                variant="solid"
                href="https://kinnections.io"
                className="bg-ember hover:shadow-[0_0_20px_rgba(249,115,22,0.35)] text-white"
              >
                Start mapping
              </Button>
              <Button variant="ghost" href="/products/kinnections">
                See how it works →
              </Button>
            </div>
          </AnimatedText>
        </div>
      </div>
    </SectionWrapper>
  );
}
