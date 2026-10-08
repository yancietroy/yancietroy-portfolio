import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700", "800"] });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

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
