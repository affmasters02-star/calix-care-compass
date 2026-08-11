import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { facilities } from "@/lib/site-data";
import diagnosticsImage from "@/assets/facility-diagnostics.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Hospital Facilities | Calix Multispeciality Hospital" },
      {
        name: "description",
        content:
          "Modular operation theatres, intensive care units, advanced diagnostic imaging, dialysis, endoscopy and 24×7 emergency facilities at Calix.",
      },
      { property: "og:title", content: "Hospital Facilities | Calix Multispeciality Hospital" },
      {
        property: "og:description",
        content: "Advanced diagnostics and treatment infrastructure supporting every specialty.",
      },
    ],
  }),
  component: Facilities;
});

function Facilities() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="Advanced Diagnostics & Treatment Infrastructure"
        subtitle="Modern infrastructure designed around clinical workflow — so investigations, surgery and recovery all happen safely within one campus."
      />

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <img
            src={diagnosticsImage}
            alt="Advanced diagnostic imaging suite at Calix Hospital"
            loading="lazy"
            width={1408}
            height={1008}
            className="rounded-3xl object-cover shadow-lift"
          />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Diagnostics"
              title="Accurate answers, faster decisions"
              subtitle="In-house radiology and laboratory services mean most reports are ready the same day, and your consultant reviews them without delay."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Digital X-ray, ultrasound with colour doppler, CT imaging, ECG, echocardiography and a
              full biochemistry, haematology and microbiology laboratory operate under one roof, with
              emergency investigations available around the clock.
            </p>
            <Button asChild variant="outlineBrand" size="lg" className="mt-8">
              <Link to="/health-packages">
                See diagnostic packages <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="On Campus"
          title="Facilities Supporting Every Specialty"
          subtitle="Shared infrastructure keeps care coordinated between departments."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <h3 className="font-display text-base font-bold text-foreground">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
