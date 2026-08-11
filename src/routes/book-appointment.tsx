import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarCheck, Phone, ShieldCheck, Clock } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHero, Section } from "@/components/site/Bits";
import { specialties, HOSPITAL, doctors } from "@/lib/site-data";
import { z } from "zod";

const searchSchema = z.object({
  specialty: z.string().optional(),
  doctor: z.string().optional(),
  slot: z.string().optional(),
});

export const Route = createFileRoute("/book-appointment")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Book an Appointment | Calix Multispeciality Hospital" },
      {
        name: "description",
        content:
          "Request an appointment with a Calix specialist. Choose your department, preferred date and our care team will confirm your slot.",
      },
      { property: "og:title", content: "Book an Appointment | Calix Multispeciality Hospital" },
      {
        property: "og:description",
        content: "Request a consultation across ten specialties with same-week availability.",
      },
    ],
  }),
  component: BookAppointment,
});

function BookAppointment() {
  const { specialty: initialSpecialty, doctor: initialDoctor, slot: initialSlot } = Route.useSearch();
  const [specialty, setSpecialty] = useState(initialSpecialty || "");
  const [doctor, setDoctor] = useState(initialDoctor || "");
  const [slot, setSlot] = useState(initialSlot || "");
  const selectedDoctor = doctors.find((d) => d.slug === doctor);
  const slotOptions = selectedDoctor?.availability.slots ?? ["09:30 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"];

  const filteredDoctors = doctors.filter((d) => 
    !specialty || d.specialty.toLowerCase().replace('&', 'and').replace(/\s+/g, '-') === specialty
  );

  return (
    <>
      <PageHero
        eyebrow="Book Appointment"
        title="Request a Consultation"
        subtitle="Share a few details and our care team will call you back to confirm your appointment slot."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <form
            className="rounded-3xl border border-border bg-card p-8 shadow-card lg:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Appointment request received", {
                description: "Our care team will call you shortly to confirm your slot.",
              });
              (e.currentTarget as HTMLFormElement).reset();
              setSpecialty("");
              setSlot("");
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" required placeholder="Your name" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 ..."
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email (optional)</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="specialty">Specialty</Label>
                <Select value={specialty} onValueChange={setSpecialty} required>
                  <SelectTrigger id="specialty" className="mt-2">
                    <SelectValue placeholder="Choose a department" />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map((s) => (
                      <SelectItem key={s.slug} value={s.slug}>
                        {s.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="doctor">Doctor (optional)</Label>
                <Select value={doctor} onValueChange={setDoctor}>
                  <SelectTrigger id="doctor" className="mt-2">
                    <SelectValue placeholder="Choose a specialist" />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredDoctors.map((d) => (
                      <SelectItem key={d.slug} value={d.slug}>
                        {d.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="slot">Preferred time</Label>
                <Select value={slot} onValueChange={setSlot}>
                  <SelectTrigger id="slot" className="mt-2">
                    <SelectValue placeholder="Choose a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {slotOptions.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="date">Preferred date</Label>
                <Input id="date" name="date" type="date" required className="mt-2" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="notes">Reason for visit (optional)</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder="Briefly describe your symptoms or the specialist you'd like to see."
                  className="mt-2"
                />
              </div>
            </div>
            <Button type="submit" variant="brand" size="xl" className="mt-8 w-full">
              <CalendarCheck className="size-4" /> Request appointment
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">
              For medical emergencies, please call {HOSPITAL.emergency} instead of using this form.
            </p>
          </form>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-gradient-brand p-8 text-primary-foreground shadow-lift">
              <h2 className="font-display text-lg font-bold">Prefer to speak to someone?</h2>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Our coordinators can help you choose the right specialty.
              </p>
              <Button asChild variant="secondary" size="lg" className="mt-6 w-full">
                <a href={`tel:${HOSPITAL.phone}`}>
                  <Phone className="size-4" /> {HOSPITAL.phone}
                </a>
              </Button>
            </div>

            {[
              { icon: Clock, title: "OPD timings", body: HOSPITAL.hours },
              {
                icon: ShieldCheck,
                title: "Insurance support",
                body: "Cashless coordination with major insurers and TPAs available at the front desk.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <c.icon className="size-5 text-primary" />
                <h3 className="mt-4 font-display text-base font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </aside>
        </div>
      </Section>
    </>
  );
}
