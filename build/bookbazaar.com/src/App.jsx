import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

function App() {
  const siteData = {
    siteName: "Book Bazaar",
    hero: "Book Bazaar - Buy and sell books online",
    description: "Buy and sell books online",
    phone: "01911223344",
    address: "Shop 22, New Market, Chittagong",
    email: "info@bookbazaar.com"
  };

  return (
    <Layout siteName={siteData.siteName}>
      <Hero 
        title={siteData.hero}
        subtitle="Delivering excellence in every service we provide. Your success is our priority."
        ctaText="Get Started"
        showCTA={true}
      />
      <Contact 
        phone={siteData.phone}
        address={siteData.address}
        email={siteData.email}
        socialMedia={{
          facebook: "#",
          twitter: "#",
          linkedin: "#"
        }}
      />
    </Layout>
  );
}

export default App;
