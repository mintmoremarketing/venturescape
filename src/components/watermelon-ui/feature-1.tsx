import { Card, CardContent } from "@/components/ui/card";
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

const supplementaryPoints = [
  {
    icon: HiGlobeAlt,
    title: "Global source access",
    body:
      "Sourcing relationships across established wood-producing regions — access to different origins and product possibilities.",
  },
  {
    icon: HiUsers,
    title: "Stakeholder-first approach",
    body:
      "The interests of buyers, suppliers and every party needed to complete the transaction — considered together.",
  },
  {
    icon: HiChatAlt2,
    title: "Clear commercial communication",
    body:
      "Specifications, quantities, timelines and commercial expectations aligned as clearly as possible before execution.",
  },
];

export default function VenturescapeWhyFeature() {
  return (
    <section
      id="why-venturescape"
      className="flex w-full flex-col items-center justify-center px-6 py-20 md:py-24"
    >
      <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-[#91121D]">
        A Trading Partner With Something to Protect: Your Confidence.
      </p>
      <h2 className="mb-4 max-w-3xl text-center text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-[#0C2448] md:text-5xl">
        Why Venturescape
      </h2>
      <p className="mb-12 max-w-2xl text-center text-base leading-relaxed text-[#0C2448]/68 md:text-lg">
        Wood-focused understanding, global source access, requirement-led
        sourcing, stakeholder-first approach, documentation-focused execution,
        and relationships built for repeat business.
      </p>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="rounded-3xl border-0 bg-white/70 ring-1 ring-[#0C2448]/8 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(12,36,72,0.10)]">
          <CardContent className="p-6">
            <div className="mb-3 size-fit rounded-lg bg-[#0C2448]/[0.04] p-px">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_6px_0_rgba(12,36,72,0.08),0_2px_4px_0_rgba(12,36,72,0.05)]">
                <HiCube className="h-5 w-5 text-[#BB7D3E]" />
              </div>
            </div>
            <h3 className="mb-1 text-lg font-medium text-[#0C2448]">
              Wood-focused understanding
            </h3>
            <p className="mb-3 text-sm leading-6 text-[#0C2448]/64">
              Our commercial focus is centred on timber, veneers, plywood and
              allied wood materials — a single industry, understood deeply.
            </p>
            <div className="inline-flex rounded-lg bg-[#0C2448]/[0.04] p-0.5">
              <div className="inline-flex items-center rounded-md bg-white px-2 py-1 text-[10px] font-medium text-[#0C2448]/68 shadow-[0_0px_2px_0_rgba(12,36,72,0.08),0_1px_4px_0_rgba(12,36,72,0.05)]">
                Industry focus
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-0 bg-white/70 ring-1 ring-[#0C2448]/8 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(12,36,72,0.10)]">
          <CardContent className="p-6">
            <div className="mb-3 size-fit rounded-lg bg-[#0C2448]/[0.04] p-px">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_6px_0_rgba(12,36,72,0.08),0_2px_4px_0_rgba(12,36,72,0.05)]">
                <HiClipboardList className="h-5 w-5 text-[#91121D]" />
              </div>
            </div>
            <h3 className="mb-1 text-lg font-medium text-[#0C2448]">
              Requirement-led sourcing
            </h3>
            <p className="mb-3 text-sm leading-6 text-[#0C2448]/64">
              We don't begin by asking what we want to sell. We begin by
              understanding what the customer needs to buy.
            </p>
            <div className="inline-flex rounded-lg bg-[#0C2448]/[0.04] p-0.5">
              <div className="inline-flex items-center rounded-md bg-white px-2 py-1 text-[10px] font-medium text-[#0C2448]/68 shadow-[0_0px_2px_0_rgba(12,36,72,0.08),0_1px_4px_0_rgba(12,36,72,0.05)]">
                Buyer-first
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col justify-between rounded-3xl border-0 bg-[#0C2448] ring-0 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(12,36,72,0.30)] sm:col-span-2 lg:col-span-1 lg:row-span-2">
          <CardContent className="p-6">
            <div className="mb-4 size-fit rounded-lg bg-white/10 p-px">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.15)]">
                <HiDocumentText className="h-5 w-5 text-[#BB7D3E]" />
              </div>
            </div>
            <h3 className="mb-3 text-xl font-medium text-white">
              Documentation-focused execution
            </h3>
            <p className="mb-6 text-sm leading-6 text-white/70">
              Commercial and shipping documentation receive the same attention
              as the physical material — because at destination, they are the
              material.
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-md bg-white/[0.06] px-3 py-2 text-xs">
                <span className="text-white/60">Commercial invoice</span>
                <span className="font-medium text-white">Coordinated</span>
              </div>
              <div className="flex items-center justify-between rounded-md bg-white/[0.06] px-3 py-2 text-xs">
                <span className="text-white/60">Certificate of origin</span>
                <span className="font-medium text-white">Verified</span>
              </div>
              <div className="flex items-center justify-between rounded-md bg-white/[0.06] px-3 py-2 text-xs">
                <span className="text-white/60">Phytosanitary docs</span>
                <span className="font-medium text-white">Origin-issued</span>
              </div>
            </div>
          </CardContent>

          <div className="px-6 pb-6">
            <div className="inline-flex rounded-lg bg-white/10 p-0.5">
              <div className="inline-flex items-center rounded-md bg-white/10 px-2 py-1 text-[10px] font-medium text-white/80 shadow-[inset_0_1px_0px_0px_rgba(255,255,255,0.08)]">
                Documentation discipline
              </div>
            </div>
          </div>
        </Card>

        <Card className="rounded-3xl border-0 bg-white/70 ring-1 ring-[#0C2448]/8 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(12,36,72,0.10)]">
          <CardContent className="p-6">
            <div className="mb-3 size-fit rounded-lg bg-[#0C2448]/[0.04] p-px">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_6px_0_rgba(12,36,72,0.08),0_2px_4px_0_rgba(12,36,72,0.05)]">
                <HiUserGroup className="h-5 w-5 text-[#91121D]" />
              </div>
            </div>
            <h3 className="mb-1 text-lg font-medium text-[#0C2448]">
              Direct accountability
            </h3>
            <p className="mb-3 text-sm leading-6 text-[#0C2448]/64">
              Our customers and suppliers communicate directly with the people
              responsible for their transaction — no handovers, no filters.
            </p>
            <div className="inline-flex rounded-lg bg-[#0C2448]/[0.04] p-0.5">
              <div className="inline-flex items-center rounded-md bg-white px-2 py-1 text-[10px] font-medium text-[#0C2448]/68 shadow-[0_0px_2px_0_rgba(12,36,72,0.08),0_1px_4px_0_rgba(12,36,72,0.05)]">
                Accountability
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-0 bg-white/70 ring-1 ring-[#0C2448]/8 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(12,36,72,0.10)]">
          <CardContent className="p-6">
            <div className="mb-3 size-fit rounded-lg bg-[#0C2448]/[0.04] p-px">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_6px_0_rgba(12,36,72,0.08),0_2px_4px_0_rgba(12,36,72,0.05)]">
                <HiRefresh className="h-5 w-5 text-[#BB7D3E]" />
              </div>
            </div>
            <h3 className="mb-1 text-lg font-medium text-[#0C2448]">
              Built for repeat business
            </h3>
            <p className="mb-3 text-sm leading-6 text-[#0C2448]/64">
              We measure our relationships over multiple transactions, not a
              single shipment. Every order is delivered with the next one in
              mind.
            </p>
            <div className="inline-flex rounded-lg bg-[#0C2448]/[0.04] p-0.5">
              <div className="inline-flex items-center rounded-md bg-white px-2 py-1 text-[10px] font-medium text-[#0C2448]/68 shadow-[0_0px_2px_0_rgba(12,36,72,0.08),0_1px_4px_0_rgba(12,36,72,0.05)]">
                Long-term thinking
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Supplementary Why points from the doc that don't fit the 5-slot bento */}
      <div className="mt-6 grid w-full max-w-6xl grid-cols-1 gap-3 sm:grid-cols-3">
        {supplementaryPoints.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="flex items-start gap-3 rounded-2xl bg-white/60 p-4 ring-1 ring-[#0C2448]/8"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0C2448]/[0.05] text-[#0C2448]">
                <Icon className="h-5 w-5 text-[#91121D]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#0C2448]">
                  {p.title}
                </h4>
                <p className="mt-1 text-xs leading-5 text-[#0C2448]/64">
                  {p.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
