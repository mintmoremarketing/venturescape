import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight, MessageSquareMore, Play } from "lucide-react";

const productPills = [
  "Timber",
  "Face Veneer",
  "Core Veneer",
  "Plywood",
  "MDF",
  "Wood-Based Materials",
];

const featurePoints = [
  "Timber, veneers, plywood, MDF, and wood-based materials.",
  "Reliable sources connected with manufacturers and buyers worldwide.",
  "Clear, dependable and secure trade for everyone involved.",
];

export default function VenturescapeHero() {
  const supportVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 24, stiffness: 100 },
    },
  };

  const titleContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
  };

  const titleLineVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 30, stiffness: 90, mass: 1.2 },
    },
  };

  const bodyContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.13, delayChildren: 0.85 },
    },
  };

  const bodyItemVariants: Variants = {
    hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 22, stiffness: 110 },
    },
  };

  const footerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 1.3 },
    },
  };

  const footerItemVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 130 },
    },
  };

  const mobileTickerItems = [...productPills, ...productPills];

  return (
    <section className="relative min-h-[82vh] w-full overflow-hidden font-sans antialiased selection:bg-[#BB7D3E]/30 selection:text-[#0C2448] md:min-h-screen">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#040A1F]">
        <video
          src="/Venturescape_V1.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="h-full w-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-[rgba(4,10,31,0.58)] md:hidden" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(4,10,31,0.90)_0%,rgba(4,10,31,0.78)_38%,rgba(4,10,31,0.45)_62%,rgba(4,10,31,0.25)_100%)] md:block" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,31,0.66)_0%,rgba(4,10,31,0.22)_42%,rgba(4,10,31,0.05)_62%,rgba(4,10,31,0.62)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#040A1F] via-[#040A1F]/80 to-transparent md:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#040A1F] via-[#040A1F]/80 to-transparent md:hidden" />
        <div className="absolute inset-0 hidden bg-[radial-gradient(ellipse_60%_55%_at_28%_58%,rgba(4,10,31,0.55),transparent_75%)] md:block" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col pt-[76px] sm:pt-[92px]">
        <main className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-between px-5 pb-8 pt-6 sm:justify-center sm:px-6 sm:pb-24 sm:pt-10 md:px-8">
          {/* Top group: pill row, headline, body paragraph */}
          <div className="flex max-w-5xl flex-col items-start">
            <motion.div
              variants={supportVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className="mb-8 w-full sm:mx-0 sm:max-w-none sm:pl-0 sm:pr-0"
            >
              <div className="hidden sm:block sm:max-w-none sm:overflow-visible">
                <div className="flex w-max flex-nowrap items-center gap-x-3 gap-y-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md sm:w-fit sm:flex-wrap">
                  {productPills.map((pill, i) => (
                    <span
                      key={pill}
                      className="flex shrink-0 items-center gap-3"
                    >
                      <a
                        href="#products"
                        className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85 transition-colors hover:text-[#BB7D3E]"
                      >
                        {pill}
                      </a>
                      {i < productPills.length - 1 && (
                        <span className="h-1 w-1 shrink-0 rounded-full bg-[#BB7D3E]/70" />
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <div className="sm:hidden">
                <div className="overflow-hidden rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md">
                  <div className="ticker-track flex w-max items-center gap-x-3 whitespace-nowrap">
                    {mobileTickerItems.map((pill, i) => (
                      <span
                        key={`${pill}-${i}`}
                        className="flex shrink-0 items-center gap-3"
                      >
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85">
                          {pill}
                        </span>
                        {i < mobileTickerItems.length - 1 && (
                          <span className="h-1 w-1 shrink-0 rounded-full bg-[#BB7D3E]/70" />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.h1
              variants={titleContainerVariants}
              initial="hidden"
              animate="show"
              className="mb-6 max-w-5xl text-[2.75rem] font-normal leading-[1.05] tracking-[-0.02em] text-white sm:text-[4rem] lg:text-[4.5rem]"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
            >
              <motion.span variants={titleLineVariants} className="block">
                Global Wood Trade.
              </motion.span>
              <motion.span variants={titleLineVariants} className="block">
                Built on <span className="text-[#BB7D3E]">Trust.</span>
              </motion.span>
            </motion.h1>

            <motion.p
              variants={bodyItemVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.85 }}
              className="max-w-2xl text-pretty text-base font-normal leading-[1.5] text-white/82 sm:text-lg lg:text-[1.3rem]"
              style={{ textShadow: "0 1px 12px rgba(0,0,0,0.4)" }}
            >
              Venturescape Trading connects reliable sources of timber, veneers,
              plywood and wood-based materials with manufacturers and buyers
              across international markets. From identifying the right source
              to coordinating the transaction, our purpose is simple: to make
              international trade clear, dependable and secure for everyone
              involved.
            </motion.p>
          </div>

          {/* Bottom group: CTAs. On mobile, pushed to the bottom via
              main's justify-between. On sm+ they sit inline just below the
              body paragraph via the negative margin so the classic layout
              is preserved. */}
          <motion.div
            variants={bodyContainerVariants}
            initial="hidden"
            animate="show"
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:max-w-5xl sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <a
              href="#products"
              className="group flex min-h-[40px] items-center justify-center gap-2 rounded-sm bg-white px-6 py-4 text-[15px] font-medium text-[#0C2448] shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all will-change-transform hover:bg-[#F7F2EB] active:scale-[0.96] sm:justify-start sm:px-7 sm:text-[16px]"
            >
              Explore Our Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#enquiry"
              className="group flex min-h-[40px] items-center justify-between gap-3 rounded-sm border border-white/25 bg-white/10 px-4 py-3 text-[15px] font-medium text-white backdrop-blur-md transition-all will-change-transform hover:border-[#BB7D3E] hover:bg-white/15 active:scale-[0.96] sm:justify-start sm:py-4 sm:text-[16px]"
            >
              Send Your Requirement
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#BB7D3E] text-white shadow-md transition-transform group-hover:scale-105 group-hover:bg-[#91121D]">
                <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
              </div>
            </a>
          </motion.div>
        </main>

        <motion.div
          variants={footerContainerVariants}
          initial="hidden"
          animate="show"
          className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-6 px-5 pb-8 sm:gap-10 sm:px-6 sm:pb-10 md:px-16 lg:flex-row lg:items-end"
        >
          <div className="hidden w-full grid-cols-1 gap-3 sm:grid sm:grid-cols-3 sm:gap-4 md:gap-5 lg:w-3/4">
            {featurePoints.map((point) => (
              <motion.div
                key={point}
                variants={footerItemVariants}
                className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/[0.06] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-md transition-colors hover:border-[#BB7D3E]/50 hover:bg-white/[0.10] sm:gap-3 sm:p-4"
              >
                <MessageSquareMore className="h-5 w-5 stroke-[1.5] text-[#BB7D3E] sm:h-6 sm:w-6" />
                <p className="max-w-[240px] text-pretty text-[13px] font-medium leading-snug text-white/90 sm:text-[14px]">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#about"
            variants={footerItemVariants}
            className="group flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-md transition-colors hover:border-[#BB7D3E]/50 hover:bg-white/15"
          >
            <span>Scroll to Discover</span>
            <ArrowDown className="h-4 w-4 text-[#BB7D3E] transition-transform group-hover:translate-y-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
