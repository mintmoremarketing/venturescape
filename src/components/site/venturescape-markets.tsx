import { useEffect, useRef, useState } from "react";
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
import { staggerContainer, riseItem } from "@/components/site/venturescape-shared";

/**
 * Who We Work With — clean feature grid.
 *
 * Neutral white cards matching the site's About / Capabilities aesthetic
 * so the section reads as professional and consistent instead of a
 * playful sticky-note board.
 */

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

function SegmentCard({ item }: { item: string }) {
  const Icon = iconFor[item] ?? Factory;
  return (
    <motion.article
      variants={riseItem}
      className="group flex h-full w-full items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-[#0C2448]/8 shadow-[0_8px_24px_rgba(12,36,72,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(12,36,72,0.10)] hover:ring-[#0C2448]/12 sm:flex-col sm:items-start sm:gap-0 sm:rounded-3xl sm:p-6"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#0C2448]/10 bg-white shadow-sm transition-colors group-hover:border-[#BB7D3E]/40 sm:mb-5">
        <Icon className="h-5 w-5 text-[#BB7D3E]" />
      </div>
      <p className="text-[14px] font-semibold leading-5 tracking-[-0.01em] text-[#0C2448] sm:text-[15px] sm:leading-6">
        {item}
      </p>
    </motion.article>
  );
}

export default function VenturescapeMarkets() {
  const pageCount = Math.ceil(marketSegments.length / 3);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);

  // Track which page is nearest to the scroller's centre so the pager
  // dot lights up.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const centre = el.scrollLeft + el.clientWidth / 2;
      let nearest = 0;
      let nearestDist = Infinity;
      Array.from(el.children).forEach((child, i) => {
        const c = child as HTMLElement;
        const cx = c.offsetLeft + c.clientWidth / 2;
        const d = Math.abs(cx - centre);
        if (d < nearestDist) {
          nearestDist = d;
          nearest = i;
        }
      });
      setActivePage(nearest);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const goToPage = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const page = el.children[i] as HTMLElement | undefined;
    if (!page) return;
    el.scrollTo({ left: page.offsetLeft, behavior: "smooth" });
  };

  return (
    <section
      id="who-we-work-with"
      className="relative border-y border-[#0C2448]/8 bg-[#F7F2EB]/40"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[2040px] [@media(min-width:2400px)]:max-w-[2280px] px-5 py-20 md:px-8 md:py-24 lg:px-12 2xl:px-20">
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

        {/* Mobile: paginated groups of three stacked full-width tiles. Each
            "page" shows three tiles stacked vertically; swiping left/right
            reveals the next three. */}
        <div
          ref={scrollerRef}
          className="mt-10 -mx-5 flex snap-x snap-mandatory overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:hidden"
        >
          {Array.from({ length: pageCount }).map((_, page) => (
            <motion.div
              key={page}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="flex w-full shrink-0 snap-center flex-col gap-3 pr-3 last:pr-0"
            >
              {marketSegments
                .slice(page * 3, page * 3 + 3)
                .map((item) => (
                  <SegmentCard key={item} item={item} />
                ))}
            </motion.div>
          ))}
        </div>
        {/* Pager dots — active page highlighted, tap to jump. */}
        <div className="mt-4 flex items-center justify-center gap-1.5 sm:hidden">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToPage(i)}
              aria-label={`Show group ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === activePage
                  ? "w-6 bg-[#BB7D3E]"
                  : "w-1.5 bg-[#0C2448]/20"
              }`}
            />
          ))}
        </div>

        {/* Tablet+: standard grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 hidden gap-4 sm:grid sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4"
        >
          {marketSegments.map((item) => (
            <SegmentCard key={item} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
