<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Homepage medical photography uses the isolated `MedicalPhotoSection` grid/sticky layer with optimised responsive images and existing CSS reveals; keep this treatment out of shared service components so the Services page stays unchanged.
- Business details, services, destinations, FAQs and form options live in `src/lib/site-config.ts`; contact values come from `VITE_*` env vars and empty means hidden — never hardcode invented business data.
- The enquiry form is WhatsApp click-to-chat only (no database persistence); the privacy policy describes this, so update it if storage is ever added.
- Enquiry validation and WhatsApp message/URL building live in `src/lib/enquiry.ts` with tests in `src/lib/enquiry.test.ts`.
- The brand mark is the business-supplied logo served from one file: `public/favicon.png` is both the browser tab icon and the image rendered by `src/components/site/Logo.tsx` (header and footer), with `public/apple-touch-icon.png` matching it and the high-resolution source kept at `src/assets/logo.png.asset.json`; never swap it for a generated placeholder so header, footer and browser icon stay identical.
