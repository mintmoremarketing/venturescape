import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "@/components/site/scroll-to-top";
import VenturescapePage from "@/components/site/venturescape-page";
import VenturescapePrivacy from "@/components/site/venturescape-privacy";
import VenturescapeTerms from "@/components/site/venturescape-terms";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<VenturescapePage />} />
        <Route path="/privacy" element={<VenturescapePrivacy />} />
        <Route path="/terms" element={<VenturescapeTerms />} />
      </Routes>
    </BrowserRouter>
  );
}
