import { Link, useLocation } from "@tanstack/react-router";
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
import { useState, useEffect, useRef, useCallback } from "react";
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
      <div className="relative h-12 w-auto shrink-0 md:h-14">
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
  const location = useLocation();
  const isActive = location.pathname.startsWith("/specialties");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      triggerRef.current?.focus();
    }
    
    if (e.key === "Tab" && isOpen && containerRef.current) {
      const focusableElements = containerRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node) && 
          triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="group/mega relative" onKeyDown={handleKeyDown}>
      <button 
        ref={triggerRef}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="specialties-mega-menu"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className={cn(
          "flex items-center gap-1 py-4 text-[0.8rem] 2xl:text-[0.85rem] font-bold tracking-tight text-[#0f172a] transition-all duration-300 hover:text-[#003A8C] uppercase whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-[#003A8C] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003A8C] focus-visible:ring-offset-2 rounded-md",
          isActive && "text-[#003A8C] after:scale-x-100",
          isOpen && "text-[#003A8C] after:scale-x-100"
        )}
      >
        SPECIALTIES
        <ChevronDown className={cn("size-4 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      
      <div 
        ref={containerRef}
        id="specialties-mega-menu"
        role="region"
        aria-label="Specialties Menu"
        onMouseLeave={() => setIsOpen(false)}
        className={cn(
          "absolute left-0 right-0 top-[calc(100%-10px)] z-50 flex justify-center transition-all duration-500 ease-out",
          isOpen ? "visible top-full opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="mx-auto w-[1200px] overflow-hidden rounded-[24px] border border-[#EAF4FF] bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-5 gap-8">
            <div className="col-span-4 grid grid-cols-3 gap-x-12 gap-y-4">
              <div className="space-y-1">
                {specialties.slice(0, 3).map((s) => (
                  <SpecialtyItem key={s.slug} specialty={s} onSelect={() => setIsOpen(false)} />
                ))}
              </div>
              <div className="space-y-1">
                {specialties.slice(3, 6).map((s) => (
                  <SpecialtyItem key={s.slug} specialty={s} onSelect={() => setIsOpen(false)} />
                ))}
              </div>
              <div className="space-y-1">
                {specialties.slice(6, 10).map((s) => (
                  <SpecialtyItem key={s.slug} specialty={s} onSelect={() => setIsOpen(false)} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#003A8C] to-[#E83E8C] p-6 text-white shadow-lift">
              <h4 className="font-display text-lg font-bold">Comprehensive Care</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/90">
                <li className="flex items-center gap-2">✓ Expert Specialists</li>
                <li className="flex items-center gap-2">✓ Advanced Diagnostics</li>
                <li className="flex items-center gap-2">✓ Modern Infrastructure</li>
                <li className="flex items-center gap-2">✓ 24×7 Emergency Care</li>
              </ul>
              <Button asChild variant="secondary" size="sm" className="mt-6 w-full rounded-full bg-white text-[#003A8C] hover:bg-white/90 focus-visible:ring-white">
                <Link to="/book-appointment" onClick={() => setIsOpen(false)}>Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecialtyItem({ specialty, onSelect }: { specialty: (typeof specialties)[0]; onSelect?: () => void }) {
  return (
    <Link
      to="/specialties/$slug"
      params={{ slug: specialty.slug }}
      onClick={onSelect}
      activeProps={{ className: "bg-[#EAF4FF]" }}
      className="group/item flex items-center justify-between gap-3 rounded-xl px-3 py-2 transition-all hover:bg-[#EAF4FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003A8C]"
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
      setIsScrolled(window.scrollY > 45);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300 border-b border-[#EAF4FF]/30">
      {/* ROW 1: TOP INFO BAR */}
      <div
        className={cn(
          "h-[45px] bg-[#003A8C] text-white transition-all duration-300 overflow-hidden relative z-20 hidden md:block",
          isScrolled && "h-0 opacity-0"
        )}
      >
        <div className="container-page flex h-full items-center justify-between text-[0.8rem] font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="text-lg">🚑</span> 24×7 Emergency Care
            </span>
            <a href={`tel:${HOSPITAL.phone}`} className="flex items-center gap-2 hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#003A8C] rounded-sm">
              <Phone className="size-3.5" /> {HOSPITAL.phone}
            </a>
            <a href={`mailto:${HOSPITAL.email}`} className="hidden items-center gap-2 sm:flex hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#003A8C] rounded-sm">
              <Mail className="size-3.5" /> {HOSPITAL.email}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex size-7 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#003A8C]"
                  aria-label={social.label}
                >
                  <social.icon className="size-3" />
                </a>
              ))}
            </div>
            <span className="hidden items-center gap-2 lg:flex">
              <Clock className="size-3.5" /> Open 24 Hours
            </span>
            <span className="hidden items-center gap-2 sm:flex">
              <MapPin className="size-3.5" /> {HOSPITAL.address.split(",")[0]}
            </span>
          </div>
        </div>
      </div>

      {/* ROW 2: MAIN HEADER */}
      <nav
        className={cn(
          "bg-white transition-all duration-300 relative z-10",
          isScrolled 
            ? "h-[75px] shadow-lg bg-white/95 backdrop-blur-md" 
            : "h-[90px]"
        )}
      >
        <div className="container-page flex h-full items-center justify-between gap-2 lg:gap-4">
          {/* LEFT: LOGO */}
          <Logo className="shrink-0" />

          {/* CENTER: NAVIGATION */}
          <div className="hidden items-center gap-2 2xl:gap-6 xl:flex">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT US</NavLink>
            <SpecialtiesMegaMenu />
            <NavDropdown label="SERVICES" activePaths={["/book-appointment", "/health-packages", "/patient-services", "/contact"]}>
              <DropdownLink to="/book-appointment">Plan Your Visit</DropdownLink>
              <DropdownLink to="/health-packages">Checkup Packages</DropdownLink>
              <DropdownLink to="/patient-services">Insurance & TPA</DropdownLink>
              <DropdownLink to="/contact">Tele-Consultation</DropdownLink>
            </NavDropdown>
            <NavLink to="/doctors">DOCTORS</NavLink>
            <NavLink to="/facilities">FACILITIES</NavLink>
            <NavLink to="/testimonials">TESTIMONIALS</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
          </div>

          {/* RIGHT: BUTTONS */}
          <div className="hidden items-center gap-2 lg:flex shrink-0">
            <Button asChild className="h-9 2xl:h-10 rounded-full bg-[#E83E8C] px-4 2xl:px-6 text-[0.75rem] 2xl:text-sm text-white shadow-md hover:bg-[#D81B60] transition-all hover:-translate-y-0.5 whitespace-nowrap">
              <Link to="/book-appointment">Book Appointment</Link>
            </Button>
          </div>

          {/* MOBILE TOGGLE */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon" className="size-10 rounded-xl text-[#001F5B]">
                <Menu className="size-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto pt-16">
               <MobileNav closeMenu={() => setMobileMenuOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* MOBILE BOTTOM ACTIONS */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 border-t border-border bg-white md:hidden">
        <a href={`tel:${HOSPITAL.phone}`} className="flex flex-1 items-center justify-center gap-2 bg-[#003A8C] text-white font-bold text-sm">
           <Phone className="size-4" /> Call Now
        </a>
        <Link to="/book-appointment" className="flex flex-1 items-center justify-center gap-2 bg-[#E83E8C] text-white font-bold text-sm">
           <Calendar className="size-4" /> Appointment
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
      className="relative py-2 text-[0.8rem] 2xl:text-[0.85rem] font-bold tracking-tight text-[#0f172a] transition-all duration-300 hover:text-[#003A8C] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-[#003A8C] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 uppercase whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003A8C] focus-visible:ring-offset-2 rounded-md"
    >
      {children}
    </Link>
  );
}

function NavDropdown({ label, children, activePaths }: { label: string; children: React.ReactNode; activePaths?: string[] }) {
  const location = useLocation();
  const isActive = activePaths?.some(path => location.pathname === path);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      triggerRef.current?.focus();
    }
    
    if (e.key === "Tab" && isOpen && containerRef.current) {
      const focusableElements = containerRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node) && 
          triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="group relative" onKeyDown={handleKeyDown}>
      <button 
        ref={triggerRef}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className={cn(
          "flex items-center gap-1 py-4 text-[0.8rem] 2xl:text-[0.85rem] font-bold tracking-tight text-[#0f172a] transition-all duration-300 hover:text-[#003A8C] uppercase whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-[#003A8C] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003A8C] focus-visible:ring-offset-2 rounded-md",
          isActive && "text-[#003A8C] after:scale-x-100",
          isOpen && "text-[#003A8C] after:scale-x-100"
        )}
      >
        {label}
        <ChevronDown className={cn("size-4 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <div 
        ref={containerRef}
        onMouseLeave={() => setIsOpen(false)}
        className={cn(
          "absolute left-0 top-[calc(100%-10px)] z-50 w-64 pt-2 transition-all duration-300",
          isOpen ? "visible top-full opacity-100" : "invisible opacity-0"
        )}
      >
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
      activeProps={{ className: "bg-[#EAF4FF] text-[#003A8C]" }}
      className="block px-6 py-2.5 text-sm font-semibold text-[#0f172a] transition-colors hover:bg-[#EAF4FF] hover:text-[#003A8C] focus-visible:outline-none focus-visible:bg-[#EAF4FF] focus-visible:text-[#003A8C]"
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
          <AccordionTrigger className="text-[0.95rem] font-bold py-3 uppercase">ABOUT US</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-1 pl-4">
             <Link to="/about" onClick={closeMenu} activeProps={{ className: "text-[#003A8C]" }} className="py-2 font-medium text-sm transition-colors hover:text-[#003A8C]">About Calix</Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="specialties" className="border-none">
          <AccordionTrigger className="text-[0.95rem] font-bold py-3 uppercase">SPECIALTIES</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-0 pl-2">
            <div className="grid grid-cols-1 gap-1 py-2">
              {specialties.map((s) => (
                <Link
                  key={s.slug}
                  to="/specialties/$slug"
                  params={{ slug: s.slug }}
                  onClick={closeMenu}
                  activeProps={{ className: "bg-[#EAF4FF] text-[#003A8C] border-l-4 border-[#003A8C]" }}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-[#0f172a] transition-all hover:bg-[#EAF4FF] hover:text-[#003A8C] active:scale-[0.98]"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] group-hover:bg-white text-[#003A8C]">
                    <StarIcon className="size-4" />
                  </div>
                  <span>{s.name}</span>
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="services" className="border-none">
          <AccordionTrigger className="text-[0.95rem] font-bold py-3 uppercase">SERVICES</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-1 pl-4">
             <Link to="/book-appointment" onClick={closeMenu} activeProps={{ className: "text-[#003A8C]" }} className="py-2 font-medium text-sm transition-colors hover:text-[#003A8C]">Plan Your Visit</Link>
             <Link to="/health-packages" onClick={closeMenu} activeProps={{ className: "text-[#003A8C]" }} className="py-2 font-medium text-sm transition-colors hover:text-[#003A8C]">Checkup Packages</Link>
             <Link to="/patient-services" onClick={closeMenu} activeProps={{ className: "text-[#003A8C]" }} className="py-2 font-medium text-sm transition-colors hover:text-[#003A8C]">Insurance & TPA</Link>
             <Link to="/contact" onClick={closeMenu} activeProps={{ className: "text-[#003A8C]" }} className="py-2 font-medium text-sm transition-colors hover:text-[#003A8C]">Tele-Consultation</Link>
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
         <Button asChild variant="outline" className="rounded-full border-[#DC2626] text-[#DC2626] hover:bg-red-50">
            <Link to="/contact" onClick={closeMenu}>Emergency Care</Link>
         </Button>
      </div>
    </div>
  );
}