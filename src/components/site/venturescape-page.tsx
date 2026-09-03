import VenturescapeNav from "@/components/site/venturescape-nav";
import VenturescapeHero from "@/components/site/venturescape-hero";
import VenturescapeFeatureSection from "@/components/site/venturescape-feature-section";
import VenturescapeProducts from "@/components/site/venturescape-products";
import VenturescapeNetwork from "@/components/site/venturescape-network";
import VenturescapeProcess from "@/components/site/venturescape-process";
import VenturescapeStandard from "@/components/site/venturescape-standard";
import VenturescapeMarkets from "@/components/site/venturescape-markets";
import VenturescapePhilosophy from "@/components/site/venturescape-philosophy";
import VenturescapeWhyFeature from "@/components/watermelon-ui/feature-1";
import VenturescapeEnquirySection from "@/components/watermelon-ui/contact-3";
import Footer20 from "@/components/watermelon-ui/footer-20";
import {
  aboutItems,
  capabilityItems,
} from "@/components/site/venturescape-data";

export default function VenturescapePage() {
  return (
    <div className="min-h-screen bg-[#FBF8F2] text-[#0C2448] selection:bg-[#BB7D3E]/30 selection:text-[#0C2448]">
      <VenturescapeNav />
      <main id="top" className="relative z-10">
        <VenturescapeHero />
        <VenturescapeFeatureSection
          id="about"
          eyebrow="Trade Should Create Confidence, Not Uncertainty."
          title="About Venturescape"
          description="Venturescape Trading — FZCO is a Dubai-based trading company specialising in timber, veneers, plywood, MDF and allied wood products. Our business is built around more than the movement of material — we believe every stakeholder should be clear about the commitment that was made."
          items={aboutItems}
          columns="two"
          closingLine="Because for us, completing one transaction matters. Being trusted with the next one matters more."
        />
        <VenturescapeProducts />
        <VenturescapeNetwork />
        <VenturescapeFeatureSection
          id="capabilities"
          eyebrow="From Requirement to Shipment."
          title="Our Capabilities"
          description="International trading requires considerably more than matching a buyer with a seller. A transaction may involve product specifications, negotiations, documentation, banking, inspection, containers, ports, vessels and multiple organisations across different jurisdictions. Venturescape coordinates these moving parts through one commercial relationship."
          items={capabilityItems}
        />
        <VenturescapeProcess />
        <VenturescapeStandard />
        <VenturescapeWhyFeature />
        <VenturescapeMarkets />
        <VenturescapePhilosophy />
        <VenturescapeEnquirySection />
      </main>
      <Footer20 />
    </div>
  );
}
