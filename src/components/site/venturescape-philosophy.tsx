import { motion } from "framer-motion";

export default function VenturescapePhilosophy() {
  return (
    <section className="w-full py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-4xl px-5 text-center md:px-8"
      >
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-[#91121D]">
          Good Trade Should Feel Safe.
        </p>
        <p className="text-xl leading-relaxed text-[#0C2448]/78 md:text-2xl md:leading-relaxed">
          Good trade creates confidence. Confidence in the material.
          Confidence in the documentation. Confidence in the communication. And
          most importantly,{" "}
          <span className="text-[#0C2448]">
            confidence in the people across the table
          </span>
          .
        </p>
      </motion.div>
    </section>
  );
}
