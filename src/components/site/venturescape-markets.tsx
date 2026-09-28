import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, riseItem } from "@/components/site/venturescape-shared";

/**
 * Who We Work With — editorial image-card grid.
 *
 * Each market segment is a photo card with a soft dark-to-transparent
 * overlay carrying the label at the bottom, so the section feels
 * editorial without any tabs, clusters or all-caps labels.
 *
 * Desktop / tablet: responsive photo grid (2 → 3 → 4 columns).
 * Mobile: a peek-carousel — 1.15 cards visible, snap-x scroll with
 * progress dots below.
 */

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?w=900&q=70&auto=format&fit=crop`;

type Segment = { name: string; image: string };

const segments: Segment[] = [
  {
    name: "Plywood manufacturers",
    image: "/products/plywood.jpg",
  },
  {
    name: "Panel manufacturers",
    image: "/products/mdf.jpg",
  },
  {
    name: "Furniture manufacturers",
    image: unsplash("photo-1586023492125-27b2c045efd7"),
  },
  {
    name: "Veneer buyers",
    image: "/products/face-veneer.jpg",
  },
  {
    name: "Timber importers",
    image: "/products/timber.jpg",
  },
  {
    name: "International trading houses",
    image: unsplash("photo-1473023914974-0d98f0798b51"),
  },
  {
    name: "Wholesalers",
    image: unsplash("photo-1553413077-190dd305871c"),
  },
  {
    name: "Project procurement companies",
    image: unsplash("photo-1581092160562-40aa08e78837"),
  },
  {
    name: "Building-material distributors",
    image: unsplash("photo-1504307651254-35680f356dfd"),
  },
  {
    name: "Interior-product companies",
    image: unsplash("photo-1618221195710-dd6b41faaea6"),
  },
  {
    name: "Construction-material suppliers",
    image: unsplash("photo-1541888946425-d81bb19240f5"),
  },
];

function SegmentCard({ item, index }: { item: Segment; index: number }) {
  return (
    <motion.article
      variants={riseItem}
      className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#0C2448]/[0.06] shadow-[0_10px_30px_rgba(12,36,72,0.10)] ring-1 ring-[#0C2448]/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(12,36,72,0.16)]"
    >
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        onError={(e) => {
          const img = e.currentTarget;
          const fallback = `https://picsum.photos/seed/${encodeURIComponent(item.name)}/800/1000`;
          if (img.src !== fallback) img.src = fallback;
        }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
      />
      {/* Gradient wash so the label always reads over any photo */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#0C2448]/85 via-[#0C2448]/25 to-transparent"
      />
      {/* Ordinal chip in the top-left */}
      <div className="absolute top-4 left-4 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0C2448] backdrop-blur-sm">
        {String(index + 1).padStart(2, "0")}
      </div>
      {/* Segment name */}
      <div className="absolute inset-x-5 bottom-5">
        <h3 className="text-lg font-semibold leading-6 tracking-[-0.01em] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] md:text-xl">
          {item.name}
        </h3>
      </div>
    </motion.article>
  );
}

export default function VenturescapeMarkets() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track which card centre is nearest the mobile scroller centre so
  // the pager dots highlight the correct one.
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
      setActiveIndex(nearest);
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

  const goTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({
      left: card.offsetLeft - (el.clientWidth - card.clientWidth) / 2,
      behavior: "smooth",
    });
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

        {/* Mobile: peek-carousel with one and a bit of the next card
            visible so users see there's more to swipe. */}
        <div
          ref={scrollerRef}
          className="mt-10 -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:hidden"
        >
          {segments.map((s, i) => (
            <div
              key={s.name}
              className="w-[calc(100%-2rem)] shrink-0 snap-center"
            >
              <SegmentCard item={s} index={i} />
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-1.5 sm:hidden">
          {segments.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show segment ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === activeIndex
                  ? "w-6 bg-[#BB7D3E]"
                  : "w-1.5 bg-[#0C2448]/20"
              }`}
            />
          ))}
        </div>

        {/* Tablet+: photo-card grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 hidden gap-4 sm:grid sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4"
        >
          {segments.map((s, i) => (
            <SegmentCard key={s.name} item={s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
