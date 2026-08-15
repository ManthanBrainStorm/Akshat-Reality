import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";
import { fullAddress, site } from "@/data/site";

const title = "Akshat Reality — Residential & Commercial Plots in Indore";
const description =
  "Akshat Reality sells RERA-approved residential and commercial plots in Indore and builds houses on them, with transparent pricing and clean documentation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: site.name,
          description,
          slogan: site.tagline,
          telephone: site.phone,
          email: site.email,
          areaServed: `${site.city}, ${site.state}, ${site.country}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${site.address.line1}, ${site.address.line2}`,
            addressLocality: site.address.city,
            addressRegion: site.address.state,
            postalCode: site.address.postalCode,
            addressCountry: "IN",
          },
          founder: { "@type": "Person", name: "Vijendra Singh Rajput" },
          knowsAbout: ["Residential plots", "Commercial plots", "House construction"],
          logo: site.images.logo,
          disambiguatingDescription: fullAddress,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <About />
      <WhyUs />
      <Testimonials />
      <Contact />
    </>
  );
}
