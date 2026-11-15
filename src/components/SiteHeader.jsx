import logo from "../assets/northbound-logo.png";
import { useEffect, useRef, useState } from "react";

const navigationItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Packages", "#packages"],
  ["Portfolio", "#portfolio"],
  ["Contact", "#contact"],
];

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 800);
  const menuToggleRef = useRef(null);

  useEffect(() => {
    function updateHeader() {
      setScrolled(window.scrollY > 24);
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    requestAnimationFrame(() => menuToggleRef.current?.focus());
  }

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape" && menuOpen) closeMenu();
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    function updateMenuMode() {
      const mobile = window.innerWidth <= 800;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    }

    window.addEventListener("resize", updateMenuMode);
    return () => window.removeEventListener("resize", updateMenuMode);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <nav className="nav-wrap" aria-label="Main navigation">
       <a className="brand" href="#home" aria-label="Northbound Digital home">
  <img
    src={logo}
    alt="Northbound Digital"
    className="brand-logo"
  />
</a>
        <button
          ref={menuToggleRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
        <ul
          className={`nav-links${menuOpen ? " open" : ""}`}
          id="primary-navigation"
          inert={isMobile && !menuOpen ? "" : undefined}
          aria-hidden={isMobile && !menuOpen ? "true" : undefined}
        >
          {navigationItems.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => isMobile && closeMenu()}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default SiteHeader;
