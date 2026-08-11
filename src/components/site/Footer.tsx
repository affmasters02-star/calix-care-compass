import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import { Logo } from "./Header";
import { specialties, HOSPITAL } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary-deep text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm text-primary-foreground/70">
            Complete multispeciality healthcare for the entire family — advanced diagnostics, expert
            specialists and 24×7 emergency care under one roof.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground/60">
            Specialties
          </h3>
          <ul className="mt-5 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
            {specialties.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/specialties/$slug"
                  params={{ slug: s.slug }}
                  className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground/60">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-2 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/doctors", label: "Our Doctors" },
              { to: "/facilities", label: "Facilities" },
              { to: "/patient-services", label: "Patient Services" },
              { to: "/health-packages", label: "Health Packages" },
              { to: "/testimonials", label: "Testimonials" },
              { to: "/contact", label: "Contact" },
              { to: "/book-appointment", label: "Book Appointment" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground/60">
            Reach Us
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              {HOSPITAL.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0" />
              <span>
                <a href={`tel:${HOSPITAL.phone}`} className="block hover:text-primary-foreground">
                  {HOSPITAL.phone} (Reception)
                </a>
                <a href={`tel:${HOSPITAL.emergency}`} className="block hover:text-primary-foreground">
                  {HOSPITAL.emergency} (Emergency)
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0" />
              <a href={`mailto:${HOSPITAL.email}`} className="hover:text-primary-foreground">
                {HOSPITAL.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0" />
              {HOSPITAL.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Calix Multispeciality Hospital. All rights reserved.</p>
          <p>Advanced Healthcare. Trusted Specialists. Compassionate Care.</p>
        </div>
      </div>
    </footer>
  );
}
