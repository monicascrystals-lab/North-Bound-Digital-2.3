function SiteFooter({ onOpenCookieSettings }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} North Bound Digital™. All rights reserved.</span>
        <div className="footer-contact-links">
          <a href="mailto:studio@northbounddigital.co.za">
            studio@northbounddigital.co.za
          </a>
          <a href="tel:+27766115666">Phone: 076 611 5666</a>
        </div>
        <nav className="footer-legal-links" aria-label="Legal">
          <a href="#terms-and-conditions">Terms and Conditions</a>
          <a href="#privacy-policy">Privacy Policy</a>
          <button className="footer-cookie-settings" type="button" onClick={onOpenCookieSettings}>
            Cookie settings
          </button>
        </nav>
        <span>Websites built to move your business forward.</span>
      </div>
    </footer>
  );
}

export default SiteFooter;
