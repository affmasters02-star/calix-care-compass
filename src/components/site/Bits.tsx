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
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl">
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
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-2xl font-extrabold leading-tight text-foreground sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}

export function Section({
  children,
  tone = "default",
  className = "",
}: {
  children: ReactNode;
  tone?: "default" | "soft" | "muted";
  className?: string;
}) {
  const bg =
    tone === "soft" ? "bg-gradient-soft" : tone === "muted" ? "bg-secondary/60" : "bg-background";
  return (
    <section className={`py-12 lg:py-16 ${bg} ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}
