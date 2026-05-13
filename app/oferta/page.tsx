import ContactStrip from "@/components/ContactStrip";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServicesPageContent from "@/components/ServicesPageContent";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServicesPageContent />
      </main>

      <ContactStrip />
      <Footer />
    </>
  );
}