import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardList, Eye, HeartPulse, Lock, MessagesSquare, CalendarCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/site/Hero";
import {
  CandidateChoice, EnquiryCta, FaqList, Reveal, SectionHeading, ServiceCard, VisaDisclaimer,
} from "@/components/site/Sections";
import { faqs, publishedServices } from "@/lib/site-config";
import { pageHead } from "@/lib/seo";
import lab from "@/assets/hero-lab.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead(
      "/",
      "Himalaya Health Care — International Pre-Medical Examination Centre",
      "Pre-employment and pre-travel medical examinations, blood tests and diagnostic services for candidates preparing for overseas employment or travel. Enquire on WhatsApp.",
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "Himalaya Health Care", url: "/" }),
      },
    ],
  }),
  component: Home,
});

const steps = [
  { icon: ClipboardList, title: "Submit an Enquiry", text: "Share your basic contact details, destination, occupation, and preferred medical service." },
  { icon: MessagesSquare, title: "Discuss Your Requirements", text: "Contact the centre to clarify available medical services, appointment availability, and relevant examination requirements." },
  { icon: CalendarCheck, title: "Confirm Your Appointment", text: "Proceed only after confirming the applicable service details, charges, and appointment arrangements." },
];

const reasons = [
  { icon: HeartPulse, title: "Professional medical focus", text: "We are a medical centre — our work is health assessment, not visas or recruitment." },
  { icon: Eye, title: "Clear information", text: "Ask about services, charges and availability before you decide anything." },
  { icon: Users, title: "Candidate-focused support", text: "Our team explains the process in plain language and answers your questions." },
  { icon: Lock, title: "Privacy-conscious", text: "We ask only for the minimum details needed to respond to your enquiry." },
];

function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About the centre"
            title="A medical centre for your overseas medical examination"
            intro="Himalaya Health Care offers medical examinations, blood tests and related diagnostic services for people preparing to work or travel abroad. We focus on careful assessment, clear communication and respect for every candidate's privacy."
          />
          <Button asChild variant="link" className="mt-4 px-0 text-base">
            <Link to="/about">More about our approach <ArrowRight /></Link>
          </Button>
        </Reveal>
        <Reveal>
          <img src={lab} alt="Diagnostic laboratory with blood sample analysers" width={1600} height={1008} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" />
        </Reveal>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal><SectionHeading eyebrow="Medical services" title="Types of medical examinations and tests" intro="Explore the services you can enquire about. Our team will confirm what is currently available for your requirement." /></Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {publishedServices.map((s) => <Reveal key={s.slug}><ServiceCard service={s} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal><SectionHeading center eyebrow="How it works" title="How the medical examination enquiry process works" /></Reveal>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title}>
              <li className="relative h-full rounded-2xl border bg-card p-7">
                <span className="absolute right-6 top-5 text-5xl font-extrabold text-sky">{i + 1}</span>
                <s.icon className="h-8 w-8 text-health" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-bold text-navy">Step {i + 1}: {s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <p className="mt-6 text-center text-sm text-muted-foreground">Submitting an enquiry does not automatically create a confirmed appointment.</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal><SectionHeading center eyebrow="Why choose us" title="Why candidates choose Himalaya Health Care" /></Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <Reveal key={r.title}>
              <div className="h-full rounded-2xl bg-surface p-6">
                <r.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-bold text-navy">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16"><CandidateChoice /></Reveal>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="FAQs" title="Frequently asked questions" intro="Answers to common questions about medical examinations for overseas employment and travel." />
            <Button asChild variant="outline" className="mt-6"><Link to="/faq">View all FAQs</Link></Button>
          </Reveal>
          <FaqList items={faqs.slice(0, 5)} />
        </div>
      </section>

      <EnquiryCta />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"><VisaDisclaimer /></section>
    </>
  );
}
