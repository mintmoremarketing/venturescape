import LogoIcon from "@/assets/logo-icon";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Menu,
  MessageSquareMore,
  Play,
  X,
} from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Markets", href: "#markets" },
  { label: "Why Venturescape", href: "#why-venturescape" },
  { label: "Contact", href: "#enquiry" },
];

// Demo client logos — placeholders generated via ui-avatars. Swap `src` with
// real logo URLs once the client provides them.
const clientLogos = [
  { initials: "WM", src: "https://ui-avatars.com/api/?name=WM&background=0C2448&color=fff&size=128&bold=true&format=png", color: "bg-[#0C2448]" },
  { initials: "TP", src: "https://ui-avatars.com/api/?name=TP&background=91121D&color=fff&size=128&bold=true&format=png", color: "bg-[#91121D]" },
  { initials: "VC", src: "https://ui-avatars.com/api/?name=VC&background=BB7D3E&color=fff&size=128&bold=true&format=png", color: "bg-[#BB7D3E]" },
  { initials: "PL", src: "https://ui-avatars.com/api/?name=PL&background=234B82&color=fff&size=128&bold=true&format=png", color: "bg-[#234B82]" },
];

// Demo count — swap when the client confirms.
const clientCount = "30+";

const featurePoints = [
  "Timber, veneers, plywood, MDF, and allied wood products.",
  "Requirement-based sourcing with commercial and documentary clarity.",
  "Disciplined execution from enquiry through delivery coordination.",
];

export default function VenturescapeHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileMenuOpen]);

  const navVariants: Variants = {
    hidden: { opacity: 0, y: -14, filter: "blur(5px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 20, stiffness: 160, delay: 0.05 },
    },
  };

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

  return (
    <section className="relative min-h-screen w-full overflow-hidden font-sans antialiased selection:bg-[#BB7D3E]/30 selection:text-[#0C2448]">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://assets.watermelon.sh/hero-34-bg.avif"
          alt="Wood and trade landscape"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,36,72,0.22),rgba(12,36,72,0.07)_34%,rgba(255,248,240,0.26)_100%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <motion.nav
          variants={navVariants}
          initial="hidden"
          animate="show"
          className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-6 md:px-8"
        >
          <div className="group flex cursor-pointer items-center gap-2 text-[#0C2448]">
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <LogoIcon className="h-7 w-7" />
            </motion.div>
            <span className="text-xl font-normal tracking-tight">Venturescape</span>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-[#0C2448]/72 lg:flex xl:gap-10">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex min-h-[40px] items-center transition-colors hover:text-[#91121D]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 lg:gap-6">
            <a
              href="#enquiry"
              className="hidden min-h-[40px] items-center gap-2 rounded-sm bg-[#0C2448] px-5 py-2.5 text-[14px] font-medium text-white shadow-[0_10px_30px_rgba(12,36,72,0.22)] transition-all will-change-transform hover:bg-[#153564] active:scale-[0.96] lg:flex"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#0C2448]/12 bg-white/70 text-[#0C2448] transition-colors hover:bg-white lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 lg:hidden"
            >
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
                className="absolute inset-0 bg-[#0C2448]/40 backdrop-blur-[2px]"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 260 }}
                className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-[#F7F2EB] shadow-2xl"
              >
                <div className="flex items-center justify-between px-6 py-6">
                  <div className="flex items-center gap-2 text-[#0C2448]">
                    <LogoIcon className="h-7 w-7" />
                    <span className="text-lg font-normal tracking-tight">Venturescape</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#0C2448]/12 bg-white text-[#0C2448]"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1 px-4 py-2">
                  {navigation.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-sm px-3 py-3 text-base font-medium text-[#0C2448] transition-colors hover:bg-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-auto flex flex-col gap-3 border-t border-[#0C2448]/10 px-6 py-6">
                  <a
                    href="#enquiry"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-sm bg-[#0C2448] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(12,36,72,0.22)] transition-colors hover:bg-[#153564]"
                  >
                    Request a Quote
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-6 pb-24 pt-10 md:px-8">
          <div className="flex max-w-5xl flex-col items-start">
            <motion.div
              variants={supportVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className="mb-8 flex w-fit items-center gap-4 rounded-full border border-white/60 bg-white/70 px-3 py-2 shadow-[0_10px_30px_rgba(12,36,72,0.08)] backdrop-blur-md"
            >
              <div className="flex -space-x-2.5">
                {clientLogos.map((item) => (
                  <div
                    key={item.initials}
                    className={`flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-white text-[10px] font-bold text-white shadow-sm ring-1 ring-[#BB7D3E]/25 ${item.color}`}
                  >
                    {item.src ? (
                      <img src={item.src} alt="" className="h-full w-full object-cover" />
                    ) : (
                      item.initials
                    )}
                  </div>
                ))}
              </div>
              <p className="pr-2 text-sm font-medium tracking-tight text-[#0C2448]/80">
                Served <span className="font-semibold text-[#0C2448]">{clientCount}</span>{" "}
                buyers &amp; suppliers globally
              </p>
            </motion.div>

            <motion.h1
              variants={titleContainerVariants}
              initial="hidden"
              animate="show"
              className="mb-6 max-w-5xl text-[4rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#0C2448] sm:text-[4.5rem]"
            >
              <motion.span variants={titleLineVariants} className="block">
                Global Wood Trade.
              </motion.span>
              <motion.span variants={titleLineVariants} className="block">
                Built on Discipline.
              </motion.span>
            </motion.h1>

            <motion.div
              variants={bodyContainerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col items-start gap-10"
            >
              <motion.p
                variants={bodyItemVariants}
                className="max-w-2xl text-pretty text-lg font-normal leading-[1.4] text-[#0C2448]/70 sm:text-[1.3rem]"
              >
                Venturescape Trading connects reliable sources with serious buyers across the global wood-products industry. From timber and veneers to plywood, MDF and engineered wood panels, we coordinate each transaction with clarity, precision and accountability.
              </motion.p>

              <motion.div
                variants={bodyItemVariants}
                className="flex flex-wrap items-center gap-6"
              >
                <a
                  href="#products"
                  className="group flex min-h-[40px] items-center gap-2 rounded-sm bg-[#0C2448] px-7 py-4 text-[16px] font-medium text-white shadow-[0_16px_36px_rgba(12,36,72,0.24)] transition-all will-change-transform hover:bg-[#153564] active:scale-[0.96]"
                >
                  Explore Our Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href="#enquiry"
                  className="group flex min-h-[40px] items-center gap-3 rounded-sm border border-[#BB7D3E]/35 bg-white/10 px-4 py-4 text-[16px] font-medium text-[#0C2448] backdrop-blur-[2px] transition-all will-change-transform hover:border-[#BB7D3E] hover:text-[#91121D] active:scale-[0.96]"
                >
                  Send an Enquiry
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#BB7D3E] text-white shadow-md transition-transform group-hover:scale-105 group-hover:bg-[#91121D]">
                    <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </main>

        <motion.div
          variants={footerContainerVariants}
          initial="hidden"
          animate="show"
          className="mx-auto flex w-full max-w-[1600px] flex-col items-end justify-between gap-10 px-6 pb-10 md:px-16 lg:flex-row"
        >
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:w-3/4">
            {featurePoints.map((point) => (
              <motion.div
                key={point}
                variants={footerItemVariants}
                className="flex flex-col gap-3 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-[0_10px_30px_rgba(12,36,72,0.08)] backdrop-blur-md"
              >
                <MessageSquareMore className="h-6 w-6 stroke-[1.5] text-[#BB7D3E]" />
                <p className="max-w-[240px] text-pretty text-[14px] font-medium leading-snug text-[#0C2448]">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#about"
            variants={footerItemVariants}
            className="group flex cursor-pointer items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-sm font-medium text-[#0C2448] shadow-[0_10px_30px_rgba(12,36,72,0.08)] backdrop-blur-md"
          >
            <span>Scroll to Discover</span>
            <ArrowDown className="h-4 w-4 text-[#91121D] transition-transform group-hover:translate-y-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
