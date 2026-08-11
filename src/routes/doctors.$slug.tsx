import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Award, BookOpen, Calendar, GraduationCap, MapPin, Phone, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/Bits";
import { doctors, HOSPITAL } from "@/lib/site-data";

export const Route = createFileRoute("/doctors/$slug")({
  loader: ({ params }) => {
    const doctor = doctors.find((d) => d.slug === params.slug);
    if (!doctor) throw notFound();
    return { doctor };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.doctor.name} | ${loaderData.doctor.specialty} at Calix Hospital` },
      {
        name: "description",
        content: `Consult ${loaderData.doctor.name}, a specialist in ${loaderData.doctor.specialty} with ${loaderData.doctor.experience} experience at Calix Multispeciality Hospital.`,
      },
      { property: "og:title", content: `${loaderData.doctor.name} | Specialist Profile` },
      {
        property: "og:description",
        content: `Expert care by ${loaderData.doctor.name}. ${loaderData.doctor.qualification}.`,
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
                  <h2 className="font-display text-2xl font-extrabold text-foreground">About the Specialist</h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{doctor.description}</p>
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
                  {doctor.expertise.map((item) => (
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
                  {doctor.education.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <BookOpen className="size-4 mt-1 shrink-0 text-accent/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Widget */}
          <div className="space-y-6">
            <div className="sticky top-28 rounded-3xl border-2 border-primary/10 bg-card p-8 shadow-lift">
              <h3 className="font-display text-xl font-bold text-foreground">Book a Consultation</h3>
              <p className="mt-2 text-sm text-muted-foreground">Available Monday – Saturday</p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl bg-muted/50 p-4">
                  <Calendar className="size-5 text-primary" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Availability</p>
                    <p className="text-sm font-bold">10:00 AM – 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-muted/50 p-4">
                  <MapPin className="size-5 text-primary" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</p>
                    <p className="text-sm font-bold">Calix Hospital Main Tower</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Button asChild variant="brand" size="xl" className="w-full">
                  <Link to="/book-appointment">Confirm Appointment</Link>
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
    </>
  );
}
