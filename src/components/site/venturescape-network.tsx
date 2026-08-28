import { motion } from "framer-motion";
import { Globe2, ArrowRight } from "lucide-react";
import { networkPartners } from "@/components/site/venturescape-data";
import { PremiumIconTile, SectionIntro, staggerContainer, riseItem } from "@/components/site/venturescape-shared";

const originToMarket = ["Source", "Evaluate", "Coordinate", "Ship", "Deliver"];

export default function VenturescapeNetwork() {
  return (
    <section id="global-sourcing" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="Closer to the Source."
            title="Global Sourcing"
            description="Wood is not a uniform commodity. Species, climate, origin, processing practices, moisture, grade and dimensions can significantly influence whether a material is suitable for its intended application. That makes the source important."
          />
          <p className="mt-5 max-w-xl text-sm leading-6 text-[#0C2448]/72">
            Venturescape develops relationships across established timber and
            wood-product markets in Africa, Southeast Asia and other major
            producing regions, including markets such as Gabon, South Africa
            and Indonesia, depending on the product and requirement.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#0C2448]/72">
            With India currently serving as a major destination for our
            business, we focus particularly on materials required by Indian
            manufacturers and wood-product businesses.
          </p>

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
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#91121D]">From Origin to Market</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#0C2448]">
                  A source that makes sense for the material.
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

            <div className="mt-5 rounded-2xl bg-[#0C2448]/[0.04] p-4">
              <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C2448]/72">
                {originToMarket.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-[#0C2448]/8">
                      {step}
                    </span>
                    {i < originToMarket.length - 1 && (
                      <ArrowRight className="h-3 w-3 text-[#BB7D3E]" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-4 text-xs leading-5 text-[#0C2448]/60">
              Our objective is not simply to find an available supplier. It's
              to identify a source that makes sense for the product,
              specification, commercial requirement and destination.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
