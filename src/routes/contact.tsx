import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { CandidateChoice, PageHero, VisaDisclaimer } from "@/components/site/Sections";
import { normalizeWhatsAppNumber } from "@/lib/enquiry";
import { businessHoursLines, siteConfig } from "@/lib/site-config";
import { breadcrumbLd, localBusinessLd, pageHead } from "@/lib/seo";

const search = z.object({
  service: z.string().max(120).optional().catch(undefined),
  destination: z.string().max(80).optional().catch(undefined),
});

export const Route = createFileRoute("/contact")({
  validateSearch: search,
  head: () => ({
    ...pageHead("/contact", "Contact & Enquiry — Himalaya Health Care", "Send a medical examination enquiry to Himalaya Health Care on WhatsApp. Ask about services, charges and appointment availability with no obligation to book."),
    scripts: [breadcrumbLd("Contact", "/contact"), localBusinessLd()],
  }),
  component: Contact,
});

function Contact() {
  const { service, destination } = Route.useSearch();
  const wa = normalizeWhatsAppNumber(siteConfig.whatsappNumber);
  const addr = [siteConfig.address, siteConfig.city, siteConfig.state, siteConfig.country].filter(Boolean).join(", ");
  const directions = addr ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}` : "";
  const rows = [
    { icon: Phone, label: "Phone", value: siteConfig.phone, href: siteConfig.phone ? `tel:${siteConfig.phone}` : undefined },
    { icon: Mail, label: "Email", value: siteConfig.email, href: siteConfig.email ? `mailto:${siteConfig.email}` : undefined },
    { icon: MapPin, label: "Address", value: addr },
  ];
  return (
    <>
      <PageHero crumb="Contact" eyebrow="Contact and enquiry" title="Enquire about your medical examination" intro="Tell us a little about your requirement and we'll explain the available services, charges and appointment options. There is no obligation to book." />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:px-8">
        <EnquiryForm defaultService={service} defaultDestination={destination} />
        <aside className="space-y-6">
          <div className="rounded-3xl border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold text-navy">Contact details</h2>
            <ul className="mt-5 space-y-4">
              {rows.map((r) => (
                <li key={r.label} className="flex gap-3">
                  <r.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{r.label}</p>
                    {r.value ? (
                      r.href ? <a href={r.href} className="font-semibold text-navy hover:text-primary">{r.value}</a> : <p className="font-semibold text-navy">{r.value}</p>
                    ) : (
                      <p className="text-sm italic text-muted-foreground">To be published soon</p>
                    )}
                  </div>
                </li>
              ))}
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Business hours</p>
                  {businessHoursLines.length ? (
                    businessHoursLines.map((h) => <p key={h} className="font-semibold text-navy">{h}</p>)
                  ) : (
                    <p className="text-sm italic text-muted-foreground">To be published soon</p>
                  )}
                </div>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              {wa && (
                <Button asChild className="bg-health text-health-foreground hover:bg-health/90">
                  <a href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer"><MessageCircle /> Chat on WhatsApp</a>
                </Button>
              )}
              {siteConfig.email && (
                <Button asChild variant="outline"><a href={`mailto:${siteConfig.email}`}><Mail /> Email us</a></Button>
              )}
              {directions && (
                <Button asChild variant="outline">
                  <a href={directions} target="_blank" rel="noopener noreferrer"><Navigation /> Get directions</a>
                </Button>
              )}
            </div>
          </div>
          <VisaDisclaimer compact />
        </aside>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"><CandidateChoice /></section>
    </>
  );
}
