const CONSENT_STORAGE_KEY = "northbound-cookie-consent";

export function getCookieConsent() {
  try {
    const storedConsent = JSON.parse(window.localStorage.getItem(CONSENT_STORAGE_KEY));
    return typeof storedConsent?.analytics === "boolean" ? storedConsent : null;
  } catch {
    return null;
  }
}

export function saveCookieConsent(analytics) {
  const consent = { analytics: Boolean(analytics) };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  return consent;
}
