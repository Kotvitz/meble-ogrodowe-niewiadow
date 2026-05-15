import type { Metadata } from "next";

import ServicesPageContent from "@/components/ServicesPageContent";

export const metadata: Metadata = {
  title: "Oferta | Meble Ogrodowe Niewiadów",
  description:
    "Altany, wiaty, zadaszenia, meble ogrodowe i huśtawki wykonywane na zamówienie na terenie całej Polski.",
};

export default function ServicesPage() {
  return (
    <>
      <main>
        <ServicesPageContent />
      </main>
    </>
  );
}