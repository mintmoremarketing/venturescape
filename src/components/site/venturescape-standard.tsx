import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { standardItems } from "@/components/site/venturescape-data";
import { SectionIntro, staggerContainer, riseItem } from "@/components/site/venturescape-shared";

export default function VenturescapeStandard() {
  return (
    <section
      id="standard"
      className="relative overflow-hidden border-y border-[#0C2448]/8 bg-[#0C2448] text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 15% -10%, rgba(65,105,225,0.32), transparent 42%), radial-gradient(circle at 90% 20%, rgba(187,125,62,0.18), transparent 40%)",
        }}
      />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-5 py-20 md:px-8">
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
            documentation. Logistics partners require timely information.
            Manufacturers depend on shipments arriving according to plan. The
            role of a good trading partner is to respect all of those
            interests.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {standardItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                variants={riseItem}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white shadow-inner">
                    <Icon className="h-5 w-5 text-[#BB7D3E]" />
                  </div>
                  {item.pill && (
                    <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/70">
                      {item.pill}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  {item.body}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-12 flex items-center justify-center gap-3 text-sm text-white/68">
          <ShieldCheck className="h-4 w-4 text-[#BB7D3E]" />
          Protecting the interests of everyone involved in the trade.
        </div>
      </div>
    </section>
  );
}
