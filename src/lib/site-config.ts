/**
 * Central business configuration. Contact values come from VITE_* env vars
 * (see .env.example). Empty values are treated as "not configured" and the
 * related contact actions are hidden — never fill these with invented data.
 */
import { splitHoursLines } from "./business-hours";

const env = import.meta.env;
const clean = (v: unknown) => (typeof v === "string" ? v.trim() : "");

export const siteConfig = {
  name: "Himalaya Health Care",
  tagline: "International Pre-Medical Examination Centre",
  siteUrl: clean(env["VITE_SITE_URL"]),
  whatsappNumber: clean(env["VITE_WHATSAPP_NUMBER"]),
  phone: clean(env["VITE_CONTACT_PHONE"]),
  email: clean(env["VITE_CONTACT_EMAIL"]),
  address: clean(env["VITE_BUSINESS_ADDRESS"]),
  city: clean(env["VITE_BUSINESS_CITY"]),
  state: clean(env["VITE_BUSINESS_STATE"]),
  country: clean(env["VITE_BUSINESS_COUNTRY"]),
  hours: clean(env["VITE_BUSINESS_HOURS"]),
  privacyNoticeVersion: "2026-10-v1",
};

/** Opening hours as the separate lines the centre wrote ("|" separates them). */
export const businessHoursLines = splitHoursLines(siteConfig.hours);

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Medical Services" },
  { to: "/faq", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export type ServiceIcon = "droplet" | "briefcase" | "plane" | "globe" | "stethoscope" | "microscope";

export interface Service {
  slug: string;
  title: string;
  short: string;
  detail: string;
  icon: ServiceIcon;
  /** Only services marked published are shown. Confirm with the centre before publishing. */
  published: boolean;
}

export const services: Service[] = [
  {
    slug: "blood-tests",
    title: "Blood Tests and Laboratory Investigations",
    short:
      "Laboratory testing for individuals who require relevant blood investigations as part of an applicable medical examination.",
    detail:
      "Availability depends on the tests offered by the centre and the requirements of your examination. Contact us to confirm which investigations apply to you.",
    icon: "droplet",
    published: true,
  },
  {
    slug: "pre-employment",
    title: "Pre-Employment Medical Examinations",
    short:
      "Medical assessment for individuals preparing for overseas employment or other employment-related medical requirements.",
    detail: "Offered subject to the centre's actual service scope. Ask our team what the examination involves for your role and destination.",
    icon: "briefcase",
    published: true,
  },
  {
    slug: "pre-travel",
    title: "Pre-Travel Medical Examinations",
    short: "Medical examination services for individuals preparing for international travel where an assessment is required or appropriate.",
    detail: "We can explain what a pre-travel assessment at our centre covers and whether it suits your requirements.",
    icon: "plane",
    published: true,
  },
  {
    slug: "destination-specific",
    title: "Destination-Specific Medical Examinations",
    short: "Enquire about medical examinations relevant to your destination and intended application.",
    detail: "Requirements can differ by destination, employer, visa category, and responsible authority. Please verify them independently as well.",
    icon: "globe",
    published: true,
  },
  {
    slug: "general-assessment",
    title: "General Medical Assessments",
    short: "Enquire about available medical assessment services and whether they are suitable for your requirements.",
    detail: "Our team will explain the assessments currently available at the centre.",
    icon: "stethoscope",
    published: true,
  },
  {
    slug: "other-diagnostics",
    title: "Other Diagnostic Tests",
    short: "Additional diagnostic tests, where available at our centre.",
    detail: "Please contact us to confirm current availability before planning your visit.",
    icon: "microscope",
    published: true,
  },
];

export interface Destination {
  slug: string;
  name: string;
  flag: string;
  /** Only destinations confirmed by the business should be published. */
  published: boolean;
}

export const destinations: Destination[] = [
  { slug: "saudi-arabia", name: "Saudi Arabia", flag: "🇸🇦", published: true },
  { slug: "uae", name: "United Arab Emirates", flag: "🇦🇪", published: true },
  { slug: "qatar", name: "Qatar", flag: "🇶🇦", published: true },
  { slug: "kuwait", name: "Kuwait", flag: "🇰🇼", published: true },
  { slug: "oman", name: "Oman", flag: "🇴🇲", published: true },
  { slug: "bahrain", name: "Bahrain", flag: "🇧🇭", published: true },
];

export const publishedServices = services.filter((s) => s.published);
export const publishedDestinations = destinations.filter((d) => d.published);

export const occupations = [
  "Driver",
  "Heavy Vehicle Driver",
  "Light Vehicle Driver",
  "Warehouse Worker",
  "General Worker",
  "Construction Worker",
  "Technician",
  "Electrician",
  "Welder",
  "Healthcare Worker",
  "Hospitality Worker",
  "Engineer",
  "Other",
];

export const serviceOptions = [
  "Blood Test",
  "Pre-Employment Medical Examination",
  "Pre-Travel Medical Examination",
  "Destination-Specific Medical Examination",
  "Other",
  "Not Sure — Need Guidance",
];

export const countryList = [
  "Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait", "Oman", "Bahrain",
  "Malaysia", "Singapore", "Japan", "South Korea", "Maldives", "Jordan", "Israel",
  "United Kingdom", "Ireland", "Germany", "Poland", "Romania", "Croatia", "Malta",
  "Canada", "United States", "Australia", "New Zealand", "Russia", "Other",
];

export const footerDisclaimer =
  "Himalaya Health Care provides medical examination services only. Medical examinations do not guarantee visa approval, overseas employment, or permission to travel. Candidates should independently verify the applicable requirements for their destination.";

export const faqs: { q: string; a: string }[] = [
  {
    q: "What is a pre-medical examination?",
    a: "A pre-medical examination is a health assessment completed before an activity such as overseas employment or travel. Depending on the requirements, it may include a general physical examination, laboratory tests such as blood tests, and other investigations.",
  },
  {
    q: "Why may a medical examination be required before overseas employment or travel?",
    a: "Some employers, authorities, or destinations ask for a medical examination to confirm an applicant's health status. Requirements vary by destination, visa category, employer, and responsible authority, so please check what applies to you.",
  },
  {
    q: "Does completing a medical examination guarantee a visa?",
    a: "No. Completing a medical examination at our centre does not guarantee a visa, a job offer, employment placement, or permission to travel. Those decisions are made by the relevant authorities, employers, or other responsible parties.",
  },
  {
    q: "Does Himalaya Health Care issue visas or provide recruitment services?",
    a: "No. We provide medical examination and related diagnostic services only. We do not issue visas, arrange employment, or act as a recruitment agency.",
  },
  {
    q: "Do I have to complete my medical examination at Himalaya Health Care?",
    a: "No. Choosing our centre is your decision. If your employer, recruitment agency, or another responsible party has specified an examination provider, please verify the applicable requirements independently before booking. We do not require anyone to choose us simply because they were referred by an agency.",
  },
  {
    q: "Can I enquire before booking an appointment?",
    a: "Yes. You are welcome to ask about our services, charges, appointment availability, and requirements before deciding anything. Submitting an enquiry does not create a confirmed appointment.",
  },
  {
    q: "Which medical tests are available?",
    a: "Available tests depend on the services currently offered at our centre. Please send us an enquiry or contact us directly so our team can confirm what is available for your requirement.",
  },
  {
    q: "Which destinations do you currently serve?",
    a: "We carry out pre-medical examinations based on the country each candidate requires. Requirements differ between destinations, so please contact us to confirm before your visit.",
  },
  {
    q: "What information should I provide when submitting an enquiry?",
    a: "Your name, mobile number, current location, destination country, and job position. The recruitment agency name, preferred service, and a message are optional. Please do not send passport details, medical reports, or diagnoses through the enquiry form.",
  },
  {
    q: "How is my personal information handled?",
    a: "The website enquiry form does not save your details on our website. It prepares a WhatsApp message that you review and send yourself. Once you send it, your message is received in our WhatsApp account and handled by our team to respond to your enquiry. See our Privacy Policy for details.",
  },
  {
    q: "Can I ask about medical examination charges?",
    a: "Yes. Please contact us and our team will explain the applicable charges for the service you need before you book.",
  },
  {
    q: "How can I contact Himalaya Health Care?",
    a: "Use the enquiry form on our Contact page to send us a WhatsApp message, or use the contact details listed on that page.",
  },
];
