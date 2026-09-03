import VenturescapeLegalPage from "@/components/site/venturescape-legal-page";

export default function VenturescapeTerms() {
  return (
    <VenturescapeLegalPage
      title="Terms of Use"
      updated="2026"
      intro="These terms apply to your use of the Venturescape Trading website. They are a placeholder pending review by the company. For any binding commercial arrangement, the terms of the specific contract or purchase order between you and Venturescape Trading — FZCO will govern."
      sections={[
        {
          heading: "About this website",
          body: [
            "This website is operated by Venturescape Trading — FZCO, a free-zone company registered in Dubai, United Arab Emirates. The website is provided for general informational and enquiry purposes.",
          ],
        },
        {
          heading: "Website content",
          body: [
            "We take reasonable care that the information on this website is accurate at the time of publication, but we do not warrant that every detail is complete, current or free from error.",
            "Specifications, availability, lead times, prices and origin information are illustrative. Any actual commercial commitment is only made through a specific written offer, order confirmation or contract.",
          ],
        },
        {
          heading: "Enquiries",
          body: [
            "Submitting an enquiry does not create a contract between you and Venturescape Trading. It is a request for information which we will review and respond to.",
            "We may decline to act on an enquiry at our discretion, particularly where the requirement is unclear, incomplete or falls outside the scope of our business.",
          ],
        },
        {
          heading: "Acceptable use",
          body: [
            "You agree to use this website only for lawful purposes, and not to attempt to interfere with the operation of the site or the systems it runs on.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "The Venturescape name and logo, along with the text, layout and design of this website, are the property of Venturescape Trading — FZCO or its licensors. Nothing on this website transfers any right, title or licence in that intellectual property.",
          ],
        },
        {
          heading: "Third-party links and services",
          body: [
            "This website may reference or link to third-party services (for example, form-delivery providers or messaging platforms). We are not responsible for the content or practices of those third parties.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "To the fullest extent permitted by applicable law, Venturescape Trading — FZCO is not liable for indirect or consequential loss arising from reliance on the general content of this website. Any liability arising from an actual transaction is governed by the specific contract between the parties.",
          ],
        },
        {
          heading: "Governing law",
          body: [
            "These terms are governed by the laws of the United Arab Emirates. Any dispute in connection with the use of this website is subject to the exclusive jurisdiction of the courts of the emirate in which Venturescape Trading — FZCO is registered.",
          ],
        },
      ]}
    />
  );
}
