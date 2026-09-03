import { motion } from "framer-motion";
import { networkPartners } from "@/components/site/venturescape-data";
import { SectionIntro, staggerContainer, riseItem } from "@/components/site/venturescape-shared";

// Approximate percentage positions on the world-map-raw.svg equirectangular
// projection. Sources are highlighted with a small amber dot; destination
// (India) is highlighted with a red dot; thin route lines connect each
// source directly to the destination.
const INDIA = { label: "India", left: 70, top: 45 };
const SOURCES = [
  { label: "Gabon", left: 50, top: 55 },
  { label: "South Africa", left: 55, top: 76 },
  { label: "Mozambique", left: 58, top: 68 },
  { label: "Indonesia", left: 78, top: 63 },
  { label: "Vietnam", left: 74, top: 52 },
  { label: "Brazil", left: 33, top: 65 },
];

export default function VenturescapeNetwork() {
  return (
    <section
      id="global-sourcing"
      className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="Closer to the Source."
            title="Global Sourcing"
            description="Wood is not a uniform commodity. Species, climate, origin and processing all influence whether a material is suitable for its intended application. That's why the source matters."
          />
          <p className="mt-5 max-w-xl text-sm leading-6 text-[#0C2448]/78">
            We develop relationships across established timber and wood-product
            markets in Africa, Southeast Asia and Latin America — including
            markets such as Gabon, South Africa, Mozambique, Indonesia,
            Vietnam and Brazil — depending on the product and requirement.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#0C2448]/78">
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
                className="rounded-2xl bg-[#0C2448]/[0.04] px-4 py-3 text-sm font-medium text-[#0C2448]/80"
              >
                {partner}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-[#0C2448]/8 shadow-[0_14px_40px_rgba(12,36,72,0.06)] md:p-8"
        >
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#91121D]">
              Source Markets → India
            </p>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src="/world-map-raw.svg"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full opacity-30 mix-blend-multiply"
            />

            {/* Thin route lines: each source → India */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#BB7D3E" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#91121D" stopOpacity="0.85" />
                </linearGradient>
              </defs>
              {SOURCES.map((s) => (
                <line
                  key={`route-${s.label}`}
                  x1={s.left}
                  y1={s.top}
                  x2={INDIA.left}
                  y2={INDIA.top}
                  stroke="url(#route-gradient)"
                  strokeWidth="0.35"
                  strokeDasharray="1 1.2"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>

            {/* Source markers */}
            {SOURCES.map((s) => (
              <div
                key={s.label}
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${s.left}%`, top: `${s.top}%` }}
              >
                <div className="flex flex-col items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#BB7D3E] ring-2 ring-white" />
                  <span className="mt-1 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.1em] text-[#0C2448]/68">
                    {s.label}
                  </span>
                </div>
              </div>
            ))}

            {/* Destination marker (India) */}
            <div
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${INDIA.left}%`, top: `${INDIA.top}%` }}
            >
              <div className="flex flex-col items-center">
                <span className="relative flex items-center justify-center">
                  <span className="absolute h-4 w-4 animate-ping rounded-full bg-[#91121D]/40" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-[#91121D] ring-2 ring-white" />
                </span>
                <span className="mt-1 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.12em] text-[#91121D]">
                  {INDIA.label}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
