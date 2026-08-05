import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { PremiumIconTile, SectionIntro, staggerContainer, riseItem } from "@/components/site/venturescape-shared";

export default function VenturescapeLeadership() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="mb-10">
        <SectionIntro
          eyebrow="Leadership"
          title="Directly led. Personally accountable."
          description="Venturescape is led with a hands-on approach to product sourcing, commercial coordination, documentation, and international trade execution."
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr]"
      >
        <motion.div variants={riseItem} className="rounded-3xl bg-[#0C2448]/[0.035] p-2">
          <div className="overflow-hidden rounded-3xl bg-white">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait of Prithvi Singh"
              className="h-full min-h-[420px] w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
            />
          </div>
        </motion.div>

        <motion.div variants={riseItem} className="rounded-3xl bg-[#0C2448]/[0.035] p-2">
          <div className="rounded-3xl bg-white p-8 shadow-[0_10px_30px_rgba(12,36,72,0.08)]">
            <div className="inline-flex rounded-full border border-[#BB7D3E]/25 bg-white/80 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#91121D]">
              Founder-led execution
            </div>
            <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-[#0C2448]">
              Prithvi Singh
            </h3>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-[#0C2448]/48">
              Director, Venturescape Trading - FZCO
            </p>
            <p className="mt-6 text-base leading-8 text-[#0C2448]/72">
              The company is being built around a clear principle: every commitment must be supported by disciplined work, transparent communication, and personal accountability. Leadership remains close to the transaction from sourcing and commercial alignment through documentation and shipment support.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                "Hands-on sourcing",
                "Commercial discipline",
                "Direct communication",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#0C2448]/[0.035] p-4 text-sm font-medium text-[#0C2448]/76">
                  <PremiumIconTile icon={BadgeCheck} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
