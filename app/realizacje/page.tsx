import type { Metadata } from "next";

import ProjectsGallery from "@/components/ProjectsGallery";

export const metadata: Metadata = {
  title: "Realizacje | Sylwano - Altany, Wiaty, Zadaszenia",
  description:
    "Zobacz wykonane altany, wiaty i drewniane konstrukcje ogrodowe wykonane na indywidualne zamówienie.",
};

export default function ProjectsPage() {
  return (
    <>
      <main>
        <ProjectsGallery />
      </main>
    </>
  );
}