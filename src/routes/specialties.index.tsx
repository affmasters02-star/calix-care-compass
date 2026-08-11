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

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty) => (
            <Link
              key={specialty.slug}
              to="/specialties/$slug"
              params={{ slug: specialty.slug }}
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-border bg-card p-6 sm:p-10 shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-lift"
            >
              {/* Decorative Glow */}
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/5 blur-3xl transition-opacity group-hover:opacity-100 opacity-0" />
              
              <div className="flex items-start justify-between relative z-10">
                <div className="grid size-24 place-items-center rounded-[2.5rem] bg-primary/5 ring-1 ring-primary/10 transition-all duration-500 group-hover:bg-gradient-brand group-hover:ring-0 group-hover:shadow-premium group-hover:shadow-primary/30">
                  <SpecialtyIcon slug={specialty.slug} className="size-11 text-primary group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                  {/* Glass stroke effect */}
                  <div className="absolute inset-0 rounded-[2.5rem] border border-white/0 transition-colors duration-500 group-hover:border-white/20" />
                </div>
                <div className="rounded-full bg-slate-50 p-3.5 text-slate-300 transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:shadow-premium group-hover:shadow-accent/40 group-hover:scale-110">
                  <ArrowRight className="size-5" />
                </div>
              </div>

              <div className="mt-8 relative z-10">
                <h3 className="font-display text-2xl font-[900] text-primary transition-colors group-hover:text-primary-deep">
                  {specialty.name}
                </h3>
                <div className="mt-2.5 flex items-center gap-3">
                  <span className="h-1 w-8 rounded-full bg-accent/20 transition-all duration-500 group-hover:w-16 group-hover:bg-accent" />
                  <p className="text-[0.7rem] font-black text-accent uppercase tracking-[0.25em]">
                    {specialty.tagline}
                  </p>
                </div>
                <p className="mt-5 line-clamp-3 text-[0.9375rem] leading-relaxed text-slate-500 font-medium transition-colors group-hover:text-slate-700">
                  {specialty.description}
                </p>
              </div>

              <div className="mt-8 grid gap-3.5 relative z-10">
                {specialty.highlights.slice(0, 3).map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3.5 text-sm font-semibold text-slate-600 transition-colors group-hover:text-slate-800">
                    <div className="flex size-5.5 shrink-0 items-center justify-center rounded-full bg-healthcare-teal/10 transition-colors group-hover:bg-healthcare-teal/20">
                      <Check className="size-3.5 text-healthcare-teal stroke-[3]" />
                    </div>
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-10 relative z-10">
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-[0.7rem] font-black uppercase tracking-[0.3em] text-primary/60 group-hover:text-accent group-hover:translate-x-2 transition-all duration-500"
                >
                  Explore Department <ArrowRight className="ml-3 size-4" />
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
