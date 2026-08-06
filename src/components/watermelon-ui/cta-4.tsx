import { FaAnchor, FaFileAlt, FaStamp } from "react-icons/fa";

export default function VenturescapeCta() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="group border-[#0C2448]/10 bg-[#0C2448]/[0.04] relative isolate mx-auto flex h-auto min-h-[400px] max-w-[370px] items-center justify-center overflow-hidden rounded-3xl border px-4 pt-12 sm:max-w-2xl sm:px-6 md:max-w-5xl lg:h-[450px] lg:px-8 lg:pt-0">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
            className="aspect-[577/310] w-[36rem] bg-gradient-to-r from-[#0C2448] to-[#BB7D3E] opacity-25"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
            className="aspect-[577/310] w-[36rem] bg-gradient-to-r from-[#BB7D3E] to-[#0C2448] opacity-25"
          />
        </div>

        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <span className="inline-flex rounded-full border border-[#BB7D3E]/25 bg-white/80 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#91121D]">
              Ready when you are
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-[#0C2448] sm:text-3xl md:text-4xl">
              Bring your next shipment{" "}
              <span className="text-[#91121D]">to Venturescape.</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[#0C2448]/68 sm:text-base">
              Share your specification, quantity, and destination. Our team
              reviews every enquiry personally and comes back with sourcing
              options, pricing, and a clear timeline.
            </p>
            <div className="mt-1">
              <a
                href="#enquiry"
                className="inline-flex h-10 items-center justify-center rounded-full bg-[#0C2448] px-6 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(12,36,72,0.22)] transition-colors hover:bg-[#153564]"
              >
                Send a requirement
              </a>
            </div>
          </div>

          {/* Abstract shipping-document render — no invented figures */}
          <div className="flex translate-y-[8%] justify-center transition-transform duration-500 ease-out group-hover:translate-y-[3%] lg:translate-y-[6%] lg:justify-end lg:group-hover:translate-y-0">
            <div className="relative mx-auto h-[360px] w-full max-w-[380px] sm:h-[400px]">
              {/* Back document — packing list */}
              <div className="absolute -top-2 right-8 h-[300px] w-[240px] rotate-6 rounded-xl border border-[#0C2448]/10 bg-white p-5 shadow-[0_20px_50px_rgba(12,36,72,0.15)] sm:h-[320px] sm:w-[260px]">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0C2448]/60">
                    Packing list
                  </span>
                  <FaFileAlt className="h-3.5 w-3.5 text-[#BB7D3E]" />
                </div>
                <div className="space-y-2">
                  {[
                    ["Pkg", "Type", "Qty"],
                    ["01", "Bundle", "—"],
                    ["02", "Bundle", "—"],
                    ["03", "Bundle", "—"],
                    ["04", "Pallet", "—"],
                    ["05", "Pallet", "—"],
                    ["06", "Crate", "—"],
                    ["07", "Crate", "—"],
                  ].map((row, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-3 gap-2 border-b border-dashed border-[#0C2448]/10 py-1 text-[10px] ${
                        i === 0
                          ? "font-bold uppercase tracking-wider text-[#0C2448]/70"
                          : "text-[#0C2448]/55"
                      }`}
                    >
                      <span>{row[0]}</span>
                      <span>{row[1]}</span>
                      <span className="text-right">{row[2]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Front document — commercial invoice */}
              <div className="absolute top-8 left-2 h-[320px] w-[260px] -rotate-3 rounded-xl border border-[#0C2448]/10 bg-white p-5 shadow-[0_20px_50px_rgba(12,36,72,0.20)] sm:h-[340px] sm:w-[280px]">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#91121D]">
                      Commercial Invoice
                    </div>
                    <div className="mt-1 text-[9px] uppercase tracking-wider text-[#0C2448]/40">
                      Venturescape Trading — FZCO
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0C2448]/[0.06] text-[#0C2448]">
                    <FaAnchor className="h-3.5 w-3.5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-2 w-3/4 rounded-full bg-[#0C2448]/[0.10]" />
                  <div className="h-2 w-full rounded-full bg-[#0C2448]/[0.06]" />
                  <div className="h-2 w-5/6 rounded-full bg-[#0C2448]/[0.06]" />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 rounded-md bg-[#F7F2EB]/70 p-2">
                  <div>
                    <div className="text-[8px] font-semibold uppercase tracking-wider text-[#0C2448]/50">Product</div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-[#0C2448]/[0.15]" />
                  </div>
                  <div>
                    <div className="text-[8px] font-semibold uppercase tracking-wider text-[#0C2448]/50">Qty</div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-[#0C2448]/[0.15]" />
                  </div>
                  <div>
                    <div className="text-[8px] font-semibold uppercase tracking-wider text-[#0C2448]/50">Origin</div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-[#0C2448]/[0.15]" />
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {[80, 92, 70, 88].map((w, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded-full bg-[#0C2448]/[0.06]"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>

                <div className="absolute right-4 bottom-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-[#91121D]/40 text-[#91121D] rotate-[-8deg]">
                  <FaStamp className="h-5 w-5" />
                </div>
              </div>

              {/* Certificate corner */}
              <div className="absolute right-0 bottom-2 flex h-16 w-16 rotate-12 items-center justify-center rounded-lg border border-[#BB7D3E]/40 bg-white p-2 shadow-[0_10px_24px_rgba(187,125,62,0.20)]">
                <div className="text-center">
                  <div className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#BB7D3E]">
                    Certificate
                  </div>
                  <div className="mt-0.5 text-[7px] font-medium text-[#0C2448]/60">
                    of Origin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
