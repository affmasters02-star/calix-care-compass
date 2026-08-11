import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, AmbulanceIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { HOSPITAL } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Calix Multispeciality Hospital | Address & Helpline" },
      {
        name: "description",
        content:
          "Reach Calix Multispeciality Hospital for appointments, emergencies and enquiries. Address, helpline numbers, email and OPD timings.",
      },
      { property: "og:title", content: "Contact Calix Multispeciality Hospital" },
      {
        property: "og:description",
        content: "Helpline, emergency number, address and visiting hours for Calix Multispeciality Hospital.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're Here, Around the Clock"
        subtitle="Call our helpline for appointments and enquiries, or reach the emergency line any time of day or night."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            {
              icon: Phone,
              title: "Helpline & Appointments",
              lines: [HOSPITAL.phone],
              href: `tel:${HOSPITAL.phone}`,
            },
            {
              icon: AmbulanceIcon,
              title: "24×7 Emergency",
              lines: [HOSPITAL.emergency],
              href: `tel:${HOSPITAL.emergency}`,
            },
            {
              icon: Mail,
              title: "Email",
              lines: [HOSPITAL.email],
              href: `mailto:${HOSPITAL.email}`,
            },
          ].map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                <c.icon className="size-6" />
              </span>
              <h2 className="mt-5 font-display text-base font-bold text-foreground">{c.title}</h2>
              {c.lines.map((l) => (
                <p key={l} className="mt-2 text-sm font-semibold text-primary">
                  {l}
                </p>
              ))}
            </a>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Visit Us"
              title="Hospital address and timings"
              subtitle="Free patient parking is available on campus, with wheelchair access at the main entrance."
            />
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-foreground/85">{HOSPITAL.address}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-foreground/85">{HOSPITAL.hours}</span>
              </li>
            </ul>
            <Button asChild variant="brand" size="xl" className="mt-9">
              <Link to="/book-appointment">Book an appointment</Link>
            </Button>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <iframe
              title="Calix Multispeciality Hospital location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=80.05%2C12.78%2C80.13%2C12.88&layer=mapnik"
              className="h-80 w-full lg:h-full"
              loading="lazy"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
