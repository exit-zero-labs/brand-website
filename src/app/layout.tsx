import type { Metadata, Viewport } from "next";
import {
  JetBrains_Mono,
  Source_Sans_3,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { CursorTrail } from "@/components/cursor-trail";
import { SiteNav } from "@/components/navigation/site-nav";
import { SplashScreen } from "@/components/splash-screen";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://exitzerolabs.com"),
  title: {
    default: "Exit Zero Labs — Ship clean. Build forward.",
    template: "%s | Exit Zero Labs",
  },
  description:
    "Indie software, made with care. Makers of Threat Forge, Kinnections, and Geo Spot. Built by Exit Zero Labs.",
  openGraph: {
    title: "Exit Zero Labs — Ship clean. Build forward.",
    description:
      "Indie software, made with care. Makers of Threat Forge, Kinnections, and Geo Spot.",
    siteName: "Exit Zero Labs",
    type: "website",
    url: "https://exitzerolabs.com",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Exit Zero Labs — Ship clean. Build forward.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exit Zero Labs — Ship clean. Build forward.",
    description:
      "Indie software, made with care. Makers of Threat Forge, Kinnections, and Geo Spot.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://exitzerolabs.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0F1E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${sourceSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data is static, not user input
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Exit Zero Labs",
              url: "https://exitzerolabs.com",
              description:
                "Indie software company building privacy-first tools. Makers of Threat Forge, Kinnections, and Geo Spot.",
              foundingDate: "2024",
              sameAs: [
                "https://threatforge.dev",
                "https://kinnections.app",
              ],
            }),
          }}
        />
        <SplashScreen />
        <CursorTrail />
        <SiteNav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
