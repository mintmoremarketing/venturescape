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
            title="Sourcing across markets. Supplying with confidence."
            description="Successful sourcing requires more than locating an available supplier. Venturescape evaluates each requirement according to material, source, specification, quantity, destination, and commercial feasibility."
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
                  Requirement-to-source matching
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
                "Origin, specification, and quantity reviewed together.",
                "Commercial feasibility checked before commitment.",
                "Clear path from enquiry to shipment coordination.",
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
