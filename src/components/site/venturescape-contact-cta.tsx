import { ArrowRight, Mail, MapPinned, MessageCircleMore, Phone } from "lucide-react";

const contactCards = [
  {
    icon: <Phone className="h-8 w-8" />,
    title: "+971 50 000-0000",
    description: "Available for direct business conversations and immediate trade coordination.",
    variant: "secondary",
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: "hello@venturescapetrading.com",
    description: "Share requirement details, specification sheets, and commercial questions by email.",
    variant: "secondary",
  },
  {
    icon: <MapPinned className="h-8 w-8" />,
    title: "Dubai, United Arab Emirates",
    description: "Venturescape Trading - FZCO operates from Dubai with a global wood-products trading focus.",
    variant: "secondary",
  },
];

export default function VenturescapeContactCta() {
  return (
    <section id="contact" className="w-full px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl space-y-8 md:space-y-12">
        <div className="relative isolate overflow-hidden rounded-3xl border border-[#0C2448]/8 bg-[#0C2448]/[0.035] px-4 pt-12 sm:max-w-2xl sm:px-6 md:max-w-6xl lg:px-8 lg:pt-0">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16 py-14">
            <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
              <span className="inline-flex rounded-full border border-[#BB7D3E]/25 bg-white/80 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#91121D]">
                Start a Conversation
              </span>
              <h2 className="text-foreground text-2xl font-bold tracking-tight text-[#0C2448] sm:text-3xl md:text-4xl">
                Venturescape trading, <span className="text-[#91121D]">made direct</span>
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-[#0C2448]/68 sm:text-base">
                Business-facing contact, clear communication, and disciplined execution from the first enquiry onward.
              </p>
              <div className="mt-1 flex flex-wrap gap-3">
                <a href="mailto:hello@venturescapetrading.com" className="inline-flex h-10 items-center rounded-full bg-[#0C2448] px-6 text-sm font-semibold text-white">
                  Send an Email
                </a>
                <a href="https://wa.me/" className="inline-flex h-10 items-center rounded-full border border-[#0C2448]/10 bg-white px-6 text-sm font-semibold text-[#0C2448]">
                  Chat on WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="grid w-full max-w-[380px] gap-3">
                {[
                  { label: "Business email", value: "hello@venturescapetrading.com", icon: <Mail className="h-4 w-4" /> },
                  { label: "WhatsApp", value: "Direct enquiry line available", icon: <MessageCircleMore className="h-4 w-4" /> },
                  { label: "Location", value: "Dubai, United Arab Emirates", icon: <MapPinned className="h-4 w-4" /> },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-[#0C2448]/8 bg-white p-3.5">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0C2448]/10 text-[#0C2448]">
                        {item.icon}
                      </div>
                      <span className="text-xs font-medium text-[#0C2448]/54">{item.label}</span>
                    </div>
                    <div className="text-[#0C2448] text-sm font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {contactCards.map((card) => (
            <div key={card.title} className="rounded-3xl bg-[#0C2448]/[0.035] px-6 py-6">
              <div className="mb-4 text-[#0C2448]">{card.icon}</div>
              <h4 className="text-lg font-bold text-[#0C2448]">{card.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-[#0C2448]/62">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
