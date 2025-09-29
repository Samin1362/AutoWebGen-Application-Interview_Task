import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

function App() {
  const siteData = {
    siteName: "Food Express",
    hero: "Food Express - Delicious meals delivered fast",
    description: "Delicious meals delivered fast",
    phone: "01712345678",
    address: "House 12, Road 5, Banani, Dhaka",
    email: "info@foodexpress.com"
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
