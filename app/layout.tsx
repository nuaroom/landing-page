import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Heurica.ai — UX Designer AI",
  description:
    "UX Designer AI agent that scales your design with human-centered, UX best practices.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b0b0b] text-zinc-100`}
      >
        <div className="relative">
          <div className="bg-radial-spotlight" />
          <div className="bg-radial-spotlight-2 animate-float-slow" />
          <div className="bg-grid-mask" />
          {children}
        </div>
      </body>
    </html>
  );
}
