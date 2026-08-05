import { motion, type Variants } from "framer-motion";
import LogoIcon from "@/assets/logo-icon";
import { footerNavigation, productPills } from "@/components/site/venturescape-data";

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", duration: 0.6, bounce: 0 },
  },
};

export default function VenturescapeFooter() {
  return (
    <motion.footer
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative w-full overflow-hidden border-t border-[#0C2448]/8 bg-[#0C2448] text-white/70"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col border-x border-dashed border-white/10 px-6 pt-20 md:px-12 lg:px-16">
        <div className="mb-10 grid grid-cols-1 gap-16 lg:mb-24 lg:grid-cols-12 lg:gap-8">
          <motion.div variants={rise} className="flex flex-col gap-6 lg:col-span-5 xl:col-span-4">
            <div className="flex items-center gap-2 text-white">
              <LogoIcon className="size-8 text-[#BB7D3E]" />
              <span className="mt-0.5 text-lg font-medium tracking-wide">Venturescape Trading</span>
            </div>
            <p className="max-w-[360px] text-[15px] leading-relaxed text-white/66">
              Focused on timber, veneers, plywood, MDF, and allied wood products with clear commercial coordination and disciplined trade execution.
            </p>
            <a href="mailto:hello@venturescapetrading.com" className="inline-flex items-center gap-2 text-[17px] text-white/90 transition-colors hover:text-white">
              hello@venturescapetrading.com
            </a>
          </motion.div>

          <div className="grid grid-cols-2 gap-12 lg:col-span-7 lg:gap-8 xl:col-span-8 sm:grid-cols-3">
            <motion.div variants={rise} className="flex flex-col gap-6">
              <h4 className="font-medium text-white">Navigation</h4>
              <ul className="flex flex-col gap-3">
                {footerNavigation.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[15px] text-white/68 transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={rise} className="flex flex-col gap-6">
              <h4 className="font-medium text-white">Products</h4>
              <ul className="flex flex-col gap-3">
                {productPills.map((item) => (
                  <li key={item} className="text-[15px] text-white/68">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={rise} className="flex flex-col gap-6">
              <h4 className="font-medium text-white">Legal and Contact</h4>
              <ul className="flex flex-col gap-3">
                <li className="text-[15px] text-white/68">Privacy Policy</li>
                <li className="text-[15px] text-white/68">Terms of Use</li>
                <li className="text-[15px] text-white/68">Dubai, United Arab Emirates</li>
                <li className="text-[15px] text-white/68">WhatsApp and LinkedIn available on request</li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div variants={rise} className="flex w-full justify-center pb-0">
          <div className="w-full overflow-hidden">
            <div className="bg-[linear-gradient(180deg,rgba(187,125,62,0.25),rgba(187,125,62,0.05)_30%,rgba(255,255,255,0.03)_100%)] bg-clip-text text-center text-[4.5rem] font-semibold tracking-[-0.08em] text-transparent md:text-[8rem] lg:text-[10rem]">
              VENTURESCAPE
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-white/54 md:flex-row md:items-center md:justify-between md:px-8">
          <p>Venturescape Trading - FZCO is a free-zone company registered in Dubai, United Arab Emirates.</p>
          <p>© 2026 Venturescape Trading - FZCO. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
