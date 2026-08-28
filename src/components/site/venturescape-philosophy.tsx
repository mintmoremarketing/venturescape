import { motion } from "framer-motion";

export default function VenturescapePhilosophy() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl border border-[#BB7D3E]/25 bg-gradient-to-br from-white/85 to-[#F7F2EB]/60 p-10 shadow-[0_20px_50px_rgba(12,36,72,0.10)] md:p-14"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(65,105,225,0.08), transparent 45%), radial-gradient(circle at 80% 80%, rgba(187,125,62,0.10), transparent 40%)",
          }}
        />
        <div className="relative">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-[#91121D]">
            Good Trade Should Feel Safe.
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#0C2448] md:text-4xl">
            A statement of our philosophy.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#0C2448]/72 md:text-lg">
            A transaction should not leave one party wondering what the other
            party knows. It should not depend on unclear commitments. It should
            not succeed because one stakeholder's interest was ignored in
            favour of another's.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#0C2448]/72 md:text-lg">
            Good trade creates confidence. Confidence in the material.
            Confidence in the documentation. Confidence in the communication.
            And most importantly, confidence in the people across the table.
            That is the business we are building at Venturescape.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
