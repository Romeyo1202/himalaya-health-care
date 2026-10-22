import { createFileRoute } from "@tanstack/react-router";
import { PageHero, VisaDisclaimer } from "@/components/site/Sections";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => ({
    ...pageHead("/terms", "Terms and Disclaimer — Himalaya Health Care", "Scope of Himalaya Health Care's medical examination services, with no visa or employment guarantee, candidate choice and service availability terms."),
    scripts: [breadcrumbLd("Terms and Disclaimer", "/terms")],
  }),
  component: Terms,
});

function Terms() {
  const contact = siteConfig.email || siteConfig.phone;
  return (
    <>
      <PageHero crumb="Terms and Disclaimer" eyebrow="Legal" title="Terms and Disclaimer" intro="Please read these terms to understand what our services include and what they do not." />
      <article className="mx-auto max-w-3xl space-y-8 px-4 py-16 leading-relaxed text-muted-foreground sm:px-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy">
        <section><h2>1. Scope of services</h2><p>Himalaya Health Care provides medical examination and related diagnostic services that it is qualified and authorised to provide, subject to availability at the centre.</p></section>
        <section><h2>2. No visa guarantee</h2><p>We do not issue visas and cannot guarantee visa approval. Completing a medical examination does not guarantee a visa or permission to travel.</p></section>
        <section><h2>3. No employment guarantee</h2><p>We do not provide recruitment services and cannot guarantee a job offer, employment placement or any employment outcome.</p></section>
        <section><h2>4. No immigration or recruitment decisions</h2><p>Visa, immigration, recruitment and employment decisions are made by the relevant authorities, employers, recruitment agencies or other responsible parties — not by Himalaya Health Care.</p></section>
        <section><h2>5. Candidate choice</h2><p>Using our centre is your choice. If a provider has been specified by your employer, agency or another responsible party, please verify the applicable requirements independently before booking.</p></section>
        <section><h2>6. Accuracy of information</h2><p>We aim to keep information on this website accurate and current, but services and requirements can change. Please confirm details with our team before your visit.</p></section>
        <section><h2>7. Appointments and availability</h2><p>An enquiry does not create a confirmed appointment. Appointments, services and charges are confirmed directly with our team.</p></section>
        <section><h2>8. Limitation of responsibility</h2><p>To the extent permitted by applicable law, we are not responsible for decisions made by third parties such as authorities, employers or agencies. Nothing in these terms limits any rights you have under applicable law.</p></section>
        <section><h2>9. Questions or complaints</h2><p>{contact ? <>Contact us at <strong className="text-navy">{contact}</strong>.</> : "Contact details will be published here shortly; you may also reach us through the WhatsApp enquiry channel."}</p></section>
        <VisaDisclaimer />
        <p className="rounded-xl bg-sky p-4 text-sm">These terms should be reviewed by a qualified legal professional before publication.</p>
      </article>
    </>
  );
}
