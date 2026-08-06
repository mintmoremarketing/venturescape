import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { marketSegments } from "@/components/site/venturescape-data";
import { PremiumIconTile, SectionIntro, staggerContainer, riseItem } from "@/components/site/venturescape-shared";

export default function VenturescapeMarkets() {
  return (
    <section id="markets" className="bg-white/55 border-y border-[#0C2448]/8">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionIntro
          eyebrow="Markets and Customers"
          title="Who we ship to."
          description="From plywood mills and furniture factories to project procurement teams and importers running multi-country supply, our customers are the businesses that turn wood into finished value. Every relationship starts the same way: with the actual specification, quantity, and destination on the table."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {marketSegments.map((item) => (
            <motion.div
              key={item}
              variants={riseItem}
              className="rounded-3xl bg-[#0C2448]/[0.035] p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(12,36,72,0.10)]"
            >
              <PremiumIconTile icon={Building2} />
              <p className="text-sm font-medium leading-6 text-[#0C2448]/80">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
