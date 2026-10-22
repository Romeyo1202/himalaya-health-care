import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/site-config";
import { normalizeWhatsAppNumber } from "@/lib/enquiry";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const wa = normalizeWhatsAppNumber(siteConfig.whatsappNumber);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b bg-background/90 shadow-soft backdrop-blur-md" : "bg-background"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          {wa && (
            <Button asChild variant="outline" size="icon" className="hidden border-health/40 text-health hover:bg-mint sm:inline-flex">
              <a href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <MessageCircle />
              </a>
            </Button>
          )}
          <Button asChild className="hidden transition-all hover:-translate-y-0.5 hover:shadow-lift sm:inline-flex">
            <Link to="/contact">Enquire Now</Link>
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <div className={`grid overflow-hidden border-t bg-background transition-all duration-300 lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-transparent"}`}>
        <nav aria-label="Mobile" className="min-h-0">
          <ul className="space-y-1 px-4 py-4">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  className="block rounded-md px-3 py-3 font-semibold text-foreground hover:bg-sky data-[status=active]:bg-sky data-[status=active]:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full" size="lg">
                <Link to="/contact" onClick={() => setOpen(false)}>Enquire Now</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
