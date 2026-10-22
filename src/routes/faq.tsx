import { createFileRoute } from "@tanstack/react-router";
import { CandidateChoice, EnquiryCta, FaqList, PageHero, VisaDisclaimer } from "@/components/site/Sections";
import { faqs } from "@/lib/site-config";
import { breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageHead("/faq", "FAQs — Overseas Medical Examinations | Himalaya Health Care", "Answers about pre-medical examinations, visa disclaimers, candidate choice, enquiries, charges and how your personal information is handled."),
    scripts: [breadcrumbLd("FAQs", "/faq")],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero crumb="FAQs" eyebrow="Frequently asked questions" title="Questions about your medical examination" intro="Clear answers about what we do, what we don't do, and how to enquire." />
      <section className="mx-auto max-w-4xl space-y-12 px-4 py-20 sm:px-6">
        <FaqList items={faqs} />
        <CandidateChoice />
        <VisaDisclaimer />
      </section>
      <EnquiryCta />
    </>
  );
}
