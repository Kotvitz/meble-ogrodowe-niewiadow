"use client";

import { useEffect, useRef } from "react";
import { setConsent as persistConsent, type ConsentState } from "./cookieConsent";

export default function CookieSettingsModal({
  open,
  onClose,
  consent,
  setConsent,
}: {
  open: boolean;
  onClose: () => void;
  consent: ConsentState;
  setConsent: React.Dispatch<React.SetStateAction<ConsentState>>;
}) {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    setTimeout(() => dialogRef.current?.focus(), 0);

    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const save = () => {
    persistConsent({ analytics: consent.analytics, marketing: consent.marketing });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-9992">
      <button
        aria-label="Zamknij okno ustawień plików cookie"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        type="button"
      />
      <div className="relative mx-auto mt-24 w-[92%] max-w-lg rounded-xl bg-white p-6 shadow-xl">
        <button
          aria-label="Zamknij"
          onClick={onClose}
          className="absolute cursor-pointer right-3 top-3 text-gray-500 hover:text-black text-lg font-bold"
          type="button"
        >
          ×
        </button>
        <div
          ref={dialogRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Ustawienia plików cookie"
          className="outline-none"
        >
          <h2 className="text-lg font-bold">Ustawienia plików cookie</h2>
          <p className="mt-2 text-sm text-black/70">
            Strona wykorzystuje pliki cookies w celu zapewnienia jej prawidłowego działania oraz - za Twoją zgodą - w celach analitycznych i wyświetlania treści zewnętrznych.
          </p>

          <div className="mt-5 space-y-4 text-sm">
            <label className="flex items-start gap-3">
              <input type="checkbox" checked disabled className="mt-1" />
              <span>
                <span className="font-semibold">Niezbędne</span>
                <div className="text-black/70">Zawsze aktywne</div>
              </span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={consent.analytics}
                onChange={(e) => setConsent((v) => ({ ...v, analytics: e.target.checked }))}
                className="mt-1"
              />
              <span>
                <span className="font-semibold">Analityczne</span>
                <div className="text-black/70">Pomagają analizować ruch na stronie</div>
              </span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={consent.marketing}
                onChange={(e) => setConsent((v) => ({ ...v, marketing: e.target.checked }))}
                className="mt-1"
              />
              <span>
                <span className="font-semibold">Marketingowe</span>
                <div className=" text-black/70">Obsługują treści z serwisów zewnętrznych</div>
              </span>
            </label>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={save}
              className="contact-strip-button rounded-full cursor-pointer px-4 py-2 text-sm text-white"
            >
              Zapisz
            </button>

            <button
              type="button"
              onClick={() => setConsent({ necessary: true, analytics: false, marketing: false })}
              className="rounded-full border border-(--primary) cursor-pointer px-4 py-2 text-sm hover:bg-(--muted)"
            >
              Odrzuć wszystkie
            </button>

            <button
              type="button"
              onClick={() => setConsent({ necessary: true, analytics: true, marketing: true })}
              className="contact-strip-button rounded-full cursor-pointer px-4 py-2 text-sm text-white"
            >
              Akceptuj wszystko
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
