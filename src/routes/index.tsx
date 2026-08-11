import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  Phone,
  ShieldCheck,
  Microscope,
  Building2,
  Clock,
  ClipboardList,
  UserRound,
  Quote,
  Check,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/Bits";
import { SpecialtyIcon } from "@/components/site/SpecialtyIcon";
import {
  specialties,
  whyChoose,
  doctors,
  healthPackages,
  testimonials,
  HOSPITAL,
} from "@/lib/site-data";
import heroImageAsset from "@/assets/hero-hospital.avif.asset.json";
import teamImage from "@/assets/care-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Calix Multispeciality Hospital | Complete Family Healthcare" },
      {
        name: "description",
        content:
          "Comprehensive multispeciality healthcare you can trust — expert specialists, advanced diagnostics and 24×7 emergency care for the entire family at Calix.",
      },
      { property: "og:title", content: "Calix Multispeciality Hospital | Complete Family Healthcare" },
      {
        property: "og:description",
        content:
          "Advanced healthcare, trusted specialists, compassionate care across ten core specialties under one roof.",
      },
    ],
  }),
  component: Home,
});

const whyIcons = [UserRound, Microscope, Building2, Clock, ClipboardList, ShieldCheck];

const stats = [
  { value: "10", label: "Core specialties" },
  { value: "40+", label: "Consultants & specialists" },
  { value: "24×7", label: "Emergency & critical care" },
  { value: "1L+", label: "Patients cared for" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImageAsset.url}
          alt="Calix Multispeciality Hospital entrance at sunrise"
          width={1600}
          height={1104}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F5B] via-[#001F5B]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001F5B]/60 via-transparent to-transparent" />
        <div className="container-page relative flex min-h-[85vh] flex-col justify-center py-20 text-primary-foreground lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold tracking-wide backdrop-blur-md">
              <span className="flex size-2 rounded-full bg-accent animate-pulse" />
              24/7 EMERGENCY & CRITICAL CARE
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              World-Class Multispeciality Healthcare <span className="text-accent drop-shadow-sm">Under One Roof</span>
            </h1>
            <p className="mt-8 text-xl font-medium leading-relaxed text-primary-foreground/90 lg:text-2xl">
              Combining expert specialists, advanced diagnostics, and compassionate family care to provide you with a seamless healthcare experience.
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <Button asChild variant="accent" size="xl" className="h-14 bg-gradient-cta px-8 text-lg shadow-xl transition-all hover:-translate-y-1 hover:brightness-110">
                <Link to="/book-appointment">
                  Book Appointment <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild variant="brand" size="xl" className="h-14 border border-white/20 bg-primary-deep/40 px-8 text-lg backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-primary-deep/60">
                <a href={`tel:${HOSPITAL.emergency}`}>
                  <Phone className="mr-2 size-5" /> Emergency Care
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick actions */}
      <div className="border-b border-border bg-background">
        <div className="container-page grid divide-border sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
          {[
            { icon: CalendarCheck, title: "Book an Appointment", body: "Same-week slots across specialties", to: "/book-appointment" as const },
            { icon: UserRound, title: "Find a Doctor", body: "Senior consultants in every department", to: "/doctors" as const },
            { icon: Microscope, title: "Health Packages", body: "Preventive checks from ₹1,499", to: "/health-packages" as const },
            { icon: ShieldCheck, title: "Patient Services", body: "Insurance, records and support", to: "/patient-services" as const },
          ].map((a) => (
            <Link
              key={a.title}
              to={a.to}
              className="group flex items-start gap-4 px-2 py-7 transition-colors hover:bg-primary-soft/60 lg:px-8"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                <a.icon className="size-5" />
              </span>
              <span>
                <span className="flex items-center gap-1.5 font-display text-sm font-bold text-foreground">
                  {a.title}
                  <ArrowRight className="size-3.5 text-primary transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">{a.body}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Specialties */}
      <Section tone="soft" className="bg-slate-50">
        <SectionHeading
          eyebrow="Our Specialties"
          title="Expert Care Across Every Specialty"
          subtitle="Ten core departments working together so your diagnosis, treatment and follow-up happen in one place."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {specialties.map((s) => (
            <Link
              key={s.slug}
              to="/specialties/$slug"
              params={{ slug: s.slug }}
              className="group rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-2 hover:border-primary/30 hover:shadow-lift"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <SpecialtyIcon slug={s.slug} className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-foreground">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary">
                Explore <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img
              src={teamImage}
              alt="Calix doctors and nursing team in the hospital corridor"
              loading="lazy"
              width={1408}
              height={1008}
              className="rounded-[2rem] object-cover shadow-lift"
            />
            <div className="absolute -bottom-8 right-4 hidden rounded-3xl bg-primary-deep p-6 text-primary-foreground shadow-lift sm:block">
              <p className="font-display text-3xl font-extrabold">24×7</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/80">
                Emergency care
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Calix"
              title="Your Trusted Partner in Multispeciality Healthcare"
              subtitle="Calix Multispeciality Hospital brings general medicine, surgical specialties, women's health, critical care and diagnostics together under one roof — so families never have to travel between centres for coordinated care."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyChoose.map((w, i) => {
                const Icon = whyIcons[i] ?? ShieldCheck;
                return (
                  <li key={w.title} className="flex gap-3">
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                      <Icon className="size-4.5" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-foreground">{w.title}</span>
                      <span className="mt-0.5 block text-sm text-muted-foreground">{w.body}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
            <Button asChild variant="outlineBrand" size="lg" className="mt-9">
              <Link to="/about">
                More about our hospital <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <section className="bg-primary-deep py-14 text-primary-foreground">
        <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-extrabold">{s.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/65">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors */}
      <Section tone="muted">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our Doctors"
            title="Expert Doctors Across Specialties"
            subtitle="Senior consultants with decades of combined experience, supported by trained nursing and allied health teams."
          />
          <Button asChild variant="soft" size="lg">
            <Link to="/doctors">
              View all doctors <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.slice(0, 4).map((d) => (
            <div key={d.name} className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <span className="grid size-14 place-items-center rounded-full bg-primary-soft font-display text-lg font-bold text-primary">
                {d.name.split(" ")[1]?.[0] ?? "C"}
                {d.name.split(" ")[2]?.[0] ?? ""}
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-foreground">{d.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{d.specialty}</p>
              <p className="mt-2 text-xs text-muted-foreground">{d.qualification}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {d.experience} experience
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Packages */}
      <Section>
        <SectionHeading
          eyebrow="Health Packages"
          title="Preventive Checks Built Around Your Life Stage"
          subtitle="Structured screening panels with consultation included — reports on the same day for most tests."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {healthPackages.slice(0, 2).map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl border p-8 shadow-card ${
                p.featured ? "border-primary/40 bg-gradient-soft" : "border-border bg-card"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.for}</p>
                </div>
                <p className="font-display text-2xl font-extrabold text-primary">{p.price}</p>
              </div>
              <ul className="mt-6 space-y-2.5">
                {p.includes.map((i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-foreground/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" /> {i}
                  </li>
                ))}
              </ul>
              <Button asChild variant="brand" size="lg" className="mt-8 w-full">
                <Link to="/book-appointment">Book this package</Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outlineBrand" size="lg">
            <Link to="/health-packages">
              Compare all packages <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Patient Stories"
          title="Trusted by Families Across the Region"
          subtitle="Real experiences from patients treated across our specialties."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <figure key={t.name} className="rounded-3xl border border-border bg-card p-8 shadow-card">
              <Quote className="size-7 text-accent" />
              <blockquote className="mt-5 text-sm leading-relaxed text-foreground/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <span className="block text-sm font-bold text-foreground">{t.name}</span>
                <span className="block text-xs text-muted-foreground">{t.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outlineBrand" size="lg">
            <Link to="/testimonials">
              Read more stories <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-20">
        <div className="container-page flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Complete Healthcare Under One Roof — Book Your Visit Today
            </h2>
            <p className="mt-3 max-w-2xl text-primary-foreground/80">
              Speak to our care team for appointments, second opinions or emergency assistance.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="onDark" size="xl">
              <a href={`tel:${HOSPITAL.phone}`}>
                <Phone className="size-4" /> {HOSPITAL.phone}
              </a>
            </Button>
            <Button asChild size="xl" variant="secondary">
              <Link to="/book-appointment">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
