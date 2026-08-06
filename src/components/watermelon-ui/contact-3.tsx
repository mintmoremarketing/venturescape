import React, { useState } from "react";
import { toast } from "sonner";
import { FaCheckDouble, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

// Placeholder — swap for real UAE number when confirmed.
export const VENTURESCAPE_WHATSAPP = "971500000000";
export const WHATSAPP_OPENING_MESSAGE =
  "Hello, I would like to enquire about a wood-product requirement.";

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

const fieldShadow =
  "shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0px_0px_0px_1px_rgba(12,36,72,0.08),0px_1px_2px_-1px_rgba(12,36,72,0.08),0px_2px_4px_0px_rgba(12,36,72,0.06)]";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.custom(() => (
      <div className="flex items-center gap-2 rounded-sm border border-emerald-300 bg-emerald-50 px-4 py-3 text-emerald-700 shadow-sm sm:w-[420px]">
        <FaCheckDouble className="animate-pulse" />
        <span className="text-sm font-medium">
          Thank you for contacting Venturescape Trading. Your requirement has
          been received and will be reviewed by our team.
        </span>
      </div>
    ));
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

  const whatsappHref = `https://wa.me/${VENTURESCAPE_WHATSAPP}?text=${encodeURIComponent(
    WHATSAPP_OPENING_MESSAGE
  )}`;

  return (
    <section id="enquiry" className="w-full text-[#0C2448]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#91121D]">
            Send an Enquiry
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#0C2448] sm:text-5xl">
            Share your requirement. We'll take it from there.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#0C2448]/68 md:text-lg">
            Fill in what you're looking for and our team will review it and
            reach out with sourcing options, pricing, and next steps. The more
            detail you share up front, the sharper the response we can send back.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="fullName" className="text-sm font-medium text-[#0C2448]">
                    Full Name
                  </Label>
                  <div className={`relative rounded-md bg-white ${fieldShadow}`}>
                    <IoPerson className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#0C2448]/48" />
                    <Input
                      id="fullName"
                      placeholder="Your name"
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      required
                      className="rounded-md border-0 bg-transparent pl-10 text-[#0C2448] placeholder:text-[#0C2448]/40 focus-visible:ring-2 focus-visible:ring-[#0C2448]/15"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm font-medium text-[#0C2448]">
                    Work Email
                  </Label>
                  <div className={`relative rounded-md bg-white ${fieldShadow}`}>
                    <IoMail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#0C2448]/48" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      required
                      className="rounded-md border-0 bg-transparent pl-10 text-[#0C2448] placeholder:text-[#0C2448]/40 focus-visible:ring-2 focus-visible:ring-[#0C2448]/15"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-sm font-medium text-[#0C2448]">
                    Phone or WhatsApp
                  </Label>
                  <div className={`relative rounded-md bg-white ${fieldShadow}`}>
                    <IoCall className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#0C2448]/48" />
                    <Input
                      id="phone"
                      placeholder="Include country code"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      required
                      className="rounded-md border-0 bg-transparent pl-10 text-[#0C2448] placeholder:text-[#0C2448]/40 focus-visible:ring-2 focus-visible:ring-[#0C2448]/15"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-sm font-medium text-[#0C2448]">
                    Company
                  </Label>
                  <div className={`relative rounded-md bg-white ${fieldShadow}`}>
                    <IoBusiness className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#0C2448]/48" />
                    <Input
                      id="company"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      required
                      className="rounded-md border-0 bg-transparent pl-10 text-[#0C2448] placeholder:text-[#0C2448]/40 focus-visible:ring-2 focus-visible:ring-[#0C2448]/15"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="product" className="text-sm font-medium text-[#0C2448]">
                    Product Required
                  </Label>
                  <Select
                    value={formData.product}
                    onValueChange={(value) => updateField("product", value ?? "")}
                  >
                    <SelectTrigger
                      id="product"
                      className={`rounded-md border-0 bg-white text-[#0C2448] ${fieldShadow}`}
                    >
                      <SelectValue placeholder="Choose a product" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-[#0C2448]/10 bg-white p-1 shadow-lg">
                      {productGroups.map((group) => (
                        <SelectGroup key={group.label}>
                          <SelectLabel className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0C2448]/48">
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

                <div className="space-y-1.5">
                  <Label htmlFor="species" className="text-sm font-medium text-[#0C2448]">
                    Species
                  </Label>
                  <div className={`rounded-md bg-white ${fieldShadow}`}>
                    <Input
                      id="species"
                      placeholder="e.g. Meranti, Oak, Poplar"
                      value={formData.species}
                      onChange={(e) => updateField("species", e.target.value)}
                      className="rounded-md border-0 bg-transparent text-[#0C2448] placeholder:text-[#0C2448]/40 focus-visible:ring-2 focus-visible:ring-[#0C2448]/15"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="grade" className="text-sm font-medium text-[#0C2448]">
                    Grade
                  </Label>
                  <div className={`rounded-md bg-white ${fieldShadow}`}>
                    <Input
                      id="grade"
                      placeholder="e.g. BB/CC, FAS, No.1 Common"
                      value={formData.grade}
                      onChange={(e) => updateField("grade", e.target.value)}
                      className="rounded-md border-0 bg-transparent text-[#0C2448] placeholder:text-[#0C2448]/40 focus-visible:ring-2 focus-visible:ring-[#0C2448]/15"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="thickness" className="text-sm font-medium text-[#0C2448]">
                    Thickness
                  </Label>
                  <div className={`rounded-md bg-white ${fieldShadow}`}>
                    <Input
                      id="thickness"
                      placeholder="e.g. 18mm, 0.5mm"
                      value={formData.thickness}
                      onChange={(e) => updateField("thickness", e.target.value)}
                      className="rounded-md border-0 bg-transparent text-[#0C2448] placeholder:text-[#0C2448]/40 focus-visible:ring-2 focus-visible:ring-[#0C2448]/15"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="dimensions" className="text-sm font-medium text-[#0C2448]">
                    Dimensions
                  </Label>
                  <div className={`rounded-md bg-white ${fieldShadow}`}>
                    <Input
                      id="dimensions"
                      placeholder="e.g. 4x8 ft, 1220x2440 mm"
                      value={formData.dimensions}
                      onChange={(e) => updateField("dimensions", e.target.value)}
                      className="rounded-md border-0 bg-transparent text-[#0C2448] placeholder:text-[#0C2448]/40 focus-visible:ring-2 focus-visible:ring-[#0C2448]/15"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="quantity" className="text-sm font-medium text-[#0C2448]">
                    Required Quantity
                  </Label>
                  <Select
                    value={formData.quantity}
                    onValueChange={(value) => updateField("quantity", value ?? "")}
                  >
                    <SelectTrigger
                      id="quantity"
                      className={`rounded-md border-0 bg-white text-[#0C2448] ${fieldShadow}`}
                    >
                      <SelectValue placeholder="Select quantity" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-[#0C2448]/10 bg-white p-1 shadow-lg">
                      <SelectItem value="1 x 20 FCL" className="rounded-lg">1 x 20 FCL</SelectItem>
                      <SelectItem value="1 x 40 HC" className="rounded-lg">1 x 40 HC</SelectItem>
                      <SelectItem value="2-4 x 40 HC" className="rounded-lg">2 – 4 x 40 HC</SelectItem>
                      <SelectItem value="5+ x 40 HC" className="rounded-lg">5+ x 40 HC</SelectItem>
                      <SelectItem value="Trial order" className="rounded-lg">Trial order</SelectItem>
                      <SelectItem value="Custom" className="rounded-lg">Custom / to be discussed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="destinationCountry" className="text-sm font-medium text-[#0C2448]">
                    Destination Country
                  </Label>
                  <Select
                    value={formData.destinationCountry}
                    onValueChange={(value) => updateField("destinationCountry", value ?? "")}
                  >
                    <SelectTrigger
                      id="destinationCountry"
                      className={`rounded-md border-0 bg-white text-[#0C2448] ${fieldShadow}`}
                    >
                      <SelectValue placeholder="Choose destination" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-[#0C2448]/10 bg-white p-1 shadow-lg">
                      {destinations.map((d) => (
                        <SelectItem key={d.value} value={d.value} className="rounded-lg">
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

                <div className="space-y-1.5">
                  <Label htmlFor="destinationPort" className="text-sm font-medium text-[#0C2448]">
                    Destination Port
                  </Label>
                  <div className={`relative rounded-md bg-white ${fieldShadow}`}>
                    <IoLocationSharp className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#0C2448]/48" />
                    <Input
                      id="destinationPort"
                      placeholder="e.g. Jebel Ali, Nhava Sheva"
                      value={formData.destinationPort}
                      onChange={(e) => updateField("destinationPort", e.target.value)}
                      required
                      className="rounded-md border-0 bg-transparent pl-10 text-[#0C2448] placeholder:text-[#0C2448]/40 focus-visible:ring-2 focus-visible:ring-[#0C2448]/15"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="timeline" className="text-sm font-medium text-[#0C2448]">
                    Delivery Timeline
                  </Label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) => updateField("timeline", value ?? "")}
                  >
                    <SelectTrigger
                      id="timeline"
                      className={`rounded-md border-0 bg-white text-[#0C2448] ${fieldShadow}`}
                    >
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-[#0C2448]/10 bg-white p-1 shadow-lg">
                      <SelectItem value="Under 4 weeks" className="rounded-lg">Under 4 weeks</SelectItem>
                      <SelectItem value="4 to 8 weeks" className="rounded-lg">4 – 8 weeks</SelectItem>
                      <SelectItem value="8 to 12 weeks" className="rounded-lg">8 – 12 weeks</SelectItem>
                      <SelectItem value="Flexible" className="rounded-lg">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="message" className="text-sm font-medium text-[#0C2448]">
                    Tell Us More
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Species, grade, dimensions, moisture, packing preferences, certifications, end use — anything that helps us understand the requirement."
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

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  type="submit"
                  size="lg"
                  className="gap-2 rounded-md bg-[#0C2448] px-6 py-6 text-white shadow-[0_10px_30px_rgba(12,36,72,0.22)] transition-colors hover:bg-[#153564]"
                >
                  Send Enquiry
                  <IoArrowForward className="h-4 w-4" />
                </Button>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[#0C2448]/12 bg-white px-6 py-4 text-sm font-medium text-[#0C2448] transition-colors hover:bg-[#F7F2EB]"
                >
                  <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>
              <p className="text-xs text-[#0C2448]/54">
                Prefer a direct conversation? Message us on WhatsApp with your
                specification.
              </p>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-8 space-y-6">
              <Card className="rounded-2xl border-0 bg-white/70 ring-1 ring-[#0C2448]/8 shadow-[0_10px_30px_rgba(12,36,72,0.06)]">
                <CardHeader>
                  <CardTitle className="text-[#0C2448]">
                    What you can expect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      "A personal reply from the team actually running the sourcing.",
                      "Origin, specification, and price options weighed together.",
                      "Documentation and shipping coordination handled end-to-end.",
                      "Same commitment on the second order as on the first.",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-[#0C2448]/72"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#BB7D3E]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden rounded-2xl border-0 bg-[#0C2448] text-white ring-0 shadow-[0_14px_40px_rgba(12,36,72,0.25)]">
                <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/10" />
                <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/10" />
                <CardHeader>
                  <CardTitle className="text-white">Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-white">Same business day</p>
                  <p className="mt-4 text-sm leading-6 text-white/70">
                    Every enquiry is reviewed personally. Expect a first
                    response within one business day, with sourcing options
                    to follow shortly after.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
