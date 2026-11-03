function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Northbound Digital</span>
        <div className="footer-contact-links">
          <a href="mailto:info@northbounddigital.co.za">
            info@northbounddigital.co.za
          </a>
          <a href="tel:+27766115666">Phone: 076 611 5666</a>
        </div>
        <nav className="footer-legal-links" aria-label="Legal">
          <a href="#terms-and-conditions">Terms and Conditions</a>
          <a href="#privacy-policy">Privacy Policy</a>
        </nav>
        <span>Websites built to move your business forward.</span>
      </div>
    </footer>
  );
}

export default SiteFooter;
