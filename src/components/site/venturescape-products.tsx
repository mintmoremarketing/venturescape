import { motion } from "framer-motion";
import { productItems } from "@/components/site/venturescape-data";
import { PremiumCard, SectionIntro, staggerContainer } from "@/components/site/venturescape-shared";

export default function VenturescapeProducts() {
  return (
    <section id="products" className="bg-white/55 border-y border-[#0C2448]/8">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-20 md:px-8">
        <SectionIntro
          eyebrow="Product Portfolio"
          title="Wood products for diverse market requirements."
          description="Venturescape sources wood products according to the buyer's required species, grade, dimensions, quantity, application, and destination market."
          align="center"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {productItems.map((item) => (
            <motion.article
              key={item.title}
              className="overflow-hidden rounded-3xl bg-[#0C2448]/[0.035] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(12,36,72,0.12)]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <PremiumCard
                  title={item.title}
                  body={item.body}
                  icon={item.icon}
                  pill={item.pill}
                  compact
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
