import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { doctors, specialties, HOSPITAL } from "@/lib/site-data";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors | Calix Multispeciality Hospital Specialists" },
      {
        name: "description",
        content:
          "Meet the senior consultants at Calix Multispeciality Hospital across general medicine, surgery, women's health, critical care and more.",
      },
      { property: "og:title", content: "Our Doctors | Calix Multispeciality Hospital" },
      {
        property: "og:description",
        content: "Experienced specialists across ten departments, available for consultation six days a week.",
      },
    ],
  }),
  component: Doctors,
});

function initials(name: string) {
  const parts = name.replace("Dr. ", "").split(" ");
  return `${parts[0]?.[0] ?? ""}${parts[1]?.[0] ?? ""}`;
}

function Doctors() {
  return (
    <>
      <PageHero
        eyebrow="Doctors"
        title="Expert Doctors Across Specialties"
        subtitle="Senior consultants with decades of combined clinical experience, working together across departments so your care is never fragmented."
      />

      <Section>
        <SectionHeading
          eyebrow="Consultant Panel"
          title="Meet the specialists caring for your family"
          subtitle="Consultation timings vary by department — our care team will confirm the earliest available slot."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d) => (
            <div
              key={d.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-center gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-gradient-brand font-display text-lg font-bold text-primary-foreground">
                  {initials(d.name)}
                </span>
                <div>
                  <h2 className="font-display text-base font-bold text-foreground">{d.name}</h2>
                  <p className="text-sm font-semibold text-primary">{d.specialty}</p>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">{d.qualification}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {d.experience} experience
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Button asChild variant="brand" size="sm">
                  <Link to="/book-appointment">Book appointment</Link>
                </Button>
                <Button asChild variant="outlineBrand" size="sm">
                  <Link
                    to="/specialties/$slug"
                    params={{
                      slug: specialties.find((s) => s.name === d.specialty)?.slug ?? "general-medicine",
                    }}
                  >
                    Department
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="rounded-3xl bg-gradient-brand p-10 text-center text-primary-foreground shadow-lift lg:p-14">
          <h2 className="text-2xl font-bold sm:text-3xl">Not sure which specialist you need?</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            Call our care coordinators and describe your symptoms — we'll guide you to the right
            department.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="secondary" size="xl">
              <a href={`tel:${HOSPITAL.phone}`}>
                <Phone className="size-4" /> {HOSPITAL.phone}
              </a>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <Link to="/book-appointment">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
