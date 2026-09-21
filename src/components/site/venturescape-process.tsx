import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/components/site/venturescape-data";
import { SectionIntro } from "@/components/site/venturescape-shared";
import MobileCarousel from "@/components/site/mobile-carousel";

/**
 * How We Work — scroll-driven card stack.
 *
 * Desktop: the section pins for the length of the story. The left column
 * shows a giant step number that flips 01 → 06 as you scroll; the right
 * column stacks six cards, each sliding up from below over the previous one
 * on a cubic-bezier ease so it feels smooth rather than mechanical.
 *
 * Mobile: swipeable carousel — a pinned scroll-jack is a poor phone
 * experience.
 */
const EASE = [0.22, 1, 0.36, 1] as const; // easeOutQuint-ish

function StepCard({
  step,
  i,
}: {
  step: (typeof processSteps)[number];
  i: number;
}) {
  const Icon = step.icon;
  return (
    <article className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white p-8 shadow-[0_6px_20px_rgba(12,36,72,0.05)] ring-1 ring-[#0C2448]/8 md:p-10 md:shadow-[0_20px_60px_rgba(12,36,72,0.10)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-6 -right-4 select-none text-[140px] font-bold leading-none text-[#0C2448]/[0.05] md:text-[180px]"
      >
        {String(i + 1).padStart(2, "0")}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 -bottom-6 text-[#0C2448]/[0.04]"
      >
        <Icon className="h-40 w-40 md:h-52 md:w-52" />
      </div>
      <div className="relative">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#0C2448]/10 bg-white shadow-sm">
          <Icon className="h-6 w-6 text-[#BB7D3E]" />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#BB7D3E]">
          Step {String(i + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[#0C2448] md:text-3xl">
          {step.title}
        </h3>
        <p className="mt-4 max-w-lg text-base leading-7 text-[#0C2448]/72 md:text-lg md:leading-8">
          {step.body}
        </p>
      </div>
    </article>
  );
}

/**
 * One stacked card. Uses its slice of scrollYProgress to drive a smooth
 * translate/opacity — it lifts from below the frame, rests on top of the
 * previous card, then stays put while the next one covers it.
 */
function StackedCard({
  step,
  i,
  total,
  scrollYProgress,
}: {
  step: (typeof processSteps)[number];
  i: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Each card owns a 1/total slice of the scroll timeline.
  const slice = 1 / total;
  const start = i * slice;
  const enterEnd = start + slice * 0.55; // finish coming in ~55% into slice

  // y: from 100% (fully below the frame) to 0. First card starts at 0.
  // Card is fully opaque throughout — it slides up and COVERS the previous
  // one instead of cross-fading (a cross-fade shows both texts at once).
  const y = useTransform(
    scrollYProgress,
    [start, enterEnd],
    i === 0 ? ["0%", "0%"] : ["100%", "0%"],
    { ease: (t: number) => t }
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{ y, zIndex: i + 1 }}
    >
      <StepCard step={step} i={i} />
    </motion.div>
  );
}

export default function VenturescapeProcess() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll progress across the whole tall wrapper, 0 → 1.
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Big-number swap: which step's slice is the viewport currently in?
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const i = Math.min(
        processSteps.length - 1,
        Math.max(0, Math.floor(v * processSteps.length))
      );
      setActiveIndex(i);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      id="how-we-work"
      className="relative z-20 overflow-clip bg-[#FBF8F2]"
    >
      {/* Mobile: header + swipeable carousel (no scroll-pin). */}
      <div className="mx-auto max-w-[1400px] px-5 pt-20 md:hidden">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex max-w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-[#BB7D3E]/25 bg-white/80 px-3 py-1 text-[8px] font-medium uppercase tracking-[0.08em] text-[#91121D] shadow-[0_1px_0_rgba(255,255,255,0.75),0_4px_14px_rgba(12,36,72,0.05)]">
            A Clear Route from Requirement to Shipment.
          </span>
          <h2 className="max-w-3xl text-3xl leading-[0.98] font-semibold tracking-[-0.04em] text-[#0C2448]">
            How We Work
          </h2>
          <p className="max-w-2xl text-base leading-7 text-[#0C2448]/72">
            Six steps, one relationship. Each stage reduces ambiguity and keeps every party aligned on what happens next.
          </p>
        </div>
        <div className="mt-10 pb-20">
          <MobileCarousel
            className="w-full"
            ariaLabel="How we work carousel"
            items={processSteps.map((step, i) => (
              <StepCard key={step.title} step={step} i={i} />
            ))}
          />
        </div>
      </div>

      {/* Desktop: header pinned inside the sticky area with the stacked
          cards — so the section reads as one unit while pinned instead of
          leaving a huge gap between the title and the story. */}
      <div
        ref={wrapperRef}
        className="relative hidden overflow-clip md:block"
        style={{ height: `${processSteps.length * 90}vh` }}
      >
        {/* Sticky pins below the fixed nav (~96px). Height clipped to
            match, so justify-center centres against the VISIBLE viewport
            (not the region hidden behind the nav). */}
        <div className="sticky top-[96px] flex h-[calc(100vh-96px)] flex-col justify-center gap-4 py-4 xl:gap-6 xl:py-8">
          {/* Compact section header */}
          <div className="mx-auto w-full max-w-[1400px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[2040px] [@media(min-width:2400px)]:max-w-[2280px] px-5 md:px-8 lg:px-12 2xl:px-20 text-center">
            <span className="inline-flex max-w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-[#BB7D3E]/25 bg-white/80 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#91121D] shadow-[0_1px_0_rgba(255,255,255,0.75),0_4px_14px_rgba(12,36,72,0.05)]">
              A Clear Route from Requirement to Shipment.
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#0C2448] md:text-4xl xl:text-5xl">
              How We Work
            </h2>
            <p className="mx-auto mt-3 max-w-4xl text-sm leading-6 text-[#0C2448]/72 md:text-base">
              Six steps, one relationship. Each stage reduces ambiguity and keeps every party aligned on what happens next.
            </p>
          </div>

          <div className="mx-auto grid w-full max-w-[1400px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[2040px] [@media(min-width:2400px)]:max-w-[2280px] grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-10 px-5 md:px-8 lg:px-12 xl:gap-14 2xl:px-20">
            {/* Left: step list */}
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0C2448]/60">
                Six coordinated steps
              </p>
              <ol className="space-y-1">
                {processSteps.map((step, i) => {
                  const isActive = i === activeIndex;
                  const isPast = i < activeIndex;
                  return (
                    <li key={step.title}>
                      <div
                        className={`relative flex items-baseline gap-4 rounded-2xl px-4 py-3 transition-all ${
                          isActive ? "bg-[#0C2448]/[0.045]" : ""
                        }`}
                      >
                        <span
                          className={`w-9 shrink-0 text-xs font-semibold tracking-[0.14em] transition-colors ${
                            isActive
                              ? "text-[#BB7D3E]"
                              : isPast
                              ? "text-[#0C2448]/40"
                              : "text-[#0C2448]/25"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`text-[15px] font-semibold tracking-[-0.01em] transition-colors ${
                            isActive
                              ? "text-[#0C2448]"
                              : isPast
                              ? "text-[#0C2448]/55"
                              : "text-[#0C2448]/40"
                          }`}
                        >
                          {step.title}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ol>

              <p className="mt-6 max-w-md text-sm leading-6 text-[#0C2448]/55">
                Scroll to see how a single relationship carries the transaction
                from requirement to shipment.
              </p>
            </div>

            {/* Right: active step card stack with big background number */}
            <div className="relative h-[380px] overflow-hidden rounded-3xl xl:h-[440px]">
              {processSteps.map((step, i) => (
                <StackedCard
                  key={step.title}
                  step={step}
                  i={i}
                  total={processSteps.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
