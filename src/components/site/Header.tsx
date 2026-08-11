import { Link } from "@tanstack/react-router";
import {
  Menu,
  Phone,
  Clock,
  MapPin,
  ChevronDown,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ArrowRight,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { useState, useEffect } from "react";
import logoAsset from "@/assets/calix-logo-full.png.asset.json";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { specialties, HOSPITAL } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <Link to="/" className={cn("flex items-center", className)}>
      <div className="relative h-16 w-auto shrink-0">
        <img 
          src={logoAsset.url} 
          alt="Calix Multispeciality Hospital" 
          className={cn(
            "h-full w-auto object-contain",
            inverted && "brightness-0 invert"
          )} 
        />
      </div>
    </Link>
  );
}

function SpecialtiesMegaMenu() {
  return (
    <div className="group/mega">
      <button className="flex items-center gap-1.5 py-5 text-[0.85rem] font-bold tracking-tight text-[#0f172a] transition-all duration-300 hover:text-[#003A8C]">
        SPECIALTIES
        <ChevronDown className="size-4 transition-transform duration-300 group-hover/mega:rotate-180" />
      </button>
      <div className="invisible absolute left-0 right-0 top-[calc(100%-10px)] z-50 flex justify-center opacity-0 transition-all duration-500 ease-out group-hover/mega:visible group-hover/mega:top-full group-hover/mega:opacity-100">
        <div className="mx-auto w-[1200px] overflow-hidden rounded-[24px] border border-[#EAF4FF] bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-5 gap-8">
            <div className="col-span-4 grid grid-cols-3 gap-x-12 gap-y-4">
              {/* Column 1 */}
              <div className="space-y-1">
                {specialties.slice(0, 3).map((s) => (
                  <SpecialtyItem key={s.slug} specialty={s} />
                ))}
              </div>
              {/* Column 2 */}
              <div className="space-y-1">
                {specialties.slice(3, 6).map((s) => (
                  <SpecialtyItem key={s.slug} specialty={s} />
                ))}
              </div>
              {/* Column 3 */}
              <div className="space-y-1">
                {specialties.slice(6, 10).map((s) => (
                  <SpecialtyItem key={s.slug} specialty={s} />
                ))}
              </div>
            </div>

            {/* Featured Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#003A8C] to-[#E83E8C] p-6 text-white shadow-lift">
              <h4 className="font-display text-lg font-bold">Comprehensive Care</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/90">
                <li className="flex items-center gap-2">✓ Expert Specialists</li>
                <li className="flex items-center gap-2">✓ Advanced Diagnostics</li>
                <li className="flex items-center gap-2">✓ Modern Infrastructure</li>
                <li className="flex items-center gap-2">✓ 24×7 Emergency Care</li>
              </ul>
              <Button asChild variant="secondary" size="sm" className="mt-6 w-full rounded-full bg-white text-[#003A8C] hover:bg-white/90">
                <Link to="/book-appointment">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecialtyItem({ specialty }: { specialty: (typeof specialties)[0] }) {
  return (
    <Link
      to="/specialties/$slug"
      params={{ slug: specialty.slug }}
      className="group/item flex items-center justify-between gap-4 rounded-xl px-4 py-3 transition-all hover:bg-[#EAF4FF]"
    >
      <div className="flex items-center gap-4">
        <div className="size-10 rounded-full bg-[#EAF4FF] group-hover/item:bg-white transition-colors flex items-center justify-center text-[#003A8C]">
          <StarIcon className="size-5" />
        </div>
        <div>
          <span className="block text-sm font-bold text-[#0f172a]">{specialty.name}</span>
          <span className="block text-[0.7rem] text-muted-foreground line-clamp-1">
            {specialty.tagline}
          </span>
        </div>
      </div>
      <ArrowRight className="size-4 -translate-x-2 opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100 text-[#E83E8C]" />
    </Link>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v20M2 12h20" />
    </svg>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300">
      {/* ROW 1: TOP INFO BAR */}
      <div
        className={cn(
          "h-[45px] bg-[#003A8C] text-white transition-all duration-300",
          isScrolled && "-mt-[45px] opacity-0"
        )}
      >
        <div className="container-page flex h-full items-center justify-between text-[0.8rem] font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="text-lg">🚑</span> 24×7 Emergency Care
            </span>
            <a href={`tel:${HOSPITAL.phone}`} className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Phone className="size-3.5" /> {HOSPITAL.phone}
            </a>
            <a href={`mailto:${HOSPITAL.email}`} className="hidden items-center gap-2 sm:flex hover:text-white/80 transition-colors">
              <Mail className="size-3.5" /> {HOSPITAL.email}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden items-center gap-2 lg:flex">
              <Clock className="size-3.5" /> Open 24 Hours
            </span>
            <span className="hidden items-center gap-2 sm:flex">
              <MapPin className="size-3.5" /> {HOSPITAL.address.split(",")[0]}
            </span>
            <span className="flex lg:hidden items-center gap-2">
              <span className="text-lg">🚑</span> Emergency
            </span>
            <a href={`tel:${HOSPITAL.phone}`} className="flex lg:hidden items-center gap-2 font-bold">
               📞 Call Now
            </a>
          </div>
        </div>
      </div>

      {/* ROW 2: BRAND HEADER */}
      <div
        className={cn(
          "h-[100px] bg-white transition-all duration-300",
          isScrolled && "h-[0px] overflow-hidden opacity-0"
        )}
      >
        <div className="container-page flex h-full items-center justify-between">
          <Logo />
          
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-3 pr-6 border-r border-[#EAF4FF]">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="grid size-9 place-items-center rounded-full bg-[#EAF4FF] text-[#003A8C] transition-all duration-300 hover:bg-[#003A8C] hover:text-white hover:-translate-y-1 hover:shadow-md"
                  aria-label={social.label}
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <Button asChild className="h-12 rounded-full bg-[#DC2626] px-8 text-white shadow-card hover:bg-[#B91C1C] transition-all hover:-translate-y-0.5">
              <Link to="/contact">Emergency Care</Link>
            </Button>
            <Button asChild className="h-12 rounded-full bg-[#E83E8C] px-8 text-white shadow-card hover:bg-[#D81B60] transition-all hover:-translate-y-0.5">
              <Link to="/book-appointment">Book Appointment</Link>
            </Button>
          </div>
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon" className="size-12 rounded-xl text-[#001F5B]">
                <Menu className="size-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto pt-16">
               <MobileNav closeMenu={() => setMobileMenuOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* ROW 3: NAVIGATION BAR */}
      <nav
        className={cn(
          "h-[65px] border-t border-[#EAF4FF] bg-white transition-all duration-300 shadow-sm",
          isScrolled && "fixed top-0 left-0 right-0 h-[65px] bg-white/95 backdrop-blur-xl shadow-md border-b border-[#EAF4FF]/50"
        )}
      >
        <div className="container-page flex h-full items-center justify-center relative">
          {isScrolled && (
            <div className="absolute left-5 flex items-center">
               <img 
                src={logoAsset.url} 
                alt="Calix" 
                className="h-10 w-auto object-contain" 
              />
            </div>
          )}

          <div className="hidden items-center gap-6 2xl:gap-10 xl:flex">
            <NavLink to="/">HOME</NavLink>
            <NavDropdown label="ABOUT US">
              <DropdownLink to="/about">Overview</DropdownLink>
              <DropdownLink to="/about">Mission & Vision</DropdownLink>
              <DropdownLink to="/about">Why Choose Calix</DropdownLink>
              <DropdownLink to="/facilities">Facilities</DropdownLink>
            </NavDropdown>
            <SpecialtiesMegaMenu />
            <NavLink to="/doctors">DOCTORS</NavLink>
            <NavLink to="/facilities">FACILITIES</NavLink>
            <NavDropdown label="PATIENT SERVICES">
              <DropdownLink to="/book-appointment">Book Appointment</DropdownLink>
              <DropdownLink to="/health-packages">Health Packages</DropdownLink>
              <DropdownLink to="/patient-services">Insurance & Cashless</DropdownLink>
              <DropdownLink to="/contact">Online Consultation</DropdownLink>
            </NavDropdown>
            <NavLink to="/testimonials">TESTIMONIALS</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
          </div>

          {isScrolled && (
             <div className="absolute right-5 hidden 2xl:flex">
                <Button asChild size="sm" className="rounded-full bg-[#E83E8C] px-6 text-white hover:bg-[#D81B60]">
                   <Link to="/book-appointment">Book Appointment</Link>
                </Button>
             </div>
          )}
        </div>
      </nav>

      {/* MOBILE BOTTOM CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 border-t border-border bg-white md:hidden">
        <a href={`tel:${HOSPITAL.phone}`} className="flex flex-1 items-center justify-center gap-2 bg-[#003A8C] text-white font-bold text-sm">
           <Phone className="size-4" /> Call Now
        </a>
        <Link to="/book-appointment" className="flex flex-1 items-center justify-center gap-2 bg-[#E83E8C] text-white font-bold text-sm">
           <Calendar className="size-4" /> Book Appt
        </Link>
        <a href="https://wa.me/#" className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-sm">
           <MessageCircle className="size-4" /> WhatsApp
        </a>
      </div>
    </header>
  );
}

function NavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      activeOptions={{ exact: to === "/" }}
      activeProps={{ className: "text-[#003A8C] after:scale-x-100" }}
      className="relative py-2 text-[0.85rem] font-bold tracking-tight text-[#0f172a] transition-all duration-300 hover:text-[#003A8C] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-[#003A8C] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
    >
      {children}
    </Link>
  );
}

function NavDropdown({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 py-5 text-[0.85rem] font-bold tracking-tight text-[#0f172a] transition-all duration-300 hover:text-[#003A8C]">
        {label}
        <ChevronDown className="size-4 transition-transform duration-300 group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-[calc(100%-10px)] z-50 w-64 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:top-full group-hover:opacity-100">
        <div className="overflow-hidden rounded-2xl border border-[#EAF4FF] bg-white py-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
          {children}
        </div>
      </div>
    </div>
  );
}

function DropdownLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-6 py-2.5 text-sm font-semibold text-[#0f172a] transition-colors hover:bg-[#EAF4FF] hover:text-[#003A8C]"
    >
      {children}
    </Link>
  );
}

function MobileNav({ closeMenu }: { closeMenu: () => void }) {
  return (
    <div className="flex flex-col gap-2">
      <NavLink to="/" onClick={closeMenu}>HOME</NavLink>
      <Accordion type="single" collapsible>
        <AccordionItem value="about" className="border-none">
          <AccordionTrigger className="text-[0.95rem] font-bold py-3">ABOUT US</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-1 pl-4">
             <Link to="/about" onClick={closeMenu} className="py-2 font-medium">Overview</Link>
             <Link to="/about" onClick={closeMenu} className="py-2 font-medium">Why Choose Calix</Link>
             <Link to="/facilities" onClick={closeMenu} className="py-2 font-medium">Facilities</Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="specialties" className="border-none">
          <AccordionTrigger className="text-[0.95rem] font-bold py-3">SPECIALTIES</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-1 pl-4">
             {specialties.map(s => (
               <Link key={s.slug} to="/specialties/$slug" params={{ slug: s.slug }} onClick={closeMenu} className="py-2 font-medium text-sm text-muted-foreground">
                  {s.name}
               </Link>
             ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="services" className="border-none">
          <AccordionTrigger className="text-[0.95rem] font-bold py-3">PATIENT SERVICES</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-1 pl-4">
             <Link to="/book-appointment" onClick={closeMenu} className="py-2 font-medium">Book Appointment</Link>
             <Link to="/health-packages" onClick={closeMenu} className="py-2 font-medium">Health Packages</Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <NavLink to="/doctors" onClick={closeMenu}>DOCTORS</NavLink>
      <NavLink to="/facilities" onClick={closeMenu}>FACILITIES</NavLink>
      <NavLink to="/testimonials" onClick={closeMenu}>TESTIMONIALS</NavLink>
      <NavLink to="/contact" onClick={closeMenu}>CONTACT</NavLink>
      <div className="mt-8 flex flex-col gap-4 pb-20">
         <Button asChild className="rounded-full bg-[#E83E8C] text-white">
            <Link to="/book-appointment" onClick={closeMenu}>Book Appointment</Link>
         </Button>
         <Button asChild variant="outline" className="rounded-full border-[#003A8C] text-[#003A8C]">
            <a href={`tel:${HOSPITAL.phone}`}>Emergency Care</a>
         </Button>
      </div>
    </div>
  );
}

