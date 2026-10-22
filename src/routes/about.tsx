import { createFileRoute } from "@tanstack/react-router";
import { Eye, HeartHandshake, Lock, Stethoscope } from "lucide-react";
import { CandidateChoice, EnquiryCta, PageHero, Reveal } from "@/components/site/Sections";
import { breadcrumbLd, pageHead } from "@/lib/seo";
import doctor from "@/assets/hero-doctor.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...pageHead("/about", "About Us — Himalaya Health Care", "Learn about Himalaya Health Care, a medical centre offering pre-employment and pre-travel medical examinations with a transparent, candidate-focused approach."),
    scripts: [breadcrumbLd("About Us", "/about")],
  }),
  component: About,
});

const values = [
  { icon: Stethoscope, title: "Medical professionalism", text: "Examinations are carried out with care and attention, within the scope of services our centre is qualified and authorised to provide." },
  { icon: Eye, title: "Commitment to transparency", text: "We explain what an examination involves, what it costs and what it does not do — it does not guarantee a visa or a job." },
  { icon: HeartHandshake, title: "Candidate-focused service", text: "Every candidate deserves respect, clear answers and the freedom to make their own informed choice." },
  { icon: Lock, title: "Privacy and confidentiality", text: "We ask only for what we need and handle personal and medical information with discretion." },
];

function About() {
  return (
    <>
      <PageHero crumb="About Us" eyebrow="About Himalaya Health Care" title="Medical examinations, handled with care and clarity" intro="We help individuals preparing for overseas employment or travel complete the medical examinations relevant to them — with honest information at every step." />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-navy">Our approach to medical examinations</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>Himalaya Health Care is a medical centre focused on pre-medical examinations, blood testing and related diagnostic services for people planning to work or travel abroad.</p>
            <p>We are not a visa consultancy or a recruitment agency. Our role is limited to medical examination and diagnostic services. Decisions about visas, jobs and travel are made by the relevant authorities and employers.</p>
            <p>Before you visit, our team can explain the services available, applicable charges and what to expect on the day.</p>
          </div>
        </Reveal>
        <Reveal>
          <img src={doctor} alt="Doctor explaining a medical examination form to a candidate" width={1600} height={1008} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" />
        </Reveal>
      </section>
      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          {values.map((v) => (
            <Reveal key={v.title}>
              <div className="h-full rounded-2xl border bg-card p-7">
                <v.icon className="h-8 w-8 text-health" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-navy">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 rounded-2xl border border-dashed p-6 text-sm text-muted-foreground">
          <strong className="text-navy">Facility and team details:</strong> Information about our medical team, registrations and facilities will be published here once verified.
        </div>
        <CandidateChoice />
      </section>
      <EnquiryCta />
    </>
  );
}
