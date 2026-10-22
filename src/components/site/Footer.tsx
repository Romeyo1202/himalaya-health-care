import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { businessHoursLines, footerDisclaimer, navLinks, publishedServices, siteConfig } from "@/lib/site-config";
import { normalizeWhatsAppNumber } from "@/lib/enquiry";
import { Logo } from "./Logo";

export function Footer() {
  const wa = normalizeWhatsAppNumber(siteConfig.whatsappNumber);
  const addr = [siteConfig.address, siteConfig.city, siteConfig.state].filter(Boolean).join(", ");
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <Logo inverted />
          <p className="text-sm leading-relaxed text-navy-foreground/75">
            Medical examination and diagnostic services for individuals preparing for overseas employment, travel, and destination-specific requirements.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider">Quick links</h2>
          <ul className="space-y-2 text-sm text-navy-foreground/75">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-navy-foreground">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider">Medical services</h2>
          <ul className="space-y-2 text-sm text-navy-foreground/75">
            {publishedServices.slice(0, 5).map((s) => (
              <li key={s.slug}><Link to="/services" hash={s.slug} className="hover:text-navy-foreground">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider">Contact</h2>
          <ul className="space-y-3 text-sm text-navy-foreground/75">
            {wa && <li><a href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-navy-foreground"><MessageCircle className="h-4 w-4" /> WhatsApp us</a></li>}
            {siteConfig.phone && <li><a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-navy-foreground"><Phone className="h-4 w-4" /> {siteConfig.phone}</a></li>}
            {siteConfig.email && <li><a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-navy-foreground"><Mail className="h-4 w-4" /> {siteConfig.email}</a></li>}
            {addr && <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {addr}</li>}
            {businessHoursLines.map((h) => (
              <li key={h} className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0" /> {h}</li>
            ))}
            {!wa && !siteConfig.phone && !siteConfig.email && <li>Contact details will be published soon. <Link to="/contact" className="underline">Send an enquiry</Link>.</li>}
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/15">
        <div className="mx-auto max-w-7xl space-y-4 px-4 py-6 text-xs leading-relaxed text-navy-foreground/65 sm:px-6 lg:px-8">
          <p>{footerDisclaimer}</p>
          <div className="flex flex-col justify-between gap-3 sm:flex-row">
            <p>© {new Date().getFullYear()} Himalaya Health Care. All rights reserved.</p>
            <div className="flex gap-5">
              <Link to="/privacy-policy" className="hover:text-navy-foreground">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-navy-foreground">Terms and Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
