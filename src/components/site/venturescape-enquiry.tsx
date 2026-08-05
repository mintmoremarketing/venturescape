import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaCheckDouble } from "react-icons/fa";
import { toast } from "sonner";
import { z } from "zod";
import { ChevronDown, Mail, MessageCircleMore, Phone } from "lucide-react";
import { productPills } from "@/components/site/venturescape-data";
import { SectionIntro } from "@/components/site/venturescape-shared";

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  country: z.string().min(1, "Select a country"),
  phone: z.string().min(1, "Phone or WhatsApp is required"),
  product: z.string().min(1, "Select a product"),
  species: z.string().min(1, "Enter species or grade"),
  dimensions: z.string().min(1, "Enter dimensions or thickness"),
  quantity: z.string().min(1, "Enter required quantity"),
  port: z.string().min(1, "Enter destination port"),
  timeline: z.string().min(1, "Enter required delivery timeline"),
  brief: z.string().min(20, "Please describe the requirement (min 20 characters)."),
});

type FormValues = z.infer<typeof FormSchema>;

const fieldClassName =
  "focus-visible:ring-[#0C2448]/10 focus-visible:border-[#0C2448]/20 bg-[#0C2448]/[0.035] rounded-sm border border-transparent px-4 py-3 text-sm shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,1),inset_0px_-1px_0px_0px_rgba(0,0,0,0.05)] transition-all focus:scale-[1.01] focus:outline-none";

const errorClassName =
  "rounded-sm border border-[#91121D]/25 bg-[#91121D]/8 p-1 text-xs text-[#91121D] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,1),inset_0px_-1px_0px_0px_rgba(0,0,0,0.05)]";

function StyledSelect({
  label,
  placeholder,
  error,
  registration,
  children,
}: {
  label: string;
  placeholder: string;
  error?: string;
  registration: ReturnType<typeof useForm<FormValues>>["register"] extends (...args: any[]) => infer R ? R : never;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full space-y-2">
      <label className="block text-sm font-medium text-[#0C2448]/68">{label}</label>
      <div className="relative">
        <select
          className={`${fieldClassName} w-full appearance-none rounded-xl border-zinc-200 bg-white pr-10 shadow-xs transition-all hover:bg-zinc-50`}
          {...registration}
          defaultValue=""
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0C2448]/48" />
      </div>
      {error ? <div className={errorClassName}>{error}</div> : null}
    </div>
  );
}

export default function VenturescapeEnquiry() {
  const [contactMode, setContactMode] = useState<"email" | "whatsapp">("email");

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      name: "",
      company: "",
      country: "",
      phone: "",
      product: "",
      species: "",
      dimensions: "",
      quantity: "",
      port: "",
      timeline: "",
      brief: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    toast.custom(() => (
      <div className="flex items-center gap-2 rounded-sm border border-emerald-300 bg-emerald-50 px-4 py-3 text-emerald-700 shadow-sm sm:w-[420px]">
        <FaCheckDouble className="animate-pulse" />
        <span className="text-sm font-medium">
          Requirement captured for {values.company}. Review draft complete.
        </span>
      </div>
    ));
  };

  return (
    <section id="enquiry" className="border-y border-[#0C2448]/8 bg-white/55">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-sm bg-white shadow-md ring-1 ring-[#0C2448]/8">
            <div className="border-b border-[#0C2448]/8 px-6 py-6">
              <SectionIntro
                eyebrow="Enquiry"
                title="Tell us what you are looking for."
                description="Share your product requirement so Venturescape can review its technical and commercial feasibility. Complete specifications help us evaluate the enquiry more accurately."
              />
            </div>

            <div className="px-6 py-6">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0C2448]">Work Email</label>
                    <input placeholder="you@company.com" className={`${fieldClassName} w-full`} {...form.register("email")} />
                    {form.formState.errors.email && <div className={errorClassName + " mt-2"}>{form.formState.errors.email.message}</div>}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0C2448]">Phone or WhatsApp</label>
                    <input placeholder="+971 ..." className={`${fieldClassName} w-full`} {...form.register("phone")} />
                    {form.formState.errors.phone && <div className={errorClassName + " mt-2"}>{form.formState.errors.phone.message}</div>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0C2448]">Full Name</label>
                    <input placeholder="Your name" className={`${fieldClassName} w-full`} {...form.register("name")} />
                    {form.formState.errors.name && <div className={errorClassName + " mt-2"}>{form.formState.errors.name.message}</div>}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0C2448]">Company</label>
                    <input placeholder="Company name" className={`${fieldClassName} w-full`} {...form.register("company")} />
                    {form.formState.errors.company && <div className={errorClassName + " mt-2"}>{form.formState.errors.company.message}</div>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <StyledSelect
                    label="Country"
                    placeholder="Identify destination market"
                    registration={form.register("country")}
                    error={form.formState.errors.country?.message}
                  >
                    <optgroup label="Gulf and Middle East">
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                    </optgroup>
                    <optgroup label="South and East Asia">
                      <option value="India">India</option>
                      <option value="Vietnam">Vietnam</option>
                    </optgroup>
                    <optgroup label="Africa">
                      <option value="Kenya">Kenya</option>
                    </optgroup>
                  </StyledSelect>
                  <StyledSelect
                    label="Product Required"
                    placeholder="Identify product category"
                    registration={form.register("product")}
                    error={form.formState.errors.product?.message}
                  >
                    <optgroup label="Primary Product Lines">
                      {productPills.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </optgroup>
                  </StyledSelect>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0C2448]">Species or Grade</label>
                    <input placeholder="Species / grade" className={`${fieldClassName} w-full`} {...form.register("species")} />
                    {form.formState.errors.species && <div className={errorClassName + " mt-2"}>{form.formState.errors.species.message}</div>}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0C2448]">Dimensions or Thickness</label>
                    <input placeholder="Dimensions / thickness" className={`${fieldClassName} w-full`} {...form.register("dimensions")} />
                    {form.formState.errors.dimensions && <div className={errorClassName + " mt-2"}>{form.formState.errors.dimensions.message}</div>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0C2448]">Required Quantity</label>
                    <input placeholder="Required quantity" className={`${fieldClassName} w-full`} {...form.register("quantity")} />
                    {form.formState.errors.quantity && <div className={errorClassName + " mt-2"}>{form.formState.errors.quantity.message}</div>}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0C2448]">Destination Port</label>
                    <input placeholder="Destination port" className={`${fieldClassName} w-full`} {...form.register("port")} />
                    {form.formState.errors.port && <div className={errorClassName + " mt-2"}>{form.formState.errors.port.message}</div>}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#0C2448]">Required Delivery Timeline</label>
                  <input placeholder="Delivery timeline" className={`${fieldClassName} w-full`} {...form.register("timeline")} />
                  {form.formState.errors.timeline && <div className={errorClassName + " mt-2"}>{form.formState.errors.timeline.message}</div>}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#0C2448]">Requirement Brief</label>
                  <textarea
                    placeholder="Describe species, grade, dimensions, quantity, destination market, and any supporting details..."
                    className={`${fieldClassName} min-h-[150px] w-full resize-none`}
                    {...form.register("brief")}
                  />
                  <p className="mt-2 text-xs text-[#0C2448]/54">
                    The more context you provide, the better the requirement review.
                  </p>
                  {form.formState.errors.brief && <div className={errorClassName + " mt-2"}>{form.formState.errors.brief.message}</div>}
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#0C2448] px-5 py-3 text-sm font-medium text-white transition-all hover:scale-[1.01] active:scale-95"
                >
                  Submit Your Requirement
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-5">
            <div className="overflow-hidden rounded-sm border border-[#0C2448]/8 bg-white shadow-md">
              <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
                <div className="border-b border-[#0C2448]/8 p-6 md:border-b-0 md:border-r">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#0C2448]">
                    Prefer a direct conversation?
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#0C2448]/62">
                    Contact Venturescape directly by email or WhatsApp if you already have a detailed requirement and want a faster commercial discussion.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setContactMode("email")}
                      className={`rounded-sm px-4 py-2 text-sm font-medium transition ${contactMode === "email" ? "bg-[#0C2448] text-white" : "border border-[#0C2448]/10 bg-white text-[#0C2448]"}`}
                    >
                      Email Route
                    </button>
                    <button
                      type="button"
                      onClick={() => setContactMode("whatsapp")}
                      className={`rounded-sm px-4 py-2 text-sm font-medium transition ${contactMode === "whatsapp" ? "bg-[#0C2448] text-white" : "border border-[#0C2448]/10 bg-white text-[#0C2448]"}`}
                    >
                      WhatsApp Route
                    </button>
                  </div>

                  <div className="mt-6 rounded-sm border border-[#0C2448]/8 bg-[#0C2448]/[0.035] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#91121D]">
                      {contactMode === "email" ? "Email-first" : "WhatsApp-first"}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#0C2448]/68">
                      {contactMode === "email"
                        ? "Best for specification sheets, commercial notes, and structured product requirements."
                        : "Best for quick introductions, early clarification, and direct conversation before formal review."}
                    </p>
                  </div>
                </div>

                <div className="min-h-[260px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?q=80&w=1200&auto=format&fit=crop"
                    alt="Wood product requirement planning"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: <Phone className="h-8 w-8" />,
                  title: "+971 50 000-0000",
                  description: "Available for requirement conversations and buyer-side coordination.",
                },
                {
                  icon: <Mail className="h-8 w-8" />,
                  title: "hello@venturescapetrading.com",
                  description: "Email supporting documents or commercial details for review.",
                },
                {
                  icon: <MessageCircleMore className="h-8 w-8" />,
                  title: "WhatsApp available",
                  description: "Use direct messaging for quick trade introductions and first-pass coordination.",
                },
              ].map((card) => (
                <div key={card.title} className="min-w-0 rounded-3xl bg-[#0C2448]/[0.035] px-5 py-6">
                  <div className="mb-4 text-[#0C2448]">{card.icon}</div>
                  <h4 className="break-words text-[1.05rem] font-bold leading-8 text-[#0C2448]">
                    {card.title}
                  </h4>
                  <p className="mt-3 text-sm leading-8 text-[#0C2448]/62">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
