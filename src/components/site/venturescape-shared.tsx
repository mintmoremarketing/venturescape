import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const riseItem: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", duration: 0.6, bounce: 0 },
  },
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="inline-flex rounded-full border border-[#BB7D3E]/25 bg-white/80 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#91121D] shadow-[0_1px_0_rgba(255,255,255,0.75),0_4px_14px_rgba(12,36,72,0.05)]">
        {eyebrow}
      </span>
      <h2 className="max-w-3xl text-3xl leading-[0.98] font-semibold tracking-[-0.04em] text-[#0C2448] md:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-7 text-[#0C2448]/72 md:text-lg">
        {description}
      </p>
    </div>
  );
}

export function PremiumIconTile({
  icon: Icon,
}: {
  icon: LucideIcon;
}) {
  return (
    <div className="mb-2 size-fit rounded-lg bg-[#0C2448]/6 p-px">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_6px_0_rgba(0,0,0,0.07),0_2px_4px_0_rgba(0,0,0,0.05)]">
        <Icon className="h-5 w-5 text-[#0C2448]" />
      </div>
    </div>
  );
}

export function PremiumCard({
  title,
  body,
  icon,
  pill,
  dark = false,
  compact = false,
}: {
  title: string;
  body: string;
  icon: LucideIcon;
  pill?: string;
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <motion.article
      variants={riseItem}
      className={
        dark
          ? "rounded-3xl bg-white/6 ring-0 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
          : "rounded-3xl bg-[#0C2448]/[0.035] ring-0 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(12,36,72,0.12)]"
      }
    >
      <div className={`relative flex h-full flex-col ${compact ? "p-0" : "p-6"}`}>
        <PremiumIconTile icon={icon} />
        <h3 className={`text-lg font-medium ${dark ? "text-white" : "text-[#0C2448]"}`}>{title}</h3>
        <p className={`mt-2 text-sm leading-7 ${dark ? "text-white/72" : "text-[#0C2448]/70"}`}>{body}</p>
        {pill ? (
          <div
            className={`mt-5 self-start ${dark ? "inline-flex rounded-lg bg-white/10 p-0.5" : "inline-flex rounded-lg bg-[#0C2448]/6 p-0.5"}`}
          >
            <div
              className={
                dark
                  ? "inline-flex items-center rounded-md bg-white/10 px-2.5 py-1 text-[10px] font-medium whitespace-nowrap text-white/80 shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.04),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)]"
                  : "inline-flex items-center rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-medium whitespace-nowrap text-[#0C2448]/72 shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)]"
              }
            >
              {pill}
            </div>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
