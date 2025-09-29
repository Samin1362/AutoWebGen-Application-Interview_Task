const fs = require("fs-extra");
const csv = require("csv-parser");
const path = require("path");

const templateDir = path.join(__dirname, "template-app");
const buildDir = path.join(__dirname, "build");

// Clean old build
fs.removeSync(buildDir);
fs.mkdirSync(buildDir);

console.log("🚀 Starting website generation...");

fs.createReadStream("websites.csv")
  .pipe(csv())
  .on("data", async (row) => {
    console.log(`📦 Generating site for ${row.domain}...`);

    const sitePath = path.join(buildDir, row.domain);
    await fs.copy(templateDir, sitePath);

    // Replace App.jsx with site-specific content
    const appFile = path.join(sitePath, "src", "App.jsx");
    const content = `import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

function App() {
  const siteData = {
    siteName: "${row.title}",
    hero: "${row.title} - ${row.description}",
    description: "${row.description}",
    phone: "${row.phone}",
    address: "${row.address}",
    email: "info@${row.domain}"
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
`;

    fs.writeFileSync(appFile, content);
    console.log(`✅ Generated ${row.domain}`);
  })
  .on("end", () => {
    console.log("🎉 All websites generated successfully inside /build");
    console.log("\nTo run a website:");
    console.log("1. cd build/[domain-name]");
    console.log("2. npm install");
    console.log("3. npm start");
  });
