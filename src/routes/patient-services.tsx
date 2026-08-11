import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { patientServices, HOSPITAL } from "@/lib/site-data";

export const Route = createFileRoute("/patient-services")({
  head: () => ({
    meta: [
      { title: "Patient Services | Calix Multispeciality Hospital" },
      {
        name: "description",
        content:
          "Appointments, cashless insurance support, health records, ambulance services and care coordination for patients at Calix Multispeciality Hospital.",
      },
      { property: "og:title", content: "Patient Services | Calix Multispeciality Hospital" },
      {
        property: "og:description",
        content: "Practical support that makes treatment simpler — from admission to follow-up.",
      },
    ],
  }),
  component: PatientServices,
});

const steps = [
  { step: "01", title: "Register or book", body: "Book online or at reception; bring an ID and any previous reports." },
  { step: "02", title: "Consult your specialist", body: "Your consultant reviews history, examines you and orders investigations." },
  { step: "03", title: "Diagnostics on campus", body: "Labs and imaging happen in-house, with same-day reporting for most tests." },
  { step: "04", title: "Treatment & follow-up", body: "You receive a written plan, medication guidance and a scheduled review." },
];

function PatientServices() {
  return (
    <>
      <PageHero
        eyebrow="Patient Services"
        title="Patient-Centered Healthcare, End to End"
        subtitle="Care is more than the consultation. Our teams handle the paperwork, insurance and coordination so you can focus on getting better."
      />

      <Section>
        <SectionHeading
          eyebrow="Support Services"
          title="Everything you need, handled for you"
          subtitle="Available to outpatients, inpatients and families travelling from outside the city."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {patientServices.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <h3 className="font-display text-base font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Your Visit"
          title="How a visit to Calix works"
          subtitle="A clear, predictable path from your first call to your follow-up review."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <p className="font-display text-3xl font-extrabold text-primary/25">{s.step}</p>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-primary/25 bg-gradient-soft p-10 lg:p-14">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Need help with insurance or admission?
              </h2>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                Our front-office team coordinates approvals with major insurers and TPAs, and can
                share a treatment estimate before admission.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="brand" size="xl">
                <a href={`tel:${HOSPITAL.phone}`}>
                  <Phone className="size-4" /> Call {HOSPITAL.phone}
                </a>
              </Button>
              <Button asChild variant="outlineBrand" size="xl">
                <Link to="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
