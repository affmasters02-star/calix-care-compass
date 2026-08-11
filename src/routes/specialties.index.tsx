import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { SpecialtyIcon } from "@/components/site/SpecialtyIcon";
import { specialties } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/specialties/")({
  head: () => {
    const title = "Medical Specialties | Calix Multispeciality Hospital";
    const description =
      "Explore the wide range of medical specialties at Calix Multispeciality Hospital, from Nephrology and Urology to Orthopedics and Neurology.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: SpecialtiesIndex,
});

function SpecialtiesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Expert Care Across Fields"
        title="Our Medical Specialties"
        subtitle="Comprehensive multispeciality healthcare for the entire family, powered by expert doctors and advanced technology."
      />

      <Section tone="soft">
        <SectionHeading
          eyebrow="Clinical Excellence"
          title="World-Class Care Under One Roof"
          subtitle="We bring together leading specialists and advanced diagnostics to provide you with the best possible treatment outcomes."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty) => (
            <Link
              key={specialty.slug}
              to="/specialties/$slug"
              params={{ slug: specialty.slug }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lift"
            >
              <div className="flex items-start justify-between">
                <div className="grid size-16 place-items-center rounded-2xl bg-primary/5 ring-1 ring-primary/10 transition-colors group-hover:bg-primary/10">
                  <SpecialtyIcon slug={specialty.slug} className="size-8 text-primary" />
                </div>
                <div className="rounded-full bg-slate-100 p-2 text-slate-400 transition-colors group-hover:bg-primary group-hover:text-white">
                  <ArrowRight className="size-4" />
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-display text-xl font-[800] text-primary transition-colors group-hover:text-primary-deep">
                  {specialty.name}
                </h3>
                <p className="mt-2 text-sm font-semibold text-accent uppercase tracking-wider">
                  {specialty.tagline}
                </p>
                <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {specialty.description}
                </p>
              </div>

              <div className="mt-6 space-y-2">
                {specialty.highlights.slice(0, 3).map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                    <Check className="size-3 text-healthcare-teal" />
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-sm font-bold text-primary group-hover:translate-x-1 transition-transform"
                >
                  Learn More <ArrowRight className="ml-2 size-3.5" />
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-[2.5rem] bg-primary-deep p-8 lg:p-16 text-center text-primary-foreground relative overflow-hidden shadow-2xl">
          <div aria-hidden className="absolute -left-20 -top-20 size-80 rounded-full bg-accent/20 blur-3xl" />
          <div aria-hidden className="absolute -right-20 -bottom-20 size-80 rounded-full bg-primary/30 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-[800] lg:text-4xl">Need Specialized Care?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Our specialists are ready to help. Book a consultation today to start your journey towards better health.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="xl" className="rounded-full bg-accent hover:bg-accent/90 text-white border-none px-8">
                <Link to="/book-appointment">Book an Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="rounded-full border-white/30 text-white hover:bg-white/10 px-8">
                <Link to="/doctors">Find a Specialist</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
