import VenturescapeHero from "@/components/site/venturescape-hero";
import VenturescapeFeatureSection from "@/components/site/venturescape-feature-section";
import VenturescapeProducts from "@/components/site/venturescape-products";
import VenturescapeNetwork from "@/components/site/venturescape-network";
import VenturescapeStats from "@/components/site/venturescape-stats";
import VenturescapeProcess from "@/components/site/venturescape-process";
import VenturescapeMarkets from "@/components/site/venturescape-markets";
import VenturescapeLeadership from "@/components/site/venturescape-leadership";
import VenturescapeEnquiry from "@/components/site/venturescape-enquiry";
import VenturescapeContactCta from "@/components/site/venturescape-contact-cta";
import VenturescapeFooter from "@/components/site/venturescape-footer";
import {
  aboutItems,
  capabilityItems,
  qualityItems,
  whyItems,
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
        <VenturescapeNetwork />
        <VenturescapeFeatureSection
          id="capabilities"
          eyebrow="Our Capabilities"
          title="End-to-end trade coordination."
          description="Venturescape provides more than product introductions. The transaction is managed through commercial alignment, documentation discipline, and shipment coordination."
          items={capabilityItems}
        />
        <VenturescapeStats />
        <VenturescapeProcess />
        <VenturescapeMarkets />
        <VenturescapeFeatureSection
          eyebrow="Quality and Trade Coordination"
          title="Clarity before commitment."
          description="In international trade, small misunderstandings create delays, costs, and disputes. Venturescape therefore focuses on alignment before the order moves forward, while keeping claims measured and accurate."
          items={qualityItems}
        />
        <VenturescapeFeatureSection
          id="why-venturescape"
          eyebrow="Why Venturescape"
          title="Serious trade requires serious execution."
          description="Every shipment represents more than material. It carries the work of producers, buyers, manufacturers, employees, and businesses that depend on it. Venturescape treats that responsibility with the seriousness it deserves."
          items={whyItems}
          dark
        />
        <VenturescapeLeadership />
        <VenturescapeEnquiry />
        <VenturescapeContactCta />
      </main>
      <VenturescapeFooter />
    </div>
  );
}
