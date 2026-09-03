import VenturescapeLegalPage from "@/components/site/venturescape-legal-page";

export default function VenturescapePrivacy() {
  return (
    <VenturescapeLegalPage
      title="Privacy Policy"
      updated="2026"
      intro="Venturescape Trading — FZCO respects your privacy. This page explains what information we collect through this website, how we use it, and the choices available to you. This is a placeholder policy pending review by the company; please contact us for the most current version before relying on it commercially."
      sections={[
        {
          heading: "Who we are",
          body: [
            "Venturescape Trading — FZCO is a free-zone company registered in Dubai, United Arab Emirates. This website is operated by Venturescape Trading — FZCO. Contact: venturescapetrading.fzco@gmail.com.",
          ],
        },
        {
          heading: "Information we collect",
          body: [
            "Enquiry form submissions: name, company, email address, phone or WhatsApp, product requirement, species, grade, thickness, dimensions, quantity, destination country, destination port, timeline, additional requirements, and any files you choose to attach.",
            "Basic usage information your browser sends automatically when you visit any website — IP address, browser type, device type, and the pages you view. We do not use tracking cookies for advertising.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "We use enquiry information solely to review your requirement, respond with sourcing and commercial options, and follow up as part of the transaction if you choose to proceed.",
            "We do not sell, rent or trade your personal information. We do not use your information for marketing to third parties.",
            "Aggregated, non-identifying usage information may be used to improve the website itself.",
          ],
        },
        {
          heading: "How your information is handled",
          body: [
            "Form submissions are delivered to our business inbox at venturescapetrading.fzco@gmail.com via a third-party form delivery service (FormSubmit).",
            "We keep enquiry records only as long as they remain relevant to the potential or active transaction, and in line with any legal or accounting obligations.",
          ],
        },
        {
          heading: "Your choices",
          body: [
            "You can request a copy of the information we hold about you, ask us to correct it, or ask us to delete it. Send any such request to venturescapetrading.fzco@gmail.com.",
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            "We may update this policy from time to time. Material changes will be reflected on this page with an updated date.",
          ],
        },
      ]}
    />
  );
}
