import ContactStrip from "@/components/ContactStrip";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
      </main>

      <ContactStrip />
      <Footer />
    </>
  );
}