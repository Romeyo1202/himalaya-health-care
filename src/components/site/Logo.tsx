import { Link } from "@tanstack/react-router";

/** Replace this mark with the official logo when supplied. */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Himalaya Health Care — home">
      <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" aria-hidden="true">
        <rect width="40" height="40" rx="10" className="fill-primary" />
        <path d="M6 30 L16 14 L21 21 L25 16 L34 30 Z" className="fill-primary-foreground" opacity="0.25" />
        <path d="M17 9h6v8h8v6h-8v8h-6v-8H9v-6h8z" className="fill-primary-foreground" />
        <circle cx="31" cy="9" r="3" className="fill-health" />
      </svg>
      <span className="leading-tight">
        <span className={`block text-base font-extrabold ${inverted ? "text-navy-foreground" : "text-navy"}`}>Himalaya Health Care</span>
        <span className={`block text-[0.65rem] font-semibold uppercase tracking-[0.14em] ${inverted ? "text-navy-foreground/70" : "text-muted-foreground"}`}>
          Pre-Medical Examination Centre
        </span>
      </span>
    </Link>
  );
}
