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
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-premium focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
            >
              {/* Image header */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={specialty.image}
                  alt={`${specialty.name} department at Calix Multispeciality Hospital`}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-primary-deep/10 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-5 left-6 flex items-center gap-4">
                  <div className="grid size-16 place-items-center rounded-3xl bg-white/85 text-primary shadow-premium ring-1 ring-white/60 backdrop-blur-md transition-all duration-500 group-hover:bg-gradient-brand group-hover:text-white group-hover:ring-0">
                    <specialty.icon className="size-8" />
                  </div>
                </div>
                <div className="absolute right-6 top-6 rounded-full bg-white/85 p-3.5 text-primary shadow-sm backdrop-blur-md transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:rotate-12">
                  <ArrowRight className="size-5" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-9">
              <div className="relative z-10">

 
              <div className="mt-10 relative z-10">
                <h3 className="font-display text-3xl font-[900] tracking-tight text-primary transition-all duration-500 group-hover:text-primary-deep group-hover:scale-[1.01]">
                  {specialty.name}
                </h3>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-1 w-10 rounded-full bg-accent/20 transition-all duration-500 group-hover:w-20 group-hover:bg-accent" />
                  <p className="text-[0.75rem] font-black text-accent uppercase tracking-[0.3em]">
                    {specialty.tagline}
                  </p>
                </div>
                <p className="mt-6 line-clamp-3 text-[1rem] leading-relaxed text-muted-foreground font-semibold transition-colors duration-500 group-hover:text-foreground">
                  {specialty.description}
                </p>
              </div>
 
              <div className="mt-10 grid gap-4 relative z-10">
                {specialty.highlights.slice(0, 3).map((highlight) => (
                  <div key={highlight} className="flex items-center gap-4 text-[0.9375rem] font-bold text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
                    <div className="flex size-6.5 shrink-0 items-center justify-center rounded-full bg-healthcare-teal/10 shadow-sm transition-all duration-500 group-hover:bg-healthcare-teal group-hover:text-white group-hover:scale-110">
                      <Check className="size-4 stroke-[3.5]" />
                    </div>
                    {highlight}
                  </div>
                ))}
              </div>
 
              <div className="mt-auto pt-12 relative z-10">
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-[0.75rem] font-black uppercase tracking-[0.4em] text-primary/60 group-hover:text-accent group-hover:translate-x-3 transition-all duration-500"
                >
                  Explore Department <ArrowRight className="ml-4 size-5 transition-transform duration-500 group-hover:translate-x-1" />
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
