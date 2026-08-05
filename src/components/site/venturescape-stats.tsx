import { motion } from "framer-motion";
import { Activity, ArrowUpRight, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { statsItems } from "@/components/site/venturescape-data";
import { SectionIntro, staggerContainer, riseItem } from "@/components/site/venturescape-shared";

const statIcons = [Activity, Zap, ShieldCheck];
const glowColors = [
  "rgba(12, 36, 72, 0.42)",
  "rgba(145, 18, 29, 0.32)",
  "rgba(187, 125, 62, 0.32)",
];

export default function VenturescapeStats() {
  return (
    <section className="w-full px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="flex flex-col gap-8">
            <SectionIntro
              eyebrow="Operating Snapshot"
              title="A tighter proof layer for a serious trade business."
              description="This section adapts the premium `stats-4` rhythm into a Venturescape context: concise, structured proof points that support the positioning without turning the website into a dashboard."
            />

            <div className="inline-flex w-fit rounded-full border border-[#BB7D3E]/25 bg-white/80 px-4 py-1.5 text-sm font-medium text-[#0C2448] shadow-[0_1px_0_rgba(255,255,255,0.75),0_4px_14px_rgba(12,36,72,0.05)]">
              <Sparkles className="mr-2 h-4 w-4 text-[#91121D]" />
              Measured signals, not inflated claims
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {statsItems.map((item, index) => {
              const Icon = statIcons[index];
              const isWide = index === 2;
              return (
                <motion.article
                  key={item.title}
                  variants={riseItem}
                  className={`relative overflow-hidden rounded-3xl bg-[#0C2448]/[0.035] p-[2px] ${isWide ? "sm:col-span-2" : ""}`}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-90"
                    style={{
                      background: `radial-gradient(420px circle at 0% 0%, ${glowColors[index]}, transparent 42%)`,
                    }}
                  />
                  <div className="relative z-10 h-full rounded-3xl bg-white/92 p-8 shadow-[0_10px_30px_rgba(12,36,72,0.05)]">
                    <div className={`flex h-full ${isWide ? "flex-col gap-8 sm:flex-row sm:items-center" : "flex-col justify-between gap-6"}`}>
                      <div className={isWide ? "flex-1" : ""}>
                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-[#0C2448]/10 bg-white text-[#0C2448] shadow-sm">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="mb-2 text-5xl font-bold tracking-tight text-[#0C2448]">
                          {item.value}
                          {item.suffix ? (
                            <span className="ml-1 text-2xl text-[#0C2448]/54">{item.suffix}</span>
                          ) : null}
                        </div>
                        <h3 className="mb-2 text-base font-semibold text-[#0C2448]">{item.title}</h3>
                      </div>

                      <div className={isWide ? "flex-1" : ""}>
                        <p className="text-sm leading-7 text-[#0C2448]/68">{item.body}</p>
                        {isWide ? (
                          <div className="mt-6 inline-flex cursor-default items-center gap-1.5 text-sm font-medium text-[#0C2448]">
                            Built around sourcing, documentation, and delivery coordination
                            <ArrowUpRight className="h-4 w-4 text-[#91121D]" />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
