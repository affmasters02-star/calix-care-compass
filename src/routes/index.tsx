import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
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
  ChevronLeft,
  ChevronRight,
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
import { cn } from "@/lib/utils";
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
      <section id="home" className="relative isolate min-h-[85vh] overflow-hidden flex flex-col justify-center">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImageAsset.url}
            alt="Calix Multispeciality Hospital entrance at sunrise"
            width={1600}
            height={1104}
            className="size-full object-cover object-center scale-105 animate-in fade-in zoom-in duration-1000"
            style={{ fetchPriority: 'high' } as any}
          />
          {/* Advanced Multi-layer Gradient Overlay - Refined for visibility */}
          <div className="absolute inset-0 bg-[#001F5B]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F5B]/90 via-[#001F5B]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001F5B]/80 via-transparent to-transparent" />
          {/* Decorative Radial Glows */}
          <div className="absolute -left-20 top-0 h-[600px] w-[600px] rounded-full bg-[#003A8C]/30 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
        </div>

        <div className="container-page relative z-10 py-20 text-white lg:py-32">
          <div className="max-w-4xl">
            {/* Premium Trust Badge */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2.5 text-xs font-black tracking-[0.2em] text-white shadow-2xl ring-1 ring-white/30 backdrop-blur-md">
              <span className="relative flex size-2.5">
                <span className="relative inline-flex size-2.5 rounded-full bg-accent"></span>
              </span>
              <span className="leading-none">24/7 EMERGENCY & CRITICAL CARE</span>
            </div>

            <h1 className="text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] leading-[1.1]">
              World-Class Multispeciality <br className="hidden sm:block" /> 
              Healthcare <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-accent via-[#FF6BAA] to-accent bg-clip-text text-transparent">Under One Roof</span>
                <span className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-accent/20 blur-sm" />
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-white/90 drop-shadow-md sm:text-xl">
              Experience advanced clinical expertise, cutting-edge diagnostics, and compassionate family-centered care—all delivered with uncompromising excellence.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild variant="accent" size="xl" className="h-16 rounded-full bg-gradient-cta px-10 text-lg font-black shadow-[0_20px_40px_-10px_rgba(232,62,140,0.4)] transition-all hover:-translate-y-1 hover:brightness-110 active:scale-95">
                <Link to="/book-appointment">
                  Book Appointment <ArrowRight className="ml-2 size-6" />
                </Link>
              </Button>
              <Button asChild variant="brand" size="xl" className="h-16 rounded-full border border-white/20 bg-white/5 px-10 text-lg font-bold backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/10 active:scale-95">
                <a href={`tel:${HOSPITAL.emergency}`}>
                  <Phone className="mr-2 size-5 text-accent" /> Emergency Care
                </a>
              </Button>
            </div>
          </div>
        </div>

      </section>


      {/* Specialties */}
      <Section id="specialties" tone="soft" className="bg-slate-50 pt-8 lg:pt-10">
        <SectionHeading
          eyebrow="Our Specialties"
          title="Expert Care Across Every Specialty"
          subtitle="Ten core departments working together so your diagnosis, treatment and follow-up happen in one place."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.slice(0, 9).map((s) => (
            <Link
              key={s.slug}
              to="/specialties/$slug"
              params={{ slug: s.slug }}
              className="group relative flex flex-col items-center overflow-hidden rounded-[2.5rem] border border-[#003A8C]/20 bg-gradient-to-br from-[#003A8C] to-[#001F5B] p-7 sm:p-9 text-center shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-premium focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
            >
              {/* Background Glows */}
              <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[#003A8C]/5 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-[#003A8C]/15 group-hover:opacity-100 opacity-0" aria-hidden="true" />
              <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-accent/5 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-accent/15 group-hover:opacity-100 opacity-0" aria-hidden="true" />
              
              <div className="relative z-10 grid size-28 place-items-center rounded-[2.5rem] bg-white/10 text-white shadow-inner transition-all duration-500 group-hover:bg-white group-hover:text-[#003A8C] group-hover:shadow-premium group-hover:shadow-white/20 group-hover:-translate-y-1 backdrop-blur-md ring-1 ring-white/20">
                <s.icon className="size-12 transition-transform duration-500 group-hover:scale-110" />
                {/* Dual Glass stroke effect */}
                <div className="absolute inset-0 rounded-[2.5rem] border border-white/20 transition-colors duration-500 group-hover:border-primary/20" />
                <div className="absolute inset-[2px] rounded-[calc(2.5rem-2px)] border border-white/10 transition-colors duration-700 group-hover:border-primary/10" />
              </div>
              
              <div className="relative z-10 mt-8">
                <h3 className="font-display text-2xl font-[900] tracking-tight text-white transition-all duration-500 group-hover:scale-[1.02]">{s.name}</h3>

                <div className="mx-auto mt-3 flex items-center justify-center gap-2">
                  <div className="h-1 w-6 rounded-full bg-white/20 transition-all duration-500 group-hover:w-12 group-hover:bg-accent" />
                  <div className="size-1 rounded-full bg-white/20 transition-all duration-500 group-hover:bg-accent" />

                </div>
              </div>
              
              <p className="relative z-10 mt-5 text-[0.9375rem] font-semibold leading-relaxed text-white/70 transition-colors duration-500 group-hover:text-white line-clamp-2 px-2">
                {s.tagline}

              </p>

              {/* Quick View Summary */}
              <div className="relative z-10 mt-4 overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100">
                 <p className="text-[0.8rem] font-medium text-white/50 italic">
                   Advanced clinical care & surgical expertise.
                 </p>
              </div>
              
              <div className="relative z-10 mt-auto pt-10 flex items-center gap-3 text-[0.7rem] font-black uppercase tracking-[0.3em] text-white/50 transition-all duration-500 group-hover:text-white group-hover:gap-6 group-hover:translate-x-1">
                <span className="relative">
                  Explore
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full" />
                </span>
                <div className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-all duration-500 group-hover:bg-white group-hover:text-primary group-hover:shadow-premium group-hover:shadow-white/40 group-hover:rotate-[360deg]" aria-hidden="true">

                  <ArrowRight className="size-4.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {specialties.length > 9 && (
          <div className="mt-14 flex justify-center">
            <Button asChild size="xl" className="rounded-full bg-[#003A8C] px-10 text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-[#001F5B] hover:shadow-2xl">
              <Link to="/specialties">
                See More Specialties <ArrowRight className="ml-3 size-5" />
              </Link>
            </Button>
          </div>
        )}
      </Section>

      {/* About */}
      <Section id="about">
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
      <section className="bg-primary-deep py-10 text-primary-foreground lg:py-12">
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
      <Section id="doctors" tone="muted">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our Doctors"
            title="Expert Doctors Dedicated to Your Health"
            subtitle="A dedicated and experienced team of clinicians to entrust your health and well-being."
          />
          <Button asChild variant="soft" size="lg" className="rounded-xl font-bold">
            <Link to="/doctors">
              View all doctors <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        {/* Filter Tabs */}
        <DoctorFilters doctors={doctors} />
      </Section>

      {/* Packages */}
      <Section>
        <SectionHeading
          eyebrow="Health Packages"
          title="Preventive Checks Built Around Your Life Stage"
          subtitle="Structured screening panels with consultation included — reports on the same day for most tests."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {healthPackages.slice(0, 2).map((p) => (
            <div
              key={p.name}
              className={cn(
                "group relative overflow-hidden rounded-[2.5rem] border p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 lg:p-10",
                p.featured 
                  ? "border-primary/20 bg-white shadow-[0_20px_50px_-20px_rgba(0,58,140,0.15)]" 
                  : "border-slate-100 bg-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)]"
              )}
            >
              {p.featured && (
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-cta px-4 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.2em] text-white shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="relative z-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
                <div>
                  <h3 className="font-display text-2xl font-[900] tracking-tight text-primary">{p.name}</h3>
                  <p className="mt-1.5 text-sm font-semibold text-slate-500">{p.for}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-[0.7rem] font-bold uppercase tracking-widest text-slate-400">Starting at</p>
                  <p className="font-display text-3xl font-black text-primary">{p.price}</p>
                </div>
              </div>

              <div className="relative z-10 mt-8 space-y-3.5">
                {p.includes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                      <Check className="size-3 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium leading-relaxed text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild variant={p.featured ? "accent" : "brand"} size="xl" className={cn(
                "relative z-10 mt-10 h-14 w-full rounded-full text-base font-black shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]",
                p.featured ? "bg-gradient-cta" : "bg-primary"
              )}>
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
      <Section id="testimonials" tone="soft">
        <SectionHeading
          eyebrow="Patient Stories"
          title="Trusted by Families Across the Region"
          subtitle="Real experiences from patients treated across our specialties."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <figure key={t.name} className="group relative flex flex-col rounded-[2.5rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-premium lg:p-10">
              {/* Quote Mark Background */}
              <Quote className="absolute -right-4 top-8 size-32 -rotate-12 text-slate-50 opacity-[0.03] transition-transform duration-700 group-hover:scale-110" aria-hidden="true" />
              
              <div className="relative z-10 flex size-12 items-center justify-center rounded-2xl bg-accent-soft text-accent shadow-sm">
                <Quote className="size-6" />
              </div>

              <blockquote className="relative z-10 mt-6 text-base font-medium leading-relaxed text-slate-600 italic">
                "{t.quote}"
              </blockquote>

              <figcaption className="relative z-10 mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="grid size-12 place-items-center rounded-full bg-primary-soft font-display text-sm font-black text-primary ring-2 ring-white shadow-md">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <span className="block text-sm font-[900] tracking-tight text-primary">{t.name}</span>
                  <span className="block text-[0.7rem] font-bold uppercase tracking-widest text-slate-400">{t.context}</span>
                </div>
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

      {/* Pre-Footer CTA */}
      <section className="relative overflow-hidden bg-primary-deep py-16 text-primary-foreground lg:py-24">
        {/* Background decorative elements */}
        <div className="absolute -right-24 -top-24 size-96 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-24 size-96 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
        
        <div className="container-page relative">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="max-w-3xl text-center lg:text-left">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Complete Healthcare Under One Roof — <br className="hidden lg:block" />
                <span className="text-accent">Book Your Visit Today</span>
              </h2>
              <p className="mt-6 text-lg font-medium text-primary-foreground/80 lg:text-xl">
                Speak to our care team for appointments, second opinions or emergency assistance. 
                Expert care is just a phone call away.
              </p>
            </div>
            
            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row lg:shrink-0">
              <Button asChild variant="outline" size="xl" className="h-16 border-white/20 bg-white/5 px-8 text-lg font-bold backdrop-blur-sm transition-all hover:bg-white/10 sm:h-20">
                <a href={`tel:${HOSPITAL.phone}`}>
                  <Phone className="mr-3 size-6" /> {HOSPITAL.phone}
                </a>
              </Button>
              <Button asChild size="xl" variant="accent" className="h-16 bg-gradient-cta px-10 text-lg font-bold shadow-2xl transition-all hover:-translate-y-1 hover:brightness-110 sm:h-20">
                <Link to="/book-appointment">Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DoctorFilters({ doctors: allDoctors }: { doctors: typeof doctors }) {
  const [activeTab, setActiveTab] = React.useState("all");
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const filteredDoctors = React.useMemo(() => {
    if (activeTab === "all") return allDoctors.slice(0, 2);
    return allDoctors.filter(d => d.specialty.toLowerCase() === activeTab.toLowerCase()).slice(0, 2);
  }, [activeTab, allDoctors]);

  return (
    <div className="mt-10">
      <div className="relative mb-12 flex items-center gap-4" role="region" aria-label="Specialty filtering controls">
        {/* Navigation Arrows */}
        <button
          onClick={() => scroll("left")}
          className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-card text-primary shadow-sm transition-all hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label="Scroll specialty tabs left"
        >
          <ChevronLeft className="size-5" />
        </button>
        
        <div 
          ref={scrollContainerRef}
          className="no-scrollbar flex w-full justify-start gap-3 overflow-x-auto py-2 outline-none"
          role="tablist"
          aria-label="Filter doctors by specialty"
          tabIndex={0}
        >
          <button
            role="tab"
            aria-selected={activeTab === "all"}
            aria-controls="doctor-grid"
            onClick={() => setActiveTab("all")}
            className={cn(
              "h-11 shrink-0 whitespace-nowrap rounded-full px-8 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              activeTab === "all"
                ? "bg-primary text-primary-foreground shadow-md ring-4 ring-primary/20"
                : "bg-primary-soft text-primary hover:bg-primary/10"
            )}
          >
            All Specialties
          </button>
          {specialties.map((s) => (
            <button
              key={s.slug}
              role="tab"
              aria-selected={activeTab === s.name}
              aria-controls="doctor-grid"
              onClick={() => setActiveTab(s.name)}
              className={cn(
                "h-11 shrink-0 whitespace-nowrap rounded-full px-8 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                activeTab === s.name
                  ? "bg-primary text-primary-foreground shadow-md ring-4 ring-primary/20"
                  : "bg-primary-soft text-primary hover:bg-primary/10"
              )}
            >
              {s.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-card text-primary shadow-sm transition-all hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label="Scroll specialty tabs right"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div 
        id="doctor-grid" 
        role="tabpanel" 
        aria-labelledby="specialty-tabs"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
      >
        {filteredDoctors.map((d) => (
          <div key={d.name} className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-6 shadow-premium transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_40px_80px_-20px_rgba(0,58,140,0.2)] sm:p-8 lg:p-10">
            {/* Background Accents */}
            <div className="absolute right-0 top-0 size-48 translate-x-20 -translate-y-20 rounded-full bg-primary/5 blur-3xl transition-transform duration-700 group-hover:scale-150" aria-hidden="true" />
            <div className="absolute -bottom-24 -left-24 size-64 rounded-full bg-accent/5 blur-3xl transition-transform duration-700 group-hover:scale-125" aria-hidden="true" />
            
            <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start lg:gap-10">
              {/* Avatar Section */}
              <div className="relative shrink-0 self-center sm:self-start">
                <div className="relative grid size-32 place-items-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#001F5B] via-[#003A8C] to-[#E83E8C] font-display text-3xl font-black text-white shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:rounded-[2.5rem] sm:size-36 md:size-40 lg:size-44 lg:text-5xl">
                  <span className="drop-shadow-2xl">
                    {d.name.split(" ")[1]?.[0] ?? "C"}
                    {d.name.split(" ")[2]?.[0] ?? ""}
                  </span>
                  
                  {/* Glass & Gloss effects */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/40 opacity-70" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.25),transparent_70%)]" />
                  <div className="absolute inset-0 rounded-inherit border border-white/30" />
                </div>
                
                {/* Experience Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#003A8C] px-4 py-1.5 text-[0.65rem] font-black uppercase tracking-widest text-white shadow-xl ring-2 ring-white transition-all duration-500 group-hover:-translate-y-1.5 group-hover:bg-[#E83E8C] sm:bottom-2 sm:-right-4 sm:left-auto sm:translate-x-0">
                  {d.experience} Exp.
                </div>
              </div>
              
              {/* Info section */}
              <div className="flex-1 text-center sm:text-left">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 rounded-full bg-healthcare-teal/10 px-3 py-1 text-[0.65rem] font-black uppercase tracking-widest text-healthcare-teal">
                    <div className="size-1.5 rounded-full bg-healthcare-teal" />
                    {d.specialty} Specialist
                  </div>
                  <h3 className="mt-3 font-display text-xl font-[900] tracking-tight text-[#0f172a] transition-colors group-hover:text-primary sm:text-2xl lg:text-3xl">
                    {d.name}
                  </h3>
                  <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-[#E83E8C] sm:text-xs">
                    {d.qualification}
                  </p>
                </div>
                
                <p className="mt-4 line-clamp-2 text-sm font-medium leading-relaxed text-slate-500">
                  Providing expert clinical care with a focus on patient outcomes and compassionate family healthcare.
                </p>
                
                <div className="mt-8 flex flex-col items-stretch gap-3 min-[400px]:flex-row sm:mt-10 sm:justify-start">
                  <Button asChild className="h-11 flex-1 rounded-full bg-primary px-6 text-[0.7rem] font-black uppercase tracking-widest text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 hover:bg-primary-deep hover:shadow-xl sm:flex-none">
                    <Link to="/book-appointment" search={{ doctor: d.slug }}>
                      Book Now
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-11 flex-1 rounded-full border-slate-200 bg-white px-6 text-[0.7rem] font-black uppercase tracking-widest text-primary transition-all hover:-translate-y-1 hover:bg-slate-50 sm:flex-none">
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
    </div>
  );
}
