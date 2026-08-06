import React, { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  Anchor,
  Boxes,
  Timer,
  Sparkles,
  ChevronRight,
} from "lucide-react";

function GlowingBorderCard({
  children,
  className,
  glowColor,
  repeatingGradient,
}: {
  children: React.ReactNode;
  className?: string;
  glowColor: string;
  repeatingGradient: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative rounded-2xl bg-[#0C2448]/[0.08] p-[2px] ${className || ""}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
        }}
      />

      <div className="relative z-10 h-full overflow-hidden rounded-2xl bg-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ background: repeatingGradient }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-white/80" />

        <div className="relative z-20 flex h-full flex-col justify-between p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function VenturescapeStats() {
  return (
    <section className="relative w-full px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="inline-flex">
              <Badge
                variant="secondary"
                className="flex w-fit items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm text-[#0C2448] shadow-sm ring-1 ring-[#BB7D3E]/25"
              >
                <Sparkles className="h-4 w-4 text-[#91121D]" />
                <span className="font-medium">Measured trade signals</span>
              </Badge>
            </div>

            <h2 className="text-5xl leading-[1.05] font-bold tracking-tight text-[#0C2448] md:text-6xl">
              Proof, not <br className="hidden md:block" />
              promises.
            </h2>

            <p className="max-w-md text-lg leading-relaxed text-[#0C2448]/68">
              Numbers that describe how the business actually runs — the
              categories we handle, the markets we source from, and the
              rhythm we reply on.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0C2448] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(12,36,72,0.22)] transition-colors hover:bg-[#153564]"
              >
                Start an enquiry
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#0C2448]/12 bg-white px-6 py-3 text-sm font-semibold text-[#0C2448] transition-colors hover:bg-[#0C2448]/[0.04]"
              >
                Explore products
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:col-span-7">
            <GlowingBorderCard
              glowColor="rgba(12, 36, 72, 0.55)"
              repeatingGradient="repeating-linear-gradient(45deg, rgba(12,36,72,0.10), rgba(12,36,72,0.10) 15px, transparent 15px, transparent 30px)"
            >
              <div>
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-[#0C2448]/10 bg-white text-[#0C2448] shadow-sm">
                  <Boxes className="h-5 w-5 text-[#0C2448]" />
                </div>
                <div className="mb-2 text-5xl font-bold tracking-tight text-[#0C2448]">
                  06
                </div>
                <h3 className="mb-2 text-base font-semibold text-[#0C2448]">
                  Product lines handled
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#0C2448]/64">
                Timber, plywood, face and core veneers, MDF, and allied
                wood-based panels — all sourced with the same discipline.
              </p>
            </GlowingBorderCard>

            <GlowingBorderCard
              glowColor="rgba(187, 125, 62, 0.60)"
              repeatingGradient="repeating-linear-gradient(-45deg, rgba(187,125,62,0.12), rgba(187,125,62,0.12) 15px, transparent 15px, transparent 30px)"
            >
              <div>
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-[#0C2448]/10 bg-white text-[#0C2448] shadow-sm">
                  <Anchor className="h-5 w-5 text-[#BB7D3E]" />
                </div>
                <div className="mb-2 text-5xl font-bold tracking-tight text-[#0C2448]">
                  07
                </div>
                <h3 className="mb-2 text-base font-semibold text-[#0C2448]">
                  Supply chain partners
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#0C2448]/64">
                Producers, mills, exporters, inspection agents, and logistics
                providers working under one coordination point.
              </p>
            </GlowingBorderCard>

            <GlowingBorderCard
              className="sm:col-span-2"
              glowColor="rgba(145, 18, 29, 0.55)"
              repeatingGradient="repeating-linear-gradient(90deg, rgba(145,18,29,0.10), rgba(145,18,29,0.10) 15px, transparent 15px, transparent 30px)"
            >
              <div className="flex w-full flex-col items-start gap-8 sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-[#0C2448]/10 bg-white text-[#0C2448] shadow-sm">
                    <Timer className="h-5 w-5 text-[#91121D]" />
                  </div>
                  <div className="mb-2 text-5xl font-bold tracking-tight text-[#0C2448] md:text-6xl">
                    Same
                    <span className="ml-1 text-3xl text-[#0C2448]/54">day</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#0C2448]">
                    Enquiry acknowledgement
                  </h3>
                </div>
                <div className="flex-1">
                  <p className="text-sm leading-relaxed text-[#0C2448]/64">
                    Every enquiry is reviewed personally by the team running
                    the sourcing. You receive an acknowledgement the same
                    business day, with source options and pricing to follow.
                  </p>

                  <a
                    href="#enquiry"
                    className="mt-6 inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-[#0C2448] hover:underline"
                  >
                    Send a requirement <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </GlowingBorderCard>
          </div>
        </div>
      </div>
    </section>
  );
}
