import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiCube,
  HiClipboardList,
  HiDocumentText,
  HiUserGroup,
  HiRefresh,
  HiGlobeAlt,
  HiUsers,
  HiChatAlt2,
} from "react-icons/hi";
import type { IconType } from "react-icons";

interface Point {
  icon: IconType;
  title: string;
  short: string;
  body: string;
}

const points: Point[] = [
  {
    icon: HiCube,
    title: "Wood-focused understanding",
    short: "Wood focus",
    body:
      "Our commercial focus is centred on timber, veneers, plywood and allied wood materials — a single industry, understood deeply.",
  },
  {
    icon: HiGlobeAlt,
    title: "Global source access",
    short: "Global sourcing",
    body:
      "Sourcing relationships across established wood-producing regions to give customers access to different origins and product possibilities.",
  },
  {
    icon: HiClipboardList,
    title: "Requirement-led sourcing",
    short: "Requirement-led",
    body:
      "We don't begin by asking what we want to sell. We begin by understanding what the customer needs to buy.",
  },
  {
    icon: HiUsers,
    title: "Stakeholder-first approach",
    short: "Stakeholder-first",
    body:
      "We consider the interests of buyers, suppliers and the other parties necessary to successfully complete the transaction.",
  },
  {
    icon: HiChatAlt2,
    title: "Clear commercial communication",
    short: "Clear communication",
    body:
      "Specifications, quantities, timelines and commercial expectations aligned as clearly as possible before execution.",
  },
  {
    icon: HiDocumentText,
    title: "Documentation-focused execution",
    short: "Documentation",
    body:
      "Commercial and shipping documentation receive the same attention as the physical material — because at destination, they are the material.",
  },
  {
    icon: HiUserGroup,
    title: "Direct accountability",
    short: "Direct accountability",
    body:
      "Our customers and suppliers communicate directly with the people responsible for their transaction — no handovers, no filters.",
  },
  {
    icon: HiRefresh,
    title: "Built for repeat business",
    short: "Repeat business",
    body:
      "We measure our relationships over multiple transactions, not a single shipment. Every order is delivered with the next one in mind.",
  },
];

/**
 * Why Venturescape — chip filter + expanded detail.
 *
 * A row of eight title chips sits at the top; the active chip expands into
 * a large detail panel below with icon, title and full body. All eight are
 * always visible for scan, one is expanded for read — compact and
 * interactive without scroll-jacking.
 */
export default function VenturescapeWhyFeature() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = points[activeIndex];
  const ActiveIcon = active.icon;

  // Panel gesture state: while the user is actively swiping/wheeling on
  // the detail panel, pause auto-cycle so their gesture wins.
  const [interacting, setInteracting] = useState(false);

  // Auto-cycle through the eight commitments every ~2.2s so the section
  // reads on its own. Pauses while the user is interacting (hovering).
  useEffect(() => {
    if (interacting) return;
    const id = window.setTimeout(() => {
      setActiveIndex((i) => (i + 1) % points.length);
    }, 2200);
    return () => window.clearTimeout(id);
  }, [activeIndex, interacting]);

  return (
    <section
      id="why-venturescape"
      className="flex w-full flex-col items-center px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#91121D]">
          A Trading Partner With Something to Protect: Your Confidence.
        </p>
        <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#0C2448] md:text-5xl">
          Why Venturescape
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#0C2448]/72 md:text-lg">
          Eight commitments, one relationship.
        </p>
      </div>

      <div className="w-full max-w-[1400px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[2040px] [@media(min-width:2400px)]:max-w-[2280px]">
        {/* Mobile / tablet: single detail card, dots on left, swipe / wheel
            to step. */}
        <div
          className="relative min-h-[380px] overflow-hidden rounded-3xl bg-white p-8 pl-10 shadow-[0_20px_60px_rgba(12,36,72,0.08)] ring-1 ring-[#0C2448]/8 select-none sm:min-h-[420px] md:p-12 md:pl-14 lg:hidden"
          onMouseEnter={() => setInteracting(true)}
          onMouseLeave={() => setInteracting(false)}
        >
          <div className="absolute left-3 top-1/2 flex -translate-y-1/2 flex-col gap-2.5 md:left-5">
            {points.map((_, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Show commitment ${i + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-full transition-all ${
                    isActive
                      ? "h-6 w-1.5 bg-[#BB7D3E]"
                      : "h-1.5 w-1.5 bg-[#0C2448]/15 hover:bg-[#0C2448]/35"
                  }`}
                />
              );
            })}
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 -bottom-6 text-[#0C2448]/[0.04]"
          >
            <ActiveIcon className="h-56 w-56 md:h-72 md:w-72" />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start md:gap-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#0C2448]/10 bg-white shadow-sm md:h-20 md:w-20">
                  <ActiveIcon className="h-8 w-8 text-[#BB7D3E] md:h-10 md:w-10" />
                </div>
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BB7D3E]">
                    Commitment {String(activeIndex + 1).padStart(2, "0")} of{" "}
                    {String(points.length).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#0C2448] md:text-4xl">
                    {active.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-[#0C2448]/72 md:text-lg md:leading-9">
                    {active.body}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop: split — numbered list on the left, active detail card
            on the right. Balanced two-column layout matching the rest of
            the site. */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10 xl:gap-14">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0C2448]/60">
              Eight commitments
            </p>
            <ul className="space-y-1">
              {points.map((p, i) => {
                const isActive = i === activeIndex;
                return (
                  <li key={p.title}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      className={`group relative flex w-full items-baseline gap-4 rounded-2xl px-4 py-3 text-left transition-all ${
                        isActive
                          ? "bg-[#0C2448]/[0.045]"
                          : "hover:bg-[#0C2448]/[0.025]"
                      }`}
                    >
                      <span
                        className={`w-9 shrink-0 text-xs font-semibold tracking-[0.14em] transition-colors ${
                          isActive ? "text-[#BB7D3E]" : "text-[#0C2448]/40"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-[15px] font-semibold tracking-[-0.01em] transition-colors ${
                          isActive ? "text-[#0C2448]" : "text-[#0C2448]/55"
                        }`}
                      >
                        {p.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className="relative flex min-h-[440px] flex-col overflow-hidden rounded-3xl bg-white p-10 shadow-[0_20px_60px_rgba(12,36,72,0.10)] ring-1 ring-[#0C2448]/8 select-none xl:p-14"
            onMouseEnter={() => setInteracting(true)}
            onMouseLeave={() => setInteracting(false)}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-8 -right-6 select-none text-[180px] font-bold leading-none text-[#0C2448]/[0.05] xl:text-[220px]"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -bottom-6 text-[#0C2448]/[0.04]"
            >
              <ActiveIcon className="h-72 w-72" />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative flex-1"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#0C2448]/10 bg-white shadow-sm">
                  <ActiveIcon className="h-7 w-7 text-[#BB7D3E]" />
                </div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BB7D3E]">
                  Commitment {String(activeIndex + 1).padStart(2, "0")} of{" "}
                  {String(points.length).padStart(2, "0")}
                </p>
                <h3 className="text-3xl font-semibold tracking-[-0.02em] text-[#0C2448] xl:text-4xl">
                  {active.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[#0C2448]/72 xl:text-lg xl:leading-9">
                  {active.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
