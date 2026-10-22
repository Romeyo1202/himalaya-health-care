import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { AlertTriangle, ExternalLink, Info, Loader2, MessageCircle } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildWhatsAppMessage, buildWhatsAppUrl, enquirySchema, normalizeWhatsAppNumber, type EnquiryInput } from "@/lib/enquiry";
import { countryList, occupations, serviceOptions, siteConfig } from "@/lib/site-config";

const selectCls =
  "flex h-11 w-full rounded-md border border-input bg-background px-3 text-base shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm";

function Field({ id, label, required, error, children, hint }: { id: string; label: string; required?: boolean; error?: string | undefined; hint?: string | undefined; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="font-semibold text-navy">
        {label} {required ? <span className="text-destructive" aria-hidden="true">*</span> : <span className="font-normal text-muted-foreground">(optional)</span>}
      </Label>
      {children}
      {hint && !error && <p className="text-xs text-muted-foreground">{hint}</p>}
      {error && <p id={`${id}-error`} role="alert" className="text-sm font-medium text-destructive animate-rise">{error}</p>}
    </div>
  );
}

export function EnquiryForm({ defaultService, defaultDestination }: { defaultService?: string | undefined; defaultDestination?: string | undefined }) {
  const wa = normalizeWhatsAppNumber(siteConfig.whatsappNumber);
  const [waUrl, setWaUrl] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const lastSubmit = useRef(0);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    mode: "onTouched",
    defaultValues: {
      fullName: "", mobileNumber: "", currentLocation: "",
      destinationCountry: defaultDestination ?? "", jobPosition: "", otherJob: "", agencyName: "",
      preferredService: defaultService && serviceOptions.includes(defaultService) ? defaultService : "",
      message: defaultService && !serviceOptions.includes(defaultService) ? `I'd like to enquire about: ${defaultService}` : "",
      privacyAcknowledged: false as unknown as true, website: "",
    },
  });
  const job = watch("jobPosition");
  const ack = watch("privacyAcknowledged");

  const onSubmit = (data: EnquiryInput) => {
    if (!wa) return;
    if (data.website) return; // bot
    const now = Date.now();
    if (now - lastSubmit.current < 4000) return; // prevent rapid repeats
    lastSubmit.current = now;
    setBusy(true);
    const url = buildWhatsAppUrl(wa, buildWhatsAppMessage(data));
    setWaUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => setBusy(false), 1200);
  };

  const err = (k: keyof EnquiryInput) => errors[k]?.message as string | undefined;
  const aria = (k: keyof EnquiryInput) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-error` : undefined });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 rounded-3xl border bg-card p-6 shadow-soft sm:p-8">
      <div>
        <h2 className="text-2xl font-extrabold text-navy">Medical examination enquiry</h2>
        <p className="mt-1 text-sm text-muted-foreground">Fields marked <span className="text-destructive">*</span> are required. Please don't include passport details or medical reports.</p>
      </div>

      {!wa && (
        <div role="status" className="flex gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-foreground">
          <AlertTriangle className="h-5 w-5 shrink-0 text-destructive" />
          <p>Online enquiries are not available yet because our official WhatsApp number has not been configured. Please check back soon.</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full name" required error={err("fullName")}>
          <Input id="fullName" autoComplete="name" className="h-11" {...aria("fullName")} {...register("fullName")} />
        </Field>
        <Field id="mobileNumber" label="Mobile number" required error={err("mobileNumber")} hint="Include country code, e.g. +91">
          <Input id="mobileNumber" type="tel" inputMode="tel" autoComplete="tel" className="h-11" {...aria("mobileNumber")} {...register("mobileNumber")} />
        </Field>
        <Field id="currentLocation" label="Current location" required error={err("currentLocation")} hint="City, state or country">
          <Input id="currentLocation" autoComplete="address-level2" className="h-11" {...aria("currentLocation")} {...register("currentLocation")} />
        </Field>
        <Field id="destinationCountry" label="Destination country" required error={err("destinationCountry")} hint="Start typing to search">
          <Input id="destinationCountry" list="country-list" className="h-11" {...aria("destinationCountry")} {...register("destinationCountry")} />
          <datalist id="country-list">{countryList.map((c) => <option key={c} value={c} />)}</datalist>
        </Field>
        <Field id="jobPosition" label="Job position / occupation" required error={err("jobPosition")}>
          <select id="jobPosition" className={selectCls} {...aria("jobPosition")} {...register("jobPosition")}>
            <option value="">Select an occupation</option>
            {occupations.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        {job === "Other" ? (
          <Field id="otherJob" label="Your job title" required error={err("otherJob")}>
            <Input id="otherJob" className="h-11" {...aria("otherJob")} {...register("otherJob")} />
          </Field>
        ) : (
          <Field id="preferredService" label="Preferred medical service" error={err("preferredService")}>
            <select id="preferredService" className={selectCls} {...register("preferredService")}>
              <option value="">Select a service</option>
              {serviceOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </Field>
        )}
        {job === "Other" && (
          <Field id="preferredService" label="Preferred medical service" error={err("preferredService")}>
            <select id="preferredService" className={selectCls} {...register("preferredService")}>
              <option value="">Select a service</option>
              {serviceOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </Field>
        )}
        <Field id="agencyName" label="Recruitment agency name" error={err("agencyName")}>
          <Input id="agencyName" className="h-11" {...register("agencyName")} />
        </Field>
      </div>
      <Field id="message" label="Additional message" error={err("message")}>
        <Textarea id="message" rows={4} maxLength={1000} {...register("message")} />
      </Field>

      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register("website")} />

      <div className="rounded-xl bg-sky p-4 text-sm leading-relaxed text-muted-foreground">
        <p className="flex gap-2"><Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span><strong className="text-navy">Privacy notice:</strong> This form does not save your details on our website. When you continue, a pre-filled message opens in WhatsApp. Your details reach Himalaya Health Care only if you press Send, and are then used to respond to your enquiry. WhatsApp's own terms apply. <Link to="/privacy-policy" className="font-semibold text-primary underline">Read our Privacy Policy</Link>.</span>
        </p>
        <div className="mt-4 flex items-start gap-3">
          <Checkbox id="privacyAcknowledged" checked={!!ack} onCheckedChange={(v) => setValue("privacyAcknowledged", (v === true) as true, { shouldValidate: true })} aria-invalid={!!errors.privacyAcknowledged} />
          <Label htmlFor="privacyAcknowledged" className="text-sm font-medium leading-snug text-navy">
            I have read the privacy notice and understand that Himalaya Health Care provides medical examination services only and does not issue visas or guarantee employment. <span className="text-destructive">*</span>
          </Label>
        </div>
        {errors.privacyAcknowledged && <p role="alert" className="mt-2 text-sm font-medium text-destructive">{errors.privacyAcknowledged.message}</p>}
      </div>

      <Button type="submit" size="lg" disabled={!wa || busy} className="w-full bg-health text-health-foreground hover:bg-health/90">
        {busy ? <><Loader2 className="animate-spin" /> Opening WhatsApp…</> : <><MessageCircle /> Continue to WhatsApp</>}
      </Button>

      {waUrl && (
        <div role="status" aria-live="polite" className="rounded-xl border border-health/30 bg-mint p-4 text-sm text-foreground animate-rise">
          <p className="font-bold text-navy">One more step: press Send in WhatsApp</p>
          <p className="mt-1 text-muted-foreground">We've prepared your message in WhatsApp. Your enquiry is not sent until you press <strong>Send</strong> there. If WhatsApp didn't open, use the link below.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 font-semibold text-primary underline">
            Open WhatsApp again <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      )}
      <p className="text-xs text-muted-foreground">Submitting an enquiry does not create a confirmed appointment. Completing a medical examination does not guarantee a visa, job offer, or permission to travel.</p>
    </form>
  );
}
