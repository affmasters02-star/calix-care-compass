import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero, Section } from "@/components/site/Bits";
import { SpecialtyIcon } from "@/components/site/SpecialtyIcon";
import { specialties } from "@/lib/site-data";

export const Route = createFileRoute("/specialties/")({
  head: () => ({
    meta: [
      { title: "Specialties at Calix Multispeciality Hospital | 10 Departments" },
      {
        name: "description",
        content:
          "Explore ten core specialties at Calix — general medicine, diabetology, nephrology, critical care, urology, orthopedics, OBGYN, gastroenterology, neurology and general surgery.",
      },
      { property: "og:title", content: "Specialties at Calix Multispeciality Hospital" },
      {
        property: "og:description",
        content: "Expert care across every specialty, with shared diagnostics and coordinated treatment plans.",
      },
    ],
  }),
  component: SpecialtiesIndex,
});

function SpecialtiesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Specialties"
        title="Expert Care Across Every Specialty"
        subtitle="Ten departments, one hospital. Each specialty is led by senior consultants and supported by shared diagnostics, intensive care and surgical infrastructure."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specialties.map((s) => (
            <Link
              key={s.slug}
              to="/specialties/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                <SpecialtyIcon slug={s.slug} className="size-6" />
              </span>
              <h2 className="mt-5 font-display text-lg font-bold text-foreground">{s.name}</h2>
              <p className="mt-1 text-sm font-semibold text-primary">{s.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary">
                View department{" "}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
