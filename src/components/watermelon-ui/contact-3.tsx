import React, { useState } from "react";
import { toast } from "sonner";
import { FaCheckDouble } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  IoPerson,
  IoMail,
  IoBusiness,
  IoCall,
  IoLocationSharp,
  IoArrowForward,
  IoLeaf,
  IoLayers,
  IoGrid,
  IoAlbums,
  IoCube,
  IoConstruct,
} from "react-icons/io5";
import FileUploadArea, {
  type FileEntry,
} from "@/components/watermelon-ui/file-upload-3";

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  species: string;
  grade: string;
  thickness: string;
  dimensions: string;
  quantity: string;
  destinationCountry: string;
  destinationPort: string;
  timeline: string;
  message: string;
}

// Placeholder — swap for the confirmed UAE number when the client provides it.
export const VENTURESCAPE_WHATSAPP = "971500000000";
export const WHATSAPP_OPENING_MESSAGE =
  "Hello, I would like to enquire about a wood-product requirement.";
export const VENTURESCAPE_ENQUIRY_EMAIL = "venturescapetrading.fzco@gmail.com";

const destinations = [
  { value: "AE", label: "United Arab Emirates", flag: "ae" },
  { value: "SA", label: "Saudi Arabia", flag: "sa" },
  { value: "IN", label: "India", flag: "in" },
  { value: "VN", label: "Vietnam", flag: "vn" },
  { value: "KE", label: "Kenya", flag: "ke" },
  { value: "OM", label: "Oman", flag: "om" },
  { value: "QA", label: "Qatar", flag: "qa" },
  { value: "EG", label: "Egypt", flag: "eg" },
  { value: "TR", label: "Türkiye", flag: "tr" },
  { value: "ZA", label: "South Africa", flag: "za" },
];

const productGroups = [
  {
    label: "Primary Product Lines",
    items: [
      { value: "Timber", label: "Timber", icon: IoLeaf },
      { value: "Plywood", label: "Plywood", icon: IoLayers },
      { value: "Face Veneer", label: "Face Veneer", icon: IoAlbums },
      { value: "Core Veneer", label: "Core Veneer", icon: IoGrid },
      { value: "MDF", label: "MDF", icon: IoCube },
    ],
  },
  {
    label: "Other",
    items: [
      { value: "Wood-Based Panels", label: "Wood-Based Panels", icon: IoLayers },
      { value: "Other", label: "Other wood product", icon: IoConstruct },
    ],
  },
];

// The soft inset-shadow field style the client liked from the previous
// design — restored verbatim.
const fieldShadow =
  "shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0px_0px_0px_1px_rgba(12,36,72,0.08),0px_1px_2px_-1px_rgba(12,36,72,0.08),0px_2px_4px_0px_rgba(12,36,72,0.06)]";

const inputClass =
  "rounded-md border-0 bg-transparent pl-10 text-[#0C2448] placeholder:text-[#0C2448]/40 focus-visible:ring-2 focus-visible:ring-[#0C2448]/15";

const labelClass = "block text-sm font-medium text-[#0C2448]";

export default function VenturescapeEnquirySection() {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    species: "",
    grade: "",
    thickness: "",
    dimensions: "",
    quantity: "",
    destinationCountry: "",
    destinationPort: "",
    timeline: "",
    message: "",
  });

  const [files, setFiles] = useState<FileEntry[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const updateField = (field: keyof EnquiryFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFilesSelect = (selected: File[]) => {
    const next = selected.map<FileEntry>((f) => ({
      id: `${f.name}-${f.size}-${Date.now()}`,
      file: f,
      progress: 100,
      state: "completed",
    }));
    setFiles((prev) => [...prev, ...next].slice(0, 5));
  };

  const handleFileRemove = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      product: "",
      species: "",
      grade: "",
      thickness: "",
      dimensions: "",
      quantity: "",
      destinationCountry: "",
      destinationPort: "",
      timeline: "",
      message: "",
    });
    setFiles([]);
  };

  const showSuccessToast = () => {
    toast.custom(() => (
      <div className="flex items-center gap-2 rounded-sm border border-emerald-300 bg-emerald-50 px-4 py-3 text-emerald-700 shadow-sm sm:w-[420px]">
        <FaCheckDouble className="animate-pulse" />
        <span className="text-sm font-medium">
          Thank you for contacting Venturescape Trading. Your requirement has
          been received and will be reviewed by our team.
        </span>
      </div>
    ));
  };

  const showErrorToast = (msg: string) => {
    toast.custom(() => (
      <div className="rounded-sm border border-red-300 bg-red-50 px-4 py-3 text-red-700 shadow-sm sm:w-[420px]">
        <p className="text-sm font-medium">
          Sorry, we couldn't submit your enquiry. {msg}
        </p>
        <p className="mt-1 text-xs">Please try again, or reach us on WhatsApp.</p>
      </div>
    ));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const subject = `Enquiry from ${formData.company || formData.fullName || "website"} — ${formData.product || "wood product"}`;

    const fd = new FormData();
    fd.append("Name", formData.fullName);
    fd.append("Company", formData.company);
    fd.append("Email", formData.email);
    fd.append("Phone / WhatsApp", formData.phone);
    fd.append("Product", formData.product);
    fd.append("Species", formData.species);
    fd.append("Grade", formData.grade);
    fd.append("Thickness", formData.thickness);
    fd.append("Dimensions", formData.dimensions);
    fd.append("Quantity", formData.quantity);
    fd.append("Country", formData.destinationCountry);
    fd.append("Destination Port", formData.destinationPort);
    fd.append("Timeline", formData.timeline);
    fd.append("Additional Requirements", formData.message);
    files.forEach((f) => fd.append("attachment", f.file, f.file.name));

    fd.append("_subject", subject);
    fd.append("_captcha", "false");
    fd.append("_template", "table");
    if (formData.email) fd.append("_replyto", formData.email);

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${VENTURESCAPE_ENQUIRY_EMAIL}`,
        { method: "POST", headers: { Accept: "application/json" }, body: fd },
      );
      let ok = res.ok;
      let responseMessage = "";
      try {
        const json = await res.json();
        responseMessage = json?.message || "";
        if (typeof json?.success !== "undefined") {
          ok = String(json.success).toLowerCase() === "true";
        }
      } catch {
        // fall back to HTTP status
      }
      if (ok) {
        showSuccessToast();
        resetForm();
      } else {
        showErrorToast(
          responseMessage ||
            "The form email may not be activated in FormSubmit yet. Please activate the inbox and try again.",
        );
      }
    } catch {
      showErrorToast("There was a network issue. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const selectContentClass =
    "w-max min-w-[260px] max-w-[calc(100vw-2rem)] rounded-xl border-[#0C2448]/10 bg-white p-1 shadow-lg";
  const triggerClass = `w-full rounded-md border-0 bg-transparent pl-10 text-left text-[#0C2448] focus-visible:ring-2 focus-visible:ring-[#0C2448]/15`;

  return (
    <section
      id="enquiry"
      className="relative w-full overflow-hidden bg-[#0C2448] px-5 py-20 text-white md:px-8 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 12% -8%, rgba(65,105,225,0.25), transparent 45%), radial-gradient(circle at 88% 100%, rgba(187,125,62,0.15), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl">
        {/* Section head on the navy background */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#BB7D3E]">
            Tell Us What You Need. Start a Conversation.
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
            Contact Us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/72">
            Share your requirement — species, quantity, destination and
            timeline — and our team will evaluate the appropriate sourcing and
            commercial options.
          </p>
        </div>

        {/* Clean white form box floating inside the navy section */}
        <div className="rounded-3xl bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:p-8 md:p-10">
          <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className={labelClass}>
                      Full Name
                    </Label>
                    <div className={`relative rounded-md bg-white ${fieldShadow}`}>
                      <IoPerson className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#0C2448]/72" />
                      <Input
                        id="fullName"
                        placeholder="Your name"
                        value={formData.fullName}
                        onChange={(e) => updateField("fullName", e.target.value)}
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className={labelClass}>
                      Work Email
                    </Label>
                    <div className={`relative rounded-md bg-white ${fieldShadow}`}>
                      <IoMail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#0C2448]/72" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className={labelClass}>
                      Phone or WhatsApp
                    </Label>
                    <div className={`relative rounded-md bg-white ${fieldShadow}`}>
                      <IoCall className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#0C2448]/72" />
                      <Input
                        id="phone"
                        placeholder="Include country code"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className={labelClass}>
                      Company
                    </Label>
                    <div className={`relative rounded-md bg-white ${fieldShadow}`}>
                      <IoBusiness className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#0C2448]/72" />
                      <Input
                        id="company"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={(e) => updateField("company", e.target.value)}
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product" className={labelClass}>
                      Product Required
                    </Label>
                    <div className={`relative rounded-md bg-white ${fieldShadow}`}>
                      <IoLeaf className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#0C2448]/72" />
                      <Select
                        value={formData.product}
                        onValueChange={(v) => updateField("product", v ?? "")}
                      >
                        <SelectTrigger id="product" className={triggerClass}>
                          <SelectValue placeholder="Choose a product" />
                        </SelectTrigger>
                        <SelectContent className={selectContentClass}>
                          {productGroups.map((group) => (
                            <SelectGroup key={group.label}>
                              <SelectLabel className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0C2448]/72">
                                {group.label}
                              </SelectLabel>
                              {group.items.map((item) => (
                                <SelectItem
                                  key={item.value}
                                  value={item.value}
                                  className="rounded-lg"
                                >
                                  <span className="flex items-center gap-2">
                                    <item.icon className="size-4 text-[#BB7D3E]" />
                                    {item.label}
                                  </span>
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="species" className={labelClass}>
                      Species
                    </Label>
                    <div className={`relative rounded-md bg-white ${fieldShadow}`}>
                      <IoLeaf className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#0C2448]/72" />
                      <Input
                        id="species"
                        placeholder="e.g. Meranti, Oak, Poplar"
                        value={formData.species}
                        onChange={(e) => updateField("species", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="grade" className={labelClass}>
                      Grade
                    </Label>
                    <div className={`relative rounded-md bg-white ${fieldShadow}`}>
                      <IoAlbums className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#0C2448]/72" />
                      <Input
                        id="grade"
                        placeholder="e.g. BB/CC, FAS, No.1 Common"
                        value={formData.grade}
                        onChange={(e) => updateField("grade", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="thickness" className={labelClass}>
                      Thickness
                    </Label>
                    <div className={`relative rounded-md bg-white ${fieldShadow}`}>
                      <IoLayers className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#0C2448]/72" />
                      <Input
                        id="thickness"
                        placeholder="e.g. 18mm, 0.5mm"
                        value={formData.thickness}
                        onChange={(e) => updateField("thickness", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dimensions" className={labelClass}>
                      Dimensions
                    </Label>
                    <div className={`relative rounded-md bg-white ${fieldShadow}`}>
                      <IoGrid className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#0C2448]/72" />
                      <Input
                        id="dimensions"
                        placeholder="e.g. 4x8 ft, 1220x2440 mm"
                        value={formData.dimensions}
                        onChange={(e) => updateField("dimensions", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity" className={labelClass}>
                      Required Quantity
                    </Label>
                    <div className={`relative rounded-md bg-white ${fieldShadow}`}>
                      <IoCube className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#0C2448]/72" />
                      <Select
                        value={formData.quantity}
                        onValueChange={(v) => updateField("quantity", v ?? "")}
                      >
                        <SelectTrigger id="quantity" className={triggerClass}>
                          <SelectValue placeholder="Select quantity" />
                        </SelectTrigger>
                        <SelectContent className={selectContentClass}>
                          {[
                            "1 x 20 FCL",
                            "1 x 40 HC",
                            "2 – 4 x 40 HC",
                            "5+ x 40 HC",
                            "Trial order",
                            "Custom / to be discussed",
                          ].map((q) => (
                            <SelectItem key={q} value={q} className="rounded-lg">
                              {q}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country" className={labelClass}>
                      Country
                    </Label>
                    <div className={`relative rounded-md bg-white ${fieldShadow}`}>
                      <IoLocationSharp className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#0C2448]/72" />
                      <Select
                        value={formData.destinationCountry}
                        onValueChange={(v) =>
                          updateField("destinationCountry", v ?? "")
                        }
                      >
                        <SelectTrigger id="country" className={triggerClass}>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent className={selectContentClass}>
                          {destinations.map((d) => (
                            <SelectItem
                              key={d.value}
                              value={d.value}
                              className="rounded-lg"
                            >
                              <span className="flex items-center gap-2">
                                <img
                                  src={`https://flagcdn.com/w40/${d.flag}.png`}
                                  alt=""
                                  className="h-3 w-4.5 rounded-xs border border-[#0C2448]/10 object-cover"
                                />
                                <span className="truncate">{d.label}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="port" className={labelClass}>
                      Destination Port
                    </Label>
                    <div className={`relative rounded-md bg-white ${fieldShadow}`}>
                      <IoLocationSharp className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#0C2448]/72" />
                      <Input
                        id="port"
                        placeholder="e.g. Jebel Ali, Nhava Sheva"
                        value={formData.destinationPort}
                        onChange={(e) =>
                          updateField("destinationPort", e.target.value)
                        }
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="timeline" className={labelClass}>
                      Delivery Timeline
                    </Label>
                    <div className={`relative rounded-md bg-white ${fieldShadow}`}>
                      <IoArrowForward className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#0C2448]/72" />
                      <Select
                        value={formData.timeline}
                        onValueChange={(v) => updateField("timeline", v ?? "")}
                      >
                        <SelectTrigger id="timeline" className={triggerClass}>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent className={selectContentClass}>
                          {[
                            "Under 4 weeks",
                            "4 – 8 weeks",
                            "8 – 12 weeks",
                            "Flexible",
                          ].map((t) => (
                            <SelectItem key={t} value={t} className="rounded-lg">
                              {t}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="message" className={labelClass}>
                      Additional Requirements
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Moisture, packing preferences, certifications, end use — anything that helps us understand the requirement."
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      required
                      className={`min-h-32 resize-none rounded-md border-0 bg-white text-[#0C2448] placeholder:text-[#0C2448]/40 focus-visible:ring-2 focus-visible:ring-[#0C2448]/15 ${fieldShadow}`}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <FileUploadArea
                      title="Attach supporting files (optional)"
                      description="Spec sheets, PO drafts, drawings, or reference photos. PDF, images, Excel accepted."
                      maxFiles={5}
                      maxSizeMB={10}
                      accept=".pdf,.png,.jpg,.jpeg,.xls,.xlsx,.csv,.doc,.docx"
                      files={files}
                      onFilesSelect={handleFilesSelect}
                      onFileRemove={handleFileRemove}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-[#0C2448]/8 pt-6 sm:flex-row sm:items-center sm:justify-end">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="gap-2 rounded-md bg-[#0C2448] px-6 py-6 text-white shadow-[0_10px_30px_rgba(12,36,72,0.22)] transition-colors hover:bg-[#153564] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? "Sending…" : "Submit Your Requirement"}
                    {!submitting && <IoArrowForward className="h-4 w-4" />}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}
