import { useEffect, useState } from "react";

function CookieConsent({ consent, openPreferences, onPreferencesOpened, onSave }) {
  const [isManaging, setIsManaging] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(consent?.analytics ?? false);

  useEffect(() => {
    setAnalyticsEnabled(consent?.analytics ?? false);
  }, [consent]);

  useEffect(() => {
    if (!openPreferences) return;

    setIsManaging(true);
    onPreferencesOpened();
  }, [onPreferencesOpened, openPreferences]);

  function savePreferences(analytics) {
    onSave(analytics);
    setIsManaging(false);
  }

  if (consent !== null && !isManaging) return null;

  return (
    <aside className="cookie-banner" aria-labelledby="cookie-preferences-title">
      <h2 id="cookie-preferences-title">Cookie Preferences</h2>
      {isManaging ? (
        <>
          <p>Choose which optional cookies you allow. Essential cookies remain enabled for website operation.</p>
          <div className="cookie-option">
            <div>
              <strong>Essential</strong>
              <span>Always enabled</span>
            </div>
          </div>
          <label className="cookie-option cookie-option-toggle">
            <span>
              <strong>Analytics</strong>
              <small>Helps us understand how visitors use the website.</small>
            </span>
            <input
              type="checkbox"
              checked={analyticsEnabled}
              onChange={(event) => setAnalyticsEnabled(event.target.checked)}
            />
          </label>
          <div className="cookie-actions">
            <button className="cookie-button cookie-button-primary" type="button" onClick={() => savePreferences(analyticsEnabled)}>
              Save preferences
            </button>
            <button className="cookie-button" type="button" onClick={() => savePreferences(false)}>
              Reject non-essential
            </button>
          </div>
        </>
      ) : (
        <>
          <p>We use essential cookies to operate this website and, with your permission, analytics cookies to understand how visitors use the site.</p>
          <div className="cookie-actions">
            <button className="cookie-button cookie-button-primary" type="button" onClick={() => savePreferences(true)}>
              Accept all
            </button>
            <button className="cookie-button" type="button" onClick={() => savePreferences(false)}>
              Reject non-essential
            </button>
            <button className="cookie-button cookie-button-text" type="button" onClick={() => setIsManaging(true)}>
              Manage preferences
            </button>
          </div>
        </>
      )}
      <a className="cookie-privacy-link" href="#privacy-policy">
        Privacy Policy
      </a>
    </aside>
  );
}

export default CookieConsent;
