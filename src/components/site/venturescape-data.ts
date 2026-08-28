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
  { label: "Global Sourcing", href: "#global-sourcing" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Our Standard", href: "#standard" },
  { label: "Contact", href: "#enquiry" },
];

export const footerNavigation = navigation;

export const productPills = [
  "Timber",
  "Face Veneer",
  "Core Veneer",
  "Plywood",
  "MDF",
  "Wood-Based Materials",
];

export const aboutItems: FeatureItem[] = [
  {
    title: "Dubai-based, globally connected",
    body: "Venturescape Trading — FZCO is a Dubai-based trading company specialising in timber, veneers, plywood, MDF and allied wood products.",
    icon: Building2,
    pill: "Company background",
  },
  {
    title: "India as a principal destination",
    body: "We connect international sources with manufacturers and buyers, with India currently serving as one of our principal destination markets.",
    icon: BadgeCheck,
    pill: "Destination market",
  },
  {
    title: "Confidence on both sides",
    body: "A successful transaction should leave the buyer confident in what was purchased, the supplier confident in whom they supplied, and every stakeholder clear about the commitment that was made.",
    icon: Users2,
    pill: "Business philosophy",
  },
  {
    title: "Involved through the shipment",
    body: "We understand the requirement, identify suitable sources, align specifications and commercial terms, coordinate documentation and remain involved through the movement of the shipment.",
    icon: Truck,
    pill: "Stakeholder-focused",
  },
];

export const capabilityItems: FeatureItem[] = [
  {
    title: "Product Sourcing",
    body: "We identify potential products and suppliers according to the buyer's technical, commercial and delivery requirements.",
    icon: ScanSearch,
    pill: "Requirement-led",
  },
  {
    title: "Specification Coordination",
    body: "Species, grade, thickness, dimensions, moisture, tolerances, packaging and quantity aligned before the commitment is made — to reduce ambiguity from the start.",
    icon: ClipboardCheck,
    pill: "Pre-order clarity",
  },
  {
    title: "Commercial Coordination",
    body: "Pricing, order quantities, payment terms, delivery schedules, incoterms and other agreed transaction conditions coordinated through one relationship.",
    icon: Landmark,
    pill: "Commercial alignment",
  },
  {
    title: "Documentation",
    body: "Commercial invoices, packing lists, certificates of origin, phytosanitary certificates, bills of lading and product-specific supporting documentation.",
    icon: FileText,
    pill: "Document discipline",
  },
  {
    title: "Shipping & Logistics",
    body: "Container planning, loading schedules, shipment timelines, port information, shipping documents and communication with logistics partners.",
    icon: ShipWheel,
    pill: "Shipment coordination",
  },
  {
    title: "Trade Finance Coordination",
    body: "Support for the documentary process connected with advance remittances, letters of credit, documentary transactions and bank-related trade documentation.",
    icon: ShieldCheck,
    pill: "Payment support",
  },
];

export const whyItems: FeatureItem[] = [
  {
    title: "Wood-focused understanding",
    body: "Our commercial focus is centred on timber, veneers, plywood and allied wood materials — a single industry, understood deeply.",
    icon: Trees,
    pill: "Industry focus",
  },
  {
    title: "Global source access",
    body: "We develop sourcing relationships across established wood-producing regions to give customers access to different origins and product possibilities.",
    icon: Boxes,
    pill: "Origin reach",
  },
  {
    title: "Requirement-led sourcing",
    body: "We don't begin by asking what we want to sell. We begin by understanding what the customer needs to buy.",
    icon: ClipboardCheck,
    pill: "Buyer-first",
  },
  {
    title: "Stakeholder-first approach",
    body: "We consider the interests of buyers, suppliers and the other parties necessary to successfully complete the transaction.",
    icon: Users2,
    pill: "Balanced",
  },
  {
    title: "Documentation-focused execution",
    body: "Commercial and shipping documentation receive the same attention as the physical material — because at destination, they are the material.",
    icon: FileText,
    pill: "Discipline",
  },
  {
    title: "Built for repeat business",
    body: "We measure our relationships over multiple transactions, not a single shipment. Direct accountability, personal communication and the next order in mind.",
    icon: Warehouse,
    pill: "Relationship-led",
  },
];

export const productItems: ProductItem[] = [
  {
    title: "Timber",
    body: "We source hardwood and softwood timber for manufacturing, construction and industrial applications.",
    icon: Trees,
    pill: "Hardwood / Softwood",
    image: "https://images.pexels.com/photos/12278566/pexels-photo-12278566.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Face Veneer",
    body: "Natural wood face veneers sourced for plywood manufacturing, panel production and other wood-based applications.",
    icon: PackageCheck,
    pill: "Decorative surfaces",
    image: "https://images.pexels.com/photos/4097157/pexels-photo-4097157.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Core Veneer",
    body: "Core veneer sourced for plywood and panel manufacturers according to their production requirements.",
    icon: Boxes,
    pill: "Panel production",
    image: "https://images.pexels.com/photos/7479035/pexels-photo-7479035.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Plywood",
    body: "Plywood sourced according to the technical, commercial and application requirements of the customer.",
    icon: Layers3,
    pill: "Commercial / Marine",
    image: "https://images.pexels.com/photos/10838921/pexels-photo-10838921.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "MDF & Wood-Based Panels",
    body: "MDF and other engineered wood panels sourced for furniture, interiors, manufacturing, distribution and related applications.",
    icon: FileSpreadsheet,
    pill: "Engineered panels",
    image: "https://images.pexels.com/photos/5089122/pexels-photo-5089122.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Custom Wood Sourcing",
    body: "Not every requirement fits into a standard product category. Share the material, species, specification, quantity or application you need and we'll evaluate suitable sourcing through our international network.",
    icon: Warehouse,
    pill: "Non-standard requirements",
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
  "Freight and logistics providers",
];

export const marketSegments = [
  "Plywood manufacturers",
  "Timber importers",
  "Veneer buyers",
  "Panel manufacturers",
  "Furniture manufacturers",
  "Building-material distributors",
  "Interior-product companies",
  "Construction-material suppliers",
  "Project procurement companies",
  "Wholesalers",
  "International trading houses",
];

export const processSteps = [
  {
    title: "Understand",
    body: "Tell us what you need — product, species, grade, dimensions, quantity, destination and required timeline.",
    icon: ClipboardCheck,
  },
  {
    title: "Source",
    body: "We evaluate appropriate origins, materials and suppliers according to the requirement.",
    icon: ScanSearch,
  },
  {
    title: "Align",
    body: "Product specifications, price, quantity, payment terms, delivery conditions and other commercial details are discussed and clarified.",
    icon: Landmark,
  },
  {
    title: "Confirm",
    body: "Once both sides are aligned, the order and supporting documentation move forward.",
    icon: FileText,
  },
  {
    title: "Coordinate",
    body: "We remain involved through inspection where applicable, documentation, loading, shipment planning and logistics communication.",
    icon: ShipWheel,
  },
  {
    title: "Support",
    body: "Our responsibility does not disappear once the cargo leaves the port. We continue coordinating communication and documentation until the transaction reaches its proper conclusion.",
    icon: Truck,
  },
];

export const standardItems: FeatureItem[] = [
  {
    title: "Protecting both sides of the transaction",
    body: "Serving the buyer should not mean disregarding the supplier, or vice versa. We structure transactions in which commercial expectations are understood and every party's legitimate interests are respected.",
    icon: ShieldCheck,
    pill: "Trust",
  },
  {
    title: "Clarity before commitment",
    body: "Problems in trade often begin with assumptions. We clarify specifications, quantities, commercial terms, documentation requirements and timelines before execution wherever possible.",
    icon: ClipboardCheck,
    pill: "Clarity",
  },
  {
    title: "Transparent communication",
    body: "If something changes, the right people should know. We would rather communicate an issue early than allow uncertainty to become a larger problem later.",
    icon: Users2,
    pill: "Communication",
  },
  {
    title: "Respect for every stakeholder",
    body: "Suppliers, buyers, manufacturers, logistics partners, financial institutions — each deserves professional communication, fair dealing and respect for their legitimate interests.",
    icon: BadgeCheck,
    pill: "Fair dealing",
  },
  {
    title: "Documentation discipline",
    body: "Documentation is not paperwork that comes after the trade. It is part of the trade. We coordinate commercial, shipping and banking documents so avoidable issues don't compromise the transaction.",
    icon: FileText,
    pill: "Discipline",
  },
  {
    title: "Accountability",
    body: "When we undertake a responsibility, we remain involved. Our customers and suppliers know who is handling the transaction and whom to speak to when something requires attention.",
    icon: CheckCircle2,
    pill: "Ownership",
  },
  {
    title: "Long-term thinking",
    body: "We're not building Venturescape around one-off transactions. Successful trade is not \"was the shipment completed?\" — it's \"would everyone involved choose to work together again?\"",
    icon: Warehouse,
    pill: "Relationships",
  },
];

