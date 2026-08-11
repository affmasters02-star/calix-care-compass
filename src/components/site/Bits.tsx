import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 text-primary-foreground lg:py-24">
      <div
        aria-hidden
        className="absolute -right-24 -top-24 size-96 rounded-full bg-accent/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 left-1/4 size-96 rounded-full bg-primary/40 blur-3xl"
      />
      <div className="container-page relative">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-accent" />
          <p className="text-xs font-black uppercase tracking-[0.2em] text-accent drop-shadow-sm leading-none">
            {eyebrow}
          </p>
        </div>
        <h1 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-[900] leading-tight text-white text-balance">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/75 lg:text-lg">{subtitle}</p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <div className="flex items-center gap-3 mb-3 justify-center">
          <span className="h-px w-8 bg-accent/30" />
          <p className="text-xs font-black uppercase tracking-[0.2em] text-accent drop-shadow-sm leading-none">
            {eyebrow}
          </p>
          <span className="h-px w-8 bg-accent/30" />
        </div>
      ) : null}
      <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] text-balance">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base font-medium text-slate-600">{subtitle}</p> : null}
    </div>
  );
}

export function Section({
  children,
  tone = "default",
   className = "",
   id,
 }: {
   children: ReactNode;
   tone?: "default" | "soft" | "muted";
   className?: string;
   id?: string;
 }) {
  const bg =
    tone === "soft" ? "bg-gradient-soft" : tone === "muted" ? "bg-secondary/60" : "bg-background";
  return (
    <section id={id} className={`py-12 lg:py-16 ${bg} ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}
