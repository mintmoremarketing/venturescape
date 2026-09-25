import { motion, useReducedMotion } from "framer-motion";
import { processSteps } from "@/components/site/venturescape-data";

/** Phones & tablets: the same route, unrolled vertically — node, arrow, node. */
function MobileRouteStep({ step, i }: { step: (typeof processSteps)[number]; i: number }) {
  const reduce = useReducedMotion();
  const Icon = step.icon;
  const isLast = i === processSteps.length - 1;

  return (
    <motion.li
      className="relative flex gap-4"
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Rail: numbered node, then an arrow down to the next step */}
      <div className="flex w-11 shrink-0 flex-col items-center">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[13px] font-bold tracking-wider ${
            isLast
              ? "bg-[#0C2448] text-white"
              : "bg-white text-[#BB7D3E] shadow-sm ring-1 ring-[#0C2448]/15"
          }`}
        >
          {String(i + 1).padStart(2, "0")}
        </div>
        {!isLast && (
          <div aria-hidden className="flex flex-1 flex-col items-center py-1.5">
            <motion.div
              className="w-0.5 flex-1 origin-top rounded-full"
              style={{
                backgroundImage: "linear-gradient(to bottom, #BB7D3E 0 5px, transparent 5px 11px)",
                backgroundSize: "2px 11px",
              }}
              initial={reduce ? false : { scaleY: 0 }}
              whileInView={
                reduce
                  ? undefined
                  : { scaleY: 1, backgroundPositionY: ["0px", "11px"] }
              }
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                scaleY: { duration: 0.5, delay: 0.2, ease: "easeOut" },
                backgroundPositionY: { repeat: Infinity, ease: "linear", duration: 0.9 },
              }}
            />
            <svg viewBox="0 0 12 8" className="mt-0.5 h-2 w-3 text-[#BB7D3E]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 1 L6 6.5 L11 1" />
            </svg>
          </div>
        )}
      </div>

      {/* Card */}
      <article
        className={`mb-5 flex-1 rounded-2xl bg-white p-5 ring-1 shadow-[0_6px_20px_rgba(12,36,72,0.05)] ${
          isLast ? "ring-[#BB7D3E]/30" : "ring-[#0C2448]/8"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#0C2448]/10 bg-[#0C2448]/[0.02]">
            <Icon className="h-[18px] w-[18px] text-[#BB7D3E]" />
          </div>
          <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#0C2448]">{step.title}</h3>
          {(i === 0 || isLast) && (
            <span className="ml-auto whitespace-nowrap rounded-full bg-[#0C2448] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white">
              {i === 0 ? "Start" : "Finish"}
            </span>
          )}
        </div>
        <p className="mt-3 text-[15px] leading-6 text-[#0C2448]/72">{step.body}</p>
      </article>
    </motion.li>
  );
}

type Direction = "right" | "down" | "left";

// Grid placement for the snake: top row runs left→right, bottom row right→left.
const placement = [
  { col: 1, row: 1 },
  { col: 2, row: 1 },
  { col: 3, row: 1 },
  { col: 3, row: 2 },
  { col: 2, row: 2 },
  { col: 1, row: 2 },
];
const exitDirection: (Direction | null)[] = ["right", "right", "down", "left", "left", null];

function RouteArrow({ direction, delay }: { direction: Direction; delay: number }) {
  const reduce = useReducedMotion();
  const vertical = direction === "down";
  // Arrows sit in the grid gap (4rem horizontally, 5rem vertically) next to the source card.
  const position =
    direction === "right"
      ? "top-1/2 -right-16 h-6 w-16 -translate-y-1/2"
      : direction === "left"
        ? "top-1/2 -left-16 h-6 w-16 -translate-y-1/2 rotate-180"
        : "left-1/2 -bottom-20 h-20 w-6 -translate-x-1/2";
  const line = vertical ? "M12 8 V64" : "M6 12 H50";
  const head = vertical ? "M5 60 L12 70 L19 60" : "M46 5 L57 12 L46 19";

  return (
    <svg
      aria-hidden
      viewBox={vertical ? "0 0 24 80" : "0 0 64 24"}
      className={`pointer-events-none absolute ${position} overflow-visible text-[#0C2448]/35 transition-colors duration-300 group-hover:text-[#BB7D3E]`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d={line}
        strokeWidth={2}
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
      />
      {/* Flowing dashes — goods in transit */}
      {!reduce && (
        <motion.path
          d={line}
          strokeWidth={2}
          className="text-[#BB7D3E]"
          stroke="currentColor"
          strokeDasharray="3 9"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, strokeDashoffset: [0, -24] }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            opacity: { delay: delay + 0.5, duration: 0.3 },
            strokeDashoffset: { repeat: Infinity, ease: "linear", duration: 1.2 },
          }}
        />
      )}
      <motion.path
        d={head}
        strokeWidth={2.25}
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.2, delay: delay + 0.45 }}
      />
    </svg>
  );
}

function RouteStep({ step, i }: { step: (typeof processSteps)[number]; i: number }) {
  const reduce = useReducedMotion();
  const Icon = step.icon;
  const { col, row } = placement[i];
  const exit = exitDirection[i];
  const isFirst = i === 0;
  const isLast = i === processSteps.length - 1;
  const delay = i * 0.18;

  return (
    <motion.li
      className="group relative flex"
      style={{ gridColumn: col, gridRow: row }}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <article
        className={`relative flex w-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(12,36,72,0.04)] ring-1 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_44px_rgba(12,36,72,0.10)] group-hover:ring-[#BB7D3E]/40 ${
          isLast ? "ring-[#BB7D3E]/30" : "ring-[#0C2448]/8"
        }`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-5 -right-2 select-none text-[112px] font-bold leading-none text-[#0C2448]/[0.045] transition-colors duration-300 group-hover:text-[#BB7D3E]/[0.10]"
        >
          {String(i + 1).padStart(2, "0")}
        </div>

        <div className="relative flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#0C2448]/10 bg-[#0C2448]/[0.02] transition-colors duration-300 group-hover:border-[#BB7D3E]/30 group-hover:bg-[#BB7D3E]/[0.06]">
            <Icon className="h-6 w-6 text-[#BB7D3E]" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#BB7D3E]">
            Step {String(i + 1).padStart(2, "0")}
          </span>
          {(isFirst || isLast) && (
            <span className="ml-auto whitespace-nowrap rounded-full bg-[#0C2448] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
              {isFirst ? "Start" : "Finish"}
            </span>
          )}
        </div>

        <h3 className="relative mt-5 text-2xl font-semibold tracking-[-0.02em] text-[#0C2448]">
          {step.title}
        </h3>
        <p className="relative mt-3 text-[15px] leading-7 text-[#0C2448]/72">{step.body}</p>
      </article>

      {exit && <RouteArrow direction={exit} delay={delay + 0.25} />}
    </motion.li>
  );
}

export default function VenturescapeProcess() {
  return (
    <section
      id="how-we-work"
      className="relative z-20 bg-[#FBF8F2] py-20 md:py-24"
    >
      <div className="mx-auto flex w-full flex-col items-center">
        <div className="flex flex-col items-center gap-4 text-center px-5 md:px-8">
          <span className="inline-flex max-w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-[#BB7D3E]/25 bg-white/80 px-4 py-1.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.16em] text-[#91121D] shadow-[0_1px_0_rgba(255,255,255,0.75),0_4px_14px_rgba(12,36,72,0.05)]">
            A Clear Route from Requirement to Shipment.
          </span>
          <h2 className="max-w-3xl text-3xl leading-[0.98] font-semibold tracking-[-0.04em] text-[#0C2448] md:text-4xl xl:text-5xl">
            How We Work
          </h2>
          <p className="max-w-2xl text-base leading-7 text-[#0C2448]/72 md:mt-2 md:text-lg">
            Six steps, one relationship. Each stage reduces ambiguity and keeps every party aligned on what happens next.
          </p>
        </div>

        {/* Mobile & tablet: vertical route */}
        <ol className="mx-auto mt-10 w-full max-w-2xl px-5 md:px-8 lg:hidden">
          {processSteps.map((step, i) => (
            <MobileRouteStep key={step.title} step={step} i={i} />
          ))}
        </ol>

        {/* Desktop: snake-shaped route — 1→2→3, turn down, 4←5←6 */}
        <ol className="relative mx-auto mt-16 hidden w-full max-w-6xl grid-cols-3 gap-x-16 gap-y-20 px-8 lg:grid xl:px-12">
          {processSteps.map((step, i) => (
            <RouteStep key={step.title} step={step} i={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
