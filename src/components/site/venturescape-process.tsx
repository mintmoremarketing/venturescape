import { motion } from "framer-motion";
import { processSteps } from "@/components/site/venturescape-data";
import { PremiumCard, SectionIntro, staggerContainer } from "@/components/site/venturescape-shared";
import { Boxes, ClipboardCheck, FileText, ScanSearch, ShipWheel, Truck } from "lucide-react";

const icons = [ScanSearch, Boxes, ClipboardCheck, FileText, ShipWheel, Truck];

export default function VenturescapeProcess() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <SectionIntro
        eyebrow="How We Work"
        title="A clear process from requirement to delivery."
        description="Each stage is designed to reduce ambiguity, align technical and commercial expectations early, and maintain structured communication through the life of the transaction."
        align="center"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {processSteps.map((step, index) => (
          <PremiumCard
            key={step.title}
            title={`${index + 1}. ${step.title}`}
            body={step.body}
            icon={icons[index]}
            pill="Process step"
          />
        ))}
      </motion.div>
    </section>
  );
}
