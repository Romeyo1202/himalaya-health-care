import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Sections";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    ...pageHead("/privacy-policy", "Privacy Policy — Himalaya Health Care", "How Himalaya Health Care handles information shared through the website enquiry form and WhatsApp, and how to request access, correction or deletion."),
    scripts: [breadcrumbLd("Privacy Policy", "/privacy-policy")],
  }),
  component: Privacy,
});

function Privacy() {
  const contact = siteConfig.email || siteConfig.phone;
  return (
    <>
      <PageHero crumb="Privacy Policy" eyebrow="Legal" title="Privacy Policy" intro={`Version ${siteConfig.privacyNoticeVersion}. This policy explains how information shared through this website is handled.`} />
      <article className="mx-auto max-w-3xl space-y-8 px-4 py-16 leading-relaxed text-muted-foreground sm:px-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
        <section><h2>1. Information you may share</h2><p>The enquiry form asks for your full name, mobile number, current location (city, state or country), destination country and job position. You may optionally add a recruitment agency name, preferred medical service and a message. We do not ask for passport numbers, medical reports, diagnoses or precise location data through the website.</p></section>
        <section><h2>2. Why we ask for it</h2><p>We use this information only to understand and respond to your enquiry about our medical examination services — for example, to explain available services, charges and appointment options.</p></section>
        <section><h2>3. How the WhatsApp enquiry works</h2><p>When you submit the form, your browser prepares a message and opens WhatsApp (app or web) with that message pre-filled to our official business number. Nothing is sent until you review the message and press Send in WhatsApp. Once sent, the message is delivered through WhatsApp, which is operated by a third party under its own terms and privacy policy.</p></section>
        <section><h2>4. Storage</h2><p>This website does not store the contents of the enquiry form on our servers or in a database. Messages you send to us through WhatsApp are stored in our WhatsApp business account and on the devices used by our staff to respond to enquiries. If we introduce website-based storage in future, this policy will be updated before that change takes effect.</p></section>
        <section><h2>5. Sharing</h2><p>We do not sell your information. We do not share enquiry details with recruitment agencies, employers or other third parties except where you ask us to, where required by law, or where necessary to provide a service you have requested. WhatsApp processes messages as described in its own policies.</p></section>
        <section><h2>6. Retention</h2><p>We keep enquiry messages only as long as reasonably needed to respond to you and manage any resulting appointment, and delete them when no longer required, unless a longer period is required by law.</p></section>
        <section><h2>7. Security</h2><p>The website is served over HTTPS. Access to our business WhatsApp account is limited to authorised staff. No method of transmission or storage is completely secure, but we take reasonable steps to protect your information.</p></section>
        <section><h2>8. Your rights</h2><p>Subject to applicable Indian law, including the Digital Personal Data Protection Act, 2023, you may ask us to:</p><ul><li>confirm what information we hold about you;</li><li>correct inaccurate information;</li><li>delete your information where it is no longer needed;</li><li>withdraw your consent to further communication.</li></ul></section>
        <section><h2>9. Contact for privacy requests</h2><p>{contact ? <>Contact us at <strong className="text-navy">{contact}</strong> or through WhatsApp with your request.</> : "Privacy contact details will be published here shortly. Until then, you may raise a request through the WhatsApp enquiry channel."}</p></section>
        <p className="rounded-xl bg-sky p-4 text-sm">This policy should be reviewed for compliance with applicable Indian data protection requirements before publication.</p>
      </article>
    </>
  );
}
