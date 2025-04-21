import { Header } from "@/shared/components/Header";
import { Hero } from "@/features/HomePage/components/Hero";
import { Story } from "@/features/HomePage/components/Story";


import { MarqueeBanner } from "@/features/HomePage/components/MarqueeBanner";
import { MarqueeMemes } from "@/features/HomePage/components/MarqueeMemes";
import { Listing } from "@/features/HomePage/components/Listing";
import React from "react";

export default function HomePage() {
  return (
    <React.Fragment>
      <main className="min-h-screen bg-[#0A0A0A]">
        <Hero />
        <MarqueeBanner />
        <Story />
        <MarqueeMemes />
        <Listing />
      </main>
    </React.Fragment>
  );
}
