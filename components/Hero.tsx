import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>

          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl">
            Altany i drewniane konstrukcje ogrodowe na zamówienie
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-black/70">
            Wykonujemy altany, wiaty, zadaszenia oraz meble ogrodowe
            dopasowane do indywidualnych potrzeb klientów na terenie całej
            Polski.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="rounded-full px-8 py-4 font-medium text-white transition hover:opacity-90"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Skontaktuj się
            </Link>

            <Link
              href="/realizacje"
              className="rounded-full border px-8 py-4 font-medium transition hover:bg-(--secondary)"
              style={{ borderColor: "var(--muted)" }}
            >
              Zobacz realizacje
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-4xl">
            <Image
              src="/images/hero.webp"
              alt="Drewniana altana ogrodowa wykonana na zamówienie"
              width={900}
              height={1100}
              priority
              className="h-155 w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -left-6 hidden w-48 overflow-hidden rounded-3xl border-8 border-(--background) shadow-xl md:block">
            <Image
              src="/images/hero-detail-1.webp"
              alt="Detal drewnianej konstrukcji ogrodowej"
              width={400}
              height={500}
              className="h-56 w-full object-cover"
            />
          </div>

          <div className="absolute -right-6 top-10 hidden w-40 overflow-hidden rounded-3xl border-8 border-(--background) shadow-xl md:block">
            <Image
              src="/images/hero-detail-2.webp"
              alt="Drewniana wiata lub altana w ogrodzie"
              width={400}
              height={500}
              className="h-48 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}