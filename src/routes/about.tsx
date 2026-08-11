import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  Check, 
  Target, 
  Eye, 
  HeartHandshake, 
  Award, 
  Users, 
  Building2, 
  ShieldCheck,
  Stethoscope,
  Activity,
  Droplets,
  HeartPulse,
  ShieldPlus,
  Bone,
  Baby,
  Flame,
  Brain,
  Scissors
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { whyChoose, specialties } from "@/lib/site-data";
import teamImage from "@/assets/care-team.jpg";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Calix Multispeciality Hospital | Our Story & Values" },
      {
        name: "description",
        content:
          "Learn how Calix Multispeciality Hospital combines experienced specialists, modern infrastructure and patient-centred care across ten departments.",
      },
      { property: "og:title", content: "About Calix Multispeciality Hospital" },
      {
        property: "og:description",
        content:
          "Your trusted partner in multispeciality healthcare — experienced specialists, advanced technology and 24×7 emergency care.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        eyebrow="Our Story"
        title="Comprehensive Healthcare Built for Your Family"
        subtitle="Calix Multispeciality Hospital was founded to bridge the gap between advanced medical technology and compassionate, patient-first care."
      />

      {/* Section 1: Our Story */}
      <Section id="story">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="A Legacy of Trust & Clinical Excellence"
              subtitle="We believe that high-quality healthcare should be coordinated, transparent, and accessible under one roof."
            />
            <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-600">
              <p>
                Calix Multispeciality Hospital is more than just a medical facility; it is a center of excellence where ten core clinical departments work in unison. By integrating <strong>General Medicine, Surgery, Critical Care, and Diagnostics</strong>, we ensure that every patient receives a comprehensive treatment plan without having to navigate multiple centers.
              </p>
              <p>
                Our foundation is built on the expertise of senior consultants who bring decades of experience from premier medical institutions. We have invested in the latest surgical platforms and diagnostic technology to ensure precision in every procedure.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-primary-soft p-5 border border-primary/10">
                <div className="text-3xl font-black text-primary">10+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-primary/60 mt-1">Core Specialties</div>
              </div>
              <div className="rounded-2xl bg-accent-soft p-5 border border-accent/10">
                <div className="text-3xl font-black text-accent">24/7</div>
                <div className="text-xs font-bold uppercase tracking-widest text-accent/60 mt-1">Emergency Care</div>
              </div>
            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="absolute -left-6 -top-6 z-10 hidden h-32 w-32 items-center justify-center rounded-full bg-white p-2 shadow-premium lg:flex">
               <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-gradient-brand text-white text-center">
                  <Award className="size-6 mb-1" />
                  <span className="text-[10px] font-black leading-tight uppercase tracking-widest">Clinical<br/>Excellence</span>
               </div>
            </div>
            <img
              src={teamImage}
              alt="Multispeciality care team at Calix Hospital"
              loading="lazy"
              width={1408}
              height={1008}
              className="rounded-[2.5rem] object-cover shadow-lift"
            />
            <div className="absolute -bottom-8 -right-8 hidden h-48 w-48 rounded-[2rem] bg-white p-6 shadow-premium lg:block">
               <div className="flex h-full w-full flex-col items-center justify-center rounded-[1.5rem] bg-slate-50 border border-slate-100 text-center">
                  <Users className="size-8 text-primary mb-2" />
                  <span className="text-xs font-bold text-slate-500">Expert Team</span>
                  <span className="text-lg font-black text-primary">40+ Doctors</span>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 2: Mission Vision Values */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Our Foundation"
          title="Guided by Integrity & Compassion"
          subtitle="Our core philosophy ensures that every patient is treated with the same standard of clinical rigour."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Our Mission",
              body: "To provide accessible, high-quality multispeciality healthcare that treats the whole person — not just the diagnosis.",
              color: "bg-primary"
            },
            {
              icon: Eye,
              title: "Our Vision",
              body: "To be the region's most trusted multispeciality hospital, recognised for clinical excellence and compassionate service.",
              color: "bg-accent"
            },
            {
              icon: HeartHandshake,
              title: "Our Values",
              body: "Integrity in advice, transparency in cost, respect for every patient and continuous learning across our teams.",
              color: "bg-[#00857A]"
            },
          ].map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-[2.5rem] border border-white bg-white/70 p-10 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-premium backdrop-blur-md">
              <div className={cn("absolute -right-10 -top-10 size-32 rounded-full opacity-5 transition-transform duration-700 group-hover:scale-150", c.color)} />
              <span className={cn("grid size-16 place-items-center rounded-2xl text-white shadow-lg", c.color)}>
                <c.icon className="size-8" />
              </span>
              <h3 className="mt-8 font-display text-2xl font-black text-primary">{c.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 3: Leadership/Philosophy */}
      <Section>
        <div className="rounded-[3rem] bg-primary-deep px-8 py-16 text-white shadow-premium lg:px-20 lg:py-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
           <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
              <Building2 className="size-16 text-accent mb-8" />
              <h2 className="text-white mb-6">Patient-First Infrastructure</h2>
              <p className="text-lg text-white/80 leading-relaxed font-medium">
                "At Calix, we didn't just build a hospital; we built a clinical environment designed for healing. Every ward, ICU bed, and operation theatre is optimized for patient safety and comfort. Our leadership is committed to maintaining the highest international standards in clinical governance."
              </p>
              <div className="mt-10 flex items-center gap-4">
                 <div className="h-px w-12 bg-accent/50" />
                 <span className="text-sm font-black uppercase tracking-[0.2em] text-accent">Hospital Management Board</span>
                 <div className="h-px w-12 bg-accent/50" />
              </div>
           </div>
        </div>
      </Section>

      {/* Section 4: Why Choose Us */}
      <Section id="why-choose">
        <SectionHeading
          eyebrow="The Calix Advantage"
          title="Why Families Trust Our Care"
          subtitle="Clinical capability matched with the practical support that makes medical care easier."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w, idx) => {
             const Icon = [Stethoscope, Building2, HeartPulse, ShieldCheck, Activity, Users][idx % 6];
             return (
              <div key={w.title} className="group flex flex-col rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-premium">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="size-7" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-primary">{w.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate-500">{w.body}</p>
              </div>
             );
          })}
        </div>
      </Section>

      {/* Section 5: Specialties Grid */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Clinical Departments"
          title="Expert Care Across Every Specialty"
          subtitle="Click on a department to learn more about our specific services and expert doctors."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {specialties.map((s) => (
            <Link
              key={s.slug}
              to="/specialties/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col items-center rounded-[2rem] border border-white bg-white/50 p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:bg-white hover:shadow-premium"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-primary/5 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white shadow-inner">
                <s.icon className="size-8" />
              </div>
              <span className="mt-4 block text-sm font-black text-primary tracking-tight">{s.name}</span>
            </Link>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-center justify-center gap-6 text-center">
            <h3 className="font-display text-2xl font-black text-primary">Ready to start your journey to better health?</h3>
            <div className="flex flex-wrap justify-center gap-4">
               <Button asChild variant="accent" size="xl" className="rounded-full bg-gradient-cta shadow-xl hover:-translate-y-1">
                  <Link to="/book-appointment">Book Appointment</Link>
               </Button>
               <Button asChild variant="outlineBrand" size="xl" className="rounded-full hover:-translate-y-1">
                  <Link to="/contact">Contact Us</Link>
               </Button>
            </div>
        </div>
      </Section>
    </div>
  );
}
