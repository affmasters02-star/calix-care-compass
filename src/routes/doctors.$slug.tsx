import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Award, BookOpen, Calendar, GraduationCap, Mail, MapPin, Phone, Star, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/Bits";
import { doctors, HOSPITAL, testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/doctors/$slug")({
  loader: ({ params }) => {
    const doctor = doctors.find((d) => d.slug === params.slug);
    if (!doctor) throw notFound();
    return { doctor };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.doctor ? `${loaderData.doctor.name} | ${loaderData.doctor.specialty} at Calix Hospital` : "Doctor Profile | Calix Hospital" },
      {
        name: "description",
        content: loaderData?.doctor 
          ? `Consult ${loaderData.doctor.name}, a specialist in ${loaderData.doctor.specialty} with ${loaderData.doctor.experience} experience at Calix Multispeciality Hospital.`
          : "Consult our specialists at Calix Multispeciality Hospital.",
      },
      { property: "og:title", content: loaderData?.doctor ? `${loaderData.doctor.name} | Specialist Profile` : "Specialist Profile" },
      {
        property: "og:description",
        content: loaderData?.doctor ? `Expert care by ${loaderData.doctor.name}. ${loaderData.doctor.qualification}.` : "Expert healthcare specialists.",
      },
    ],
  }),
  component: DoctorProfile,
});

function initials(name: string) {
  const parts = name.replace("Dr. ", "").split(" ");
  return `${parts[0]?.[0] ?? ""}${parts[1]?.[0] ?? ""}`;
}

function DoctorProfile() {
  const { doctor } = Route.useLoaderData();
  const [slot, setSlot] = useState(doctor.availability.slots[0] ?? "");

  return (
    <>
      <PageHero
        eyebrow={doctor.specialty}
        title={doctor.name}
        subtitle={`${doctor.qualification} · ${doctor.experience} Clinical Experience`}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Left Column: Main Info */}
          <div className="lg:col-span-2 space-y-10">
            {/* Bio */}
            <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
                <span className="grid size-24 shrink-0 place-items-center rounded-full bg-gradient-brand font-display text-3xl font-bold text-primary-foreground">
                  {initials(doctor.name)}
                </span>
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-xs font-bold text-primary">
                      {doctor.specialty}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                      {doctor.experience} Experience
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-extrabold text-foreground">About the Specialist</h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{doctor.description}</p>
                  <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-muted/50 p-4">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Qualifications</dt>
                      <dd className="mt-1 text-sm font-bold text-foreground">{doctor.qualification}</dd>
                    </div>
                    <div className="rounded-2xl bg-muted/50 p-4">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Department</dt>
                      <dd className="mt-1 text-sm font-bold text-foreground">{doctor.specialty}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>


            {/* Expertise & Education */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
                <div className="flex items-center gap-3 text-primary">
                  <Star className="size-6" />
                  <h3 className="font-display text-xl font-bold">Areas of Expertise</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {doctor.expertise.map((item: string) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
                <div className="flex items-center gap-3 text-primary">
                  <GraduationCap className="size-6" />
                  <h3 className="font-display text-xl font-bold">Education & Training</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {doctor.education.map((item: string) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <BookOpen className="size-4 mt-1 shrink-0 text-accent/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Testimonials */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Quote className="size-6" />
                <h3 className="font-display text-xl font-bold">Patient Testimonials</h3>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {testimonials.filter(t => t.context.includes(doctor.specialty) || t.context === "Family Care").slice(0, 2).map((t) => (
                  <div key={t.name} className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-sm italic text-muted-foreground text-sm leading-relaxed">
                    <Quote className="absolute -right-2 -top-2 size-8 text-primary/5 -rotate-12" />
                    "{t.quote}"
                    <div className="mt-4 not-italic font-bold text-primary flex items-center gap-2">
                      <div className="size-6 rounded-full bg-primary-soft grid place-items-center text-[10px]">
                        {t.name[0]}
                      </div>
                      {t.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Widget */}
          <div className="space-y-6">
            <div className="sticky top-28 rounded-3xl border-2 border-primary/10 bg-card p-8 shadow-lift">
              <h3 className="font-display text-xl font-bold text-foreground">Book a Consultation</h3>
              <p className="mt-2 text-sm text-muted-foreground">Available {doctor.availability.days}</p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl bg-muted/50 p-4">
                  <Calendar className="size-5 text-primary" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Availability</p>
                    <p className="text-sm font-bold">{doctor.availability.timings}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-muted/50 p-4">
                  <MapPin className="size-5 text-primary" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</p>
                    <p className="text-sm font-bold">Calix Hospital Main Tower</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-muted/50 p-4">
                  <Mail className="size-5 text-primary" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
                    <a href={`mailto:${HOSPITAL.email}`} className="block truncate text-sm font-bold hover:text-primary">
                      {HOSPITAL.email}
                    </a>
                  </div>
                </div>
              </div>


              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Available appointment times</p>
                <div className="mt-3 grid grid-cols-2 gap-2" role="radiogroup" aria-label="Available appointment times">
                  {doctor.availability.slots.map((s: string) => (
                    <button
                      key={s}
                      type="button"
                      role="radio"
                      aria-checked={slot === s}
                      onClick={() => setSlot(s)}
                      className={`rounded-2xl border px-3 py-2.5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                        slot === s
                          ? "border-primary bg-primary text-primary-foreground shadow-card"
                          : "border-border bg-muted/40 text-foreground hover:border-primary/40 hover:text-primary"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Button asChild variant="brand" size="xl" className="w-full">
                  <Link 
                    to="/book-appointment" 
                    search={{ 
                      specialty: doctor.specialty.toLowerCase().replace(/\s+/g, '-').replace('&', 'and'),
                      doctor: doctor.slug,
                      slot: slot || undefined
                    }}
                  >
                    Confirm Appointment
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl" className="w-full border-primary/20 text-primary">
                  <a href={`tel:${HOSPITAL.phone}`}>
                    <Phone className="mr-2 size-4" /> Call Care Team
                  </a>
                </Button>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Award className="size-3" />
                <span>NABL Accredited Facility</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-gradient-brand p-12 text-center text-primary-foreground shadow-lift">
          <Calendar className="mx-auto size-12 text-accent" />
          <h2 className="mt-6 font-display text-3xl font-black sm:text-4xl text-white">
            Ready to Consult {doctor.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Skip the queue and secure your consultation slot with {doctor.specialty} expert today. 
            Our care team will prioritize your request.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="secondary" size="xl" className="min-w-[240px]">
              <Link 
                to="/book-appointment"
                search={{ 
                  specialty: doctor.specialty.toLowerCase().replace(/\s+/g, '-').replace('&', 'and'),
                  doctor: doctor.slug 
                }}
              >
                Book Instant Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="min-w-[240px] bg-white/10 text-white hover:bg-white/20">
              <a href={`tel:${HOSPITAL.phone}`}>
                <Phone className="mr-2 size-4" /> Speak to Care Team
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
