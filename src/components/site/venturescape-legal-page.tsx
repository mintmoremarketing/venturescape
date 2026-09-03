import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import VenturescapeNav from "@/components/site/venturescape-nav";
import Footer20 from "@/components/watermelon-ui/footer-20";

interface LegalPageProps {
  title: string;
  updated?: string;
  intro?: string;
  sections: {
    heading: string;
    body: string[];
  }[];
}

export default function VenturescapeLegalPage({
  title,
  updated,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[#FBF8F2] text-[#0C2448] selection:bg-[#BB7D3E]/30 selection:text-[#0C2448]">
      <VenturescapeNav />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-[140px] pb-24 md:px-8 md:pt-[180px]">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#0C2448]/72 transition-colors hover:text-[#91121D]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Venturescape
        </Link>

        <h1 className="text-3xl font-semibold tracking-[-0.02em] text-[#0C2448] md:text-5xl">
          {title}
        </h1>
        {updated && (
          <p className="mt-2 text-sm text-[#0C2448]/60">Last updated: {updated}</p>
        )}
        {intro && (
          <p className="mt-6 text-base leading-relaxed text-[#0C2448]/78">
            {intro}
          </p>
        )}

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-semibold tracking-[-0.01em] text-[#0C2448]">
                {s.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {s.body.map((p, i) => (
                  <p
                    key={i}
                    className="text-sm leading-6 text-[#0C2448]/78"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-[#0C2448]/[0.04] p-6 text-sm leading-6 text-[#0C2448]/78">
          <p className="font-semibold text-[#0C2448]">Questions or concerns?</p>
          <p className="mt-2">
            Reach out to us at{" "}
            <a
              href="mailto:venturescapetrading.fzco@gmail.com"
              className="font-medium text-[#0C2448] underline decoration-[#BB7D3E]/60 underline-offset-4 hover:text-[#91121D]"
            >
              venturescapetrading.fzco@gmail.com
            </a>
            .
          </p>
        </div>
      </main>
      <Footer20 />
    </div>
  );
}
