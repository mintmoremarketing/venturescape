import VenturescapeHero from "@/components/site/venturescape-hero";
import VenturescapeFeatureSection from "@/components/site/venturescape-feature-section";
import VenturescapeProducts from "@/components/site/venturescape-products";
import VenturescapeNetwork from "@/components/site/venturescape-network";
import VenturescapeMarkets from "@/components/site/venturescape-markets";
import VenturescapeWhyFeature from "@/components/watermelon-ui/feature-1";
import VenturescapeStats from "@/components/watermelon-ui/stats-4";
import VenturescapeCta from "@/components/watermelon-ui/cta-4";
import VenturescapeEnquirySection from "@/components/watermelon-ui/contact-3";
import Footer20 from "@/components/watermelon-ui/footer-20";
import VenturescapeWhatsappFab from "@/components/site/venturescape-whatsapp-fab";
import {
  aboutItems,
  capabilityItems,
} from "@/components/site/venturescape-data";

export default function VenturescapePage() {
  return (
    <div className="min-h-screen bg-[#F7F2EB] text-[#0C2448] selection:bg-[#BB7D3E]/30 selection:text-[#0C2448]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(12,36,72,0.08),transparent_26%),radial-gradient(circle_at_80%_16%,rgba(187,125,62,0.12),transparent_22%),linear-gradient(180deg,#f7f2eb_0%,#f4eee4_100%)]" />
      <main id="top" className="relative z-10">
        <VenturescapeHero />
        <VenturescapeFeatureSection
          id="about"
          eyebrow="About Venturescape"
          title="Connecting reliable sources with growing markets."
          description="Venturescape Trading is a Dubai-based trading company focused on timber, veneers, plywood, MDF, and allied wood products. We remain involved through sourcing, alignment, documentation, logistics coordination, and delivery support."
          items={aboutItems}
          columns="two"
        />
        <VenturescapeProducts />
        <VenturescapeStats />
        <VenturescapeNetwork />
        <VenturescapeFeatureSection
          id="capabilities"
          eyebrow="Our Capabilities"
          title="End-to-end trade coordination."
          description="Venturescape provides more than product introductions. The transaction is managed through commercial alignment, documentation discipline, and shipment coordination."
          items={capabilityItems}
        />
        <VenturescapeMarkets />
        <VenturescapeWhyFeature />
        <VenturescapeCta />
        <VenturescapeEnquirySection />
      </main>
      <Footer20 />
      <VenturescapeWhatsappFab />
    </div>
  );
}
