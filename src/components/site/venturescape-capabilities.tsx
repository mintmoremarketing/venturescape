import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { capabilityItems } from "@/components/site/venturescape-data";
import { SectionIntro } from "@/components/site/venturescape-shared";
import MobileCarousel from "@/components/site/mobile-carousel";
import { PremiumCard } from "@/components/site/venturescape-shared";

/**
 * Our Capabilities — sticky-scroll accordion.
 *
 * Desktop: two-column layout. The left column is a sticky numbered list of
 * capability titles; the right column stacks six tall panels, one per item.
 * As each panel enters the viewport, its title lights up in the list and the
 * body content on the right renders large. Clicking a title jumps to that
 * panel. It replaces the plain 3×2 grid with something that reads as an
 * editorial reveal instead of another card matrix.
 *
 * Mobile: keeps the swipeable carousel — sticky scroll behaves poorly on a
 * phone-sized viewport.
 */
export default function VenturescapeCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    panelRefs.current.forEach((el, i) => {
      if (!el) return;
      // Trigger when the panel's center crosses the middle of the viewport.
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveIndex(i);
          });
        },
        {
          root: null,
          // Narrow band at the vertical centre so only one panel is ever
          // "active" as you scroll.
          rootMargin: "-45% 0px -45% 0px",
          threshold: 0,
        }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const goTo = (i: number) => {
    const el = panelRefs.current[i];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const ActiveIcon = capabilityItems[activeIndex].icon;

  return (
    <section
      id="capabilities"
      className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24"
    >
      <SectionIntro
        eyebrow="From Requirement to Shipment."
        title="Our Capabilities"
        description="International trading requires considerably more than matching a buyer with a seller. A transaction may involve product specifications, negotiations, documentation, banking, inspection, containers, ports, vessels and multiple organisations across different jurisdictions. Venturescape coordinates these moving parts through one commercial relationship."
        align="center"
      />

      {/* Mobile: keep the swipeable carousel — sticky scroll is a desktop
          interaction and does not translate to a phone viewport. */}
      <MobileCarousel
        className="mt-10 w-full lg:hidden"
        ariaLabel="Capabilities carousel"
        items={capabilityItems.map((item) => (
          <PremiumCard key={item.title} {...item} />
        ))}
      />

      {/* Desktop: sticky-scroll accordion */}
      <div className="mt-16 hidden lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        {/* Left: sticky numbered nav */}
        <div className="relative">
          <div className="sticky top-28">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0C2448]/60">
              Six coordinated capabilities
            </p>
            <ul className="space-y-1">
              {capabilityItems.map((item, i) => {
                const isActive = i === activeIndex;
                return (
                  <li key={item.title}>
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      className={`group relative flex w-full items-baseline gap-4 rounded-2xl py-3 pr-4 pl-4 text-left transition-all ${
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
                        className={`text-lg font-semibold tracking-[-0.01em] transition-colors ${
                          isActive ? "text-[#0C2448]" : "text-[#0C2448]/55"
                        }`}
                      >
                        {item.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right: stacked panels driven by scroll */}
        <div className="relative">
          {/* Sticky detail card — this is what visually reveals; the panels
              below are height spacers that drive the observer. */}
          <div className="sticky top-28">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative flex min-h-[380px] flex-col overflow-hidden rounded-3xl bg-white p-10 shadow-[0_20px_60px_rgba(12,36,72,0.10)] ring-1 ring-[#0C2448]/8"
            >
              {/* Big ghost number in the background */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-6 -right-4 select-none text-[160px] font-bold leading-none text-[#0C2448]/[0.05]"
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </div>

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#0C2448]/10 bg-white shadow-sm">
                  <ActiveIcon className="h-7 w-7 text-[#BB7D3E]" />
                </div>
                {capabilityItems[activeIndex].pill && (
                  <span className="mb-3 inline-block rounded-full bg-[#0C2448]/[0.05] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0C2448]/72">
                    {capabilityItems[activeIndex].pill}
                  </span>
                )}
                <h3 className="text-3xl font-semibold tracking-[-0.02em] text-[#0C2448]">
                  {capabilityItems[activeIndex].title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#0C2448]/72 md:text-lg md:leading-8">
                  {capabilityItems[activeIndex].body}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Invisible scroll drivers — each panel is a tall slot the
              observer watches to know which capability is "active". */}
          <div aria-hidden>
            {capabilityItems.map((item, i) => (
              <div
                key={item.title}
                ref={(el) => {
                  panelRefs.current[i] = el;
                }}
                className="h-[80vh]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
