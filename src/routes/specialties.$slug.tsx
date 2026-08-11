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
      <section className="relative overflow-hidden bg-primary-deep py-20 text-primary-foreground lg:py-28">
        {/* Background Accents */}
        <div aria-hidden className="absolute -right-20 -top-20 size-96 rounded-full bg-accent/20 blur-[100px]" />
        <div aria-hidden className="absolute -left-20 bottom-0 size-80 rounded-full bg-primary/20 blur-[80px]" />
        
        <div className="container-page relative z-10">
          <Link
            to="/specialties"
            className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-primary-foreground/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" /> 
            Back to Specialties
          </Link>
          
          <div className="mt-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="grid size-24 lg:size-32 shrink-0 place-items-center rounded-[2.5rem] bg-white/10 backdrop-blur-md ring-1 ring-white/20 shadow-2xl">
              <specialty.icon className="size-12 lg:size-16 text-white" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-accent">
                  Department of Medical Excellence
                </span>
              </div>
              <h1 className="mt-4 text-4xl font-[900] leading-tight sm:text-5xl lg:text-7xl text-white">
                {specialty.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg lg:text-xl font-medium text-primary-foreground/80 leading-relaxed">
                {specialty.tagline}
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="xl" className="rounded-full bg-accent hover:bg-accent/90 text-white shadow-xl px-10">
                  <Link to="/book-appointment" search={{ specialty: specialty.slug }}>
                    Book Appointment <ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl" className="rounded-full border-white/20 text-white hover:bg-white/10 px-10">
                  <a href={`tel:${HOSPITAL.phone}`}>
                    <Phone className="mr-2 size-5" /> Call for Inquiry
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="pb-24">
        <div className="grid gap-16 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-16">
            <div>
              <SectionHeading align="left" eyebrow="Department Overview" title={`Advanced ${specialty.name} Care`} />
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground font-medium">
                <p>{specialty.description}</p>
                <p>
                  At Calix Multispeciality Hospital, our {specialty.name.toLowerCase()} department is equipped with 
                  the latest medical technologies and staffed by experienced specialists dedicated to providing 
                  comprehensive care. We follow international protocols to ensure the highest standards of 
                  patient safety and treatment efficacy.
                </p>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-border bg-slate-50/50 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Check className="size-5 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-[800] text-primary">Conditions Treated</h3>
                </div>
                <ul className="space-y-4">
                  {specialty.conditions.map((item: string) => (
                    <li key={item} className="flex items-start gap-3 text-[0.9375rem] font-semibold text-foreground">
                      <div className="mt-1 size-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-border bg-slate-50/50 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-xl bg-healthcare-teal/10 flex items-center justify-center">
                    <Check className="size-5 text-healthcare-teal" />
                  </div>
                  <h3 className="font-display text-xl font-[800] text-primary">Diagnostics Offered</h3>
                </div>
                <ul className="space-y-4">
                  {specialty.diagnostics.map((item: string) => (
                    <li key={item} className="flex items-start gap-3 text-[0.9375rem] font-semibold text-foreground">
                      <div className="mt-1 size-1.5 shrink-0 rounded-full bg-healthcare-teal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-[900] text-primary mb-8 flex items-center gap-4">
                <span className="h-px flex-1 bg-slate-100" />
                Key Services & Procedures
                <span className="h-px flex-1 bg-slate-100" />
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {specialty.highlights.map((h: string) => (
                  <div
                    key={h}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Check className="size-5" />
                    </div>
                    <span className="text-[0.9375rem] font-bold text-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {related.length > 0 && (
              <div>
                <SectionHeading align="left" eyebrow="Our Team" title="Leading Specialists" />
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {related.map((d) => (
                    <Link 
                      key={d.slug}
                      to="/doctors/$slug"
                      params={{ slug: d.slug }}
                      className="group flex items-center gap-6 rounded-[2rem] border border-border bg-card p-6 shadow-card transition-all hover:border-primary/20 hover:shadow-lift"
                    >
                      <div className="size-20 shrink-0 rounded-2xl bg-gradient-brand p-0.5">
                        <div className="size-full rounded-[0.9rem] bg-white flex items-center justify-center text-2xl font-black text-primary">
                          {d.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-[800] text-primary group-hover:text-accent transition-colors">{d.name}</h4>
                        <p className="text-xs font-bold text-muted-foreground mt-1 uppercase tracking-wider">{d.qualification}</p>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-full bg-primary/5 text-[10px] font-black text-primary uppercase tracking-tighter">
                            {d.experience} Exp
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-32 h-fit space-y-8">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-primary-deep p-10 text-primary-foreground shadow-2xl">
              <div aria-hidden className="absolute -right-10 -top-10 size-40 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-[900]">Instant Booking</h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-primary-foreground/70 font-medium">
                  Connect with our {specialty.name.toLowerCase()} experts. Priority slots available for specialized consultations.
                </p>
                <div className="mt-10 space-y-4">
                  <Button asChild size="xl" className="w-full rounded-2xl bg-accent hover:bg-accent/90 text-white shadow-lg">
                    <Link to="/book-appointment" search={{ specialty: specialty.slug }}>
                      Schedule Visit
                    </Link>
                  </Button>
                  <a
                    href={`tel:${HOSPITAL.phone}`}
                    className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 py-4 text-sm font-black uppercase tracking-widest text-white hover:bg-white/5 transition-colors"
                  >
                    <Phone className="size-4" /> {HOSPITAL.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-border bg-slate-50/30 p-10 shadow-sm">
              <h3 className="font-display text-xl font-[800] text-primary flex items-center gap-3 mb-8">
                Explore More
                <span className="h-px flex-1 bg-slate-200" />
              </h3>
              <ul className="space-y-3">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/specialties/$slug"
                      params={{ slug: s.slug }}
                      className="group flex items-center justify-between rounded-2xl bg-white border border-border p-4 text-[0.9375rem] font-bold text-muted-foreground shadow-sm transition-all hover:border-primary/20 hover:text-primary hover:shadow-md"
                    >
                      {s.name}
                      <ArrowRight className="size-4 text-muted-foreground/60 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
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
