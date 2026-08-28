import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { marketSegments } from "@/components/site/venturescape-data";
import { PremiumIconTile, SectionIntro, staggerContainer, riseItem } from "@/components/site/venturescape-shared";
import MobileCarousel from "@/components/site/mobile-carousel";

function MarketCard({ item }: { item: string }) {
  return (
    <div className="rounded-3xl bg-[#0C2448]/[0.035] p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(12,36,72,0.10)]">
      <PremiumIconTile icon={Building2} />
      <p className="text-sm font-medium leading-6 text-[#0C2448]/80">{item}</p>
    </div>
  );
}

export default function VenturescapeMarkets() {
  return (
    <section id="who-we-work-with" className="bg-white/55 border-y border-[#0C2448]/8">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionIntro
          eyebrow="Built for Businesses That Depend on Material."
          title="Who We Work With"
          description="Venturescape primarily serves businesses that purchase, process, manufacture, distribute or trade wood and wood-based products. Whether the requirement is a regular manufacturing input or a specific sourcing requirement, the process begins with understanding what the customer actually needs."
        />

        {/* Mobile: swipeable row with progress dots */}
        <MobileCarousel
          className="mt-10 w-full md:hidden"
          ariaLabel="Who we work with carousel"
          items={marketSegments.map((item) => (
            <MarketCard key={item} item={item} />
          ))}
        />

        {/* Desktop: grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 hidden grid-cols-1 gap-4 sm:grid-cols-2 md:grid lg:grid-cols-3 xl:grid-cols-5"
        >
          {marketSegments.map((item) => (
            <motion.div key={item} variants={riseItem}>
              <MarketCard item={item} />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-10 max-w-3xl text-center text-base italic leading-relaxed text-[#0C2448]/72 md:text-lg"
        >
          Whether the requirement is a regular manufacturing input or a
          specific sourcing requirement, the process begins with understanding
          what the customer actually needs.
        </motion.p>
      </div>
    </section>
  );
}
