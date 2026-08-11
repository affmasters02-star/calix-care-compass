import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { healthPackages } from "@/lib/site-data";

export const Route = createFileRoute("/health-packages")({
  head: () => ({
    meta: [
      { title: "Health Checkup Packages | Calix Multispeciality Hospital" },
      {
        name: "description",
        content:
          "Preventive health checkup packages at Calix — essential, comprehensive, women's wellness and senior care screenings with consultation included.",
      },
      { property: "og:title", content: "Health Checkup Packages | Calix Multispeciality Hospital" },
      {
        property: "og:description",
        content: "Structured preventive screening panels from ₹1,499, with same-day reporting for most tests.",
      },
    ],
  }),
  component: HealthPackages,
});

function HealthPackages() {
  return (
    <>
      <PageHero
        eyebrow="Health Packages"
        title="Preventive Health Checks for Every Life Stage"
        subtitle="Catch problems early. Each package bundles laboratory tests, imaging where relevant and a consultation to explain your results."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {healthPackages.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-3xl border p-8 shadow-card lg:p-10 ${
                p.featured ? "border-primary/40 bg-gradient-soft shadow-lift" : "border-border bg-card"
              }`}
            >
              {p.featured ? (
                <span className="mb-4 w-fit rounded-full bg-accent px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-accent-foreground">
                  Most chosen
                </span>
              ) : null}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">{p.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{p.for}</p>
                </div>
                <p className="font-display text-2xl font-extrabold text-primary">{p.price}</p>
              </div>
              <ul className="mt-7 flex-1 space-y-2.5">
                {p.includes.map((i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-foreground/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" /> {i}
                  </li>
                ))}
              </ul>
              <Button asChild variant={p.featured ? "brand" : "outlineBrand"} size="lg" className="mt-8">
                <Link to="/book-appointment">Book this package</Link>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Good to know"
          title="Before your health check"
          subtitle="Simple preparation helps us give you accurate results."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { title: "Fast for 10–12 hours", body: "Water is allowed. Book a morning slot for the easiest fasting window." },
            { title: "Carry your records", body: "Bring current medication details and any previous reports for comparison." },
            { title: "Allow 2–3 hours", body: "Most packages complete in a single visit, including your consultation." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <h3 className="font-display text-base font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
