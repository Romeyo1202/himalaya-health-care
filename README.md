# Himalaya Health Care

PROJECT: HIMALAYA HEALTH CARE — INTERNATIONAL PRE-MEDICAL EXAMINATION CENTRE WEBSITE

1. ROLE AND OBJECTIVE

Act as a senior full-stack developer, healthcare website designer, UI/UX specialist, SEO strategist, and database architect.

Build a premium, modern, responsive, trustworthy, and SEO-optimized website for Himalaya Health Care, a medical centre providing pre-medical examinations, blood testing, and other medical examination services for individuals preparing for overseas employment, travel, or other destination-specific requirements.

The website must look like a genuine, professional healthcare facility rather than a visa consultancy, recruitment agency, or generic corporate website.

The design should communicate:

Professional medical care.

Trust and transparency.

International medical examination services.

Clear information about available medical services.

Easy online enquiries.

Candidate privacy.

Transparent separation between medical examinations and visa or employment decisions.

The final website must be production-oriented, visually polished, accessible, secure, and easy to maintain.

Do not create only a static landing page. Build a complete website with reusable components, functional navigation, responsive layouts, working enquiry functionality, privacy-conscious data handling, and an extensible backend.

2. REQUIRED TECHNOLOGY STACK

Use the following technology stack.

Frontend

Next.js 15 using the App Router.

TypeScript with strict type checking.

Tailwind CSS v4.

shadcn/ui.

Lucide React icons.

Framer Motion or Motion for React for smooth, purposeful animations.

React Hook Form for form handling.

Zod for input validation.

Backend

Next.js Route Handlers for server-side form processing.

Supabase Edge Functions when appropriate.

Supabase server-side clients for secure database operations.

Database

Supabase PostgreSQL.

Authentication

Supabase Auth, where required for protected administrative functionality.

File Storage

Supabase Storage.

Private buckets for confidential candidate documents and medical reports, if document upload functionality is introduced later.

Hosting

Vercel.

Important implementation requirements

Follow Next.js 15 conventions.

Keep server-side secrets out of browser code.

Never expose the Supabase service-role key.

Use environment variables for all configurable credentials and contact details.

Do not use deprecated framework patterns.

Avoid unnecessary client-side rendering.

Optimize for performance, accessibility, and search engine indexing.

If a technology or integration requires external credentials, implement the appropriate integration structure and clearly document the required environment variables.

Do not falsely claim that a third-party integration is working until it has been configured and tested.

3. BRAND IDENTITY AND DESIGN SYSTEM

Brand name: Himalaya Health Care.

Brand category: Medical Centre / International Pre-Medical Examination Centre.

Visual direction

Create a premium medical website inspired by modern hospitals, diagnostic laboratories, and international healthcare providers.

Use a restrained, professional colour palette.

Primary colours:

Medical Blue: #1769AA

Deep Navy: #12304A

Healthcare Green: #15966A

Soft Mint: #EAF7F1

Light Blue: #EEF6FC

White: #FFFFFF

Medical Grey: #64748B

Light Background Grey: #F5F7FA

Use green primarily for positive indicators, healthcare accents, and secondary actions.

Use blue for primary buttons, navigation accents, links, and important headings.

Use white and light grey for clean backgrounds.

Maintain accessible text contrast.

Avoid excessive gradients, oversaturated colours, cartoon-style illustrations, and unnecessary decorative elements.

Typography

Use a clean, modern font such as Inter or Manrope.

Typography must have:

Strong heading hierarchy.

Readable paragraph text.

Comfortable line spacing.

Clear mobile readability.

Consistent font weights.

Professional medical branding.

Logo

Create a clean text-based logo treatment for Himalaya Health Care.

Use a medical cross or subtle healthcare-inspired symbol combined with a simple geometric mark.

Do not use a logo that imitates an existing hospital, government department, medical accreditation body, or official visa organisation.

Make the logo easy to replace with the actual company logo later.

The header must contain:

Logo and brand name on the left.

Navigation links in the centre or right.

A prominent Enquire Now button.

A mobile hamburger menu.

Optional WhatsApp contact button.

Keep the header clean and professional.

4. HOMEPAGE — PREMIUM HERO SECTION

The homepage hero section is the most important visual component.

Create a sophisticated, cinematic healthcare hero section with medical imagery in the background and readable content in the foreground.

Background imagery

Use four or five relevant medical images showing scenes such as:

A healthcare professional collecting a blood sample.

A diagnostic laboratory with medical testing equipment.

An X-ray examination room.

A medical imaging or scanning environment.

A doctor reviewing a patient's medical examination.

Use properly licensed stock images or suitable healthcare imagery from a reliable image source.

Do not use random recruitment, airport, passport, or visa-approval imagery as the primary visual identity.

Background image animation

Create an elegant rotating or crossfading background slideshow.

Requirements:

Four or five image slides.

Smooth fade transitions.

Approximately 5–7 seconds per slide.

Subtle zoom effect where appropriate.

Blue or navy overlay to preserve text contrast.

No distracting flashing or rapid transitions.

Pause or reduce movement when the user prefers reduced motion.

Avoid layout shifts during image transitions.

Optimized image loading.

The background should feel premium, calm, and professional.

Glassmorphism foreground content

Place the main hero content inside a refined glassmorphism-inspired panel.

Design properties:

Semi-transparent white or light-blue background.

Subtle backdrop blur.

Thin, translucent border.

Soft shadow.

Rounded corners.

Generous padding.

High text readability.

Restrained visual effects.

Do not overuse glassmorphism. The content must remain accessible and easy to read.

Hero copy

Eyebrow text:

INTERNATIONAL MEDICAL EXAMINATION SERVICES

Main headline:

Your Health Assessment for Your International Journey

Supporting paragraph:

Himalaya Health Care provides medical examination services for individuals preparing for overseas employment, travel, and other destination-specific medical requirements. Explore our services and contact our team to understand the medical examination process applicable to your destination.

Primary CTA:

Enquire About Medical Tests

Secondary CTA:

Explore Our Services

Trust indicators:

Professional Medical Assessment

Clear and Transparent Process

Candidate-Focused Support

Privacy-Conscious Enquiries

Do not claim that the centre is government-approved, internationally accredited, officially designated, or authorised by a specific country unless this has been independently verified and documented.

Do not display fake awards, fabricated patient statistics, invented testimonials, or unverified success rates.

5. VISA DISCLAIMER — ESSENTIAL REQUIREMENT

The website must clearly communicate that Himalaya Health Care provides medical examination services only.

This information must appear in an appropriate location on the homepage, FAQ section, enquiry page, and website footer.

Use clear, professional, non-threatening language.

Required disclaimer

Medical Examination and Visa Disclaimer

Himalaya Health Care provides medical examination and diagnostic services for individuals preparing for overseas travel or employment, subject to the services available at our centre and the applicable requirements.

Our services are limited to medical examinations and related services that we are qualified and authorised to provide. We do not issue visas, guarantee visa approval, guarantee overseas employment, or control immigration decisions.

Visa applications, recruitment, job offers, employment arrangements, travel arrangements, and related decisions are handled by the relevant authorities, employers, recruitment agencies, or other responsible parties.

Completing a medical examination at our centre does not guarantee a visa, job offer, employment placement, or permission to travel.

Candidates should independently verify the medical examination requirements applicable to their destination and application.

Important implementation rules

Do not use the phrase "100% Visa Guarantee".

Do not imply that passing a medical examination guarantees a visa.

Do not suggest that Himalaya Health Care controls recruitment agencies or employers.

Do not claim that the centre is mandatory for every candidate.

Do not suggest that a candidate must use this centre simply because an agency has referred them.

Do not use threatening language involving passports, candidate documents, or employment.

Do not make claims about government or embassy authorisation without verification.

The disclaimer must be prominent enough to be understood but must not overwhelm the visual design.

6. VOLUNTARY SERVICE AND CANDIDATE CHOICE

A candidate's decision to use the centre must be presented respectfully and transparently.

Do not pressure candidates into choosing Himalaya Health Care.

Do not state that every candidate must undergo their medical examination at this centre.

Use the following content in the FAQ, enquiry page, and relevant service information.

Candidate choice statement

Your Medical Examination, Your Choice

We believe in providing clear information so that every candidate can make an informed decision.

You may contact Himalaya Health Care to enquire about our available medical examination services, charges, appointment availability, and destination-specific requirements.

If your employer, recruitment agency, or other responsible party has specified an examination provider, please independently verify the applicable requirements before booking.

We do not require candidates to choose our centre solely because they have been referred to us by an agency.

Our team is available to explain our services and answer questions so that you can make an informed decision.

Important requirements

No coercive language.

No false urgency.

No claims that using this centre guarantees employment.

No claims that candidates will lose their job or visa opportunity if they do not use this centre.

No misleading agency affiliations.

No fabricated endorsements.

The overall tone must be professional, informative, respectful, and reassuring.

7. WEBSITE STRUCTURE

Build the following pages.

Page 1: Home

Include:

Premium animated medical hero section.

Medical examination service overview.

Why Choose Himalaya Health Care.

How the Medical Examination Process Works.

Destinations We Serve.

Types of Medical Tests.

Candidate Choice and Transparency section.

Frequently Asked Questions.

Enquiry CTA.

Medical disclaimer.

Footer with contact details and legal links.

Page 2: About Us

Include:

Introduction to Himalaya Health Care.

Our approach to medical examinations.

Commitment to transparency.

Candidate-focused service philosophy.

Privacy and confidentiality.

Medical professionalism.

Do not invent the company's founding year, medical staff names, qualifications, registration numbers, accreditations, or facility statistics.

Use editable placeholders wherever factual company information is not yet available.

Page 3: Medical Services

Create a dedicated services page with visually attractive cards.

Possible service categories include:

Blood Tests and Laboratory Investigations.

Pre-Employment Medical Examinations.

Pre-Travel Medical Examinations.

General Medical Assessments.

Destination-Specific Medical Examinations.

Other Diagnostic Tests, where available.

Important:
These are potential service categories, not a declaration that every service is currently offered.

Make each service configurable.

Only publish services that the centre actually provides and is qualified and authorised to offer.

Each service card should contain:

Relevant medical image or icon.

Service title.

Short description.

Learn More link.

Enquire Now CTA.

Do not promise specific test availability, results turnaround times, prices, or medical outcomes without verified information.

Page 4: Destinations

Create a destination information page for overseas medical examination enquiries.

Include configurable destination cards for countries relevant to the centre's actual services.

Examples that can be considered for configuration include:

Saudi Arabia.

United Arab Emirates.

Qatar.

Kuwait.

Oman.

Bahrain.

Other countries confirmed by the business.

Do not assume that every listed destination is currently served.

For each published destination, include:

Country name.

Country flag.

Relevant medical examination information.

A statement that requirements may vary by destination, visa category, employer, and applicable authority.

An enquiry button.

Use country flags selectively in their natural colours.

Do not use government or embassy logos without permission.

Do not falsely state that a medical test is officially accepted by a specific government or visa authority.

Page 5: FAQ

Create a clean accordion interface with keyboard-accessible interactions.

Include these questions:

What is a pre-medical examination?

Why may a medical examination be required before overseas employment or travel?

Does completing a medical examination guarantee a visa?

Does Himalaya Health Care issue visas or provide recruitment services?

Do I have to complete my medical examination at Himalaya Health Care?

Can I enquire before booking an appointment?

Which medical tests are available?

Which destinations do you currently serve?

What information should I provide when submitting an enquiry?

How is my personal information handled?

Can I ask about medical examination charges?

How can I contact Himalaya Health Care?

Ensure every answer is accurate, consistent with the disclaimers, and easy to understand.

Page 6: Contact and Enquiry

Include:

Contact details.

WhatsApp contact CTA.

Email contact CTA.

Address placeholder.

Business hours placeholder.

Enquiry form.

Privacy notice.

Clear service limitation disclaimer.

Do not invent the address, opening hours, email address, phone number, or geographical location of the centre.

Keep all contact information editable through configuration.

Page 7: Privacy Policy

Create a privacy policy page explaining:

What personal information may be collected.

Why information is collected.

How enquiry information is used.

How WhatsApp redirects work.

How information is stored, if stored.

Whether information is shared with third parties.

Data retention practices.

Data security measures.

Candidate rights and available contact channels.

How users can request access, correction, or deletion where applicable.

Contact details for privacy-related enquiries.

The policy must accurately reflect the actual implementation.

Do not claim that information is never stored if the application stores it in Supabase.

Do not claim that information is end-to-end encrypted or inaccessible to third parties unless this is verified.

Do not claim that medical information is collected if the public form does not request it.

Use a clear privacy notice beside the enquiry form.

The final policy should be reviewed for compliance with applicable Indian data protection and privacy requirements before publication.

Page 8: Terms and Disclaimer

Include:

Scope of services.

No visa guarantee.

No employment guarantee.

No immigration or recruitment decision-making.

Candidate choice.

Accuracy of published service information.

Appointment and service availability.

Appropriate limitations of responsibility.

Contact details for questions or complaints.

Use fair, understandable wording.

Do not include threatening or excessively broad liability waivers.

Do not suggest that a disclaimer overrides applicable law.

The final legal text should be reviewed by a qualified legal professional before publication.

8. ENQUIRY FORM — PRIMARY CONVERSION FEATURE

The enquiry form is one of the most important parts of the website.

It must be attractive, simple, mobile-friendly, and easy to complete.

The purpose is to let a candidate enquire about a medical examination and send the enquiry directly to the official Himalaya Health Care WhatsApp contact number.

Required fields

Full Name — Required.

Mobile Number — Required.

Current Location — Required.

Destination Country — Required.

Job Position / Occupation — Required.

Recruitment Agency Name — Optional.

Preferred Medical Service — Optional.

Additional Message — Optional.

Privacy Notice Acknowledgement — Required.

Example occupation options

Use a searchable select field or editable dropdown.

Options may include:

Driver.

Heavy Vehicle Driver.

Light Vehicle Driver.

Warehouse Worker.

General Worker.

Construction Worker.

Technician.

Electrician.

Welder.

Healthcare Worker.

Hospitality Worker.

Engineer.

Other.

Allow the user to select "Other" and enter a job title.

These are examples and must remain editable.

Current location

Allow candidates to enter their current city, state, or country.

Do not request their precise GPS location.

Destination country

Use a searchable country selector.

Do not automatically imply that every destination is served.

Recruitment agency name

This field must be optional.

Never block submission because the user does not know their agency name or does not wish to provide it.

Medical service

Provide options such as:

Blood Test.

Pre-Employment Medical Examination.

Pre-Travel Medical Examination.

Destination-Specific Medical Examination.

Other.

Not Sure — Need Guidance.

Make the options configurable to match actual services.

Form validation

Implement:

Client-side validation using Zod.

Server-side validation using Zod.

Required-field validation.

Reasonable mobile-number validation.

Input length limits.

Protection against malicious input.

Accessible error messages.

Loading states.

Submission success and failure messages.

Spam protection and rate limiting.

Do not request passport numbers, passport scans, medical reports, diagnoses, or other sensitive medical details in the initial public enquiry form.

Collect only the minimum information necessary to respond to the enquiry.

9. WHATSAPP INTEGRATION — CRITICAL FUNCTIONAL REQUIREMENT

The candidate must be able to submit the enquiry and send the enquiry details directly to the official Himalaya Health Care WhatsApp number.

The website administrator will supply the official WhatsApp number later.

Create an environment variable:

NEXT_PUBLIC_WHATSAPP_NUMBER=

Store the number in international format using digits only, including the country code, without spaces or the plus symbol.

Do not invent a phone number.

Recommended submission flow

The candidate completes the enquiry form.

The application validates all required fields.

The candidate acknowledges the privacy notice.

The website creates a properly encoded WhatsApp message from the submitted enquiry.

The website opens the official WhatsApp contact using the wa.me URL format.

The candidate sees a prefilled message and can send it to Himalaya Health Care.

The website displays clear instructions explaining that the candidate must press Send in WhatsApp to complete the message delivery.

WhatsApp message template

Generate a readable message in this format:

New Medical Examination Enquiry — Himalaya Health Care

Full Name: [Candidate Name]

Mobile Number: [Candidate Mobile]

Current Location: [Candidate Location]

Destination Country: [Destination Country]

Job Position: [Selected Occupation]

Recruitment Agency: [Agency Name or Not Provided]

Preferred Medical Service: [Selected Service]

Additional Message: [Message or Not Provided]

Source: Himalaya Health Care Website

Implementation requirements

Use encodeURIComponent or equivalent safe URL encoding.

Build the wa.me URL correctly.

Do not place the candidate's personal information into an unvalidated URL.

Validate and normalize the official WhatsApp number.

Do not hardcode a fabricated phone number.

Handle missing WhatsApp configuration gracefully.

Show a clear message if the WhatsApp contact number has not been configured.

Prevent accidental repeated submissions.

Ensure the form works on mobile devices and desktop browsers.

Important limitation

Opening a WhatsApp link does not automatically deliver a message.

The candidate must press Send in WhatsApp.

Do not display a false success message suggesting that the enquiry has already reached the business when only the WhatsApp application has opened.

Optional direct delivery architecture

Design the application so that genuine automatic WhatsApp delivery can be added later using the official WhatsApp Business Platform or a properly configured business messaging provider.

If direct delivery is implemented:

Use server-side credentials only.

Never expose access tokens in frontend code.

Use a secure Next.js Route Handler or Supabase Edge Function.

Validate the candidate's consent and the intended message.

Handle provider errors.

Record delivery status only when confirmed by the provider.

Avoid unnecessary storage of candidate data.

Do not use unofficial WhatsApp automation or browser scraping.

For the initial version, prioritize the simple click-to-WhatsApp workflow.

10. ENQUIRY DATA AND SUPABASE DATABASE

Design the database so the website can be extended in the future.

Create a PostgreSQL table named:

medical_enquiries

Suggested columns:

id: UUID primary key.

full_name: text.

mobile_number: text.

current_location: text.

destination_country: text.

job_position: text.

agency_name: nullable text.

preferred_service: nullable text.

additional_message: nullable text.

privacy_notice_version: text.

privacy_acknowledged_at: timestamp.

enquiry_source: text.

created_at: timestamp with time zone.

updated_at: timestamp with time zone, if required.

Do not store medical diagnoses, passport information, or unnecessary sensitive information in this table.

Database access and security

Enable Row Level Security.

Do not expose the service-role key.

Do not allow anonymous users to read enquiry records.

Do not expose the enquiry table through unrestricted public queries.

Use a server-side submission endpoint if database persistence is enabled.

Validate all submitted fields on the server.

Apply rate limiting and anti-spam protections.

Restrict administrative access to authorised users.

Use Supabase Auth for protected administrative functionality.

Avoid unnecessary data retention.

If the initial version uses WhatsApp-only enquiries without saving data to the database, do not persist candidate information merely because a database exists.

Clearly separate WhatsApp message generation from optional database persistence.

Optional administrative dashboard

Prepare an extensible architecture for a future protected dashboard where authorised staff can:

View enquiries.

Filter by destination country.

Filter by job position.

Search by candidate name.

View enquiry timestamps.

Update enquiry status.

Export authorised records where appropriate.

Do not expose this dashboard publicly.

Only implement database-backed administrative functions when their authentication, authorisation, and security rules are correctly configured.

11. MEDICAL SERVICES SECTION DESIGN

Create a visually polished service section using cards with consistent spacing.

Each card should include:

A relevant photograph or Lucide icon.

Service name.

Two-line description.

Subtle hover animation.

Learn More link.

Enquire Now button.

Example copy:

Blood Tests and Laboratory Investigations

Medical laboratory testing services for individuals who require relevant blood investigations as part of an applicable medical examination.

Availability depends on the tests offered by the centre and the requirements of the individual's examination.

Pre-Employment Medical Examinations

Medical assessment services for individuals preparing for overseas employment or other employment-related medical requirements, subject to the centre's actual service scope.

Pre-Travel Medical Examinations

Medical examination services for individuals preparing for international travel where a medical assessment is required or appropriate.

Destination-Specific Medical Examinations

Enquire about medical examinations relevant to your destination and intended application.

Requirements can differ by destination, employer, visa category, and responsible authority.

General Medical Assessments

Enquire about available medical assessment services and whether they are suitable for your requirements.

Do not publish a list of tests, clinical procedures, or diagnostic capabilities unless the business confirms that they are available.

12. ANIMATIONS AND INTERACTIONS

Make the website visually engaging without compromising medical professionalism.

Header

Sticky header with a subtle background transition when scrolling.

Smooth navigation.

Animated mobile menu.

Refined hover states.

Hero

Crossfading medical background images.

Gentle image zoom.

Subtle entrance animation for headings.

Staggered appearance of supporting text and buttons.

Glassmorphism content panel.

Service cards

Gentle lift on hover.

Subtle shadow transition.

Slight icon movement.

Smooth border-colour transition.

Buttons

Smooth colour transition.

Subtle hover elevation.

Clear focus indicators.

Pressed and disabled states.

Page sections

Subtle reveal-on-scroll effects.

Avoid excessive movement.

Respect prefers-reduced-motion.

Do not hide essential information until animations complete.

FAQ

Smooth accordion transitions.

Keyboard accessibility.

Clear open and closed states.

Enquiry form

Clear focus states.

Animated but restrained validation feedback.

Loading indicator during processing.

Success and error states.

Use animations consistently.

Avoid:

Flashing elements.

Constantly moving backgrounds.

Excessive parallax.

Distracting cursor effects.

Unnecessary animation libraries.

Motion that interferes with form completion or reading.

13. SEO STRATEGY — HIGH PRIORITY

Build the website with strong technical SEO and high-quality healthcare-related content.

The objective is to help relevant users discover Himalaya Health Care through organic search.

Important: Do not promise first-page rankings, first position on Google, or guaranteed search traffic. SEO performance depends on competition, location, content quality, technical performance, authority, and other factors.

Primary keyword themes

Use relevant keywords naturally in page titles, headings, descriptions, page content, internal links, and image alt text.

Core keywords:

Pre-medical examination centre.

International medical examination centre.

Overseas medical check-up.

Medical examination for overseas employment.

Pre-employment medical examination.

Blood test services.

Medical check-up before travelling abroad.

Overseas employment medical test.

International travel medical examination.

Diagnostic medical services.

Medical testing centre.

Pre-travel health assessment.

Destination-related keyword themes

Use only for destinations actually served.

Examples:

Medical examination for Saudi Arabia.

Overseas employment medical test for Saudi Arabia.

Medical check-up for UAE employment.

Medical examination for Qatar employment.

Medical test for Kuwait employment.

Medical examination for Oman employment.

Medical test for Bahrain employment.

Do not create misleading pages for countries the centre does not serve.

Do not claim official acceptance by a government, embassy, employer, or accreditation body without verification.

Local SEO

The business location has not yet been supplied.

Create editable placeholders for:

Business address.

City.

State.

Country.

Business phone number.

Contact email.

Business hours.

Once the business location is verified:

Add location-specific metadata.

Create useful local landing pages where appropriate.

Configure a correct LocalBusiness or MedicalClinic structured-data type if supported by the actual business.

Add consistent contact details across the website.

Link to the genuine business profile where available.

Do not invent an address or publish inaccurate local business information.

Technical SEO requirements

Implement:

Unique title tags for every page.

Unique meta descriptions.

Canonical URLs.

Semantic HTML.

One clear primary H1 per page.

Logical H2 and H3 hierarchy.

Open Graph metadata.

Social sharing metadata.

robots.txt.

XML sitemap.

Descriptive image alt text.

Clean, readable URLs.

Internal links between related services.

Breadcrumbs where useful.

Correct redirects if URLs change.

Proper 404 page.

Google Search Console readiness.

Google Analytics integration only when configured appropriately.

Search-engine crawlability.

Server-rendered content for important page text.

Optimized images.

Fast page loading.

Mobile-first layouts.

Structured data

Implement appropriate JSON-LD structured data only when the information is accurate and eligible.

Potential types include:

Organization.

MedicalClinic, if appropriate for the actual business.

LocalBusiness, if appropriate.

WebSite.

BreadcrumbList.

Service.

Do not fabricate:

Reviews.

Ratings.

Doctor credentials.

Medical licences.

Registration numbers.

Accreditations.

Address information.

Opening hours.

Price ranges.

Validate the structured data before launch.

Content quality

Write original, useful, natural English content.

Avoid:

Keyword stuffing.

Duplicate destination pages.

Automatically generated low-quality landing pages.

Hidden SEO text.

Misleading medical claims.

Unverified healthcare statistics.

Guaranteed visa or employment claims.

Provide genuinely useful information for candidates researching overseas medical examinations.

The website should target search intent rather than repeat keywords unnaturally.

14. HOMEPAGE CONTENT FLOW

Use this recommended homepage order.

Announcement or contact strip, if required.

Sticky header with logo and navigation.

Animated medical hero section.

Quick trust indicators.

Introduction to Himalaya Health Care.

Medical services overview.

How the medical examination enquiry process works.

Destination cards for confirmed destinations.

Why Choose Himalaya Health Care.

Candidate choice and transparency statement.

Frequently Asked Questions.

Prominent enquiry section.

Contact details.

Medical examination and visa disclaimer.

Privacy Policy and Terms links.

Professional footer.

How it works

Display three simple steps:

Step 1: Submit an Enquiry

Share your basic contact details, destination, occupation, and preferred medical service.

Step 2: Discuss Your Requirements

Contact the centre to clarify available medical services, appointment availability, and relevant examination requirements.

Step 3: Confirm Your Appointment

Proceed only after confirming the applicable service details, charges, and appointment arrangements.

Do not imply that submitting an enquiry automatically creates a confirmed appointment.

15. NAVIGATION AND FOOTER

Main navigation

Home

About Us

Medical Services

Destinations

FAQs

Contact

Primary button:

Enquire Now

Footer

Include:

Himalaya Health Care logo.

Short company description.

Quick links.

Medical Services.

Contact Information.

WhatsApp contact.

Email contact.

Privacy Policy.

Terms and Disclaimer.

Include this statement:

"Himalaya Health Care provides medical examination services only. Medical examinations do not guarantee visa approval, overseas employment, or permission to travel. Candidates should independently verify the applicable requirements for their destination."

Keep the footer professional, compact, and responsive.

16. CONTACT DETAILS AND CONFIGURATION

The following details will be supplied by the business later:

Official business name.

Logo.

WhatsApp number.

Telephone number.

Email address.

Business address.

City and state.

Business hours.

Confirmed medical services.

Confirmed destination countries.

Applicable registration and professional credentials, if any.

Create a central configuration file so these values can be updated easily without editing multiple components.

Use clear placeholders in development.

Do not display placeholder contact information as if it were real.

If the WhatsApp number or email address is not configured, hide the corresponding contact action or show an appropriate configuration message.

Never invent business details.

17. ACCESSIBILITY AND RESPONSIVE DESIGN

The entire website must work on:

Mobile phones.

Tablets.

Laptops.

Desktop screens.

Requirements:

Mobile-first design.

Responsive image handling.

Readable font sizes.

Accessible colour contrast.

Keyboard navigation.

Visible focus indicators.

Semantic HTML.

Proper labels for form controls.

Screen-reader-friendly validation messages.

Accessible accordion interactions.

Meaningful image alt text.

Reduced-motion support.

Sufficient touch-target sizes.

The enquiry form must be particularly easy to use on mobile devices.

18. PERFORMANCE AND SECURITY

Performance

Use Next.js Image where appropriate.

Optimize hero images.

Lazy-load non-critical images.

Avoid unnecessary JavaScript.

Avoid large blocking animations.

Minimize layout shifts.

Use server components wherever possible.

Keep client components limited to interactive elements.

Optimize font loading.

Aim for strong Core Web Vitals.

Security

Validate all input on the server.

Escape and encode user-provided values appropriately.

Apply rate limiting.

Implement spam protection.

Keep API keys secret.

Use least-privilege database permissions.

Protect administrative routes.

Do not publicly expose candidate records.

Do not collect unnecessary sensitive information.

Use HTTPS in production.

Configure secure headers where appropriate.

Avoid logging candidate personal information unnecessarily.

Privacy

The public enquiry form should not request medical reports, passport numbers, or diagnoses.

If additional sensitive information is required in a future workflow, design a separate secure process with appropriate access controls and privacy safeguards.

Do not use public storage buckets for confidential documents or medical reports.

19. REQUIRED ENVIRONMENT VARIABLES

Prepare an appropriate environment configuration.

Examples:

NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_CONTACT_PHONE=
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_BUSINESS_ADDRESS=
NEXT_PUBLIC_BUSINESS_CITY=
NEXT_PUBLIC_BUSINESS_STATE=

SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

Use the environment variable names that are appropriate for the selected Supabase SDK and deployment configuration.

Do not expose secret keys through NEXT_PUBLIC variables.

The Supabase service-role key must only be used in trusted server-side code and only when required.

Document all required environment variables in an example environment file without including real secrets.

20. PROJECT FILE STRUCTURE

Use a clean and maintainable structure similar to:

app/
layout.tsx
page.tsx
globals.css
about/
page.tsx
services/
page.tsx
destinations/
page.tsx
faq/
page.tsx
contact/
page.tsx
privacy-policy/
page.tsx
terms/
page.tsx
api/
enquiries/
route.ts

components/
layout/
Header.tsx
Footer.tsx
MobileNavigation.tsx
home/
HeroSection.tsx
MedicalBackgroundSlider.tsx
ServicesSection.tsx
DestinationsSection.tsx
HowItWorks.tsx
TrustSection.tsx
FAQSection.tsx
enquiry/
EnquiryForm.tsx
WhatsAppCTA.tsx
ui/

lib/
config.ts
validation.ts
whatsapp.ts
supabase/
client.ts
server.ts

types/
enquiry.ts

public/
images/
medical/

This structure is a recommendation. Adjust it where needed to follow Next.js 15 conventions and maintain a clean architecture.

Do not duplicate business logic across components.

21. FINAL QUALITY CHECKLIST

Before considering the website complete, verify the following.

Design

The website looks like a premium medical centre.

The colour palette is consistent.

The logo is replaceable.

The hero background slideshow works.

Glassmorphism is restrained and readable.

Hover states are polished.

Mobile navigation works.

Responsive layouts are complete.

Content

All pages contain clear, original content.

No fabricated credentials or statistics appear.

No visa guarantees are present.

Candidate choice is respected.

The scope of medical services is clear.

Legal disclaimers are consistent throughout the site.

Enquiry

Every required field is validated.

The agency field is optional.

The WhatsApp message is encoded correctly.

The official number is configurable.

Submission errors are handled gracefully.

The candidate understands that they must press Send in WhatsApp.

No false delivery confirmation is shown.

Database

Supabase integration is configured correctly if enabled.

Row Level Security is enabled.

Public users cannot read enquiry records.

Server-side validation is implemented.

Sensitive keys are not exposed.

Administrative access is protected.

SEO

Every page has appropriate metadata.

XML sitemap and robots.txt are present.

Important content is crawlable.

Images are optimized.

Structured data is accurate.

No fabricated location or accreditation claims appear.

Mobile usability is verified.

Legal and privacy

Privacy Policy is available.

Terms and Disclaimer are available.

Consent wording is clear.

Personal data collection is minimized.

WhatsApp functionality is described accurately.

The published privacy policy matches actual data handling.

Final delivery

Deliver a complete, polished, responsive website with reusable components, a consistent design system, functional forms, clear configuration instructions, and an architecture that can be extended safely.

Do not stop after generating the homepage.

Build all requested pages and shared components.

Do not substitute mock functionality for real functionality without identifying what remains to be configured.

Where actual business details or credentials are unavailable, use clearly identified placeholders and explain what must be supplied before launch.

The final result should feel like a credible international medical examination centre website: modern, calm, trustworthy, visually attractive, legally transparent, privacy-conscious, and optimized for relevant organic search traffic.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4abd2497-dfae-4f9f-b661-8ff78879c36e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
