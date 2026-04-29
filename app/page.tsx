"use client";

import { useState } from "react";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import SectorSection from "@/components/sector-section";
import Methode from "@/components/methode";
import CaseStudiesSection from "@/components/case-studies";
import Avantages from "@/components/avantages";
import Partenaires from "@/components/partenaires";
import Histoire from "@/components/histoire";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  const [activeSector, setActiveSector] = useState("commerce");

  return (
    <div className="relative min-h-screen w-full font-sans">
      <Nav />
      <Hero activeSector={activeSector} setActiveSector={setActiveSector} />
      <SectorSection activeSector={activeSector} />
      <Methode />
      <CaseStudiesSection />
      <Avantages />
      <Partenaires />
      <Histoire />
      <FinalCTA />
      <Footer />
    </div>
  );
}
