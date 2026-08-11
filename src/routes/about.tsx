import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Target, Eye, HeartHandshake } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { whyChoose, specialties } from "@/lib/site-data";
import teamImage from "@/assets/care-team.jpg";

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
    <>
      <PageHero
        eyebrow="About Us"
        title="Your Trusted Partner in Multispeciality Healthcare"
        subtitle="Calix was built on a simple idea: families deserve complete, coordinated medical care in one place — delivered with clinical rigour and genuine warmth."
      />

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="Complete Healthcare Under One Roof"
              subtitle="From routine consultations and preventive health checks to intensive care and complex surgery, our departments work as a single team around each patient."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Ten core specialties — general medicine, diabetology, nephrology, critical care,
              urology, orthopedics, obstetrics &amp; gynecology, gastroenterology, neurology and
              general surgery — share diagnostics, operation theatres and intensive care resources.
              That means faster decisions, fewer repeat tests and treatment plans built on a complete
              picture of your health.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Every specialty carries the same standard of investment: senior consultants, modern
              equipment, trained nursing teams and clearly defined clinical protocols.
            </p>
            <Button asChild variant="brand" size="lg" className="mt-8">
              <Link to="/specialties">
                Explore our specialties <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <img
            src={teamImage}
            alt="Multispeciality care team at Calix Hospital"
            loading="lazy"
            width={1408}
            height={1008}
            className="rounded-3xl object-cover shadow-lift"
          />
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Our Foundation"
          title="Mission, Vision and Values"
          subtitle="The commitments that shape every consultation, procedure and follow-up call."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Our Mission",
              body: "To provide accessible, high-quality multispeciality healthcare that treats the whole person — not just the diagnosis.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              body: "To be the region's most trusted multispeciality hospital, recognised for clinical excellence and compassionate service.",
            },
            {
              icon: HeartHandshake,
              title: "Our Values",
              body: "Integrity in advice, transparency in cost, respect for every patient and continuous learning across our teams.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <span className="grid size-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                <c.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Why Choose Calix"
          title="Six Reasons Families Trust Us"
          subtitle="Clinical capability matched with the practical support that makes care easier."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w) => (
            <div key={w.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <Check className="size-5 text-accent" />
              <h3 className="mt-4 font-display text-base font-bold text-foreground">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Departments"
          title="Equal Investment in Every Specialty"
          subtitle="No single department defines us — all ten receive the same clinical focus."
        />
        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
          {specialties.map((s) => (
            <Link
              key={s.slug}
              to="/specialties/$slug"
              params={{ slug: s.slug }}
              className="rounded-full border border-primary/25 bg-card px-5 py-2.5 text-sm font-semibold text-primary-deep transition-colors hover:bg-primary-soft"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
