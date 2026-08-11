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
              className="group relative flex flex-col rounded-[2.5rem] border border-slate-100 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-premium sm:p-8"
            >
              {/* Decorative Glow */}
              <div className="absolute right-0 top-0 size-24 translate-x-8 -translate-y-8 rounded-full bg-primary/5 blur-2xl transition-transform duration-500 group-hover:scale-150" aria-hidden="true" />
              
              <div className="relative z-10 flex items-center gap-4 sm:gap-5">
                <div className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#001F5B] via-[#003A8C] to-[#E83E8C] font-display text-xl font-black text-white shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:rounded-[1.5rem] sm:size-20 sm:text-2xl">
                  <span className="drop-shadow-lg">{initials(d.name)}</span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-[800] leading-tight text-primary transition-colors group-hover:text-primary-deep sm:text-xl">{d.name}</h3>
                  <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 text-[0.65rem] font-bold text-slate-600 ring-1 ring-inset ring-slate-200/50 sm:mt-2 sm:gap-2 sm:px-3 sm:text-[0.7rem]">
                    <div className="size-1 rounded-full bg-[#00857A] sm:size-1.5" />
                    <span className="truncate">{d.specialty} Specialist</span>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 mt-6 flex-1">
                <p className="text-[0.85rem] font-bold uppercase tracking-widest text-[#E83E8C]">{d.qualification}</p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600 line-clamp-3">
                  {d.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[0.65rem] font-black uppercase tracking-widest text-primary/60 lg:text-[0.7rem]">
                  <div className="size-1.5 rounded-full bg-accent animate-pulse" />
                  {d.experience} Experience
                </div>
              </div>

              <div className="relative z-10 mt-8 grid grid-cols-2 gap-3 sm:mt-10">
                <Button asChild className="h-10 rounded-full bg-[#003A8C] px-3 text-[0.65rem] font-black uppercase tracking-wider text-white shadow-lg shadow-[#003A8C]/20 transition-all hover:bg-[#001F5B] hover:shadow-xl sm:h-11 sm:px-4 sm:text-[0.7rem]">
                  <Link
                    to="/book-appointment"
                    search={{
                      specialty: d.specialty.toLowerCase().replace(/\s+/g, '-').replace('&', 'and'),
                      doctor: d.slug,
                    }}
                  >
                    Book Appointment
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-10 rounded-full border-slate-200 bg-white px-3 text-[0.65rem] font-black uppercase tracking-wider text-[#0f172a] shadow-sm transition-all hover:bg-slate-50 hover:text-primary sm:h-11 sm:px-4 sm:text-[0.7rem]">
                  <Link to="/doctors/$slug" params={{ slug: d.slug }}>View Profile</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="rounded-[2.5rem] bg-gradient-brand p-10 text-center text-primary-foreground shadow-premium lg:p-14">
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
