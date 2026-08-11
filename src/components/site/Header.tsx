import { Link, useLocation, useRouter } from "@tanstack/react-router";
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
  const triggerRef = useRef<HTMLAnchorElement>(null);

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
      <Link 
        to="/specialties"
        ref={triggerRef}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="specialties-mega-menu"
        onMouseEnter={() => setIsOpen(true)}
        className={cn(
          "flex items-center gap-1 py-4 text-[0.8rem] 2xl:text-[0.85rem] font-bold tracking-tight text-foreground transition-all duration-300 hover:text-brand-blue uppercase whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#003A8C] after:transition-[width] after:duration-300 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003A8C] focus-visible:ring-offset-2 rounded-md",
          isActive && "text-brand-blue after:w-full",
          isOpen && "text-brand-blue after:w-full"
        )}
      >
        SPECIALTIES
        <ChevronDown 
          className={cn("size-4 transition-transform duration-300", isOpen && "rotate-180")} 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        />
      </Link>
      
      <div 
        ref={containerRef}
        id="specialties-mega-menu"
        role="region"
        aria-label="Specialties Menu"
        onMouseLeave={() => setIsOpen(false)}
        className={cn(
          "fixed left-0 right-0 z-40 flex justify-center transition-all duration-500 ease-out pointer-events-none",
          // Always sits exactly below the live header bottom edge
          "top-[var(--header-bottom,135px)]",
          isOpen ? "visible translate-y-0 opacity-100 pointer-events-auto" : "invisible -translate-y-4 opacity-0"
        )}

      >
        <div className="mx-auto w-[1200px] overflow-hidden rounded-[2.5rem] border border-[#EAF4FF] bg-white p-10 shadow-[0_40px_100px_rgba(0,0,0,0.12)]">
          <div className="grid grid-cols-12 gap-12">
            {/* Left Column: Menu Items */}
            <div className="col-span-9">
              <div className="flex items-center justify-between mb-8 border-b border-[#EAF4FF] pb-4">
                <h3 className="font-display text-2xl font-[900] text-brand-blue tracking-tight">Medical Specialties</h3>
                <Link 
                  to="/specialties" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-sm font-black text-accent hover:translate-x-1 transition-transform uppercase tracking-widest"
                >
                  View All Specialties <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-x-10 gap-y-2">
                <div className="space-y-1">
                  {specialties.slice(0, 4).map((s) => (
                    <SpecialtyItem key={s.slug} specialty={s} onSelect={() => setIsOpen(false)} />
                  ))}
                </div>
                <div className="space-y-1">
                  {specialties.slice(4, 7).map((s) => (
                    <SpecialtyItem key={s.slug} specialty={s} onSelect={() => setIsOpen(false)} />
                  ))}
                </div>
                <div className="space-y-1">
                  {specialties.slice(7, 10).map((s) => (
                    <SpecialtyItem key={s.slug} specialty={s} onSelect={() => setIsOpen(false)} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Featured CTA Card */}
            <div className="col-span-3 flex flex-col">
              <div className="flex-1 rounded-[2rem] bg-gradient-brand p-8 text-white shadow-premium relative overflow-hidden group/cta">
                <div className="absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover/cta:scale-150" />
                <div className="absolute -bottom-10 -left-10 size-40 rounded-full bg-[#E83E8C]/20 blur-3xl" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="size-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 ring-1 ring-white/30">
                    <Calendar className="size-7 text-white" />
                  </div>
                  <h4 className="font-display text-xl font-[800] leading-tight">Patient-First Excellence</h4>
                  <p className="mt-4 text-[0.9375rem] text-white/80 font-medium leading-relaxed">
                    World-class specialists and advanced technology, dedicated to your family's health.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {['Expert Doctors', '24/7 Support'].map(item => (
                      <li key={item} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">
                        <span className="flex size-5 items-center justify-center rounded-full bg-white/20 text-[10px]">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <Button asChild size="lg" className="w-full rounded-full bg-white text-brand-blue font-black uppercase tracking-widest text-[0.7rem] hover:bg-[#EAF4FF] hover:shadow-xl transition-all active:scale-[0.98]">
                      <Link to="/book-appointment" onClick={() => setIsOpen(false)}>Book Appointment</Link>
                    </Button>
                  </div>
                </div>
              </div>
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
        <div className="size-11 rounded-xl bg-[#EAF4FF] group-hover/item:bg-white group-hover/item:shadow-sm transition-all flex items-center justify-center text-brand-blue ring-1 ring-primary/5">
          <specialty.icon className="size-5 transition-transform group-hover/item:scale-110" />
        </div>
        <div>
          <span className="block text-[0.9375rem] font-[800] text-foreground transition-colors group-hover/item:text-brand-blue">{specialty.name}</span>
          <span className="block text-[0.7rem] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">
            {specialty.tagline}
          </span>
        </div>
      </div>
      <ArrowRight className="size-4 -translate-x-2 opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100 text-accent" />
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
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 45;
      setIsScrolled(scrolled);
      
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        if (scrolled) {
          document.documentElement.style.setProperty('--header-height-scrolled', `${height}px`);
        } else {
          document.documentElement.style.setProperty('--header-height', `${height}px`);
        }
      }
    };
    
    // Initial measurement
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 z-50 w-full transition-all duration-300 border-b border-[#EAF4FF]/30"
    >
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
            <SpecialtiesMegaMenu isScrolled={isScrolled} />
            <NavLink to="/patient-services">SERVICES</NavLink>
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
              <Button variant="ghost" size="icon" className="size-10 rounded-xl text-primary">
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
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();
  const router = useRouter();

  useEffect(() => {
    // Only track sections on the home page
    if (location.pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ["home", "about", "doctors", "testimonials"];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    if (location.pathname !== "/") return;
    
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      if (onClick) onClick();
    }
  };

  const isHomeSection = to.startsWith("/#") || (to === "/" && location.pathname === "/");
  const sectionId = to.startsWith("/#") ? to.substring(2) : to === "/" ? "home" : null;
  const isActiveSection = !!sectionId && location.pathname === "/" && activeSection === sectionId;

  return (
    <Link
      to={to}
      onClick={(e) => {
        if (isHomeSection && location.pathname === "/") {
          scrollToSection(e, sectionId ?? "home");
        } else if (onClick) {
          onClick();
        }
      }}
      activeOptions={{ exact: to === "/" }}
      activeProps={{ className: "text-brand-blue after:w-full" }}
      className={cn(
        "relative py-2 text-[0.8rem] 2xl:text-[0.85rem] font-bold tracking-tight text-foreground transition-all duration-300 hover:text-brand-blue after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#003A8C] after:transition-[width] after:duration-300 hover:after:w-full uppercase whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003A8C] focus-visible:ring-offset-2 rounded-md",
        isActiveSection && "text-brand-blue after:w-full"
      )}
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
          "flex items-center gap-1 py-4 text-[0.8rem] 2xl:text-[0.85rem] font-bold tracking-tight text-foreground transition-all duration-300 hover:text-brand-blue uppercase whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#003A8C] after:transition-[width] after:duration-300 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003A8C] focus-visible:ring-offset-2 rounded-md",
          isActive && "text-brand-blue after:w-full",
          isOpen && "text-brand-blue after:w-full"
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
      activeProps={{ className: "bg-[#EAF4FF] text-brand-blue" }}
      className="block px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-[#EAF4FF] hover:text-brand-blue focus-visible:outline-none focus-visible:bg-[#EAF4FF] focus-visible:text-brand-blue"
    >
      {children}
    </Link>
  );
}

function MobileNav({ closeMenu }: { closeMenu: () => void }) {
  return (
    <div className="flex flex-col gap-2">
      <NavLink to="/" onClick={closeMenu}>HOME</NavLink>
      <NavLink to="/about" onClick={closeMenu}>ABOUT US</NavLink>
      <Accordion type="single" collapsible>
        <AccordionItem value="specialties" className="border-none">
          <AccordionTrigger className="text-[0.95rem] font-bold py-3 uppercase">SPECIALTIES</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-0 pl-2">
            <Link 
              to="/specialties" 
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 text-sm font-black text-accent uppercase tracking-widest border-b border-[#EAF4FF] mb-2"
            >
              All Specialties <ArrowRight className="size-4" />
            </Link>
            <div className="grid grid-cols-1 gap-1 py-2">
              {specialties.map((s) => (
                <Link
                  key={s.slug}
                  to="/specialties/$slug"
                  params={{ slug: s.slug }}
                  onClick={closeMenu}
                  activeProps={{ className: "bg-[#EAF4FF] text-brand-blue border-l-4 border-[#003A8C]" }}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-foreground transition-all hover:bg-[#EAF4FF] hover:text-brand-blue active:scale-[0.98]"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] group-hover:bg-white text-brand-blue">
                    <s.icon className="size-4" />
                  </div>
                  <span>{s.name}</span>
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <NavLink to="/patient-services" onClick={closeMenu}>SERVICES</NavLink>
      </Accordion>
      <NavLink to="/doctors" onClick={closeMenu}>DOCTORS</NavLink>
      <NavLink to="/facilities" onClick={closeMenu}>FACILITIES</NavLink>
      <NavLink to="/testimonials" onClick={closeMenu}>TESTIMONIALS</NavLink>
      <NavLink to="/contact" onClick={closeMenu}>CONTACT</NavLink>
      <div className="mt-8 flex flex-col gap-4 pb-20">
         <Button asChild className="rounded-full bg-[#E83E8C] text-white">
            <Link to="/book-appointment" onClick={closeMenu}>Book Appointment</Link>
         </Button>
         <Button asChild variant="outline" className="rounded-full border-[#DC2626] text-destructive hover:bg-red-50">
            <Link to="/contact" onClick={closeMenu}>Emergency Care</Link>
         </Button>
      </div>
    </div>
  );
}