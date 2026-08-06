import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Boxes,
  Building2,
  ClipboardCheck,
  FileSpreadsheet,
  FileText,
  Landmark,
  Layers3,
  PackageCheck,
  ScanSearch,
  ShieldCheck,
  ShipWheel,
  Trees,
  Truck,
  Users2,
  Warehouse,
} from "lucide-react";

export type FeatureItem = {
  title: string;
  body: string;
  icon: LucideIcon;
  pill?: string;
};

export type ProductItem = {
  title: string;
  body: string;
  icon: LucideIcon;
  pill: string;
  image: string;
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Markets", href: "#markets" },
  { label: "Contact", href: "#enquiry" },
];

export const footerNavigation = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Markets", href: "#markets" },
  { label: "Why Venturescape", href: "#why-venturescape" },
  { label: "Contact", href: "#enquiry" },
];

export const productPills = [
  "Timber",
  "Plywood",
  "Face Veneer",
  "Core Veneer",
  "MDF",
  "Wood-Based Panels",
];

export const aboutItems: FeatureItem[] = [
  {
    title: "Dubai-Based Trade Platform",
    body: "Venturescape Trading operates from Dubai and coordinates international wood-product sourcing with a commercial, documentation, and logistics-first approach.",
    icon: Building2,
    pill: "Structured sourcing",
  },
  {
    title: "Reliable Source Alignment",
    body: "We work between buyers and suppliers to identify commercially suitable products, review specifications, and create clarity before orders move forward.",
    icon: BadgeCheck,
    pill: "Requirement-led",
  },
  {
    title: "Documentation Discipline",
    body: "Invoices, packing lists, certificates, and shipment paperwork are treated as part of the transaction itself, not as afterthoughts.",
    icon: FileText,
    pill: "Measured execution",
  },
  {
    title: "Execution Through Delivery",
    body: "Our role continues through coordination, inspection support, shipment planning, and post-shipment communication until the agreed conclusion is reached.",
    icon: Truck,
    pill: "Transaction continuity",
  },
];

export const capabilityItems: FeatureItem[] = [
  {
    title: "Product Sourcing",
    body: "Identification of suitable products and suppliers according to technical, commercial, and delivery requirements.",
    icon: ScanSearch,
    pill: "Buyer-fit sourcing",
  },
  {
    title: "Commercial Coordination",
    body: "Quotations, negotiations, quantities, delivery schedules, and agreed commercial terms coordinated with clarity.",
    icon: Landmark,
    pill: "Commercial alignment",
  },
  {
    title: "Specification Alignment",
    body: "Species, grade, thickness, dimensions, moisture, packaging, and tolerances reviewed before commitment.",
    icon: ClipboardCheck,
    pill: "Pre-order clarity",
  },
  {
    title: "Documentation",
    body: "Invoices, packing lists, certificates of origin, phytosanitary documents, and trade paperwork coordinated carefully.",
    icon: FileText,
    pill: "Document control",
  },
  {
    title: "Shipping and Logistics",
    body: "Shipment planning, container requirements, loading schedules, and logistics communication managed in sequence.",
    icon: ShipWheel,
    pill: "Shipment planning",
  },
  {
    title: "Trade Finance Coordination",
    body: "Support for documentation related to agreed payment structures such as remittances, collections, and letters of credit.",
    icon: ShieldCheck,
    pill: "Payment support",
  },
];

export const whyItems: FeatureItem[] = [
  {
    title: "One Industry, Understood Deeply",
    body: "We do not spread across unrelated categories. Timber, veneers, plywood, MDF, and allied wood products are all we trade, and that focus shows in the questions we ask and the answers we give.",
    icon: Trees,
    pill: "Industry focus",
  },
  {
    title: "Sourcing That Starts With You",
    body: "Every enquiry begins with your requirement, not a catalogue we already have. Species, grade, dimensions, quantity, and destination shape the search for the right source.",
    icon: Boxes,
    pill: "Requirement first",
  },
  {
    title: "Say What Is True, Say It Early",
    body: "Specifications, quantities, timelines, and commercial terms are put on the table clearly before an order moves. Fewer surprises later, less friction throughout.",
    icon: Users2,
    pill: "Commercial clarity",
  },
  {
    title: "Paperwork Treated as the Trade",
    body: "Invoices, packing lists, certificates, and shipping documents are prepared with the same care as the shipment itself, because at destination they are the shipment.",
    icon: FileText,
    pill: "Documentation discipline",
  },
  {
    title: "Talk to the People Responsible",
    body: "You reach the people actually running your transaction. No handovers, no filters, no waiting to hear back from someone else.",
    icon: BadgeCheck,
    pill: "Direct accountability",
  },
  {
    title: "Built for the Second Order",
    body: "Every shipment is delivered with the next one in mind. Repeat business, not one-off wins, is how we measure whether the work was done well.",
    icon: Warehouse,
    pill: "Relationship-led",
  },
];

export const productItems: ProductItem[] = [
  {
    title: "Timber",
    body: "Hardwood and softwood timber sourced according to species, grade, dimensions, moisture requirements, and end-use application.",
    icon: Trees,
    pill: "Hardwood / Softwood",
    image: "https://images.pexels.com/photos/12278566/pexels-photo-12278566.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Plywood",
    body: "Commercial, marine, structural, and application-specific plywood for manufacturing, construction, furniture, and interior requirements.",
    icon: Layers3,
    pill: "Commercial / Marine",
    image: "https://images.pexels.com/photos/10838921/pexels-photo-10838921.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Face Veneer",
    body: "Natural wood face veneers in different species, grades, thicknesses, and dimensions for plywood and decorative use.",
    icon: PackageCheck,
    pill: "Decorative surfaces",
    image: "https://images.pexels.com/photos/4097157/pexels-photo-4097157.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Core Veneer",
    body: "Core veneers supplied according to thickness, dimensions, species, and production requirements for panel manufacturing.",
    icon: Boxes,
    pill: "Panel production",
    image: "https://images.pexels.com/photos/7479035/pexels-photo-7479035.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "MDF and Wood-Based Panels",
    body: "MDF and other engineered wood panels for furniture manufacturing, interiors, distribution, and construction applications.",
    icon: FileSpreadsheet,
    pill: "Engineered panels",
    image: "https://images.pexels.com/photos/5089122/pexels-photo-5089122.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Other Wood Products",
    body: "Additional wood products sourced against specific technical, dimensional, commercial, and destination-market requirements.",
    icon: Warehouse,
    pill: "Custom requirements",
    image: "https://images.pexels.com/photos/5484741/pexels-photo-5484741.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export const networkPartners = [
  "Timber producers",
  "Veneer manufacturers",
  "Plywood mills",
  "Panel manufacturers",
  "Exporters",
  "Inspection partners",
  "Shipping and logistics providers",
];

export const marketSegments = [
  "Plywood manufacturers",
  "Timber importers",
  "Veneer buyers",
  "Building-material distributors",
  "Furniture manufacturers",
  "Interior-product companies",
  "Construction-material suppliers",
  "Project procurement companies",
  "Wholesalers",
  "International trading houses",
];

