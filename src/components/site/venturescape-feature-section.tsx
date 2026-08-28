import { motion } from "framer-motion";
import type { FeatureItem } from "@/components/site/venturescape-data";
import { PremiumCard, SectionIntro, staggerContainer } from "@/components/site/venturescape-shared";
import MobileCarousel from "@/components/site/mobile-carousel";

export default function VenturescapeFeatureSection({
  id,
  eyebrow,
  title,
  description,
  items,
  dark = false,
  columns = "three",
  closingLine,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  items: FeatureItem[];
  dark?: boolean;
  columns?: "two" | "three";
  closingLine?: string;
}) {
  const sectionClass = dark ? "bg-[#0C2448] text-white border-y border-[#0C2448]/8" : "";
  const gridClass =
    columns === "two"
      ? "grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2"
      : "grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3";

  return (
    <section id={id} className={sectionClass}>
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-20 md:px-8">
        <SectionIntro eyebrow={eyebrow} title={title} description={description} align="center" />

        {/* Mobile: simple swipeable row with progress dots */}
        <MobileCarousel
          className="mt-10 w-full md:hidden"
          light={dark}
          ariaLabel={`${eyebrow} carousel`}
          items={items.map((item) => (
            <PremiumCard key={item.title} {...item} dark={dark} />
          ))}
        />

        {/* Desktop: grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className={`mt-12 hidden ${gridClass} md:grid`}
        >
          {items.map((item) => (
            <PremiumCard key={item.title} {...item} dark={dark} />
          ))}
        </motion.div>

        {closingLine && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className={`mt-12 max-w-3xl text-center text-base italic md:text-lg ${
              dark ? "text-white/78" : "text-[#0C2448]/72"
            }`}
          >
            {closingLine}
          </motion.p>
        )}
      </div>
    </section>
  );
}
