import { Link } from "@tanstack/react-router";

// The header/footer mark is literally the same file the browser tab icon uses.
const logoUrl = "/favicon.png";

/** Official Himalaya Health Care mark, supplied by the business. */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Himalaya Health Care — home">
      <img
        src={logoUrl}
        alt=""
        aria-hidden="true"
        width={256}
        height={256}
        decoding="async"
        className={`h-11 w-11 shrink-0 rounded-xl ${inverted ? "shadow-soft" : ""}`}
      />
      <span className="leading-tight">
        <span className={`block text-base font-extrabold ${inverted ? "text-navy-foreground" : "text-navy"}`}>Himalaya Health Care</span>
        <span className={`block text-[0.65rem] font-semibold uppercase tracking-[0.14em] ${inverted ? "text-navy-foreground/70" : "text-muted-foreground"}`}>
          Pre-Medical Examination Centre
        </span>
      </span>
    </Link>
  );
}
