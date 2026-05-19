import Link from "next/link";
import { Mail, MapPin, Phone, ReceiptText, Share2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
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
              <Share2 className="mt-1 size-5 shrink-0" />

              <div>
                <p>Social media:</p>

                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={siteConfig.contact.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className="social-button"
                    aria-label="TikTok"
                  >
                    <FaTiktok />
                  </a>

                  <a
                    href={siteConfig.contact.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="social-button"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href={siteConfig.contact.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="social-button"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}