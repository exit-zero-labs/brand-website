import { Footer } from "@/components/footer/footer";
import { GeoSpotSection } from "@/components/geo-spot/geo-spot-section";
import { HeroSection } from "@/components/hero/hero-section";
import { KinnectionsSection } from "@/components/kinnections/kinnections-section";
import { ManifestoSection } from "@/components/manifesto/manifesto-section";
import { ScrollHook } from "@/components/scroll-hook";
import { ThreatForgeSection } from "@/components/threat-forge/threat-forge-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main>
        <ScrollHook />
        <ThreatForgeSection />
        <KinnectionsSection />
        <GeoSpotSection />
        <ManifestoSection />
      </main>
      <Footer />
    </>
  );
}
