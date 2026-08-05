import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileSpreadsheet,
  FileText,
  Landmark,
  Layers3,
  MapPinned,
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
  { label: "Contact", href: "#contact" },
];

export const footerNavigation = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Markets", href: "#markets" },
  { label: "Why Venturescape", href: "#why-venturescape" },
  { label: "Contact", href: "#contact" },
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

export const qualityItems: FeatureItem[] = [
  {
    title: "Product Specifications",
    body: "Coordination of species, grade, thickness, dimensions, moisture level, tolerances, quantity, and packaging.",
    icon: ClipboardCheck,
    pill: "Technical alignment",
  },
  {
    title: "Supplier Documentation",
    body: "Collection and review of relevant supplier, product, and commercial information before execution.",
    icon: FileText,
    pill: "Supplier review",
  },
  {
    title: "Shipment Documentation",
    body: "Invoices, packing lists, certificates, transport documents, and other agreed paperwork coordinated in sequence.",
    icon: FileSpreadsheet,
    pill: "Shipment papers",
  },
  {
    title: "Inspection Coordination",
    body: "Third-party inspection, testing, or verification can be arranged where agreed as part of the transaction.",
    icon: CheckCircle2,
    pill: "When agreed",
  },
  {
    title: "Destination Requirements",
    body: "Product-specific documentation aligned according to the destination-market information provided for the shipment.",
    icon: MapPinned,
    pill: "Market-ready",
  },
];

export const whyItems: FeatureItem[] = [
  {
    title: "Focused Wood-Industry Knowledge",
    body: "The business is centred on timber, veneers, plywood, MDF, and allied wood products rather than broad unrelated categories.",
    icon: Trees,
    pill: "Industry focus",
  },
  {
    title: "Requirement-Based Sourcing",
    body: "Each transaction begins with the buyer's actual requirement rather than a generic product list without commercial context.",
    icon: Boxes,
    pill: "Requirement first",
  },
  {
    title: "Clear Commercial Communication",
    body: "Specifications, quantities, timelines, and terms are communicated carefully before execution begins.",
    icon: Users2,
    pill: "Commercial clarity",
  },
  {
    title: "Documentation-Focused Approach",
    body: "Correct documentation is treated as essential to successful international trade, not as an administrative afterthought.",
    icon: FileText,
    pill: "Paperwork discipline",
  },
  {
    title: "Direct Accountability",
    body: "Customers and suppliers communicate with the people responsible for the transaction rather than being passed through layers.",
    icon: BadgeCheck,
    pill: "Hands-on leadership",
  },
  {
    title: "Long-Term Relationships",
    body: "The objective is dependable commercial relationships built on seriousness, continuity, and repeat trust.",
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
    image: "https://images.unsplash.com/photo-1516651029879-a9e521b8e74f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Plywood",
    body: "Commercial, marine, structural, and application-specific plywood for manufacturing, construction, furniture, and interior requirements.",
    icon: Layers3,
    pill: "Commercial / Marine",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Face Veneer",
    body: "Natural wood face veneers in different species, grades, thicknesses, and dimensions for plywood and decorative use.",
    icon: PackageCheck,
    pill: "Decorative surfaces",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Core Veneer",
    body: "Core veneers supplied according to thickness, dimensions, species, and production requirements for panel manufacturing.",
    icon: Boxes,
    pill: "Panel production",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "MDF and Panels",
    body: "MDF and other engineered wood panels for furniture manufacturing, interiors, distribution, and construction applications.",
    icon: FileSpreadsheet,
    pill: "Engineered panels",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Other Wood Products",
    body: "Additional wood products sourced against specific technical, dimensional, commercial, and destination-market requirements.",
    icon: Warehouse,
    pill: "Custom requirements",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
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

export const processSteps = [
  {
    title: "Share Your Requirement",
    body: "The buyer shares the product, species, grade, dimensions, quantity, destination port, and required delivery timeline.",
  },
  {
    title: "Product and Supplier Identification",
    body: "Venturescape evaluates suitable products, origins, and supplier options based on the actual requirement.",
  },
  {
    title: "Quotation and Specification Confirmation",
    body: "Specifications, quantity, price, payment terms, and delivery conditions are reviewed and aligned.",
  },
  {
    title: "Order and Documentation",
    body: "Once commercial terms are accepted, the order structure and transaction documents are coordinated.",
  },
  {
    title: "Inspection and Shipment Coordination",
    body: "Inspection, packaging, container planning, and shipment documentation are coordinated as agreed.",
  },
  {
    title: "Delivery and Post-Shipment Support",
    body: "Communication and documentation continue until the transaction reaches its agreed conclusion.",
  },
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

export const statsItems = [
  {
    title: "Trade-focused categories",
    value: "06",
    suffix: "",
    body: "Timber, plywood, veneers, MDF, and allied wood products handled with requirement-led sourcing.",
  },
  {
    title: "Supply-chain relationships",
    value: "07",
    suffix: "",
    body: "Participants across production, exporting, inspection, and logistics coordination.",
  },
  {
    title: "Execution model",
    value: "End",
    suffix: "to-end",
    body: "Coordination continues from enquiry through shipment and post-shipment support.",
  },
];
