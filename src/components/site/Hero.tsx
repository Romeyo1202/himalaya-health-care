import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import blood from "@/assets/hero-blood.jpg";
import lab from "@/assets/hero-lab.jpg";
import xray from "@/assets/hero-xray.jpg";
import doctor from "@/assets/hero-doctor.jpg";

const slides = [
  { src: blood, alt: "Healthcare professional collecting a blood sample from a candidate" },
  { src: lab, alt: "Laboratory technician handling samples in a diagnostic laboratory" },
  { src: xray, alt: "Digital X-ray examination room" },
  { src: doctor, alt: "Doctor reviewing a medical examination form with a patient" },
];

const trust = [
  "Professional Medical Assessment",
  "Clear and Transparent Process",
  "Candidate-Focused Support",
  "Privacy-Conscious Enquiries",
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-navy" aria-label="Introduction">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {slides.map((s, idx) => (
          <img
            key={s.src}
            src={s.src}
            alt=""
            width={1600}
            height={1008}
            loading={idx === 0 ? "eager" : "lazy"}
            fetchPriority={idx === 0 ? "high" : "low"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-in-out ${
              idx === i ? "opacity-100 animate-kenburns" : "opacity-0"
            }`}
          />
        ))}
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="mx-auto flex min-h-[640px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:min-h-[720px] lg:px-8">
        <div className="glass-panel max-w-2xl rounded-3xl p-7 sm:p-10">
          <p className="eyebrow text-navy-foreground/85 animate-rise">International Medical Examination Services</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] text-navy-foreground animate-rise [animation-delay:100ms] sm:text-5xl">
            Your Health Assessment for Your International Journey
          </h1>
          <p className="mt-5 text-base leading-relaxed text-navy-foreground/85 animate-rise [animation-delay:200ms] sm:text-lg">
            Himalaya Health Care provides medical examination services for individuals preparing for overseas employment, travel, and other destination-specific medical requirements. Explore our services and contact our team to understand the medical examination process applicable to your destination.
          </p>
          <div className="mt-8 flex flex-col gap-3 animate-rise [animation-delay:300ms] sm:flex-row">
            <Button asChild size="lg" className="transition-all hover:-translate-y-0.5 hover:shadow-lift">
              <Link to="/contact">Enquire About Medical Tests <ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-navy-foreground/40 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
          <ul className="mt-8 grid gap-3 border-t border-navy-foreground/20 pt-6 animate-rise [animation-delay:400ms] sm:grid-cols-2">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-semibold text-navy-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-health" aria-hidden="true" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setI(idx)}
            aria-label={`Show image ${idx + 1}: ${s.alt}`}
            aria-current={idx === i}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-navy-foreground" : "w-4 bg-navy-foreground/40 hover:bg-navy-foreground/70"}`}
          />
        ))}
      </div>
    </section>
  );
}
