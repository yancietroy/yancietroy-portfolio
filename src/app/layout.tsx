import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Yancie Troy Saludo — Product Designer & Product Builder",
  description:
    "Product designer and builder behind GroceryBudget and Fifi, with experience shipping consumer mobile products and B2B SaaS.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}
