import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { productItems } from "@/components/site/venturescape-data";
import { SectionIntro } from "@/components/site/venturescape-shared";
import { ArrowRight } from "lucide-react";

interface ProductDetail {
  intro: string;
  criteria: string[];
  enquireLabel: string;
}

// Doc-verified content only: intros and the evaluation criteria the client
// provided per product. No fabricated species, grades or origin data.
const productDetails: Record<string, ProductDetail> = {
  Timber: {
    intro:
      "We source hardwood and softwood timber for manufacturing, construction and industrial applications.",
    criteria: [
      "Species",
      "Origin",
      "Grade",
      "Dimensions",
      "Moisture requirements",
      "Quantity",
      "Application",
      "Loading requirements",
    ],
    enquireLabel: "Enquire for Timber",
  },
  "Face Veneer": {
    intro:
      "Natural wood face veneers sourced for plywood manufacturing, panel production and other wood-based applications.",
    criteria: [
      "Species",
      "Origin",
      "Grade",
      "Thickness",
      "Dimensions",
      "Quality requirement",
      "Volume",
    ],
    enquireLabel: "Enquire for Face Veneer",
  },
  "Core Veneer": {
    intro:
      "Core veneer sourced for plywood and panel manufacturers according to their production requirements.",
    criteria: [
      "Species",
      "Thickness",
      "Dimensions",
      "Moisture parameters",
      "Grade",
      "Manufacturing requirements",
      "Quantity",
    ],
    enquireLabel: "Enquire for Core Veneer",
  },
  Plywood: {
    intro:
      "Plywood sourced according to the technical, commercial and application requirements of the customer.",
    criteria: [
      "Grade",
      "Thickness",
      "Dimensions",
      "Construction",
      "Application",
      "Quantity",
      "Destination market",
    ],
    enquireLabel: "Enquire for Plywood",
  },
  "MDF & Wood-Based Panels": {
    intro:
      "MDF and other engineered wood panels sourced for furniture, interiors, manufacturing, distribution and related applications.",
    criteria: [
      "Thickness",
      "Dimensions",
      "Density",
      "Application",
      "Quantity",
      "Destination",
    ],
    enquireLabel: "Enquire for Panels",
  },
};

export default function VenturescapeProducts() {
  const defaultTab = productItems[0]?.title ?? "Timber";
  const scrollerRef = useRef<HTMLDivElement>(null);

  const centerTabInScroller = (value: string) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const trigger = scroller.querySelector<HTMLElement>(
      `[data-tab-value="${value}"]`
    );
    if (!trigger) return;
    const scrollerRect = scroller.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();
    const currentScrollLeft = scroller.scrollLeft;
    const triggerCenter =
      triggerRect.left - scrollerRect.left + triggerRect.width / 2;
    const target = currentScrollLeft + triggerCenter - scrollerRect.width / 2;
    scroller.scrollTo({ left: target, behavior: "smooth" });
  };

  return (
    <section id="products" className="border-y border-[#0C2448]/8 bg-white/55">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-20 md:px-8">
        <SectionIntro
          eyebrow="Wood Products. Sourced to Requirement."
          title="Our Products"
          description="Different manufacturers require different species, grades, dimensions, specifications and origins. Our approach therefore begins with the requirement rather than a fixed catalogue."
          align="center"
        />

        <Tabs
          defaultValue={defaultTab}
          onValueChange={(value) => {
            // Radix auto-focuses the newly active TabsContent panel; combined
            // with `html { scroll-behavior: smooth }` the browser smooth-scrolls
            // the section away. Snapshot the page scrollY, restore it, then
            // centre the tab in its horizontal scroller.
            const y = window.scrollY;
            requestAnimationFrame(() => {
              if (window.scrollY !== y) {
                window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior });
              }
              centerTabInScroller(value);
            });
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
            const isCustom = item.title === "Custom Wood Sourcing";
            const detail = productDetails[item.title];
            return (
              <TabsContent
                key={item.title}
                value={item.title}
                tabIndex={-1}
                className="animate-in fade-in slide-in-from-bottom-2 m-0 duration-300 focus:outline-none"
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
                        {detail?.intro ?? item.body}
                      </p>
                    </div>

                    {isCustom ? (
                      <div className="rounded-2xl bg-[#0C2448]/[0.035] p-6">
                        <p className="text-base font-semibold text-[#0C2448]">
                          Looking for something more specific?
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#0C2448]/68">
                          Not every requirement fits into a standard product
                          category. If you know the material, species,
                          specification, quantity or application you require,
                          share it with us — we can evaluate suitable sourcing
                          possibilities through our international network.
                        </p>
                      </div>
                    ) : detail?.criteria.length ? (
                      <div className="rounded-2xl bg-[#0C2448]/[0.035] p-6">
                        <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0C2448]/48">
                          Requirements can be evaluated by
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {detail.criteria.map((c) => (
                            <span
                              key={c}
                              className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#0C2448]/80 shadow-sm ring-1 ring-[#0C2448]/8"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    <a
                      href="#enquiry"
                      className="mt-2 inline-flex w-fit items-center gap-2 rounded-sm bg-[#0C2448] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(12,36,72,0.22)] transition-colors hover:bg-[#153564]"
                    >
                      {isCustom
                        ? "Send Your Requirement"
                        : detail?.enquireLabel ?? `Enquire for ${item.title}`}
                      <ArrowRight className="h-4 w-4" />
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
