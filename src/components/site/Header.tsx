import { Link } from "@tanstack/react-router";
import { Menu, Phone, Clock, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/calix-logo.png.asset.json";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { specialties, HOSPITAL } from "@/lib/site-data";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/doctors", label: "Doctors" },
  { to: "/facilities", label: "Facilities" },
  { to: "/patient-services", label: "Patient Services" },
  { to: "/health-packages", label: "Health Packages" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div
        className={`relative size-11 shrink-0 overflow-hidden rounded-xl p-1.5 ${
          inverted ? "bg-primary-foreground/10 ring-1 ring-primary-foreground/25" : "bg-primary/5"
        }`}
      >
        <img
          src={logoAsset.url}
          alt="Calix Hospital Logo"
          className="h-full w-full object-contain"
        />
      </div>
      <span className="leading-tight">
        <span
          className={`block font-display text-lg font-extrabold tracking-tight ${
            inverted ? "text-primary-foreground" : "text-primary-deep"
          }`}
        >
          CALIX
        </span>
        <span
          className={`block text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${
            inverted ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          Multispeciality Hospital
        </span>
      </span>
    </Link>
  );
}

function SpecialtiesMegaMenu() {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 whitespace-nowrap py-2 text-[0.9rem] font-semibold text-foreground/80 transition-colors hover:text-primary">
        Specialties
        <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-[46rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
        <div className="rounded-2xl border border-border bg-popover p-6 shadow-lift">
          <div className="grid grid-cols-2 gap-x-8 gap-y-1">
            {specialties.map((s) => (
              <Link
                key={s.slug}
                to="/specialties/$slug"
                params={{ slug: s.slug }}
                className="group/item flex items-start justify-between gap-4 rounded-xl px-3 py-2.5 transition-colors hover:bg-primary-soft"
              >
                <span>
                  <span className="block text-sm font-semibold text-foreground">{s.name}</span>
                  <span className="block text-xs text-muted-foreground">{s.tagline}</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
            <p className="text-xs text-muted-foreground">
              Ten core specialties, one coordinated care team.
            </p>
            <Link
              to="/specialties"
              className="text-xs font-bold uppercase tracking-widest text-primary hover:text-accent"
            >
              View all specialties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="hidden bg-primary-deep py-2.5 text-primary-foreground lg:block">
        <div className="container-page flex items-center justify-between gap-6 text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="size-3.5" /> {HOSPITAL.address}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="size-3.5" /> {HOSPITAL.hours}
            </span>
          </div>
          <a href={`tel:${HOSPITAL.emergency}`} className="flex items-center gap-2 font-semibold">
            <Phone className="size-3.5" /> Emergency: {HOSPITAL.emergency}
          </a>
        </div>
      </div>

      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container-page flex h-18 items-center justify-between gap-6 py-3">
          <Logo />

          <nav className="hidden items-center gap-5 xl:flex">
            {navLinks.slice(0, 2).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="whitespace-nowrap text-[0.9rem] font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <SpecialtiesMegaMenu />
            {navLinks.slice(2).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "text-primary" }}
                className="whitespace-nowrap text-[0.9rem] font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild variant="brand" size="lg" className="hidden sm:inline-flex">
              <Link to="/book-appointment">Book Appointment</Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="xl:hidden">
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto">
                <div className="mt-8 flex flex-col gap-1">
                  {navLinks.slice(0, 2).map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-3 text-base font-semibold text-foreground hover:bg-primary-soft"
                    >
                      {l.label}
                    </Link>
                  ))}
                  <Accordion type="single" collapsible>
                    <AccordionItem value="spec" className="border-none">
                      <AccordionTrigger className="px-3 py-3 text-base font-semibold hover:no-underline">
                        Specialties
                      </AccordionTrigger>
                      <AccordionContent className="pb-2">
                        <div className="flex flex-col">
                          <Link
                            to="/specialties"
                            onClick={() => setOpen(false)}
                            className="rounded-lg px-3 py-2 text-sm font-semibold text-primary"
                          >
                            All specialties
                          </Link>
                          {specialties.map((s) => (
                            <Link
                              key={s.slug}
                              to="/specialties/$slug"
                              params={{ slug: s.slug }}
                              onClick={() => setOpen(false)}
                              className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-primary-soft"
                            >
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  {navLinks.slice(2).map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-3 text-base font-semibold text-foreground hover:bg-primary-soft"
                    >
                      {l.label}
                    </Link>
                  ))}
                  <Button asChild variant="brand" size="lg" className="mt-4">
                    <Link to="/book-appointment" onClick={() => setOpen(false)}>
                      Book Appointment
                    </Link>
                  </Button>
                  <a
                    href={`tel:${HOSPITAL.emergency}`}
                    className="mt-2 rounded-lg px-3 py-3 text-sm font-semibold text-accent"
                  >
                    Emergency: {HOSPITAL.emergency}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
