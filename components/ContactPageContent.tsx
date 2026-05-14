import { Mail, MapPin, Phone, ReceiptText } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function ContactPageContent() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p
            className="text-sm font-medium uppercase tracking-[0.25em]"
            style={{ color: "var(--primary)" }}
          >
            Kontakt
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight lg:text-6xl">
            Zapytaj o wycenę projektu
          </h1>

          <p className="mt-6 text-lg leading-8 text-black/70">
            Wypełnij formularz lub skontaktuj się z nami telefonicznie.
            Ustalimy szczegóły dotyczące wymiarów, materiałów i wykończenia.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <aside
            className="rounded-4xl border p-6 md:p-7"
            style={{
              borderColor: "var(--muted)",
              backgroundColor: "rgba(255,255,255,0.4)",
            }}
          >
            <h2 className="text-3xl font-semibold">Kontakt</h2>

            <ul className="mt-8 space-y-6 text-black/70">
              <li className="flex gap-4">
                <Phone
                  className="mt-1 size-5 shrink-0"
                  style={{ color: "var(--primary)" }}
                  aria-hidden="true"
                />

                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:opacity-70"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>

              <li className="flex gap-4">
                <Mail
                  className="mt-1 size-5 shrink-0"
                  style={{ color: "var(--primary)" }}
                  aria-hidden="true"
                />

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="break-all hover:opacity-70"
                >
                  {siteConfig.contact.email}
                </a>
              </li>

              <li className="flex gap-4">
                <MapPin
                  className="mt-1 size-5 shrink-0"
                  style={{ color: "var(--primary)" }}
                  aria-hidden="true"
                />

                <div>
                  <p>{siteConfig.company.legalName}</p>
                  <p className="mt-1">{siteConfig.company.address}</p>
                  <p>
                    {siteConfig.company.postalCode} {siteConfig.company.city}
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <ReceiptText
                  className="mt-1 size-5 shrink-0"
                  style={{ color: "var(--primary)" }}
                  aria-hidden="true"
                />

                <span>NIP: {siteConfig.company.nip}</span>
              </li>
            </ul>
          </aside>

          <form
            className="rounded-4xl border p-6 md:p-8"
            style={{
              borderColor: "var(--muted)",
              backgroundColor: "rgba(255,255,255,0.4)",
            }}
          >
            <h2 className="text-3xl font-semibold">Formularz kontaktowy</h2>

            <div className="mt-8 grid gap-4">
              <label>
                <span className="text-sm font-medium">Imię i nazwisko *</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-2 w-full rounded-2xl border bg-white px-4 py-2.5 outline-none focus:ring-2"
                  style={{ borderColor: "var(--muted)" }}
                />
              </label>

              <label>
                <span className="text-sm font-medium">E-mail *</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-2xl border bg-white px-4 py-2.5 outline-none focus:ring-2"
                  style={{ borderColor: "var(--muted)" }}
                />
              </label>

              <label>
                <span className="text-sm font-medium">Telefon</span>
                <input
                  type="tel"
                  name="phone"
                  className="mt-2 w-full rounded-2xl border bg-white px-4 py-2.5 outline-none focus:ring-2"
                  style={{ borderColor: "var(--muted)" }}
                />
              </label>

              <label>
                <span className="text-sm font-medium">Wiadomość *</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-2xl border bg-white px-4 py-2.5 outline-none focus:ring-2"
                  style={{ borderColor: "var(--muted)" }}
                />
              </label>

              <p className="text-sm text-black/50">(*) - pola obowiązkowe</p>

              <label className="flex gap-3 text-sm leading-6 text-black/60">
                <input
                  type="checkbox"
                  required
                  className="mt-1 size-4 shrink-0"
                />

                <span>
                  Wyrażam zgodę na kontakt w celu obsługi zapytania przesłanego
                  przez formularz kontaktowy.
                </span>
              </label>

              <button
                type="submit"
                className="mt-2 rounded-full px-8 py-4 font-medium text-white transition hover:opacity-90"
                style={{ backgroundColor: "var(--primary)" }}
              >
                Wyślij wiadomość
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}