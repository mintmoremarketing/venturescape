import { motion } from "framer-motion";
import { processSteps } from "@/components/site/venturescape-data";
import { SectionIntro, staggerContainer, riseItem } from "@/components/site/venturescape-shared";

export default function VenturescapeProcess() {
  return (
    <section id="how-we-work" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
      <SectionIntro
        eyebrow="A Clear Route from Requirement to Shipment."
        title="How We Work"
        description="Six steps, one relationship. Each stage reduces ambiguity and keeps every party aligned on what happens next."
        align="center"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {processSteps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.article
              key={step.title}
              variants={riseItem}
              className="relative overflow-hidden rounded-3xl bg-white/70 p-6 shadow-[0_10px_30px_rgba(12,36,72,0.06)] ring-1 ring-[#0C2448]/8 transition-all hover:shadow-[0_14px_38px_rgba(12,36,72,0.10)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#0C2448]/10 bg-white text-[#0C2448] shadow-sm">
                  <Icon className="h-5 w-5 text-[#BB7D3E]" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0C2448]/72">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-[-0.01em] text-[#0C2448]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#0C2448]/68">
                {step.body}
              </p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
