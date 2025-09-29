import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

function App({ siteData }) {
  // Default site data if not provided
  const defaultSiteData = {
    siteName: "Your Business",
    hero: "Welcome to Our Service",
    description: "We provide excellent solutions for your needs",
    phone: "+880 1234567890",
    address: "Dhaka, Bangladesh",
    email: "info@yourbusiness.com",
  };

  // Merge provided data with defaults
  const data = { ...defaultSiteData, ...siteData };

  // Parse title and description for hero
  const heroTitle = data.hero || `${data.siteName} - ${data.description}`;
  const heroSubtitle =
    "Delivering excellence in every service we provide. Your success is our priority.";

  return (
    <Layout siteName={data.siteName}>
      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        ctaText="Get Started"
        showCTA={true}
      />
      <Contact
        phone={data.phone}
        address={data.address}
        email={data.email}
        socialMedia={{
          facebook: "#",
          twitter: "#",
          linkedin: "#",
        }}
      />
    </Layout>
  );
}

export default App;
