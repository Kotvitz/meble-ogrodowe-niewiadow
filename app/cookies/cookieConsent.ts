export type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export const CONSENT_KEY = "cookie_consent_v1";

export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
}


export function setConsent(consent: Omit<ConsentState, "necessary"> & { necessary?: true }) {
  if (typeof window === "undefined") return;

  const normalized: ConsentState = {
    necessary: true,
    analytics: Boolean(consent.analytics),
    marketing: Boolean(consent.marketing),
  };

  window.localStorage.setItem(CONSENT_KEY, JSON.stringify(normalized));
  window.dispatchEvent(new Event("consent:update"));
}

export function clearConsent() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(CONSENT_KEY);
  window.dispatchEvent(new Event("consent:update"));
}
