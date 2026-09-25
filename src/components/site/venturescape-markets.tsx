import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Who We Work With — the 11 market segments grouped into three industry
 * clusters. Each cluster gets an arch-shaped photo "window"; hovering or tapping a segment swaps the photo to match it.
 */

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?w=900&q=70&auto=format&fit=crop`;

type Cluster = {
  label: string;
  /** Shorter label for the phone tab switcher. */
  tab: string;
  blurb: string;
  segments: { name: string; image: string }[];
};

// One shared arch shape so the three clusters read as a set.
const archShape = "rounded-t-full rounded-b-[2rem]";

const clusters: Cluster[] = [
  {
    label: "Manufacturing",
    tab: "Mills & Makers",
    blurb: "Mills and makers turning raw wood into panels, sheets and finished goods.",
    segments: [
      { name: "Furniture manufacturers", image: unsplash("photo-1586023492125-27b2c045efd7") },
      { name: "Plywood manufacturers", image: "/products/plywood.jpg" },
      { name: "Panel manufacturers", image: "/products/mdf.jpg" },
      { name: "Veneer buyers", image: "/products/face-veneer.jpg" },
    ],
  },
  {
    label: "Import & Trade",
    tab: "Import & Trade",
    blurb: "Businesses moving material across borders, warehouses and supply chains.",
    segments: [
      { name: "International trading houses", image: unsplash("photo-1473023914974-0d98f0798b51") },
      { name: "Timber importers", image: "/products/timber.jpg" },
      { name: "Wholesalers", image: unsplash("photo-1553413077-190dd305871c") },
      { name: "Project procurement companies", image: unsplash("photo-1581092160562-40aa08e78837") },
    ],
  },
  {
    label: "Build & Interiors",
    tab: "Build & Interiors",
    blurb: "Suppliers putting wood products into buildings, projects and spaces.",
    segments: [
      { name: "Building-material distributors", image: unsplash("photo-1504307651254-35680f356dfd") },
      { name: "Interior-product companies", image: unsplash("photo-1618221195710-dd6b41faaea6") },
      { name: "Construction-material suppliers", image: unsplash("photo-1541888946425-d81bb19240f5") },
    ],
  },
];

function ClusterColumn({
  cluster,
  index,
  compact = false,
}: {
  cluster: Cluster;
  index: number;
  compact?: boolean;
}) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  // Running segment number across clusters, so the list reads 01–11.
  const offset = clusters.slice(0, index).reduce((n, c) => n + c.segments.length, 0);

  return (
    <motion.div
      className="flex flex-col"
      initial={reduce ? false : { opacity: 0, y: compact ? 12 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: compact ? 0.4 : 0.6, delay: compact ? 0 : index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Photo window with an offset gold outline echoing its shape */}
      <div className={`relative mx-auto w-full ${compact ? "max-w-[230px]" : "max-w-[340px]"}`}>
        <div
          aria-hidden
          className={`absolute inset-0 translate-x-3 translate-y-3 border border-[#BB7D3E]/40 ${archShape}`}
        />
        <div className={`relative overflow-hidden bg-[#0C2448]/10 aspect-[4/5] ${archShape}`}>
          {cluster.segments.map((segment, i) => (
            <img
              key={segment.name}
              src={segment.image}
              alt={i === active ? segment.name : ""}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C2448]/45 via-transparent to-transparent" />
        </div>
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#0C2448] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_24px_rgba(12,36,72,0.25)]">
          {cluster.label}
        </span>
      </div>

      <p className={`mx-auto max-w-[320px] text-center text-sm leading-6 text-[#0C2448]/65 ${compact ? "mt-8" : "mt-10"}`}>
        {cluster.blurb}
      </p>

      <ul className="mt-6 divide-y divide-[#0C2448]/8 border-y border-[#0C2448]/8">
        {cluster.segments.map((segment, i) => {
          const isActive = i === active;
          return (
            <li key={segment.name}>
              <button
                type="button"
                aria-pressed={isActive}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group relative flex w-full items-center gap-4 py-3.5 pl-4 pr-2 text-left outline-none focus-visible:bg-[#BB7D3E]/[0.06]"
              >
                <span
                  aria-hidden
                  className={`absolute top-2 bottom-2 left-0 w-0.5 rounded-full bg-[#BB7D3E] transition-transform duration-300 ${
                    isActive ? "scale-y-100" : "scale-y-0"
                  }`}
                />
                <span
                  className={`w-6 shrink-0 text-[11px] font-semibold tracking-[0.14em] transition-colors ${
                    isActive ? "text-[#BB7D3E]" : "text-[#0C2448]/35"
                  }`}
                >
                  {String(offset + i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`flex-1 text-[15px] font-semibold tracking-[-0.01em] transition-colors ${
                    isActive ? "text-[#0C2448]" : "text-[#0C2448]/60"
                  }`}
                >
                  {segment.name}
                </span>
                <ArrowUpRight
                  aria-hidden
                  className={`h-4 w-4 shrink-0 text-[#BB7D3E] transition-all duration-300 ${
                    isActive ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

/** Phones: one cluster at a time behind a segmented switcher instead of three tall stacks. */
function MobileClusters() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="mt-10 md:hidden">
      <div
        role="tablist"
        aria-label="Industry clusters"
        className="mx-auto grid max-w-md grid-cols-3 gap-1 rounded-2xl bg-white p-1 ring-1 ring-[#0C2448]/8 shadow-[0_6px_18px_rgba(12,36,72,0.05)]"
      >
        {clusters.map((cluster, i) => (
          <button
            key={cluster.label}
            type="button"
            role="tab"
            aria-selected={i === current}
            onClick={() => setCurrent(i)}
            className={`min-w-0 break-words rounded-xl px-1.5 py-2.5 text-[11px] font-semibold uppercase leading-tight tracking-[0.04em] transition-colors ${
              i === current ? "bg-[#0C2448] text-white" : "text-[#0C2448]/60"
            }`}
          >
            {cluster.tab}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="mt-10">
        <ClusterColumn key={clusters[current].label} cluster={clusters[current]} index={current} compact />
      </div>
    </div>
  );
}

export default function VenturescapeMarkets() {
  return (
    <section
      id="who-we-work-with"
      className="relative overflow-hidden border-y border-[#0C2448]/8 bg-[#F7F2EB]/40"
    >
      {/* Soft abstract backdrop: concentric growth rings, like a cut log */}
      <svg
        aria-hidden
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -top-40 -right-40 h-[640px] w-[640px] text-[#BB7D3E]/15"
        fill="none"
        stroke="currentColor"
      >
        {[60, 110, 150, 195, 230, 262, 290].map((r) => (
          <circle key={r} cx="300" cy="300" r={r} strokeWidth="1.2" />
        ))}
      </svg>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex max-w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-[#BB7D3E]/25 bg-white/80 px-3 py-1 text-[8px] font-medium uppercase tracking-[0.08em] text-[#91121D] shadow-[0_1px_0_rgba(255,255,255,0.75),0_4px_14px_rgba(12,36,72,0.05)] sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.16em]">
            Built for Businesses That Depend on Material.
          </span>
          <h2 className="max-w-3xl text-3xl leading-[0.98] font-semibold tracking-[-0.04em] text-[#0C2448] md:text-5xl">
            Who We Work With
          </h2>
          <p className="max-w-2xl text-base leading-7 text-[#0C2448]/72 md:max-w-4xl md:text-lg">
            Venturescape primarily serves businesses that purchase, process,
            manufacture, distribute or trade wood and wood-based products. The
            process begins with understanding what the customer actually needs.
          </p>
        </div>

        <MobileClusters />

        <div className="mt-16 hidden gap-16 md:grid md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-x-12">
          {clusters.map((cluster, i) => (
            <div key={cluster.label} className={i === 2 ? "md:col-span-2 md:mx-auto md:w-1/2 lg:col-span-1 lg:w-auto" : ""}>
              <ClusterColumn cluster={cluster} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
