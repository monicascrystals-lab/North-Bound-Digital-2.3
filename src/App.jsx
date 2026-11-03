import { useState } from "react";
import AboutSection from "./components/AboutSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Hero from "./components/Hero.jsx";
import PackageSection from "./components/PackageSection.jsx";
import PortfolioSection from "./components/PortfolioSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";

function App() {
  const [selectedPackage, setSelectedPackage] = useState("");

  function choosePackage(packageName) {
    setSelectedPackage(packageName);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
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
    </>
  );
}

export default App;
