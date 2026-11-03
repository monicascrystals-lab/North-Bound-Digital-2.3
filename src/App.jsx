import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Hero from "./components/Hero.jsx";
import PackageSection from "./components/PackageSection.jsx";
import PortfolioSection from "./components/PortfolioSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

const legalPages = {
  "#terms-and-conditions": {
    title: "Terms and Conditions",
    content: "Terms and Conditions content will be added here.",
  },
  "#privacy-policy": {
    title: "Privacy Policy",
    content: "Privacy Policy content will be added here.",
  },
};

function getLegalPage() {
  return legalPages[window.location.hash] ?? null;
}

function App() {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [legalPage, setLegalPage] = useState(getLegalPage);

  useEffect(() => {
    let wasLegalPage = Boolean(getLegalPage());

    function syncPageWithHash() {
      const page = getLegalPage();
      setLegalPage(page);

      if (page) {
        requestAnimationFrame(() => window.scrollTo(0, 0));
      } else if (wasLegalPage && window.location.hash) {
        const sectionId = window.location.hash.slice(1);
        requestAnimationFrame(() =>
          document.getElementById(sectionId)?.scrollIntoView(),
        );
      }

      wasLegalPage = Boolean(page);
    }

    window.addEventListener("hashchange", syncPageWithHash);
    return () => window.removeEventListener("hashchange", syncPageWithHash);
  }, []);

  function choosePackage(packageName) {
    setSelectedPackage(packageName);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  if (legalPage) {
    return (
      <>
        <SiteHeader />
        <main className="legal-page section-pad">
          <div className="content-width">
            <h1>{legalPage.title}</h1>
            <p>{legalPage.content}</p>
            <a href="#home">Return to Northbound Digital</a>
          </div>
        </main>
        <SiteFooter />
        <WhatsAppButton />
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <PackageSection onChoosePackage={choosePackage} />
        <PortfolioSection />
        <ContactSection
          selectedPackage={selectedPackage}
          onPackageChange={setSelectedPackage}
        />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}

export default App;
