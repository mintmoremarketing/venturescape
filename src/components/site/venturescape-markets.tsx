import { motion } from "framer-motion";
import {
  Factory,
  Warehouse,
  Layers,
  PanelsTopLeft,
  Sofa,
  Store,
  DoorOpen,
  Hammer,
  ClipboardList,
  Boxes,
  Globe2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { marketSegments } from "@/components/site/venturescape-data";
import { SectionIntro, staggerContainer, riseItem } from "@/components/site/venturescape-shared";

/**
 * Who We Work With — sticky-note board.
 *
 * The 11 market segments live on an off-white "corkboard" as slightly
 * rotated sticky notes in a rotating palette of muted colours. Each note
 * has a matching icon and its own random tilt (-3°..+3°); hovering
 * straightens and lifts it. Warm, casual, workshop-feel — a deliberate
 * contrast to the corporate rectangles elsewhere on the page.
 */

// Icon per market segment — kept in the same order as marketSegments.
const iconFor: Record<string, LucideIcon> = {
  "Plywood manufacturers": Layers,
  "Timber importers": Warehouse,
  "Veneer buyers": PanelsTopLeft,
  "Panel manufacturers": Factory,
  "Furniture manufacturers": Sofa,
  "Building-material distributors": Store,
  "Interior-product companies": DoorOpen,
  "Construction-material suppliers": Hammer,
  "Project procurement companies": ClipboardList,
  Wholesalers: Boxes,
  "International trading houses": Globe2,
};

// A muted paper palette. Each entry: note ground, top strip (like a
// gummed edge), and shadow tone. Deliberately soft so the wall of notes
// reads as calm, not a candy shop.
const palette = [
  { bg: "#F7E3C3", tape: "#EACF9F", ink: "#5A3E17" }, // warm amber
  { bg: "#E4EBF6", tape: "#C7D5EA", ink: "#1F3A6B" }, // pale sky
  { bg: "#E9E1D2", tape: "#D4C7AF", ink: "#3F3520" }, // linen
  { bg: "#F5D6CC", tape: "#EABBAE", ink: "#5C2A20" }, // soft coral
  { bg: "#DFE6D6", tape: "#C4CFB2", ink: "#2E3B21" }, // sage
  { bg: "#EEE0EC", tape: "#DBC4D5", ink: "#3D1F3A" }, // lilac
];

// Deterministic pseudo-random so the tilt doesn't jump between renders.
function seededTilt(seed: number, range = 3): number {
  // Simple hash → [-1, 1] → scaled to ±range degrees.
  const x = Math.sin(seed * 9301 + 49297) * 10000;
  const r = x - Math.floor(x);
  return (r * 2 - 1) * range;
}

function StickyNote({ item, i }: { item: string; i: number }) {
  const Icon = iconFor[item] ?? Factory;
  const c = palette[i % palette.length];
  const tilt = seededTilt(i + 1);
  return (
    <motion.article
      variants={riseItem}
      className="group relative"
      style={{ rotate: `${tilt}deg`, transformOrigin: "center" }}
      whileHover={{ rotate: 0, y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
    >
      <div
        className="relative flex h-full flex-col rounded-[4px] p-5 shadow-[0_10px_24px_rgba(12,36,72,0.15),0_2px_4px_rgba(12,36,72,0.08)] transition-shadow duration-300 group-hover:shadow-[0_18px_36px_rgba(12,36,72,0.20),0_4px_8px_rgba(12,36,72,0.10)]"
        style={{
          backgroundColor: c.bg,
          color: c.ink,
          backgroundImage:
            // Faint diagonal fibres so it reads as paper, not a flat swatch.
            "repeating-linear-gradient(135deg, rgba(0,0,0,0.02) 0 1px, transparent 1px 4px), repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 5px)",
        }}
      >
        {/* Tape strip at the top of the note */}
        <div
          aria-hidden
          className="absolute -top-2 left-1/2 h-4 w-16 -translate-x-1/2 rounded-[2px] opacity-90"
          style={{
            backgroundColor: c.tape,
            boxShadow: "0 2px 4px rgba(12,36,72,0.15)",
          }}
        />

        <div className="flex items-start gap-3">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/60"
            style={{ color: c.ink }}
          >
            <Icon className="h-4.5 w-4.5" />
          </div>
          <p
            className="pt-0.5 text-sm font-semibold leading-6"
            style={{ color: c.ink }}
          >
            {item}
          </p>
        </div>

        {/* Bottom hint of a subtle underline */}
        <div
          aria-hidden
          className="mt-4 h-px w-full opacity-40"
          style={{ backgroundColor: c.ink, opacity: 0.15 }}
        />
      </div>
    </motion.article>
  );
}

export default function VenturescapeMarkets() {
  return (
    <section
      id="who-we-work-with"
      className="relative overflow-hidden border-y border-[#0C2448]/8"
      style={{ backgroundColor: "#F3ECDC" }}
    >
      {/* Cork texture: two layers of low-opacity dot noise for a woven look */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(120,90,50,0.32) 1px, transparent 1.4px), radial-gradient(rgba(90,60,30,0.20) 1px, transparent 1.4px)",
          backgroundSize: "6px 6px, 11px 11px",
          backgroundPosition: "0 0, 3px 4px",
        }}
      />
      {/* Soft vignette to focus attention on the centre */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(64,42,20,0.10) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <SectionIntro
          eyebrow="Built for Businesses That Depend on Material."
          title="Who We Work With"
          description="Venturescape primarily serves businesses that purchase, process, manufacture, distribute or trade wood and wood-based products. The process begins with understanding what the customer actually needs."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4"
        >
          {marketSegments.map((item, i) => (
            <StickyNote key={item} item={item} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
