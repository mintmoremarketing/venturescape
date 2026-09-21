import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { capabilityItems } from "@/components/site/venturescape-data";

/**
 * Our Capabilities — sticky-scroll accordion on all breakpoints.
 *
 * A tall wrapper pins the section for its full length. Scroll progress
 * drives which of the six capabilities is active. On desktop the layout
 * is a two-column split (numbered list + detail card); on mobile it
 * stacks into a compact scroll-jacked panel with a progress bar and the
 * active detail card.
 */
export default function VenturescapeCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Direction of the last index change — +1 if we advanced forward
  // (scrolling down), -1 if we went back (scrolling up). Drives which
  // side the animated card slides in from.
  const [direction, setDirection] = useState(1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const prevIndex = useRef(0);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const i = Math.min(
        capabilityItems.length - 1,
        Math.max(0, Math.floor(v * capabilityItems.length)),
      );
      if (i !== prevIndex.current) {
        setDirection(i > prevIndex.current ? 1 : -1);
        prevIndex.current = i;
        setActiveIndex(i);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const goTo = (i: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    // Preset the direction so the click-driven slide matches the jump.
    setDirection(i >= prevIndex.current ? 1 : -1);
    const slice = 1 / capabilityItems.length;
    const targetProgress = slice * i + slice * 0.5;
    const total = wrapper.offsetHeight - window.innerHeight;
    const top = wrapper.offsetTop + targetProgress * total;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const ActiveIcon = capabilityItems[activeIndex].icon;

  return (
    <section id="capabilities" className="relative overflow-clip">
      <div
        ref={wrapperRef}
        className="relative overflow-clip"
        style={{ height: `${capabilityItems.length * 70}vh` }}
      >
        {/* Sticky pins below the fixed nav; height clipped to the visible
            viewport so justify-center centres against what the user sees. */}
        <div className="sticky top-[72px] flex min-h-[calc(100vh-72px)] flex-col justify-center gap-5 py-6 md:top-[96px] md:min-h-[calc(100vh-96px)] md:gap-6 md:py-10 xl:gap-8 xl:py-14">
          {/* Compact section header pinned above the story */}
          <div className="mx-auto w-full max-w-[1400px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[2040px] [@media(min-width:2400px)]:max-w-[2280px] px-5 text-center md:px-8 lg:px-12 2xl:px-20">
            <span className="inline-flex max-w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-[#BB7D3E]/25 bg-white/80 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-[#91121D] shadow-[0_1px_0_rgba(255,255,255,0.75),0_4px_14px_rgba(12,36,72,0.05)] sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.16em]">
              From Requirement to Shipment.
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#0C2448] sm:text-3xl md:text-4xl xl:text-5xl">
              Our Capabilities
            </h2>
            <p className="mx-auto mt-2 hidden max-w-4xl text-sm leading-6 text-[#0C2448]/72 md:mt-3 md:block md:text-base">
              International trading requires considerably more than matching a
              buyer with a seller. Venturescape coordinates specifications,
              documentation, banking, logistics and multiple parties through
              one commercial relationship.
            </p>
          </div>

          {/* Mobile progress bar — thin line filling from left as user
              scrolls through the six items. */}
          <div className="mx-auto w-full max-w-[420px] px-5 lg:hidden">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0C2448]/60">
              <span className="text-[#BB7D3E]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-[#0C2448]/10">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-[#BB7D3E]"
                  style={{
                    width: `${((activeIndex + 1) / capabilityItems.length) * 100}%`,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <span>
                {String(capabilityItems.length).padStart(2, "0")}
              </span>
            </div>
            {/* Tap-through dots so users can jump. */}
            <div className="mt-3 flex items-center justify-center gap-1.5">
              {capabilityItems.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show capability ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIndex
                      ? "w-6 bg-[#BB7D3E]"
                      : "w-1.5 bg-[#0C2448]/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="mx-auto grid w-full max-w-[1400px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[2040px] [@media(min-width:2400px)]:max-w-[2280px] gap-6 px-5 md:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:px-12 2xl:px-20">
            {/* Desktop-only numbered nav */}
            <div className="hidden lg:block">
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

            {/* Detail card. overflow-hidden on the outer shell so the
                incoming card can slide in from the right without spilling. */}
            {/* Fixed height so the card is uniform across every capability
                regardless of body length — no jumping between slides. */}
            <div className="relative h-[320px] overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(12,36,72,0.10)] ring-1 ring-[#0C2448]/8 sm:h-[360px] lg:h-[400px]">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-6 -right-4 z-0 select-none text-[120px] font-bold leading-none text-[#0C2448]/[0.05] sm:text-[160px]"
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </div>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={{
                    enter: (dir: number) => ({
                      opacity: 0,
                      x: dir > 0 ? 60 : -60,
                    }),
                    center: { opacity: 1, x: 0 },
                    exit: (dir: number) => ({
                      opacity: 0,
                      x: dir > 0 ? -40 : 40,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 flex h-full flex-col p-6 sm:p-8 lg:p-10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#0C2448]/10 bg-white shadow-sm sm:mb-6 sm:h-14 sm:w-14">
                    <ActiveIcon className="h-6 w-6 text-[#BB7D3E] sm:h-7 sm:w-7" />
                  </div>
                  {capabilityItems[activeIndex].pill && (
                    <span className="mb-2 inline-block w-fit rounded-full bg-[#0C2448]/[0.05] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0C2448]/72 sm:mb-3">
                      {capabilityItems[activeIndex].pill}
                    </span>
                  )}
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#0C2448] sm:text-3xl">
                    {capabilityItems[activeIndex].title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#0C2448]/72 sm:mt-4 sm:text-base md:text-lg md:leading-8">
                    {capabilityItems[activeIndex].body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
