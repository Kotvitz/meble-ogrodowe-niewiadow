import ContactStrip from "@/components/ContactStrip";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="mx-auto max-w-7xl px-6 py-24">
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight lg:text-7xl">
            Altany i drewniane konstrukcje ogrodowe na zamówienie
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-black/70">
            Tworzymy altany, wiaty, zadaszenia oraz meble ogrodowe
            dopasowane do indywidualnych potrzeb klientów.
          </p>
        </section>
      </main>

      <ContactStrip />
      <Footer />
    </>
  );
}