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
                <span className="grid size-16 shrink-0 place-items-center rounded-full bg-gradient-brand font-display text-xl font-bold text-primary-foreground shadow-sm">
                  {initials(d.name)}
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold text-foreground">{d.name}</h2>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="inline-flex items-center rounded-full bg-primary/5 px-2.5 py-0.5 text-xs font-bold text-primary">
                      {d.specialty}
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm font-medium text-foreground/80">{d.qualification}</p>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {d.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                {d.experience} Clinical Experience
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild variant="brand" className="w-full shadow-sm">
                  <Link to="/doctors/$slug" params={{ slug: d.slug }}>View Full Profile</Link>
                </Button>
                <Button asChild variant="outlineBrand" className="w-full">
                  <Link
                    to="/book-appointment"
                    search={{
                      specialty: d.specialty.toLowerCase().replace(/\s+/g, '-').replace('&', 'and'),
                      doctor: d.slug,
                    }}
                  >
                    Quick Appointment
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
