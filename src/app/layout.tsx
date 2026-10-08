import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted so builds never depend on Google Fonts. Latin variable-weight files from
// Fontsource (@fontsource-variable/*), SIL OFL 1.1; licences sit beside them in ./fonts.
const display = localFont({ src: "./fonts/BricolageGrotesque-latin.woff2", weight: "200 800", variable: "--font-display", display: "swap" });
const body = localFont({ src: "./fonts/InstrumentSans-latin.woff2", weight: "400 700", variable: "--font-body", display: "swap" });
const mono = localFont({ src: "./fonts/JetBrainsMono-latin.woff2", weight: "100 800", variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Yancie Troy Saludo, product designer",
  description:
    "Product designer with 3+ years in B2B SaaS who also designs and builds his own apps: GroceryBudget (30,000+ users) and Fifi, both live in the App Store.",
};

export const viewport: Viewport = { themeColor: "#0e0f11" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // Extensions (dark-mode ones especially) edit <html> attributes before hydration; this only silences that one tag.
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
