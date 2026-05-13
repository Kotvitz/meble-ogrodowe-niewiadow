import ContactStrip from "@/components/ContactStrip";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsPreview from "@/components/ProjectsPreview";
import ServicesPreview from "@/components/ServicesPreview";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ServicesPreview />
        <ProjectsPreview />
      </main>

      <ContactStrip />
      <Footer />
    </>
  );
}