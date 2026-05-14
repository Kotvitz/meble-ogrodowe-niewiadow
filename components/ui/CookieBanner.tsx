"use client";

import { useMemo, useSyncExternalStore } from "react";
import { getConsent } from "@/app/cookies/cookieConsent";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
  version: number;
};

const CONSENT_VERSION = 1;
const STORAGE_KEY = "cookie_consent_v1";

function writeConsent(consent: Consent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new Event("consent:update"));
}

function subscribe(onStoreChange: () => void) {
  const onUpdate = () => onStoreChange();

  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) onUpdate();
  };

  window.addEventListener("consent:update", onUpdate);
  window.addEventListener("storage", onStorage);

  return () => {
    window.removeEventListener("consent:update", onUpdate);
    window.removeEventListener("storage", onStorage);
  };
}

export default function CookieBanner() {
  const hasDecision = useSyncExternalStore(
    subscribe,
    () => getConsent() !== null,
    () => true,
  );

  const visible = !hasDecision;

  const acceptAll = () => {
    writeConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      updatedAt: new Date().toISOString(),
      version: CONSENT_VERSION,
    });
  };

  const rejectAll = () => {
    writeConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      updatedAt: new Date().toISOString(),
      version: CONSENT_VERSION,
    });
  };

  const openSettings = () => {
    window.dispatchEvent(new Event("cookie:open-settings"));
  };

  const classes = useMemo(
    () =>
      [
        "fixed inset-x-0 bottom-0 z-[9991]",
        "border-t shadow-2xl",
        "bg-[var(--background)]",
      ].join(" "),
    [],
  );

  if (!visible) return null;

  return (
    <div
      className={classes}
      role="dialog"
      aria-label="Informacja o plikach cookies"
      aria-live="polite"
      style={{ borderColor: "var(--muted)" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-4xl text-sm leading-6 text-black/70">
            Używamy plików cookies, aby zapewnić prawidłowe działanie strony
            oraz, za Twoją zgodą, analizować ruch i dopasowywać treści
            marketingowe. Zgodę możesz wycofać w dowolnym momencie.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <button
              type="button"
              onClick={openSettings}
              className="rounded-full border px-5 py-3 text-sm cursor-pointer font-medium transition hover:bg-black/5"
              style={{ borderColor: "var(--muted)" }}
            >
              Ustawienia
            </button>

            <button
              type="button"
              onClick={rejectAll}
              className="rounded-full border px-5 py-3 text-sm cursor-pointer font-medium transition hover:bg-black/5"
              style={{ borderColor: "var(--muted)" }}
            >
              Odrzuć
            </button>

            <button
              type="button"
              onClick={acceptAll}
              className="contact-strip-button rounded-full px-5 py-3 text-sm cursor-pointer font-medium text-white transition"
            >
              Akceptuj
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}