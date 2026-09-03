import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import LogoIcon from "@/assets/logo-icon";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Global Sourcing", href: "#global-sourcing" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Our Standard", href: "#standard" },
  { label: "Contact Us", href: "#enquiry" },
];

export default function VenturescapeNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onHomePage = location.pathname === "/";

  // Anchor links (`#about`, `#products`, etc.) only work on the home page.
  // From /privacy or /terms, route to `/#anchor` so React Router changes
  // the page AND ScrollToTop reads the hash and scrolls to the section.
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    if (onHomePage) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/${href}`);
    }
  };

  useEffect(() => {
    // Consider "scrolled past hero" after ~120px so the nav flips before the
    // hero fully leaves the viewport.
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileMenuOpen]);

  // Two visual states:
  //   over-hero: transparent bar, white logo/links → dark royal-blue hero
  //   scrolled:  cream bar, black logo, navy links → cream page content
  const barClass = scrolled
    ? "border-b border-[#0C2448]/8 bg-[#FBF8F2]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(12,36,72,0.06)]"
    : "border-b border-transparent bg-transparent";
  const linkClass = scrolled
    ? "text-[#0C2448]/72 hover:text-[#91121D]"
    : "text-white/85 hover:text-[#BB7D3E]";
  const ctaClass = scrolled
    ? "bg-[#0C2448] text-white hover:bg-[#153564]"
    : "bg-white text-[#0C2448] hover:bg-[#F7F2EB]";
  const menuBtnClass = scrolled
    ? "border-[#0C2448]/12 bg-white text-[#0C2448] hover:bg-[#F7F2EB]"
    : "border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${barClass}`}
      >
        <nav className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 py-4 sm:px-6 sm:py-5 md:px-8">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (onHomePage) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                navigate("/");
              }
            }}
            className="flex items-center"
            aria-label="Venturescape home"
          >
            <LogoIcon
              variant={scrolled ? "black" : "white"}
              className="h-9 w-auto"
            />
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium xl:flex xl:gap-10">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={onHomePage ? item.href : `/${item.href}`}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className={`flex min-h-[40px] items-center transition-colors ${linkClass}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 xl:gap-6">
            <a
              href={onHomePage ? "#enquiry" : "/#enquiry"}
              onClick={(e) => handleAnchorClick(e, "#enquiry")}
              className={`hidden min-h-[40px] items-center gap-2 rounded-sm px-5 py-2.5 text-[14px] font-medium shadow-[0_10px_30px_rgba(0,0,0,0.20)] transition-colors will-change-transform active:scale-[0.96] xl:flex ${ctaClass}`}
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-sm border transition-colors xl:hidden ${menuBtnClass}`}
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 xl:hidden"
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
                <LogoIcon variant="black" className="h-8 w-auto" />
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
                    href={onHomePage ? item.href : `/${item.href}`}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleAnchorClick(e, item.href);
                    }}
                    className="rounded-sm px-3 py-3 text-base font-medium text-[#0C2448] transition-colors hover:bg-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 border-t border-[#0C2448]/10 px-6 py-6">
                <a
                  href={onHomePage ? "#enquiry" : "/#enquiry"}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleAnchorClick(e, "#enquiry");
                  }}
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
    </>
  );
}
