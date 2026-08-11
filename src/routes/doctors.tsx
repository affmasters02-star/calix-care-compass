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
              className="group relative flex flex-col rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6 md:p-8"
            >
              <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-start">
                {/* Image section */}
                <div className="relative shrink-0 self-center md:self-start">
                  <div className="grid size-32 place-items-center overflow-hidden rounded-lg bg-slate-100 font-display text-3xl font-black text-slate-300 sm:size-40 md:size-48 lg:size-56">
                    <span className="opacity-50">{initials(d.name)}</span>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent" />
                  </div>
                </div>

                {/* Content section */}
                <div className="flex-1 text-center md:text-left">
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-bold tracking-tight text-[#2d1b14] sm:text-xl lg:text-2xl uppercase">
                      {d.name}
                    </h3>
                    <p className="text-sm font-medium text-[#b5986d] sm:text-base">
                      {d.qualification}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-[#4a4a4a] md:mt-6">
                    <li className="flex items-start justify-center gap-2 md:justify-start">
                      <span className="mt-1.5 size-1.5 shrink-0 bg-black" />
                      <span className="font-bold">Sr. Consultant</span>
                    </li>
                    <li className="flex items-start justify-center gap-2 md:justify-start">
                      <span className="mt-1.5 size-1.5 shrink-0 bg-black" />
                      <span>{d.specialty}</span>
                    </li>
                  </ul>

                  <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                    <Button asChild className="h-10 w-full rounded-none bg-[#7a3e3e] px-6 text-[0.7rem] font-bold text-white transition-all hover:bg-[#5a2e2e] sm:w-auto sm:text-xs">
                      <Link
                        to="/book-appointment"
                        search={{
                          specialty: d.specialty.toLowerCase().replace(/\s+/g, "-").replace("&", "and"),
                          doctor: d.slug,
                        }}
                      >
                        Book An Appointment
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-10 w-full rounded-none border-[#b5986d] bg-white px-6 text-[0.7rem] font-bold text-[#b5986d] transition-all hover:bg-slate-50 sm:w-auto sm:text-xs">
                      <Link to="/doctors/$slug" params={{ slug: d.slug }}>
                        View Profile
                      </Link>
                    </Button>
                  </div>
                </div>
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
