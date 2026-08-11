import {
  Stethoscope,
  Droplets,
  Activity,
  HeartPulse,
  Baby,
  Bone,
  Brain,
  Scissors,
  Pill,
  Syringe,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  "general-medicine": Stethoscope,
  diabetology: Droplets,
  nephrology: Activity,
  "critical-care": HeartPulse,
  urology: Pill,
  orthopedics: Bone,
  "obstetrics-gynecology": Baby,
  gastroenterology: Syringe,
  neurology: Brain,
  "general-surgery": Scissors,
};

export function SpecialtyIcon({ slug, className = "" }: { slug: string; className?: string }) {
  const Icon = map[slug] ?? Stethoscope;
  return <Icon className={className} strokeWidth={1.75} />;
}
