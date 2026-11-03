function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Northbound Digital</span>
        <a href="mailto:info@northbounddigital.co.za">
          info@northbounddigital.co.za
        </a>
        <span>Websites built to move your business forward.</span>
      </div>
    </footer>
  );
}

export default SiteFooter;
