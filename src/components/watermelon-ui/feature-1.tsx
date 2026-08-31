import { Card, CardContent } from "@/components/ui/card";
import {
  HiCube,
  HiClipboardList,
  HiDocumentText,
  HiUserGroup,
  HiRefresh,
  HiGlobeAlt,
} from "react-icons/hi";
import type { IconType } from "react-icons";

interface Point {
  icon: IconType;
  title: string;
  body: string;
}

// Six points — clean 3×2 grid on lg, 2×3 on sm, 1×6 on mobile. Selected from
// the doc's 8-point Why V list; overlapping items ("Clear commercial
// communication" is covered by "Direct accountability"; "Stakeholder-first"
// is covered by "Documentation-focused execution" + "Direct accountability").
const points: Point[] = [
  {
    icon: HiCube,
    title: "Wood-focused understanding",
    body:
      "Our commercial focus is centred on timber, veneers, plywood and allied wood materials — a single industry, understood deeply.",
  },
  {
    icon: HiGlobeAlt,
    title: "Global source access",
    body:
      "We develop sourcing relationships across established wood-producing regions to give customers access to different origins and product possibilities.",
  },
  {
    icon: HiClipboardList,
    title: "Requirement-led sourcing",
    body:
      "We don't begin by asking what we want to sell. We begin by understanding what the customer needs to buy.",
  },
  {
    icon: HiDocumentText,
    title: "Documentation-focused execution",
    body:
      "Commercial and shipping documentation receive the same attention as the physical material — because at destination, they are the material.",
  },
  {
    icon: HiUserGroup,
    title: "Direct accountability",
    body:
      "Our customers and suppliers communicate directly with the people responsible for their transaction — no handovers, no filters.",
  },
  {
    icon: HiRefresh,
    title: "Built for repeat business",
    body:
      "We measure our relationships over multiple transactions, not a single shipment. Every order is delivered with the next one in mind.",
  },
];

export default function VenturescapeWhyFeature() {
  return (
    <section
      id="why-venturescape"
      className="flex w-full flex-col items-center px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#91121D]">
          A Trading Partner With Something to Protect: Your Confidence.
        </p>
        <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#0C2448] md:text-5xl">
          Why Venturescape
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#0C2448]/72 md:text-lg">
          Wood-focused understanding, global source access, requirement-led
          sourcing, documentation-focused execution, direct accountability, and
          relationships built for repeat business.
        </p>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((p) => {
          const Icon = p.icon;
          return (
            <Card
              key={p.title}
              className="flex h-full flex-col rounded-3xl border-0 bg-white/70 p-2 ring-1 ring-[#0C2448]/8 shadow-[0_10px_30px_rgba(12,36,72,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(12,36,72,0.10)]"
            >
              <CardContent className="flex h-full flex-col p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-[#0C2448]/8 bg-white shadow-sm">
                  <Icon className="h-5 w-5 text-[#BB7D3E]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#0C2448]">
                  {p.title}
                </h3>
                <p className="text-sm leading-6 text-[#0C2448]/68">{p.body}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
