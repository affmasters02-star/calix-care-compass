import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Patient Testimonials | Calix Multispeciality Hospital" },
      {
        name: "description",
        content:
          "Read patient experiences from across Calix Multispeciality Hospital — critical care, maternity, orthopedics, diabetology and family health.",
      },
      { property: "og:title", content: "Patient Testimonials | Calix Multispeciality Hospital" },
      {
        property: "og:description",
        content: "Families across the region share their experience of care at Calix.",
      },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Trusted Healthcare for You and Your Family"
        subtitle="Patients and families describe what care at Calix felt like — in their own words."
      />

      <Section>
        <SectionHeading
          eyebrow="Patient Stories"
          title="Experiences from across our specialties"
          subtitle="Shared with permission by patients treated at Calix."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-card"
            >
              <Quote className="size-7 text-accent" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/80">
                {t.quote}
              </blockquote>
              <div className="mt-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <figcaption className="mt-4 border-t border-border pt-4">
                <span className="block text-sm font-bold text-foreground">{t.name}</span>
                <span className="block text-xs text-muted-foreground">{t.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="rounded-3xl bg-gradient-brand p-10 text-center text-primary-foreground shadow-lift lg:p-14">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to experience care that listens?</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            Book a consultation with the specialty that fits your needs.
          </p>
          <Button asChild variant="secondary" size="xl" className="mt-8">
            <Link to="/book-appointment">Book Appointment</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
