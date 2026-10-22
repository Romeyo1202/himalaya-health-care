import { createFileRoute } from "@tanstack/react-router";
import { DestinationCard, EnquiryCta, PageHero, Reveal, VisaDisclaimer } from "@/components/site/Sections";
import { publishedDestinations } from "@/lib/site-config";
import { breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    ...pageHead("/destinations", "Destinations — Medical Examinations for Gulf Employment | Himalaya Health Care", "Enquire about medical examinations for employment in Saudi Arabia, UAE, Qatar, Kuwait, Oman and Bahrain. Requirements vary by destination and employer."),
    scripts: [breadcrumbLd("Destinations", "/destinations")],
  }),
  component: Destinations,
});

function Destinations() {
  return (
    <>
      <PageHero crumb="Destinations" eyebrow="Destinations" title="Medical examination enquiries by destination" intro="Choose your destination to send an enquiry. Requirements may vary by destination, visa category, employer and applicable authority — always verify them independently." />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publishedDestinations.map((d) => <Reveal key={d.slug}><DestinationCard d={d} detailed /></Reveal>)}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">Travelling somewhere not listed? You can still send an enquiry and our team will let you know whether we can help.</p>
        <div className="mt-12"><VisaDisclaimer compact /></div>
      </section>
      <EnquiryCta />
    </>
  );
}
