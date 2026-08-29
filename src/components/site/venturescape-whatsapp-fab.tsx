import { FaWhatsapp } from "react-icons/fa";
import {
  VENTURESCAPE_WHATSAPP,
  WHATSAPP_OPENING_MESSAGE,
} from "@/components/watermelon-ui/contact-3";

export default function VenturescapeWhatsappFab() {
  const href = `https://wa.me/${VENTURESCAPE_WHATSAPP}?text=${encodeURIComponent(
    WHATSAPP_OPENING_MESSAGE,
  )}&v=2`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35),0_4px_10px_rgba(0,0,0,0.15)] ring-2 ring-white/60 transition-transform hover:scale-105 active:scale-95 md:right-8 md:bottom-8"
    >
      <FaWhatsapp className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden rounded-md bg-[#0C2448] px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
