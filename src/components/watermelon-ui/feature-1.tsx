import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pause, Play } from "lucide-react";
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
  // Direction of the last change — drives the slide direction of the
  // animated card (+1 = right→in, -1 = left→in).
  const [direction, setDirection] = useState(1);
  // Persistent play/pause state. Auto-cycle only runs while playing;
  // any manual swipe sets it to paused until the user hits Play.
  const [playing, setPlaying] = useState(true);
  const active = points[activeIndex];
  const ActiveIcon = active.icon;

  // Auto-cycle every ~2.6s while playing. Slightly slower than before so
  // there's time to read.
  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(() => {
      setDirection(1);
      setActiveIndex((i) => (i + 1) % points.length);
    }, 2600);
    return () => window.clearTimeout(id);
  }, [activeIndex, playing]);

  const goToIndex = (i: number, pause = true) => {
    setDirection(i >= activeIndex ? 1 : -1);
    setActiveIndex((i + points.length) % points.length);
    if (pause) setPlaying(false);
  };

  // Touch swipe (horizontal). A short drag > 48px flips to the next or
  // previous commitment and pauses the auto-cycle.
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 48) {
      goToIndex(activeIndex + (dx < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  };

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
        {/* Mobile / tablet: single detail card. Swipe left / right to step
            through commitments — any manual swipe pauses the auto-cycle
            until the Play button is tapped again. Dots sit BELOW the
            card, play/pause pill sits in the top-right corner. */}
        <div className="lg:hidden">
          <div
            className="relative flex h-[420px] flex-col justify-center overflow-hidden rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(12,36,72,0.08)] ring-1 ring-[#0C2448]/8 select-none [touch-action:pan-y] sm:h-[460px] md:h-[500px] md:p-12"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
          >
            {/* Play / pause toggle in top-right */}
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause auto-play" : "Resume auto-play"}
              aria-pressed={!playing}
              className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#0C2448] text-white shadow-[0_6px_16px_rgba(12,36,72,0.25)] transition-transform hover:scale-105 active:scale-95 md:right-5 md:top-5 md:h-9 md:w-9"
            >
              {playing ? (
                <Pause className="h-3.5 w-3.5" fill="currentColor" />
              ) : (
                <Play className="ml-0.5 h-3.5 w-3.5" fill="currentColor" />
              )}
            </button>

            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -bottom-6 text-[#0C2448]/[0.04]"
            >
              <ActiveIcon className="h-56 w-56 md:h-72 md:w-72" />
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
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start md:gap-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#0C2448]/10 bg-white shadow-sm md:h-20 md:w-20">
                    <ActiveIcon className="h-8 w-8 text-[#BB7D3E] md:h-10 md:w-10" />
                  </div>
                  <div>
                    <p className="mb-2 pr-12 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BB7D3E]">
                      Commitment {String(activeIndex + 1).padStart(2, "0")} of{" "}
                      {String(points.length).padStart(2, "0")}
                    </p>
                    <h3 className="pr-12 text-2xl font-semibold tracking-[-0.02em] text-[#0C2448] md:text-4xl">
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

          {/* Progress dots BELOW the card */}
          <div className="mt-5 flex items-center justify-center gap-1.5">
            {points.map((_, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToIndex(i)}
                  aria-label={`Show commitment ${i + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`h-1.5 rounded-full transition-all ${
                    isActive
                      ? "w-6 bg-[#BB7D3E]"
                      : "w-1.5 bg-[#0C2448]/20 hover:bg-[#0C2448]/40"
                  }`}
                />
              );
            })}
          </div>
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
                      onClick={() => goToIndex(i)}
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

          <div className="relative flex min-h-[440px] flex-col overflow-hidden rounded-3xl bg-white p-10 shadow-[0_20px_60px_rgba(12,36,72,0.10)] ring-1 ring-[#0C2448]/8 select-none xl:p-14">
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

            {/* Desktop play/pause */}
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause auto-play" : "Resume auto-play"}
              aria-pressed={!playing}
              className="absolute right-5 bottom-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#0C2448] text-white shadow-[0_6px_16px_rgba(12,36,72,0.25)] transition-transform hover:scale-105 active:scale-95"
            >
              {playing ? (
                <Pause className="h-3.5 w-3.5" fill="currentColor" />
              ) : (
                <Play className="ml-0.5 h-3.5 w-3.5" fill="currentColor" />
              )}
            </button>

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
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
