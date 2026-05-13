import { Hammer, Home, Palette, Ruler, Truck } from "lucide-react";
import { services } from "@/data/services";

const details = [
  {
    icon: Hammer,
    title: "Materiały",
    description:
      "Konstrukcje wykonujemy z bali oraz kantówek. Dachy pokrywamy gontem bitumicznym w kolorze wybranym przez klienta.",
  },
  {
    icon: Palette,
    title: "Wykończenie",
    description:
      "Drewno zabezpieczamy impregnatem. Kolor impregnacji ustalamy indywidualnie zgodnie z preferencjami klienta.",
  },
  {
    icon: Truck,
    title: "Dojazd i montaż",
    description:
      "Zapewniamy transport oraz montaż konstrukcji bezpośrednio na miejscu u klienta.",
  },
  {
    icon: Ruler,
    title: "Indywidualna wycena",
    description:
      "Szczegóły dotyczące materiałów, wymiarów, koloru gonta, impregnacji i ceny ustalamy telefonicznie lub mailowo.",
  },
];

export default function ServicesPageContent() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p
            className="text-sm font-medium uppercase tracking-[0.25em]"
            style={{ color: "var(--primary)" }}
          >
            Oferta
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight lg:text-6xl">
            Drewniane konstrukcje ogrodowe na zamówienie
          </h1>

          <p className="mt-6 text-lg leading-8 text-black/70">
            Wykonujemy altany, wiaty, zadaszenia, meble ogrodowe oraz huśtawki.
            Każdy projekt dopasowujemy do potrzeb klienta - od wymiarów, przez
            materiały, po kolor wykończenia.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-4xl border p-6"
              style={{
                borderColor: "var(--muted)",
                backgroundColor: "rgba(255,255,255,0.4)",
              }}
            >
              <Home
                className="size-7"
                style={{ color: "var(--primary)" }}
                aria-hidden="true"
              />

              <h2 className="mt-5 text-2xl font-semibold">{service.title}</h2>

              <p className="mt-3 leading-7 text-black/70">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {details.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-4xl border p-8"
                style={{
                  borderColor: "var(--muted)",
                  backgroundColor: "rgba(255,255,255,0.4)",
                }}
              >
                <Icon
                  className="size-8"
                  style={{ color: "var(--primary)" }}
                  aria-hidden="true"
                />

                <h2 className="mt-6 text-3xl font-semibold">{item.title}</h2>

                <p className="mt-4 leading-7 text-black/70">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div
          className="mt-20 rounded-4xl p-8 md:p-12"
          style={{ backgroundColor: "var(--muted)" }}
        >
          <p
            className="text-sm font-medium uppercase tracking-[0.25em]"
            style={{ color: "var(--primary)" }}
          >
            Obszar działania
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Realizujemy zamówienia na terenie całej Polski
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-black/70">
            Dojeżdżamy do klienta i wykonujemy montaż na miejscu. Szczegóły
            realizacji ustalamy indywidualnie przed rozpoczęciem prac.
          </p>
        </div>
      </div>
    </section>
  );
}