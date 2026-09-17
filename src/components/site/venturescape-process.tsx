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
    <article className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(12,36,72,0.10)] ring-1 ring-[#0C2448]/8 md:p-10">
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
    <section id="how-we-work">
      <div className="mx-auto max-w-6xl px-5 pt-20 md:px-8 md:pt-24">
        <SectionIntro
          eyebrow="A Clear Route from Requirement to Shipment."
          title="How We Work"
          description="Six steps, one relationship. Each stage reduces ambiguity and keeps every party aligned on what happens next."
          align="center"
        />
      </div>

      {/* Mobile: swipeable carousel — a pinned scroll-jack behaves poorly on
          phones. */}
      <div className="mx-auto mt-10 max-w-6xl px-5 pb-20 md:hidden md:pb-24">
        <MobileCarousel
          className="w-full"
          ariaLabel="How we work carousel"
          items={processSteps.map((step, i) => (
            <StepCard key={step.title} step={step} i={i} />
          ))}
        />
      </div>

      {/* Desktop: scroll-driven card stack. Wrapper is tall so the sticky
          inner pins for the length of the story; cards animate on scroll. */}
      <div
        ref={wrapperRef}
        className="relative hidden md:block"
        style={{ height: `${processSteps.length * 90}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] items-center gap-10 px-5 md:px-8">
            {/* Pinned number */}
            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0C2448]/60">
                Step
              </p>
              <div className="relative mt-2 h-[220px] overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="text-[200px] font-bold leading-none tracking-[-0.04em] text-[#0C2448]"
                  >
                    {String(activeIndex + 1).padStart(2, "0")}
                  </motion.div>
                </AnimatePresence>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-6 text-[#0C2448]/60">
                Scroll to see how a single relationship carries the transaction
                from requirement to shipment.
              </p>

              {/* Progress dots */}
              <div className="mt-6 flex gap-1.5">
                {processSteps.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === activeIndex
                        ? "w-8 bg-[#BB7D3E]"
                        : i < activeIndex
                        ? "w-1.5 bg-[#0C2448]/40"
                        : "w-1.5 bg-[#0C2448]/15"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Stacked cards. overflow-hidden clips the not-yet-active cards
                sitting below the frame so nothing peeks under the current
                card. */}
            <div className="relative h-[440px] overflow-hidden rounded-3xl">
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
