import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { capabilityItems } from "@/components/site/venturescape-data";
import { SectionIntro } from "@/components/site/venturescape-shared";
import MobileCarousel from "@/components/site/mobile-carousel";
import { PremiumCard } from "@/components/site/venturescape-shared";

/**
 * Our Capabilities — sticky-scroll accordion.
 *
 * Desktop: a tall wrapper pins a two-column layout for the whole length of
 * the story. Scroll progress across the wrapper drives which of the six
 * capabilities is active — the left nav highlights it and the right card
 * swaps its body content. The wrapper's explicit height guarantees the
 * section stays pinned for all six items instead of releasing early after
 * a couple.
 *
 * Mobile: keeps the swipeable carousel — sticky scroll behaves poorly on a
 * phone-sized viewport.
 */
export default function VenturescapeCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Scroll progress across the tall wrapper, 0 → 1.
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Drive the active index from the progress. Six equal slices; last slice
  // clamps to N-1 so the final item stays selected while the section
  // finishes releasing.
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const i = Math.min(
        capabilityItems.length - 1,
        Math.max(0, Math.floor(v * capabilityItems.length))
      );
      setActiveIndex(i);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const goTo = (i: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    // Land in the middle of item i's slice so the observer picks it as
    // active.
    const slice = 1 / capabilityItems.length;
    const targetProgress = slice * i + slice * 0.5;
    const total = wrapper.offsetHeight - window.innerHeight;
    const top = wrapper.offsetTop + targetProgress * total;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const ActiveIcon = capabilityItems[activeIndex].icon;

  return (
    <section id="capabilities">
      {/* Mobile: section header + carousel (no scroll-pin). */}
      <div className="mx-auto max-w-[1400px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[2040px] [@media(min-width:2400px)]:max-w-[2280px] px-5 pt-20 md:px-8 md:pt-24 lg:hidden">
        <SectionIntro
          eyebrow="From Requirement to Shipment."
          title="Our Capabilities"
          description="International trading requires considerably more than matching a buyer with a seller. A transaction may involve product specifications, negotiations, documentation, banking, inspection, containers, ports, vessels and multiple organisations across different jurisdictions. Venturescape coordinates these moving parts through one commercial relationship."
          align="center"
        />
        <div className="mt-10 pb-20">
          <MobileCarousel
            className="w-full"
            ariaLabel="Capabilities carousel"
            items={capabilityItems.map((item) => (
              <PremiumCard key={item.title} {...item} />
            ))}
          />
        </div>
      </div>

      {/* Desktop: tall wrapper pins the header + two-column layout together
          for the whole length of the story, so nothing floats or lags
          behind the pinned area. */}
      <div
        ref={wrapperRef}
        className="relative hidden lg:block"
        style={{ height: `${capabilityItems.length * 55}vh` }}
      >
        {/* Sticky pins below the fixed nav (~96px). Height clipped to
            match, so justify-center centres against the VISIBLE viewport
            (not the region hidden behind the nav). */}
        <div className="sticky top-[96px] flex h-[calc(100vh-96px)] flex-col justify-center gap-6 py-10 xl:gap-8 xl:py-14">
          {/* Compact section header pinned above the story */}
          <div className="mx-auto max-w-[1400px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[2040px] [@media(min-width:2400px)]:max-w-[2280px] w-full px-5 md:px-8 lg:px-12 2xl:px-20 text-center">
            <span className="inline-flex max-w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-[#BB7D3E]/25 bg-white/80 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#91121D] shadow-[0_1px_0_rgba(255,255,255,0.75),0_4px_14px_rgba(12,36,72,0.05)]">
              From Requirement to Shipment.
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#0C2448] md:text-4xl xl:text-5xl">
              Our Capabilities
            </h2>
            <p className="mx-auto mt-3 max-w-4xl text-sm leading-6 text-[#0C2448]/72 md:text-base">
              International trading requires considerably more than matching a buyer with a seller. Venturescape coordinates specifications, documentation, banking, logistics and multiple parties through one commercial relationship.
            </p>
          </div>

          <div className="mx-auto grid w-full max-w-[1400px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[2040px] [@media(min-width:2400px)]:max-w-[2280px] grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-14 px-5 md:px-8 lg:px-12 2xl:px-20">
            {/* Left: numbered nav */}
            <div>
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

            {/* Right: detail card */}
            <div>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative flex min-h-[380px] flex-col overflow-hidden rounded-3xl bg-white p-10 shadow-[0_20px_60px_rgba(12,36,72,0.10)] ring-1 ring-[#0C2448]/8"
              >
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
          </div>
        </div>
      </div>
    </section>
  );
}
