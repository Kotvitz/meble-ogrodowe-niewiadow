import ContactPageContent from "@/components/ContactPageContent";
import ContactStrip from "@/components/ContactStrip";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <ContactPageContent />
      </main>

      <ContactStrip />
      <Footer />
    </>
  );
}