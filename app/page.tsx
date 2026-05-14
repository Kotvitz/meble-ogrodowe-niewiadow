import type { Metadata } from "next";

import ContactStrip from "@/components/ContactStrip";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsPreview from "@/components/ProjectsPreview";
import ServicesPreview from "@/components/ServicesPreview";

export const metadata: Metadata = {
  title: "Meble Ogrodowe Niewiadów",
  description:
    "Altany, wiaty, zadaszenia i drewniane konstrukcje ogrodowe wykonywane na zamówienie na terenie całej Polski.",
};

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <ServicesPreview />
        <ProjectsPreview />
      </main>
    </>
  );
}