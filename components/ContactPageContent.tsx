"use client"

import { Mail, MapPin, Phone, ReceiptText } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useMemo, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPageContent() {
  const successMessage = "Dziękujemy! Wiadomość została wysłana.";
  const errorMessage = "Nie udało się wysłać wiadomości. Spróbuj ponownie.";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const isValid = useMemo(() => {
    if (!name.trim()) return false;
    if (!email.trim() || !email.includes("@")) return false;
    if (!message.trim()) return false;
    if (!consent) return false;
    return true;
  }, [name, email, message, consent]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValid || status === "sending") return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          consent,
          website,
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.ok) {
        throw new Error(result.error || "Request failed");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setConsent(false);
      setWebsite("");
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  };

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
            Wypełnij formularz lub skontaktuj się z nami telefonicznie. Ustalimy
            szczegóły dotyczące wymiarów, materiałów i wykończenia.
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
            onSubmit={onSubmit}
            noValidate
          >
            <h2 className="text-3xl font-semibold">Formularz kontaktowy</h2>

            <div className="mt-8 grid gap-4">
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <label>
                <span className="text-sm font-medium">Imię i nazwisko *</span>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                  className="mt-2 w-full rounded-2xl border bg-white px-4 py-2.5 outline-none focus:ring-2"
                  style={{ borderColor: "var(--muted)" }}
                />
              </label>

              <label>
                <span className="text-sm font-medium">E-mail *</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-2 w-full rounded-2xl border bg-white px-4 py-2.5 outline-none focus:ring-2"
                  style={{ borderColor: "var(--muted)" }}
                />
              </label>

              <label>
                <span className="text-sm font-medium">Telefon</span>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-2 w-full rounded-2xl border bg-white px-4 py-2.5 outline-none focus:ring-2"
                  style={{ borderColor: "var(--muted)" }}
                />
              </label>

              <label>
                <span className="text-sm font-medium">Wiadomość *</span>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-2xl border bg-white px-4 py-2.5 outline-none focus:ring-2"
                  style={{ borderColor: "var(--muted)" }}
                />
              </label>

              <p className="text-sm text-black/50">(*) - pola obowiązkowe</p>

              <label className="flex gap-3 text-sm leading-6 text-black/60">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
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
                disabled={!isValid || status === "sending"}
                className="mt-2 rounded-full px-8 py-4 cursor-pointer font-medium text-white transition hover:opacity-90"
                style={{ backgroundColor: "var(--primary)" }}
              >
                {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
              </button>

              {status === "success" && (
                <p className="text-sm font-semibold text-(--primary)">
                  {successMessage}
                </p>
              )}

              {status === "error" && (
                <p className="text-sm font-semibold text-red-600">
                  {errorMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
