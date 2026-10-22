import { createFileRoute } from "@tanstack/react-router";
import { EnquiryCta, PageHero, Reveal, ServiceCard, VisaDisclaimer } from "@/components/site/Sections";
import { publishedServices } from "@/lib/site-config";
import { breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    ...pageHead("/services", "Medical Services — Pre-Employment & Pre-Travel Examinations | Himalaya Health Care", "Blood tests, pre-employment medical examinations, pre-travel health assessments and destination-specific medical examinations for overseas employment and travel."),
    scripts: [
      breadcrumbLd("Medical Services", "/services"),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": publishedServices.map((s) => ({ "@type": "Service", name: s.title, description: s.short, provider: { "@type": "Organization", name: "Himalaya Health Care" } })),
        }),
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero crumb="Medical Services" eyebrow="Medical services" title="Medical examinations for overseas employment and travel" intro="Explore the medical examination and diagnostic services you can enquire about. Availability, charges and appointment times are confirmed directly by our team." />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publishedServices.map((s) => <Reveal key={s.slug}><ServiceCard service={s} detailed /></Reveal>)}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">Service availability may change. We do not publish test lists, turnaround times or prices until they are confirmed — please contact us for current details.</p>
        <div className="mt-12"><VisaDisclaimer compact /></div>
      </section>
      <EnquiryCta />
    </>
  );
}
