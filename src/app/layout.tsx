import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/sections/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfólio | Desenvolvedor Frontend",
    template: "%s | Portfólio",
  },
  description:
    "Portfólio de desenvolvedor frontend. Next.js, React, TypeScript e interfaces premium.",
  keywords: ["portfólio", "frontend", "React", "Next.js", "TypeScript", "UI"],
  authors: [{ name: "Portfolio" }],
  openGraph: {
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
