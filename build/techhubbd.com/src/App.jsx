import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

function App() {
  const siteData = {
    siteName: "Tech Hub BD",
    hero: "Tech Hub BD - Your trusted tech partner",
    description: "Your trusted tech partner",
    phone: "01898765432",
    address: "Level 4, Block B, Dhanmondi, Dhaka",
    email: "info@techhubbd.com"
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
