import type { Metadata, Viewport } from "next";
import SiteBackground from "../components/siteBackground";

import "./globals.css";
import "./theme-preview.css";
import "./theme-cursors.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://chandanverma.space"),
  title: "an ongoing experiment",
  description:
    "Chandan Verma's experiments in software, systems, and building real products. Explore my work as a full-stack developer and founding engineer.",
  applicationName: "an ongoing experiment",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48 64x64 128x128 256x256" },
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "an ongoing experiment",
    title: "an ongoing experiment",
    description: "Software, systems, and real products. A portfolio by Chandan Verma.",
    images: [{ url: "/brand/social-preview.png", width: 1200, height: 630, alt: "an ongoing experiment — Chandan Verma" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "an ongoing experiment",
    description: "Software, systems, and real products. A portfolio by Chandan Verma.",
    images: ["/brand/social-preview.png"],
  },
};

export const viewport: Viewport = {
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
      className="text-white"
      data-portfolio-theme="blueprint"
      data-blueprint-finish="light-white-clear"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <SiteBackground />
        {children}
      </body>
    </html>
  );
}
