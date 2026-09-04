import { useEffect, useRef, useState, type ReactNode } from "react";

interface MobileCarouselProps {
  items: ReactNode[];
  /** Card width on mobile as a percentage of the scroller. Default 85. */
  cardWidthPct?: number;
  className?: string;
  /** Use light chrome (for dark section backgrounds). */
  light?: boolean;
  ariaLabel?: string;
}

export default function MobileCarousel({
  items,
  cardWidthPct = 85,
  className,
  light = false,
  ariaLabel = "Card carousel",
}: MobileCarouselProps) {
  const [index, setIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const edgeGutter = `${(100 - cardWidthPct) / 2}%`;

  // Track which card is nearest to the scroller centre for the dot indicator.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let raf = 0;
    const update = () => {
      const centre = scroller.scrollLeft + scroller.clientWidth / 2;
      let nearest = 0;
      let nearestDist = Infinity;
      Array.from(scroller.children).forEach((child, i) => {
        const el = child as HTMLElement;
        const elCentre = el.offsetLeft + el.clientWidth / 2;
        const d = Math.abs(elCentre - centre);
        if (d < nearestDist) {
          nearestDist = d;
          nearest = i;
        }
      });
      setIndex(nearest);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [items.length]);

  const goTo = (i: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.children[i] as HTMLElement | undefined;
    if (!card) return;
    const target =
      card.offsetLeft - (scroller.clientWidth - card.clientWidth) / 2;
    scroller.scrollTo({ left: target, behavior: "smooth" });
  };

  const dotIdle = light ? "bg-white/30" : "bg-[#0C2448]/20";
  const dotActive = light ? "bg-white" : "bg-[#0C2448]";

  return (
    <div className={className}>
      <div
        ref={scrollerRef}
        aria-label={ariaLabel}
        className="flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((child, i) => (
          <div
            key={i}
            className="flex shrink-0 snap-center"
            style={{
              width: `${cardWidthPct}%`,
              marginLeft: i === 0 ? edgeGutter : 0,
              marginRight: i === items.length - 1 ? edgeGutter : 0,
            }}
          >
            {child}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show card ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? `w-6 ${dotActive}` : `w-1.5 ${dotIdle}`
            }`}
          />
        ))}
      </div>
    </div>
  );
}
