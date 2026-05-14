"use client";

import { useEffect, useState } from "react";
import { ConsentState, getConsent } from "@/app/cookies/cookieConsent";
import CookieSettingsModal from "@/app/cookies/CookieSettingsModal";

const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export default function CookieSettingsButton() {
  const [open, setOpen] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(() => getConsent() ?? DEFAULT_CONSENT);

  const handleOpen = () => {
    setConsent(getConsent() ?? DEFAULT_CONSENT);
    setOpen(true);
  };

  useEffect(() => {
    const onOpen = () => {
      setConsent(getConsent() ?? DEFAULT_CONSENT);
      setOpen(true);
    };

    window.addEventListener("cookie:open-settings", onOpen);
    return () => window.removeEventListener("cookie:open-settings", onOpen);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="
          cursor-pointer fixed bottom-5 left-5 z-60
          h-12 w-12 rounded-full
          bg-(--primary) text-white
          shadow-lg hover:opacity-90
          flex items-center justify-center
        "
        aria-label="Ustawienia cookies"
        title="Ustawienia cookies"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10c0-.6-.06-1.2-.17-1.78a1 1 0 0 0-1.28-.73 4.5 4.5 0 0 1-5.76-5.76 1 1 0 0 0-.73-1.28C13.2 2.06 12.6 2 12 2Zm-2 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm6 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM8 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-4 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
        </svg>
      </button>

      <CookieSettingsModal
        open={open}
        onClose={() => setOpen(false)}
        consent={consent}
        setConsent={setConsent}
      />
    </>
  );
}
