import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import { networkPartners } from "@/components/site/venturescape-data";
import { PremiumIconTile, SectionIntro, staggerContainer, riseItem } from "@/components/site/venturescape-shared";

export default function VenturescapeNetwork() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="Global Sourcing Network"
            title="The right source is not always the nearest one."
            description="Wood moves across the world for good reasons: species, grade, price, and lead time rarely line up in a single country. Venturescape works across a network of producers, mills, and exporters so each enquiry is matched to the origin that actually fits, not the one that happens to be available."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            className="mt-8 grid gap-3 sm:grid-cols-2"
          >
            {networkPartners.map((partner) => (
              <motion.div
                key={partner}
                variants={riseItem}
                className="rounded-2xl bg-[#0C2448]/[0.035] px-4 py-3 text-sm font-medium text-[#0C2448]/74 shadow-[0_10px_24px_rgba(12,36,72,0.04)]"
              >
                {partner}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-[#0C2448]/[0.035] p-2 shadow-[0_14px_40px_rgba(12,36,72,0.10)]"
        >
          <div className="rounded-3xl bg-white/90 p-6 shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_6px_0_rgba(0,0,0,0.07),0_2px_4px_0_rgba(0,0,0,0.05)]">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#91121D]">Network overview</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#0C2448]">
                  Matching every enquiry to the right origin
                </h3>
              </div>
              <PremiumIconTile icon={Globe2} />
            </div>

            <div className="overflow-hidden rounded-[1.5rem] bg-[#0C2448]/[0.035] p-5">
              <img
                src="/world-map-raw.svg"
                alt="World sourcing network map"
                className="w-full opacity-85 mix-blend-multiply"
              />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                "Every origin option weighed on species, grade, price, and lead time together.",
                "Commercial feasibility confirmed before any commitment is made to the buyer.",
                "One point of contact from first enquiry to final shipment confirmation.",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#0C2448]/[0.035] px-4 py-4 text-sm leading-6 text-[#0C2448]/72">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
