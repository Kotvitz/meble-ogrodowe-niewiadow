import ContactStrip from "@/components/ContactStrip";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectsGallery from "@/components/ProjectsGallery";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main>
        <ProjectsGallery />
      </main>

      <ContactStrip />
      <Footer />
    </>
  );
}