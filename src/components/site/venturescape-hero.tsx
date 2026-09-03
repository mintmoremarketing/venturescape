import { motion, type Variants } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function VenturescapeHero() {
  const titleContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const titleLineVariants: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 28, stiffness: 90 },
    },
  };

  const bodyVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.55 },
    },
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.75 },
    },
  };

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden font-sans antialiased selection:bg-[#BB7D3E]/30 selection:text-white"
    >
      {/* Deep royal-blue → cyan gradient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,0,36,1) 10%, rgb(3, 3, 50) 57%, rgb(21, 21, 84) 100%)",
        }}
      />
      {/* Depth glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 12% 8%, rgba(65,105,225,0.30), transparent 45%), radial-gradient(circle at 85% 92%, rgba(187,125,62,0.18), transparent 42%)",
        }}
      />
      {/* Fine dotted grid for texture (like the reference) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col items-start justify-between gap-10 px-5 pt-[120px] pb-14 sm:px-6 sm:pt-[140px] sm:pb-20 md:min-h-screen md:justify-center md:gap-0 md:px-12 md:pb-24 lg:px-16">
        {/* Top group: eyebrow + headline + body */}
        <div className="flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md md:mb-10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#BB7D3E]" />
            Global Wood Sourcing · Dubai
          </motion.span>

          <motion.h1
            variants={titleContainerVariants}
            initial="hidden"
            animate="show"
            className="mb-8 max-w-[46rem] text-[2.75rem] font-medium leading-[1.08] tracking-[-0.02em] text-white sm:text-[3.6rem] lg:text-[4.4rem] md:mb-10"
            style={{
              fontFamily: "'Poppins', 'Inter', system-ui, sans-serif",
              textShadow: "0 2px 24px rgba(0,0,0,0.35)",
            }}
          >
            <motion.span variants={titleLineVariants} className="block">
              Global Wood Trade.
            </motion.span>
            <motion.span variants={titleLineVariants} className="mt-3 block md:mt-4">
              Built on{" "}
              <span className="font-bold text-[#F7D9B4]">Trust.</span>
            </motion.span>
          </motion.h1>

          <motion.p
            variants={bodyVariants}
            initial="hidden"
            animate="show"
            className="max-w-xl text-pretty text-base font-normal leading-[1.7] text-white/78 sm:text-lg"
            style={{ textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}
          >
            Connecting reliable sources of timber, veneers, plywood and
            wood-based materials with manufacturers and buyers across
            international markets — clear, dependable, and secure for everyone
            involved.
          </motion.p>
        </div>

        {/* Bottom group: CTAs — sits at bottom of the hero on mobile
            (via outer justify-between), inline with the text on desktop. */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="show"
          className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4 md:mt-14"
        >
            <a
              href="#products"
              className="group flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#0C2448] shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-colors hover:bg-[#F7F2EB] active:scale-[0.97]"
            >
              Explore Our Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#enquiry"
              className="group flex min-h-[44px] items-center justify-between gap-3 rounded-full border border-white/25 bg-white/[0.06] px-5 py-3 text-[15px] font-semibold text-white backdrop-blur-md transition-colors hover:border-[#BB7D3E]/60 hover:bg-white/10 active:scale-[0.97] sm:justify-start"
            >
              Send Your Requirement
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#BB7D3E] text-white shadow-sm transition-transform group-hover:scale-105 group-hover:bg-[#91121D]">
                <Play className="ml-0.5 h-3.5 w-3.5" fill="currentColor" />
              </div>
            </a>
          </motion.div>
      </div>
    </section>
  );
}
