import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { marketSegments } from "@/components/site/venturescape-data";
import { SectionIntro, staggerContainer, riseItem } from "@/components/site/venturescape-shared";
import MobileCarousel from "@/components/site/mobile-carousel";

function MarketCard({ item }: { item: string }) {
  return (
    <div className="flex h-full flex-col rounded-3xl bg-[#0C2448]/[0.035] p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(12,36,72,0.10)]">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#0C2448]/8 bg-white shadow-sm">
        <Building2 className="h-5 w-5 text-[#BB7D3E]" />
      </div>
      <p className="text-sm font-medium leading-6 text-[#0C2448]/80">{item}</p>
    </div>
  );
}

export default function VenturescapeMarkets() {
  return (
    <section id="who-we-work-with" className="border-y border-[#0C2448]/8 bg-white/55">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <SectionIntro
          eyebrow="Built for Businesses That Depend on Material."
          title="Who We Work With"
          description="Venturescape primarily serves businesses that purchase, process, manufacture, distribute or trade wood and wood-based products. The process begins with understanding what the customer actually needs."
          align="center"
        />

        {/* Mobile: swipeable row with progress dots */}
        <MobileCarousel
          className="mt-10 w-full md:hidden"
          ariaLabel="Who we work with carousel"
          items={marketSegments.map((item) => (
            <MarketCard key={item} item={item} />
          ))}
        />

        {/* Desktop: flex-wrap so the last row auto-centres — no orphan card
            regardless of how many items are in the list. */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 hidden flex-wrap justify-center gap-4 md:flex"
        >
          {marketSegments.map((item) => (
            <motion.div
              key={item}
              variants={riseItem}
              className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)]"
            >
              <MarketCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
