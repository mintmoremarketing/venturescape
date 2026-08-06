import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { productItems } from "@/components/site/venturescape-data";
import { SectionIntro } from "@/components/site/venturescape-shared";

const productDetails: Record<
  string,
  {
    intro: string;
    highlights: { label: string; value: string }[];
    useCases: string[];
    origins: string[];
  }
> = {
  Timber: {
    intro:
      "Hardwood and softwood timber sourced against your species, grade, dimensions, moisture, and end-use requirements. Kiln-dried or air-dried as specified.",
    highlights: [
      { label: "Common species", value: "Meranti, Keruing, Pine, Beech" },
      { label: "Grades", value: "FAS, No.1 Common, Prime, Merch" },
      { label: "Moisture", value: "8 – 18% as required" },
      { label: "Packing", value: "Bundled, strapped, palletised" },
    ],
    useCases: ["Furniture", "Joinery", "Flooring", "Construction"],
    origins: ["Malaysia", "Indonesia", "Vietnam", "Europe"],
  },
  Plywood: {
    intro:
      "Commercial, marine, structural, and application-specific plywood for manufacturing, construction, furniture, and interior projects.",
    highlights: [
      { label: "Grades", value: "BB/BB, BB/CC, MR, WBP, Marine" },
      { label: "Thickness", value: "3 mm – 25 mm" },
      { label: "Sizes", value: "4x8 ft, 5x8 ft, custom" },
      { label: "Glue line", value: "MR, MR+, Phenolic" },
    ],
    useCases: ["Furniture manufacturing", "Interior fit-out", "Packaging", "Marine"],
    origins: ["China", "Vietnam", "Indonesia", "Russia"],
  },
  "Face Veneer": {
    intro:
      "Natural wood face veneers in a range of species, grades, thicknesses, and dimensions for plywood facing and decorative surfaces.",
    highlights: [
      { label: "Species", value: "Okoume, Bintangor, Ash, Oak" },
      { label: "Thickness", value: "0.15 mm – 0.55 mm" },
      { label: "Sizes", value: "1270×2500 mm and custom" },
      { label: "Grade", value: "A, B, C, mixed" },
    ],
    useCases: ["Plywood facing", "Decorative panels", "Furniture surfaces"],
    origins: ["Gabon", "China", "Vietnam", "Myanmar"],
  },
  "Core Veneer": {
    intro:
      "Core veneers supplied by thickness, dimensions, species, and production requirements for panel manufacturing.",
    highlights: [
      { label: "Species", value: "Poplar, Eucalyptus, Falcata" },
      { label: "Thickness", value: "1.4 mm – 2.6 mm" },
      { label: "Format", value: "Sheets, ribbons, jointed" },
      { label: "Moisture", value: "8 – 12%" },
    ],
    useCases: ["Plywood cores", "LVL production", "Blockboard"],
    origins: ["China", "Vietnam", "Indonesia"],
  },
  MDF: {
    intro:
      "MDF and other engineered wood panels for furniture manufacturing, interior projects, distribution, and construction applications.",
    highlights: [
      { label: "Types", value: "Plain, Moisture-resistant, Fire-rated" },
      { label: "Thickness", value: "3 mm – 30 mm" },
      { label: "Sizes", value: "4x8 ft, 6x8 ft, custom" },
      { label: "Density", value: "680 – 780 kg/m³" },
    ],
    useCases: ["Furniture", "Wall panels", "Kitchen cabinets", "Retail displays"],
    origins: ["Thailand", "Vietnam", "China", "Malaysia"],
  },
  "MDF and Wood-Based Panels": {
    intro:
      "MDF and other engineered wood panels for furniture manufacturing, interior projects, distribution, and construction applications.",
    highlights: [
      { label: "Types", value: "Plain, MR, Fire-rated, HDF" },
      { label: "Thickness", value: "3 mm – 30 mm" },
      { label: "Sizes", value: "4x8 ft, 6x8 ft, custom" },
      { label: "Density", value: "680 – 780 kg/m³" },
    ],
    useCases: ["Furniture", "Wall panels", "Kitchen cabinets", "Retail displays"],
    origins: ["Thailand", "Vietnam", "China", "Malaysia"],
  },
  "Other Wood Products": {
    intro:
      "Additional wood products sourced against specific technical, dimensional, commercial, and destination-market requirements.",
    highlights: [
      { label: "Categories", value: "OSB, Particle board, LVL, Blockboard" },
      { label: "Custom specs", value: "By request" },
      { label: "Compliance", value: "CARB, FSC, PEFC available" },
      { label: "MOQ", value: "1 x 40 HC and up" },
    ],
    useCases: ["Project procurement", "Distribution", "Specialty manufacturing"],
    origins: ["Global sourcing on request"],
  },
};

export default function VenturescapeProducts() {
  const defaultTab = productItems[0]?.title ?? "Timber";
  const scrollerRef = useRef<HTMLDivElement>(null);

  const centerTabInScroller = (value: string) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    // Radix TabsTrigger renders as a <button> — find the one whose data-value or
    // text matches. shadcn/radix uses `data-state="active"` after the change,
    // but the safest lookup is by role + accessible name via a data attribute.
    const trigger = scroller.querySelector<HTMLElement>(
      `[data-tab-value="${value}"]`
    );
    if (!trigger) return;
    const scrollerRect = scroller.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();
    const currentScrollLeft = scroller.scrollLeft;
    // Distance from scroller's left edge to trigger's center
    const triggerCenter =
      triggerRect.left - scrollerRect.left + triggerRect.width / 2;
    const target = currentScrollLeft + triggerCenter - scrollerRect.width / 2;
    scroller.scrollTo({ left: target, behavior: "smooth" });
  };

  return (
    <section id="products" className="border-y border-[#0C2448]/8 bg-white/55">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-20 md:px-8">
        <SectionIntro
          eyebrow="Product Portfolio"
          title="Wood products for diverse market requirements."
          description="Venturescape sources wood products by the buyer's required species, grade, dimensions, quantity, application, and destination market. Explore each line below."
          align="center"
        />

        <Tabs
          defaultValue={defaultTab}
          onValueChange={(value) => {
            // Wait one frame so the DOM reflects the active state before centering.
            requestAnimationFrame(() => centerTabInScroller(value));
          }}
          className="mt-12 w-full max-w-6xl gap-6"
        >
          <div
            ref={scrollerRef}
            className="w-full overflow-x-auto overflow-y-hidden py-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <TabsList className="flex h-auto w-max justify-start gap-4 border-b border-[#0C2448]/12 bg-transparent p-0">
              {productItems.map((item) => (
                <TabsTrigger
                  key={item.title}
                  value={item.title}
                  data-tab-value={item.title}
                  className="h-full rounded-none border-0 border-b-2 border-transparent bg-transparent px-1 py-3 text-sm font-medium text-[#0C2448]/60 transition-all hover:text-[#0C2448] data-[state=active]:border-[#91121D] data-[state=active]:text-[#0C2448] data-[state=active]:shadow-none!"
                >
                  <item.icon className="mr-2 size-4" />
                  {item.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {productItems.map((item) => {
            const detail = productDetails[item.title] ?? {
              intro: item.body,
              highlights: [],
              useCases: [],
              origins: [],
            };
            return (
              <TabsContent
                key={item.title}
                value={item.title}
                className="animate-in fade-in slide-in-from-bottom-2 m-0 duration-300"
              >
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
                  <div className="relative min-h-[380px] overflow-hidden rounded-3xl bg-[#0C2448]/[0.06] lg:min-h-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      onError={(e) => {
                        const img = e.currentTarget;
                        const fallback = `https://picsum.photos/seed/${encodeURIComponent(item.title)}/1600/1000`;
                        if (img.src !== fallback) img.src = fallback;
                      }}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-col gap-6 rounded-3xl bg-white/70 p-8 ring-1 ring-[#0C2448]/8">
                    <div>
                      <Badge className="mb-3 rounded-full bg-[#0C2448]/[0.06] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#91121D] hover:bg-[#0C2448]/[0.08]">
                        {item.pill}
                      </Badge>
                      <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#0C2448] md:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-[#0C2448]/68">
                        {detail.intro}
                      </p>
                    </div>

                    {detail.highlights.length > 0 && (
                      <div className="grid grid-cols-1 gap-0 rounded-2xl bg-[#0C2448]/[0.035] p-1 sm:grid-cols-2">
                        {detail.highlights.map((row) => (
                          <div
                            key={row.label}
                            className="rounded-xl px-4 py-3"
                          >
                            <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0C2448]/48">
                              {row.label}
                            </div>
                            <div className="mt-1 text-sm font-medium text-[#0C2448]">
                              {row.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-6">
                      {detail.useCases.length > 0 && (
                        <div>
                          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0C2448]/48">
                            Typical use
                          </div>
                          <ul className="mt-2 space-y-1.5 text-sm text-[#0C2448]/72">
                            {detail.useCases.map((u) => (
                              <li key={u} className="flex items-center gap-2">
                                <span className="h-1 w-1 rounded-full bg-[#BB7D3E]" />
                                {u}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {detail.origins.length > 0 && (
                        <div>
                          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0C2448]/48">
                            Origins
                          </div>
                          <ul className="mt-2 space-y-1.5 text-sm text-[#0C2448]/72">
                            {detail.origins.map((o) => (
                              <li key={o} className="flex items-center gap-2">
                                <span className="h-1 w-1 rounded-full bg-[#91121D]" />
                                {o}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <a
                      href="#enquiry"
                      className="mt-2 inline-flex w-fit items-center gap-2 rounded-sm bg-[#0C2448] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(12,36,72,0.22)] transition-colors hover:bg-[#153564]"
                    >
                      Enquire about {item.title}
                    </a>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
