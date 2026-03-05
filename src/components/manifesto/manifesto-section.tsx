"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const PILLARS = [
  {
    title: "Craft",
    body: "Built right, iterated until excellent. We ship when it works — not when a deadline says so. Every pixel, every API response, every user flow gets the same attention.",
    accentColor: "border-forge",
    accentText: "text-forge",
  },
  {
    title: "People",
    body: "Designed around humans, not funnels. Software should respect its users, not extract from them. No dark patterns, no engagement tricks, no selling attention.",
    accentColor: "border-ember",
    accentText: "text-ember",
  },
  {
    title: "Independence",
    body: "Bootstrapped by choice, accountable to users. No investors to please, no growth hacks to chase. We build what we believe in and answer to the people who use it.",
    accentColor: "border-signal",
    accentText: "text-signal",
  },
] as const;

export function ManifestoSection() {
  return (
    <SectionWrapper
      id="manifesto"
      ariaLabel="Manifesto — Why We Build"
      className="bg-canvas py-20"
    >
      {/* Section label */}
      <AnimatedText>
        <p className="font-mono text-xs text-dusk/40 tracking-widest uppercase mb-8">
          // manifesto
        </p>
      </AnimatedText>

      {/* Pull quote — left-aligned, large, with border */}
      <AnimatedText className="max-w-3xl">
        <blockquote className="border-l-4 border-zero pl-8">
          <p className="font-display text-2xl font-semibold leading-snug text-zero md:text-3xl lg:text-4xl">
            &ldquo;We did not raise a round. We do not have a growth team. We
            have a good idea, sharp tools, and zero patience for software that
            does not work.&rdquo;
          </p>
          <footer className="mt-6 font-display text-base text-dusk/60 italic">
            — Shreyas, Founder
          </footer>
        </blockquote>
      </AnimatedText>

      {/* Three pillars */}
      <div className="mt-20 grid gap-8 md:mt-24 md:grid-cols-3">
        {PILLARS.map((pillar, i) => (
          <AnimatedText key={pillar.title} delay={0.1 * (i + 1)}>
            <div className={`border-t-2 ${pillar.accentColor} pt-6`}>
              <h3 className={`font-display text-2xl font-semibold text-zero`}>
                {pillar.title}
              </h3>
              <p className="mt-3 font-body text-base leading-relaxed text-dusk/80">
                {pillar.body}
              </p>
            </div>
          </AnimatedText>
        ))}
      </div>

      {/* Join us prompt */}
      <AnimatedText delay={0.5} className="mt-16 border-t border-zero/10 pt-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-body text-base text-dusk/70">
            Want to build with us?{" "}
            <span className="font-semibold text-zero">
              We&rsquo;re bootstrapped and hiring carefully.
            </span>
          </p>
          <a
            href="/about"
            className="font-body text-sm font-semibold text-zero underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Read our full story →
          </a>
        </div>
      </AnimatedText>
    </SectionWrapper>
  );
}
