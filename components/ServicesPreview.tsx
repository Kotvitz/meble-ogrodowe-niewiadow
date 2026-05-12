import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p
              className="text-sm font-medium uppercase tracking-[0.25em]"
              style={{ color: "var(--primary)" }}
            >
              Oferta
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              Co wykonujemy?
            </h2>
          </div>

          <Link
            href="/oferta"
            className="hidden font-medium md:inline-flex"
            style={{ color: "var(--primary)" }}
          >
            Zobacz całą ofertę →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-4xl border p-8 transition hover:-translate-y-1 hover:shadow-xl"
              style={{
                borderColor: "var(--muted)",
                backgroundColor: "rgba(255,255,255,0.4)",
              }}
            >
              <h3 className="text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-black/70">
                {service.description}
              </p>

              <Link
                href="/oferta"
                className="mt-8 inline-flex items-center font-medium transition hover:opacity-70"
                style={{ color: "var(--primary)" }}
              >
                Dowiedz się więcej →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}