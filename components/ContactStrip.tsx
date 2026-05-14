import Link from "next/link";
import { Mail, MapPin, Phone, ReceiptText } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function ContactStrip() {
  return (
    <section
      className="mt-24 text-white"
      style={{ backgroundColor: "var(--foreground)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-2">
        <div>
          <h2 className="mt-4 text-4xl font-semibold leading-tight">
            Szukasz solidnej altany lub wiaty?
          </h2>

          <p className="mt-6 max-w-xl text-lg text-white/70">
            Skontaktuj się z nami, aby ustalić szczegóły projektu i otrzymać
            indywidualną wycenę.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/kontakt"
              className="contact-strip-button rounded-full px-6 py-4 cursor-pointer font-medium transition"
            >
              Przejdź do kontaktu
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">Kontakt</h3>

          <ul className="mt-8 space-y-6 text-white/75">
            <li className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0" />

              <div>
                <p>{siteConfig.company.legalName}</p>

                <p className="mt-1">{siteConfig.company.address}</p>

                <p>
                  {siteConfig.company.postalCode} {siteConfig.company.city}
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <ReceiptText className="mt-1 size-5 shrink-0" />

              <span>NIP: {siteConfig.company.nip}</span>
            </li>

            <li className="flex gap-4">
              <Phone className="mt-1 size-5 shrink-0" />

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="hover:text-white"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>

            <li className="flex gap-4">
              <Mail className="mt-1 size-5 shrink-0" />

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-white"
              >
                {siteConfig.contact.email}
              </a>
            </li>

            <li className="flex gap-4">
              <div className="mt-1 flex size-5 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                  aria-hidden="true"
                >
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.115V2h-3.193v13.766c0 1.57-1.272 2.84-2.84 2.84a2.84 2.84 0 0 1 0-5.681c.311 0 .61.05.89.142V9.821a6.035 6.035 0 0 0-.89-.067A6.033 6.033 0 0 0 3.75 15.787a6.033 6.033 0 0 0 6.034 6.034 6.034 6.034 0 0 0 6.035-6.034V8.745a7.95 7.95 0 0 0 4.681 1.514V7.066a4.765 4.765 0 0 1-.911-.38Z" />
                </svg>
              </div>

              <a
                href={siteConfig.contact.tiktok}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {siteConfig.contact.tiktokHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
