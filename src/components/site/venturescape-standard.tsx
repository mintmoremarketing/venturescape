import { motion } from "framer-motion";
import { Repeat } from "lucide-react";
import { standardItems } from "@/components/site/venturescape-data";
import { staggerContainer, riseItem } from "@/components/site/venturescape-shared";

export default function VenturescapeStandard() {
  return (
    <section
      id="standard"
      className="relative overflow-hidden border-y border-[#0C2448]/8 py-24 text-white md:py-28"
      style={{
        background:
          "linear-gradient(180deg, rgba(2,0,36,1) 10%, rgb(3, 3, 50) 57%, rgb(21, 21, 84) 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 15% -10%, rgba(65,105,225,0.28), transparent 45%), radial-gradient(circle at 90% 20%, rgba(187,125,62,0.15), transparent 45%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        {/* Section head — matches SectionIntro visual grammar */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#BB7D3E]">
            The Venturescape Standard
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
            Trust is not a claim. It's how the trade is conducted.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/72 md:text-lg">
            International trade places different interests on the same
            transaction. The buyer needs confidence in the material. The
            supplier needs confidence in the buyer. Banks require accurate
            documentation. Logistics partners require timely information. The
            role of a good trading partner is to respect all of those interests.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {standardItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                variants={riseItem}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white">
                  <Icon className="h-5 w-5 text-[#BB7D3E]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-[-0.01em] text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-white/70">{item.body}</p>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Long-Term Thinking — the doc's 7th Standard item, presented as a
            full-width strip below the 6-card grid instead of an orphan card. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-6 md:p-8"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10">
            <Repeat className="h-5 w-5 text-[#BB7D3E]" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold tracking-[-0.01em] text-white">
              Long-term thinking
            </h3>
            <p className="text-sm leading-6 text-white/70">
              We're not building Venturescape around one-off transactions.
              Successful trade is not simply "was the shipment completed?" —
              it's "would everyone involved choose to work together again?"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
