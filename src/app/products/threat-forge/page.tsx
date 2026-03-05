import type { Metadata } from "next";
import { FeatureGrid } from "@/components/products/feature-grid";
import { ScreenshotPlaceholder } from "@/components/products/screenshot-placeholder";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Threat Forge — Open-Source Threat Modeling",
  description:
    "Threat Forge is a cross-platform desktop app for threat modeling. Visual data flow diagrams, STRIDE analysis, AI-assisted threats, and git-friendly YAML files. Free and open source.",
  openGraph: {
    title: "Threat Forge — Open-Source Threat Modeling",
    description:
      "Cross-platform desktop app for threat modeling. STRIDE analysis, AI-assisted threats, git-friendly YAML. Free and open source.",
    url: "https://exitzerolabs.com/products/threat-forge",
    type: "website",
  },
  twitter: {
    title: "Threat Forge — Open-Source Threat Modeling",
    description:
      "Cross-platform desktop app for threat modeling. STRIDE analysis, AI-assisted threats, git-friendly YAML.",
  },
  alternates: {
    canonical: "https://exitzerolabs.com/products/threat-forge",
  },
};

const FEATURES = [
  {
    icon: "🗺️",
    title: "Visual data flow diagrams",
    description:
      "Drag-and-drop canvas with 44 typed components across 10 categories. Connection handles auto-route between elements. Trust boundaries and text annotations included.",
  },
  {
    icon: "🛡️",
    title: "STRIDE threat engine",
    description:
      "Built-in rule engine applies Microsoft's STRIDE-per-element methodology. Generates threats automatically based on element types and data flow patterns. Works fully offline.",
  },
  {
    icon: "🤖",
    title: "AI-assisted analysis",
    description:
      "Chat with Claude or GPT about your threat model. The AI sees your full architecture and suggests threats, proposes mitigations, or answers security questions. BYOK.",
  },
  {
    icon: "📄",
    title: "Git-friendly YAML",
    description:
      "Human-readable, git-diffable YAML files. No opaque binary formats. Review threat models in PRs, track changes over time, and version your security analysis.",
  },
  {
    icon: "📦",
    title: "Pre-built templates",
    description:
      "Start from six production-quality templates: Cloud Microservices, E-Commerce, Mobile Banking, SaaS Platform, IoT Smart Building, and Healthcare System.",
  },
  {
    icon: "💻",
    title: "Cross-platform",
    description:
      "Runs on macOS, Windows, and Linux. Built with Tauri v2 and React — native performance with a ~10MB binary. No Electron bloat.",
  },
] as const;

export default function ThreatForgePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Threat Forge",
    url: "https://threatforge.dev",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS, Windows, Linux",
    description:
      "An open-source, cross-platform desktop app for threat modeling. Visual data flow diagrams, STRIDE analysis, AI-assisted threat discovery, and git-friendly YAML files.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      description: "Free and open source — Apache 2.0 license",
    },
    featureList: [
      "Visual data flow diagrams",
      "STRIDE threat engine",
      "AI-assisted analysis",
      "Git-friendly YAML format",
      "Pre-built templates",
      "Cross-platform (macOS, Windows, Linux)",
    ],
    license: "https://www.apache.org/licenses/LICENSE-2.0",
    publisher: {
      "@type": "Organization",
      name: "Exit Zero Labs",
      url: "https://exitzerolabs.com",
    },
  };

  return (
    <div className="min-h-screen bg-zero">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data is static, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/#products" },
          { label: "Threat Forge" },
        ]}
      />
      <PageHeader
        title="Model threats before they model you"
        subtitle="Threat Forge is an open-source, cross-platform desktop app for threat modeling. Visual diagrams, automated STRIDE analysis, and AI-powered threat discovery — in a clean, git-friendly format."
        badge={{ text: "Released", color: "forge" }}
      />

      {/* Hero Screenshot */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <ScreenshotPlaceholder
          label="threat forge app screenshot"
          sublabel="threatforge.dev"
          aspectRatio="aspect-[16/9]"
        />
      </div>

      {/* Features */}
      <section
        aria-label="Features"
        className="mx-auto max-w-[1200px] px-4 sm:px-6 pt-20 md:pt-28"
      >
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Security tooling that respects developers
        </h2>
        <p className="mt-3 max-w-lg font-body text-lg text-mist">
          Most threat modeling tools are either enterprise-locked or stuck in
          2016. Threat Forge fills the gap with a modern UI, clean file format,
          and AI assistance — no procurement cycle required.
        </p>
        <FeatureGrid features={FEATURES} className="mt-10" />
      </section>

      {/* Open source callout */}
      <section
        aria-label="Open Source"
        className="mx-auto max-w-[1200px] px-4 sm:px-6 pt-20 md:pt-28"
      >
        <div
          className="rounded-lg p-8 md:p-10"
          style={{
            border: "1px solid rgba(0,196,255,0.18)",
            background: "rgba(0,196,255,0.04)",
          }}
        >
          <h2 className="font-display text-2xl font-bold text-forge md:text-3xl">
            Free and open source. Always.
          </h2>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-mist">
            Threat Forge is released under the Apache 2.0 license. No freemium
            upsells, no telemetry, no enterprise-only features. The full
            application — including STRIDE engine, AI integration, and all
            templates — is available to everyone. Security tooling should be
            accessible, not gated behind a sales call.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-label="Download"
        className="mx-auto max-w-[1200px] px-4 sm:px-6 pt-20 pb-20 md:pt-28 md:pb-32"
      >
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Get started
            </h2>
            <p className="mt-3 max-w-md font-body text-lg text-mist">
              Download Threat Forge for macOS, Windows, or Linux. Start with a
              template or build your threat model from scratch.
            </p>
            <p className="mt-6 font-body text-sm text-mist/60">
              ~10MB download. No account required. Your threat models stay on
              your machine.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              variant="solid"
              href="https://threatforge.dev"
              className="bg-forge text-zero font-semibold hover:shadow-[0_0_20px_rgba(0,196,255,0.3)]"
            >
              Download Threat Forge
            </Button>
            <Button
              variant="ghost"
              href="https://github.com/exit-zero-labs/threat-forge"
            >
              View on GitHub →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
