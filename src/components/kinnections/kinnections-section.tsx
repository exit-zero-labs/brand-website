"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { Button } from "@/components/ui/button";
import { PillBadge } from "@/components/ui/pill-badge";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TiltCard } from "./tilt-card";

export function KinnectionsSection() {
  return (
    <SectionWrapper
      id="kinnections"
      ariaLabel="Kinnections — relationship mapper"
      className="bg-dusk"
    >
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 py-20">
        {/* Product image — left on desktop */}
        <TiltCard className="order-2 md:order-1">
          <div className="flex aspect-4/3 items-center justify-center rounded-lg border border-white/10 bg-zero">
            <div className="text-center">
              <span className="font-mono text-sm text-mist">
                [ product screenshot ]
              </span>
              <p className="mt-2 font-mono text-xs text-mist/60">
                kinnections.app
              </p>
            </div>
          </div>
        </TiltCard>

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
            Know your people
          </AnimatedText>

          <AnimatedText
            as="p"
            className="mt-4 max-w-md font-body text-lg text-white"
            delay={0.2}
          >
            Map the relationships that matter most. Kinnections is an end-to-end
            encrypted, infinite-canvas relationship mapper built for the people
            who care enough to remember.
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="solid" href="/products/kinnections">
                Learn more
              </Button>
              <Button variant="ghost" href="https://kinnections.app">
                Try it now →
              </Button>
            </div>
          </AnimatedText>
        </div>
      </div>
    </SectionWrapper>
  );
}
