import type { Metadata } from "next";

import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Kontakt | Meble Ogrodowe Niewiadów",
  description:
    "Skontaktuj się z nami w sprawie wyceny altany, wiaty lub drewnianej konstrukcji ogrodowej.",
};

export default function ContactPage() {
  return (
    <>
      <main>
        <ContactPageContent />
      </main>
    </>
  );
}