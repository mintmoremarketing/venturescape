import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { motion, type Variants } from "framer-motion";
import LogoIcon from "@/assets/logo-icon";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const riseItem: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", duration: 0.6, bounce: 0 },
  },
};


const navigation = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Global Sourcing", href: "#global-sourcing" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Our Standard", href: "#standard" },
  { label: "Contact", href: "#enquiry" },
];

const products = [
  "Timber",
  "Face Veneer",
  "Core Veneer",
  "Plywood",
  "MDF",
  "Wood-Based Materials",
];

const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Dubai, United Arab Emirates", href: "#" },
];

export default function Footer20() {
  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="relative flex w-full flex-col justify-between overflow-hidden border-t border-neutral-200 bg-[#f4f4f2] font-sans text-neutral-600 transition-colors duration-300"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col border-x border-dashed border-neutral-300 px-6 pt-20 md:px-12 md:pt-32 lg:px-16">
        <div className="mb-10 grid grid-cols-1 gap-16 md:mb-16 lg:mb-24 lg:grid-cols-12 lg:gap-8">
          <motion.div
            variants={riseItem}
            className="flex flex-col gap-6 md:gap-8 lg:col-span-5 xl:col-span-4"
          >
            <div className="flex items-center">
              <LogoIcon variant="black" className="h-10 w-auto" alt="Venturescape Trading" />
            </div>

            <a
              href="#enquiry"
              className="group inline-flex w-fit items-center gap-2 text-[17px] font-medium text-[#0C2448] transition-colors hover:text-[#153564]"
            >
              Send an enquiry
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={18}
                className="text-neutral-500 transition-colors group-hover:text-[#0C2448]"
              />
            </a>
          </motion.div>

          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:col-span-7 lg:gap-8 xl:col-span-8">
            <motion.div variants={riseItem} className="flex flex-col gap-6">
              <h4 className="font-medium text-neutral-900">Navigation</h4>
              <ul className="flex flex-col gap-3">
                {navigation.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] text-neutral-600 transition-colors hover:text-neutral-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={riseItem} className="flex flex-col gap-6">
              <h4 className="font-medium text-neutral-900">Products</h4>
              <ul className="flex flex-col gap-3">
                {products.map((p) => (
                  <li key={p} className="text-[15px] text-neutral-600">
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={riseItem} className="flex flex-col gap-6">
              <h4 className="font-medium text-neutral-900">Company</h4>
              <ul className="flex flex-col gap-3">
                {legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] text-neutral-600 transition-colors hover:text-neutral-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

      </div>

      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between md:px-8">
          <p>Venturescape Trading — FZCO, registered in Dubai, United Arab Emirates.</p>
          <p>© 2026 Venturescape Trading — FZCO. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
