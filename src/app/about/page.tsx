import type { Metadata } from "next";
import { FounderCard } from "@/components/about/founder-card";
import { ValuesGrid } from "@/components/about/values-grid";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "About — Exit Zero Labs",
  description:
    "The story behind Exit Zero Labs. Bootstrapped indie software, built with care. No investors, no growth hacks — just tools built for people who care about quality.",
  openGraph: {
    title: "About Exit Zero Labs",
    description:
      "Bootstrapped indie software, built with care. No investors, no growth hacks.",
    url: "https://exitzerolabs.com/about",
    type: "website",
  },
  alternates: {
    canonical: "https://exitzerolabs.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zero">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <PageHeader
        title="Our story"
        subtitle="Indie software, made with care. No investors, no growth hacks — just tools built for people who care about quality."
      />

      {/* Origin story */}
      <section
        aria-label="Origin"
        className="mx-auto max-w-[1200px] px-6 pb-16 md:pb-20"
      >
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Named after success
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-mist">
            In Unix, <code className="font-mono text-signal">exit 0</code> means
            the program ran successfully. No errors, no exceptions — just clean
            execution. That&apos;s the standard we hold ourselves to.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-mist">
            Exit Zero Labs was founded on a simple observation: most software is
            built to optimize metrics, not to serve people. Engagement hacking,
            dark patterns, data harvesting — these are symptoms of building for
            investors instead of users.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-mist">
            We wanted to build different. Software that does what it says,
            respects your privacy, and gets out of the way. The kind of tools
            you&apos;d recommend to a friend without caveats.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section
        aria-label="Mission"
        className="mx-auto max-w-[1200px] px-6 pb-16 md:pb-20"
      >
        <div className="rounded-lg border border-dusk bg-dusk/30 p-8 md:p-10">
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            What we believe
          </h2>
          <blockquote className="mt-4 font-display text-lg font-semibold leading-relaxed text-canvas md:text-xl">
            &ldquo;We did not raise a round. We do not have a growth team. We
            have a good idea, sharp tools, and zero patience for software that
            does not work.&rdquo;
          </blockquote>
          <p className="mt-4 font-body text-sm text-mist">
            This isn&apos;t a pitch. It&apos;s how we operate. Every product
            decision starts with the same question: does this make the tool
            better for the person using it?
          </p>
        </div>
      </section>

      {/* Values */}
      <section
        aria-label="Values"
        className="mx-auto max-w-[1200px] px-6 pb-16 md:pb-20"
      >
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Our values
        </h2>
        <p className="mt-3 max-w-lg font-body text-lg text-mist">
          These aren&apos;t aspirational. They&apos;re the rules we build by
          every day.
        </p>
        <ValuesGrid className="mt-10" />
      </section>

      {/* Founder */}
      <section
        aria-label="Founder"
        className="mx-auto max-w-[1200px] px-6 pb-16 md:pb-20"
      >
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Who&apos;s building this
        </h2>
        <p className="mt-3 max-w-lg font-body text-lg text-mist">
          Exit Zero Labs is a one-person company. That&apos;s intentional.
        </p>
        <FounderCard
          name="Shreyas"
          jobTitle="Founder & Developer"
          bio="Full-stack developer building tools that respect the people who use them. Threat Forge started as frustration with the gap between free-but-ancient and enterprise-locked threat modeling tools. Kinnections came from wanting relationship management that treated private data as yours, not as a business model. Geo Spot came from a love of geography and a dislike of ad-supported games. All three are built with the same philosophy: your data is yours, the software should work, and nobody needs to see ads."
          linkedIn="https://linkedin.com/in/shreyassane"
          className="mt-8 max-w-xl"
        />
      </section>

      {/* Bootstrap narrative */}
      <section
        aria-label="Why bootstrapped"
        className="mx-auto max-w-[1200px] px-6 pb-20 md:pb-32"
      >
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Why bootstrapped
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-mist">
            Bootstrapping isn&apos;t a constraint — it&apos;s a feature. Without
            venture funding, there&apos;s no pressure to hyper-grow, no
            incentive to monetize attention, and no board meetings where someone
            asks about monthly active users.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-mist">
            The business model is simple: build something good enough that
            people pay for it. If the product doesn&apos;t earn its keep, we
            make it better. That alignment between revenue and quality is the
            whole point.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-mist">
            Ship clean. Build forward. Exit zero.
          </p>
        </div>
      </section>
    </div>
  );
}
