import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/Bits";
import { SpecialtyIcon } from "@/components/site/SpecialtyIcon";
import { specialties, doctors, HOSPITAL } from "@/lib/site-data";

export const Route = createFileRoute("/specialties/$slug")({
  loader: ({ params }) => {
    const specialty = specialties.find((s) => s.slug === params.slug);
    if (!specialty) throw notFound();
    return { specialty };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Specialty not found" }, { name: "robots", content: "noindex" }] };
    }
    const { specialty } = loaderData;
    const title = `${specialty.name} | Calix Multispeciality Hospital`;
    return {
      meta: [
        { title },
        { name: "description", content: specialty.description },
        { property: "og:title", content: title },
        { property: "og:description", content: specialty.description },
      ],
    };
  },
  component: SpecialtyDetail,
});

function SpecialtyDetail() {
  const { specialty } = Route.useLoaderData();
  const related = doctors.filter((d) => d.specialty === specialty.name);
  const others = specialties.filter((s) => s.slug !== specialty.slug).slice(0, 5);

  return (
    <>
      <section className="relative overflow-hidden bg-primary-deep py-16 text-primary-foreground lg:py-20">
        <div aria-hidden className="absolute -right-20 -top-20 size-80 rounded-full bg-accent/25 blur-3xl" />
        <div className="container-page relative">
          <Link
            to="/specialties"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-foreground/65 hover:text-primary-foreground"
          >
            <ArrowLeft className="size-3.5" /> All specialties
          </Link>
          <div className="mt-8 flex items-start gap-5">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary-foreground/12 ring-1 ring-primary-foreground/25">
              <SpecialtyIcon slug={specialty.slug} className="size-7" />
            </span>
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{specialty.name}</h1>
              <p className="mt-3 text-lg text-primary-foreground/80">{specialty.tagline}</p>
              <Button asChild size="lg" className="mt-6">
                <Link to="/book-appointment" search={{ specialty: specialty.name }}>
                  Book for this specialty <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <SectionHeading align="left" eyebrow="Overview" title={`Care at our ${specialty.name} department`} />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {specialty.description}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Consultations, investigations and follow-up happen within the same hospital, with
              access to in-house radiology, pathology, intensive care and operation theatres whenever
              your treatment needs them.
            </p>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="size-2 rounded-full bg-accent" />
                  Common Conditions Treated
                </h3>
                <ul className="mt-5 space-y-3">
                  {specialty.conditions.map((item: string) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                      <Check className="size-4 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="size-2 rounded-full bg-accent" />
                  Diagnostics Offered
                </h3>
                <ul className="mt-5 space-y-3">
                  {specialty.diagnostics.map((item: string) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                      <Check className="size-4 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="mt-12 font-display text-lg font-bold text-foreground">Top Services & Procedures</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {specialty.highlights.map((h: string) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium text-foreground/85 shadow-card transition-all hover:border-primary-soft hover:shadow-lg"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" /> {h}
                </li>
              ))}
            </ul>

            {related.length > 0 ? (
              <>
                <h3 className="mt-12 font-display text-lg font-bold text-foreground">
                  Consultants in this department
                </h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {related.map((d) => (
                    <div key={d.name} className="rounded-xl border border-border bg-card p-6 shadow-card">
                      <p className="font-display text-base font-bold text-foreground">{d.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{d.qualification}</p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-primary">
                        {d.experience} experience
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-gradient-brand p-7 text-primary-foreground shadow-lift">
              <h3 className="font-display text-lg font-bold">Book a consultation</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Share your preferred date and our care team will confirm a slot with a{" "}
                {specialty.name.toLowerCase()} specialist.
              </p>
              <Button asChild variant="secondary" size="lg" className="mt-6 w-full">
                <Link to="/book-appointment">Book Appointment</Link>
              </Button>
              <a
                href={`tel:${HOSPITAL.phone}`}
                className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-primary-foreground/85"
              >
                <Phone className="size-4" /> {HOSPITAL.phone}
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <h3 className="font-display text-base font-bold text-foreground">Other specialties</h3>
              <ul className="mt-4 space-y-2">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/specialties/$slug"
                      params={{ slug: s.slug }}
                      className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary"
                    >
                      {s.name} <ArrowRight className="size-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
