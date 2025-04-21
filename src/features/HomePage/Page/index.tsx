import { Header } from "@/features/HomePage/components/Header";
import { Hero } from "@/features/HomePage/components/Hero";
import { Story } from "@/features/HomePage/components/Story";

import { Footer } from "@/features/HomePage/components/Footer";
import { MarqueeBanner } from "@/features/HomePage/components/MarqueeBanner";
import { MarqueeMemes } from "@/features/HomePage/components/MarqueeMemes";
import { Listing } from "@/features/HomePage/components/Listing";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-[#0A0A0A]">
        <Header />
        <Hero />
        <MarqueeBanner />
        <Story />
        <MarqueeMemes />
        <Listing />
        <Footer />
      </main>
    </>
  );
}
