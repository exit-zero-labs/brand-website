"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { Button } from "@/components/ui/button";
import { PillBadge } from "@/components/ui/pill-badge";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function ThreatForgeSection() {
  return (
    <SectionWrapper
      id="products"
      ariaLabel="Threat Forge — threat modeling tool"
      className="bg-dusk"
    >
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 py-20">
        {/* Product image — left on desktop */}
        <div className="order-2 md:order-1">
          <div className="flex aspect-[16/10] items-center justify-center rounded-lg border border-forge/20 bg-zero overflow-hidden">
            <div className="text-center">
              <span className="font-mono text-sm text-mist">
                [ app screenshot ]
              </span>
              <p className="mt-2 font-mono text-xs text-mist/60">
                threatforge.dev
              </p>
            </div>
          </div>
        </div>

        {/* Text — right on desktop, first on mobile */}
        <div className="order-1 md:order-2">
          <AnimatedText>
            <PillBadge color="forge">Released</PillBadge>
          </AnimatedText>

          <AnimatedText
            as="h2"
            className="mt-6 font-display text-4xl font-bold text-forge md:text-5xl"
            delay={0.1}
          >
            Model threats before they model you
          </AnimatedText>

          <AnimatedText
            as="p"
            className="mt-4 max-w-md font-body text-lg text-white"
            delay={0.2}
          >
            Threat Forge is an open-source, cross-platform desktop app for
            threat modeling. Visual data flow diagrams, STRIDE analysis, and
            AI-assisted threat discovery — all in a clean, git-friendly YAML
            format.
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="solid" href="/products/threat-forge">
                Learn more
              </Button>
              <Button variant="ghost" href="https://threatforge.dev">
                Visit site →
              </Button>
            </div>
          </AnimatedText>
        </div>
      </div>
    </SectionWrapper>
  );
}
