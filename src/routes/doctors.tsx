import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ChevronRight } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { doctors, HOSPITAL, specialties } from "@/lib/site-data";
import { cn } from "@/lib/utils";

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
  const [activeTab, setActiveTab] = React.useState("all");

  const filteredDoctors = React.useMemo(() => {
    if (activeTab === "all") return doctors;
    return doctors.filter(d => d.specialty.toLowerCase() === activeTab.toLowerCase());
  }, [activeTab]);

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

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="no-scrollbar flex w-full max-w-5xl justify-start gap-2 overflow-x-auto pb-4 md:flex-wrap md:justify-center">
            <button
              onClick={() => setActiveTab("all")}
              className={cn(
                "h-10 shrink-0 whitespace-nowrap rounded-full px-6 text-sm font-bold transition-all",
                activeTab === "all"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-primary-soft text-primary hover:bg-primary/10"
              )}
            >
              All Specialties
            </button>
            {specialties.map((s) => (
              <button
                key={s.slug}
                onClick={() => setActiveTab(s.name)}
                className={cn(
                  "h-10 shrink-0 whitespace-nowrap rounded-full px-6 text-sm font-bold transition-all",
                  activeTab === s.name
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-primary-soft text-primary hover:bg-primary/10"
                )}
              >
                {s.name}
              </button>
            ))}
          </div>
          
          <div className="text-sm font-medium text-muted-foreground">
            Showing {filteredDoctors.length} {filteredDoctors.length === 1 ? 'specialist' : 'specialists'}
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((d) => (
            <div
              key={d.name}
              className="group flex flex-col rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-lift"
            >
              <div className="flex items-center gap-5">
                <span className="grid size-20 shrink-0 place-items-center rounded-2xl bg-gradient-brand font-display text-2xl font-extrabold text-primary-foreground shadow-lg group-hover:scale-105 transition-transform">
                  {initials(d.name)}
                </span>
                <div>
                  <h2 className="font-display text-xl font-[800] text-primary leading-tight">{d.name}</h2>
                  <div className="mt-1.5">
                    <span className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
                      {d.specialty}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex-1">
                <p className="text-sm font-bold text-slate-800">{d.qualification}</p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600 line-clamp-3">
                  {d.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/70">
                  <div className="size-1.5 rounded-full bg-accent" />
                  {d.experience} Experience
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <Button asChild variant="outlineBrand" className="h-11 rounded-xl font-bold">
                  <Link to="/doctors/$slug" params={{ slug: d.slug }}>Details</Link>
                </Button>
                <Button asChild variant="brand" className="h-11 rounded-xl font-bold shadow-sm">
                  <Link
                    to="/book-appointment"
                    search={{
                      specialty: d.specialty.toLowerCase().replace(/\s+/g, '-').replace('&', 'and'),
                      doctor: d.slug,
                    }}
                  >
                    Book
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
