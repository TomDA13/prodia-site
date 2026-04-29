import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Prodia — Agence IA pour TPE & PME | Audit gratuit",
  description:
    "Automatisez les tâches répétitives qui dévorent vos journées. Devis, mails, AO, prospection : nos agents IA font le tri sur vos outils existants. 15-20h récupérées par semaine. Audit gratuit 30 min.",
  keywords: [
    "agence IA",
    "automatisation TPE PME",
    "agents IA",
    "IA PACA",
    "consulting IA",
  ],
  openGraph: {
    title: "Prodia — Agence IA pour TPE & PME",
    description:
      "Automatisez les tâches répétitives qui dévorent vos journées. 15-20h récupérées par semaine. Audit gratuit 30 min.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
