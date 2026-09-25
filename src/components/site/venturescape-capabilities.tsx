import { capabilityItems } from "@/components/site/venturescape-data";
import MobileCarousel from "@/components/site/mobile-carousel";
import { motion, useReducedMotion } from "framer-motion";

type Capability = (typeof capabilityItems)[number];

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=70&auto=format&fit=crop`;

// One photo per capability, in capabilityItems order.
const capabilityImages = [
  "/products/custom.jpg", // Product Sourcing — logs
  "/products/plywood.jpg", // Specification — graded samples
  unsplash("photo-1521791136064-7986c2920216"), // Commercial — handshake
  unsplash("photo-1450101499163-c8848c66ca85"), // Documentation — signing
  unsplash("photo-1578575437130-527eed3abbec"), // Shipping — container vessel
  unsplash("photo-1554224155-6726b3ff858f"), // Trade finance — statements
];

const sectionBackground = unsplash("photo-1494412574643-ff11b0a5c1c3", 1800);

/**
 * Desktop bento: photo tiles and solid boxes alternate so the grid never reads
 * as six identical squares.
 *   a a b c
 *   a a d d
 *   e e e f
 */
const bentoArea = ["a", "b", "c", "d", "e", "f"];
const bentoVariant: ("photo" | "box" | "split")[] = ["photo", "box", "photo", "split", "photo", "box"];

function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-block w-fit rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
        dark ? "bg-white/12 text-white/85 backdrop-blur-sm" : "bg-[#0C2448]/[0.06] text-[#0C2448]/72"
      }`}
    >
      {children}
    </span>
  );
}

function Index({ i, dark = false }: { i: number; dark?: boolean }) {
  return (
    <span className={`text-xs font-semibold tracking-[0.18em] ${dark ? "text-[#E3B57F]" : "text-[#BB7D3E]"}`}>
      {String(i + 1).padStart(2, "0")}
    </span>
  );
}

/** Full-bleed photo with the copy sitting on a navy gradient. */
function PhotoTile({ capability, i, large }: { capability: Capability; i: number; large: boolean }) {
  const Icon = capability.icon;
  return (
    <article className="group relative flex h-full flex-col justify-end overflow-hidden rounded-3xl bg-[#0C2448] ring-1 ring-white/10">
      <img
        src={capabilityImages[i]}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07172F] via-[#07172F]/70 to-[#07172F]/5" />
      <div className="absolute top-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/12 ring-1 ring-white/20 backdrop-blur-md">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="relative p-6 xl:p-7">
        <div className="flex items-center gap-3">
          <Index i={i} dark />
          {capability.pill && <Pill dark>{capability.pill}</Pill>}
        </div>
        <h3
          className={`mt-3 font-semibold tracking-[-0.02em] text-white ${
            large ? "text-3xl xl:text-4xl" : "text-xl xl:text-2xl"
          }`}
        >
          {capability.title}
        </h3>
        <p
          className={`mt-2 text-white/75 ${
            large ? "max-w-md text-base leading-7" : "text-sm leading-6"
          }`}
        >
          {capability.body}
        </p>
      </div>
    </article>
  );
}

/** Solid box with a round photo inset — the counterweight to the photo tiles. */
function BoxTile({ capability, i, accent }: { capability: Capability; i: number; accent: boolean }) {
  const Icon = capability.icon;
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 xl:p-7 ${
        accent ? "bg-[#BB7D3E] text-white" : "bg-[#FBF8F2] text-[#0C2448]"
      }`}
    >
      <div className="absolute -top-8 -right-8 h-32 w-32 overflow-hidden rounded-full ring-8 ring-white/25 transition-transform duration-500 group-hover:scale-110">
        <img src={capabilityImages[i]} alt="" loading="lazy" className="h-full w-full object-cover" />
      </div>
      <Icon className={`h-7 w-7 ${accent ? "text-white" : "text-[#BB7D3E]"}`} />
      <div className="mt-auto">
        <div className="flex items-center gap-3">
          {accent ? (
            <span className="text-xs font-semibold tracking-[0.18em] text-white/80">
              {String(i + 1).padStart(2, "0")}
            </span>
          ) : (
            <Index i={i} />
          )}
        </div>
        <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] xl:text-2xl">{capability.title}</h3>
        <p className={`mt-2 text-sm leading-6 ${accent ? "text-white/85" : "text-[#0C2448]/72"}`}>
          {capability.body}
        </p>
      </div>
    </article>
  );
}

/** Wide card: copy on the left, photo bleeding off the right edge. */
function SplitTile({ capability, i }: { capability: Capability; i: number }) {
  const Icon = capability.icon;
  return (
    <article className="group relative grid h-full grid-cols-[1.15fr_1fr] overflow-hidden rounded-3xl bg-white">
      <div className="flex flex-col p-6 xl:p-7">
        <Icon className="h-7 w-7 text-[#BB7D3E]" />
        <div className="mt-auto">
          <div className="flex items-center gap-3">
            <Index i={i} />
            {capability.pill && <Pill>{capability.pill}</Pill>}
          </div>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-[#0C2448] xl:text-2xl">
            {capability.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#0C2448]/72">{capability.body}</p>
        </div>
      </div>
      <div className="relative overflow-hidden [clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
        <img
          src={capabilityImages[i]}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
    </article>
  );
}

/** Mobile/tablet card: photo on top, copy below. */
function CarouselCard({ capability, i }: { capability: Capability; i: number }) {
  const Icon = capability.icon;
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-white/10">
      <div className="relative h-44 shrink-0 sm:h-52">
        <img src={capabilityImages[i]} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute bottom-0 left-6 flex h-12 w-12 translate-y-1/2 items-center justify-center rounded-xl bg-white shadow-md ring-1 ring-[#0C2448]/10">
          <Icon className="h-6 w-6 text-[#BB7D3E]" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 pt-10">
        <div className="flex items-center gap-3">
          <Index i={i} />
          {capability.pill && <Pill>{capability.pill}</Pill>}
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#0C2448]">{capability.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#0C2448]/72 sm:text-base sm:leading-7">{capability.body}</p>
      </div>
    </article>
  );
}

export default function VenturescapeCapabilities() {
  const reduce = useReducedMotion();

  return (
    <section id="capabilities" className="relative z-20 isolate overflow-hidden bg-[#0C2448] py-20 md:py-28">
      {/* Background photo: aerial container port, washed into the navy */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <img
          src={sectionBackground}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C2448] via-[#0C2448]/80 to-[#0C2448]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(187,125,62,0.22),transparent_55%)]" />
      </div>

      <div className="mx-auto flex w-full flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 px-5 text-center md:px-8">
          <span className="inline-flex max-w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-[#E3B57F] backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.16em]">
            From Requirement to Shipment.
          </span>
          <h2 className="mt-3 max-w-3xl text-3xl leading-[0.98] font-semibold tracking-[-0.04em] text-white sm:text-4xl xl:text-5xl">
            Our Capabilities
          </h2>
          <p className="mx-auto mt-2 max-w-4xl text-sm leading-6 text-white/70 md:mt-3 md:text-base">
            International trading requires considerably more than matching a buyer with a seller. Venturescape coordinates specifications, documentation, banking, logistics and multiple parties through one commercial relationship.
          </p>
        </div>

        {/* Mobile & tablet: swipeable carousel */}
        <div className="mt-10 w-full px-5 md:px-8 lg:hidden">
          <MobileCarousel
            className="w-full"
            light
            ariaLabel="Capabilities carousel"
            items={capabilityItems.map((item, i) => (
              <CarouselCard key={item.title} capability={item} i={i} />
            ))}
          />
        </div>

        {/* Desktop: bento of photo tiles and boxes */}
        <ul
          className="mx-auto mt-16 hidden w-full max-w-[1320px] grid-cols-4 grid-rows-[repeat(3,minmax(290px,auto))] gap-5 px-8 lg:grid xl:px-12"
          style={{ gridTemplateAreas: '"a a b c" "a a d d" "e e e f"' }}
        >
          {capabilityItems.map((item, i) => {
            const variant = bentoVariant[i];
            return (
              <motion.li
                key={item.title}
                style={{ gridArea: bentoArea[i] }}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {variant === "photo" && <PhotoTile capability={item} i={i} large={i === 0} />}
                {variant === "box" && <BoxTile capability={item} i={i} accent={i === 5} />}
                {variant === "split" && <SplitTile capability={item} i={i} />}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
