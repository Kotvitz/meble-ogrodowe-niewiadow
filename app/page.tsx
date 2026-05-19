import type { Metadata } from "next";

import Hero from "@/components/Hero";
import ProjectsPreview from "@/components/ProjectsPreview";
import ServicesPreview from "@/components/ServicesPreview";

export const metadata: Metadata = {
  title: "Sylwano - Altany, Wiaty, Zadaszenia",
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