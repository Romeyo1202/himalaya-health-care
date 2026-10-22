import { Link } from "@tanstack/react-router";
import {
  ArrowRight, Briefcase, ChevronRight, Droplet, Globe2, Microscope, Plane, ShieldCheck, Stethoscope,
} from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import type { Destination, Service, ServiceIcon } from "@/lib/site-config";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, intro, center = false }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow text-health">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, crumb }: { eyebrow: string; title: string; intro: string; crumb: string }) {
  return (
    <section className="border-b bg-sky">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <ol className="flex items-center gap-1">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
            <li aria-current="page" className="font-semibold text-navy">{crumb}</li>
          </ol>
        </nav>
        <p className="eyebrow text-health animate-rise">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold text-navy animate-rise sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-rise">{intro}</p>
      </div>
    </section>
  );
}

const icons: Record<ServiceIcon, typeof Droplet> = {
  droplet: Droplet, briefcase: Briefcase, plane: Plane, globe: Globe2, stethoscope: Stethoscope, microscope: Microscope,
};

export function ServiceCard({ service, detailed = false }: { service: Service; detailed?: boolean }) {
  const Icon = icons[service.icon];
  return (
    <article id={service.slug} className="group flex scroll-mt-28 flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-4deg]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-navy">{service.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      {detailed && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.detail}</p>}
      <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
        {!detailed && (
          <Link to="/services" hash={service.slug} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        )}
        <Button asChild size="sm" variant={detailed ? "default" : "outline"} className="ml-auto">
          <Link to="/contact" search={{ service: service.title }}>Enquire Now</Link>
        </Button>
      </div>
    </article>
  );
}

export function DestinationCard({ d, detailed = false }: { d: Destination; detailed?: boolean }) {
  return (
    <article className="group flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-center gap-3">
        <span className="text-4xl leading-none" role="img" aria-label={`Flag of ${d.name}`}>{d.flag}</span>
        <h3 className="text-lg font-bold text-navy">{d.name}</h3>
      </div>
      {detailed && (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Enquire about medical examination services for candidates travelling to {d.name} for employment or other purposes.
          Requirements may vary by destination, visa category, employer, and applicable authority — please verify them independently.
        </p>
      )}
      <Link to="/contact" search={{ destination: d.name }} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
        Enquire for {d.name} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="divide-y rounded-2xl border bg-card">
      {items.map((f, i) => (
        <AccordionItem key={f.q} value={`f${i}`} className="border-0 px-5 sm:px-6">
          <AccordionTrigger className="py-5 text-left text-base font-semibold text-navy hover:no-underline">{f.q}</AccordionTrigger>
          <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function VisaDisclaimer({ compact = false }: { compact?: boolean }) {
  return (
    <aside aria-labelledby="visa-disclaimer" className="rounded-2xl border border-primary/20 bg-sky p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <h2 id="visa-disclaimer" className="text-lg font-bold text-navy">Medical Examination and Visa Disclaimer</h2>
          <p>Himalaya Health Care provides medical examination and diagnostic services for individuals preparing for overseas travel or employment, subject to the services available at our centre and the applicable requirements.</p>
          {!compact && <p>Our services are limited to medical examinations and related services that we are qualified and authorised to provide. We do not issue visas, guarantee visa approval, guarantee overseas employment, or control immigration decisions.</p>}
          {!compact && <p>Visa applications, recruitment, job offers, employment arrangements, travel arrangements, and related decisions are handled by the relevant authorities, employers, recruitment agencies, or other responsible parties.</p>}
          <p>Completing a medical examination at our centre does not guarantee a visa, job offer, employment placement, or permission to travel.</p>
          <p>Candidates should independently verify the medical examination requirements applicable to their destination and application.</p>
        </div>
      </div>
    </aside>
  );
}

export function CandidateChoice() {
  return (
    <div className="rounded-3xl bg-mint p-8 sm:p-12">
      <p className="eyebrow text-health">Transparency</p>
      <h2 className="mt-3 text-3xl font-extrabold text-navy">Your Medical Examination, Your Choice</h2>
      <div className="mt-6 grid gap-4 text-base leading-relaxed text-muted-foreground md:grid-cols-2">
        <p>We believe in providing clear information so that every candidate can make an informed decision.</p>
        <p>You may contact Himalaya Health Care to enquire about our available medical examination services, charges, appointment availability, and destination-specific requirements.</p>
        <p>If your employer, recruitment agency, or other responsible party has specified an examination provider, please independently verify the applicable requirements before booking.</p>
        <p>We do not require candidates to choose our centre solely because they have been referred to us by an agency. Our team is available to explain our services and answer questions so that you can make an informed decision.</p>
      </div>
    </div>
  );
}

export function EnquiryCta() {
  return (
    <section className="bg-navy">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold text-navy-foreground">Have questions about your medical examination?</h2>
          <p className="mt-2 max-w-xl text-navy-foreground/75">Send us an enquiry. There is no obligation to book — we're happy to explain our services first.</p>
        </div>
        <Button asChild size="lg" className="bg-health text-health-foreground hover:bg-health/90">
          <Link to="/contact">Enquire About Medical Tests <ArrowRight /></Link>
        </Button>
      </div>
    </section>
  );
}
