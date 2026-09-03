import { motion } from "framer-motion";
import { networkPartners } from "@/components/site/venturescape-data";
import { SectionIntro, staggerContainer, riseItem } from "@/components/site/venturescape-shared";

/**
 * Positions calculated from the world-map-raw.svg viewBox
 * (30.767 241.591 784.077 458.627, equirectangular). Each country's
 * (lat, lon) is projected linearly onto that box, then expressed as a
 * percentage of the map image so it scales cleanly.
 *
 * `labelDir` picks which side the pill label sits so we avoid overlaps
 * with the dot and with the map's landmass shading.
 */
type LabelDir = "top" | "bottom" | "left" | "right";

interface Source {
  label: string;
  x: number; // % from left of the map image
  y: number; // % from top of the map image
  labelDir: LabelDir;
}

// Centroids extracted directly from the world-map-raw.svg country paths
// (computed once — see design notes). These are the actual painted positions
// of each country within the map image, so the dots sit exactly on them.
const INDIA = { label: "India", x: 72.84, y: 50.36 };

const SOURCES: Source[] = [
  { label: "Brazil", x: 31.15, y: 71.45, labelDir: "left" },
  { label: "Gabon", x: 51.57, y: 63.83, labelDir: "left" },
  { label: "Mozambique", x: 59.05, y: 73.5, labelDir: "right" },
  { label: "South Africa", x: 55.35, y: 79.37, labelDir: "bottom" },
  { label: "Vietnam", x: 80.4, y: 53.12, labelDir: "right" },
  { label: "Indonesia", x: 84.75, y: 64.61, labelDir: "bottom" },
];

function labelOffsetStyle(dir: LabelDir): React.CSSProperties {
  // A short lead gap from the dot to the label pill.
  switch (dir) {
    case "top":
      return { left: "50%", bottom: "calc(100% + 6px)", transform: "translateX(-50%)" };
    case "bottom":
      return { left: "50%", top: "calc(100% + 6px)", transform: "translateX(-50%)" };
    case "left":
      return { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" };
    case "right":
      return { left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" };
  }
}

export default function VenturescapeNetwork() {
  return (
    <section
      id="global-sourcing"
      className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <SectionIntro
          eyebrow="Closer to the Source."
          title="Global Sourcing"
          description="Wood is not a uniform commodity. Species, climate, origin and processing all influence whether a material is suitable for its intended application. That's why the source matters."
          align="center"
        />
        <p className="mt-5 text-base leading-relaxed text-[#0C2448]/78 md:text-lg">
          We develop relationships across established timber and wood-product
          markets in Africa, Southeast Asia and Latin America — including
          markets such as Gabon, South Africa, Mozambique, Indonesia, Vietnam
          and Brazil — depending on the product and requirement.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#0C2448]/78 md:text-lg">
          With India currently serving as a major destination for our
          business, we focus particularly on materials required by Indian
          manufacturers and wood-product businesses.
        </p>
      </div>

      {/* Full-width map card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mt-12 rounded-3xl bg-white p-4 ring-1 ring-[#0C2448]/8 shadow-[0_20px_50px_rgba(12,36,72,0.06)] sm:p-8 md:mt-14 md:p-12"
      >
        <div className="mb-6 flex flex-col items-center gap-2 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#91121D]">
            Source Markets → India
          </span>
          <p className="text-sm text-[#0C2448]/72">
            Six major sourcing regions, one destination market.
          </p>
        </div>

        {/* Map wrapper — the world-map image and every marker are positioned
            against this box, so percentages line up 1:1 with the SVG. */}
        <div className="relative mx-auto w-full">
          <div className="relative aspect-[784/459] w-full">
            <img
              src="/world-map-raw.svg"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full opacity-[0.35] mix-blend-multiply"
            />

            {/* Route lines — animated blue-gradient arrows flowing from each
                source into India, so the trade direction reads at a glance.
                viewBox is 100x100 with preserveAspectRatio=none so an (x,y)
                in percent lands on the same spot as an overlay div at
                left:x%, top:y%. */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <linearGradient id="route-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4169E1" stopOpacity="0.55" />
                  <stop offset="55%" stopColor="#1E3A8A" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#00D4FF" stopOpacity="1" />
                </linearGradient>
                {/* Arrowhead pointing into India */}
                <marker
                  id="route-arrow"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerUnits="strokeWidth"
                  markerWidth="4"
                  markerHeight="4"
                  orient="auto"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#00D4FF" />
                </marker>
              </defs>
              {SOURCES.map((s) => {
                // Quadratic bezier arcing above the midpoint of source → India.
                const x1 = s.x;
                const y1 = s.y;
                const x2 = INDIA.x;
                const y2 = INDIA.y;
                const cx = (x1 + x2) / 2;
                const cy = Math.min(y1, y2) - 12;
                const d = `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
                return (
                  <g key={s.label}>
                    {/* Faint static under-line so the path reads even when
                        the animated dashes are between gaps. */}
                    <path
                      d={d}
                      fill="none"
                      stroke="url(#route-blue)"
                      strokeOpacity="0.25"
                      strokeWidth="0.9"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                    {/* Animated flowing dashes with an arrowhead pointing
                        at India. */}
                    <path
                      d={d}
                      fill="none"
                      stroke="url(#route-blue)"
                      strokeWidth="1.1"
                      strokeLinecap="round"
                      strokeDasharray="3 3"
                      className="route-flow"
                      markerEnd="url(#route-arrow)"
                      vectorEffect="non-scaling-stroke"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Source markers with pill labels */}
            {SOURCES.map((s) => (
              <div
                key={s.label}
                className="pointer-events-none absolute"
                style={{ left: `${s.x}%`, top: `${s.y}%`, transform: "translate(-50%, -50%)" }}
              >
                {/* Dot */}
                <div className="relative flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#4169E1] ring-2 ring-white">
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-[#4169E1]/30" />
                </div>
                {/* Label pill */}
                <div
                  className="absolute whitespace-nowrap rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0C2448] shadow-sm ring-1 ring-[#0C2448]/10"
                  style={labelOffsetStyle(s.labelDir)}
                >
                  {s.label}
                </div>
              </div>
            ))}

            {/* India — destination, styled bold red with a pulsing glow */}
            <div
              className="pointer-events-none absolute"
              style={{
                left: `${INDIA.x}%`,
                top: `${INDIA.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="relative flex items-center justify-center">
                <span className="destination-halo absolute h-6 w-6 rounded-full" />
                <span className="destination-halo absolute h-4 w-4 rounded-full" />
                <span className="destination-dot relative h-3 w-3 rounded-full ring-2 ring-white" />
              </div>
              <div
                className="absolute whitespace-nowrap rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0C2448] shadow-sm ring-1 ring-[#0C2448]/10"
                style={{
                  left: "50%",
                  top: "calc(100% + 8px)",
                  transform: "translateX(-50%)",
                }}
              >
                {INDIA.label}
              </div>
            </div>
          </div>
        </div>

        {/* Legend below the map */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-[#0C2448]/8 pt-6">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C2448]/72">
            <span className="h-2 w-2 rounded-full bg-[#4169E1]" />
            Sourcing regions
          </div>
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C2448]/72">
            <span className="h-2 w-2 rounded-full bg-[#DC2626]" />
            Destination market
          </div>
        </div>
      </motion.div>

      {/* Supply-chain partners */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
      >
        {networkPartners.map((partner) => (
          <motion.div
            key={partner}
            variants={riseItem}
            className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-medium text-[#0C2448]/80 ring-1 ring-[#0C2448]/8"
          >
            {partner}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
