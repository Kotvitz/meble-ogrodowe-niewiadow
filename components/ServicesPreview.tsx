import Link from "next/link";

export default function ServicesPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="rounded-4xl p-8 md:p-12"
          style={{ backgroundColor: "var(--muted)" }}
        >
          <p
            className="text-sm font-medium uppercase tracking-[0.25em]"
            style={{ color: "var(--primary)" }}
          >
            Oferta
          </p>

          <div className="mt-4 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <h2 className="text-4xl font-semibold leading-tight lg:text-5xl">
                Drewniane konstrukcje dopasowane do Twojego ogrodu
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
                Wykonujemy altany, wiaty, zadaszenia, meble ogrodowe oraz
                huśtawki na indywidualne zamówienie.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                href="/oferta"
                className="inline-flex rounded-full px-7 py-4 font-medium text-white transition hover:opacity-90"
                style={{ backgroundColor: "var(--primary)" }}
              >
                Zobacz ofertę
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}