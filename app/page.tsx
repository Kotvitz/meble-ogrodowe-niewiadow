import ContactStrip from "@/components/ContactStrip";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServicesPreview from "@/components/ServicesPreview";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ServicesPreview />
      </main>

      <ContactStrip />
      <Footer />
    </>
  );
}