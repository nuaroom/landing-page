import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Principles } from "@/components/Principles";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { BottomCTA } from "@/components/BottomCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Logos />
        <FeatureGrid />
        <Principles />
        <Stats />
        <Testimonials />
        <BottomCTA />
      </main>
      <footer className="container-page py-10 text-xs text-zinc-500 flex items-center justify-between border-t border-white/10">
        <span>©2025 Heurica.ai</span>
        <a href="mailto:contact@nuaroom.com" className="hover:underline">contact@nuaroom.com</a>
      </footer>
    </div>
  );
}
