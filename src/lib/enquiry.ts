import { z } from "zod";

const text = (max: number, label: string) =>
  z
    .string()
    .trim()
    .min(1, `${label} is required`)
    .max(max, `${label} must be under ${max} characters`)
    .refine((v) => !/[<>]/.test(v), `${label} contains invalid characters`);

const optionalText = (max: number, label: string) =>
  z
    .string()
    .trim()
    .max(max, `${label} must be under ${max} characters`)
    .refine((v) => !/[<>]/.test(v), `${label} contains invalid characters`)
    .optional()
    .or(z.literal(""));

export const enquirySchema = z
  .object({
    fullName: text(100, "Full name").refine((v) => v.length >= 2, "Please enter your full name"),
    mobileNumber: z
      .string()
      .trim()
      .min(1, "Mobile number is required")
      .regex(/^\+?[0-9\s-]{7,20}$/, "Enter a valid mobile number (digits, spaces, + or -)")
      .refine((v) => v.replace(/\D/g, "").length >= 7 && v.replace(/\D/g, "").length <= 15, "Enter a valid mobile number"),
    currentLocation: text(120, "Current location"),
    destinationCountry: text(80, "Destination country"),
    jobPosition: text(80, "Job position"),
    otherJob: optionalText(80, "Job title"),
    agencyName: optionalText(120, "Agency name"),
    preferredService: optionalText(80, "Preferred service"),
    message: optionalText(1000, "Message"),
    privacyAcknowledged: z.literal(true, {
      errorMap: () => ({ message: "Please confirm you have read the privacy notice" }),
    }),
    website: z.string().max(0).optional(), // honeypot
  })
  .refine((d) => d.jobPosition !== "Other" || (d.otherJob && d.otherJob.trim().length > 0), {
    path: ["otherJob"],
    message: "Please enter your job title",
  });

export type EnquiryInput = z.infer<typeof enquirySchema>;

/** Returns digits-only international number, or null when not usable. */
export function normalizeWhatsAppNumber(raw: string | undefined | null): string | null {
  if (!raw) return null;
  const digits = raw.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15 ? digits : null;
}

export function buildWhatsAppMessage(d: EnquiryInput): string {
  const job = d.jobPosition === "Other" && d.otherJob ? d.otherJob.trim() : d.jobPosition;
  const or = (v?: string) => (v && v.trim() ? v.trim() : "Not Provided");
  return [
    "New Medical Examination Enquiry — Himalaya Health Care",
    "",
    `Full Name: ${d.fullName.trim()}`,
    `Mobile Number: ${d.mobileNumber.trim()}`,
    `Current Location: ${d.currentLocation.trim()}`,
    `Destination Country: ${d.destinationCountry.trim()}`,
    `Job Position: ${job}`,
    `Recruitment Agency: ${or(d.agencyName)}`,
    `Preferred Medical Service: ${or(d.preferredService)}`,
    `Additional Message: ${or(d.message)}`,
    "",
    "Source: Himalaya Health Care Website",
  ].join("\n");
}

export function buildWhatsAppUrl(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
