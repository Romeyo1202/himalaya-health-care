import { openingHoursSpecification } from "./business-hours";
import { siteConfig } from "./site-config";

export function pageHead(path: string, title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}

export function breadcrumbLd(name: string, path: string) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name, item: path },
      ],
    }),
  };
}

/** MedicalClinic structured data built only from the configured contact details. */
export function localBusinessLd() {
  const address = {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address || undefined,
    addressLocality: siteConfig.city || undefined,
    addressRegion: siteConfig.state || undefined,
    addressCountry: siteConfig.country || undefined,
  };
  const hours = openingHoursSpecification(siteConfig.hours);
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      name: siteConfig.name,
      description: siteConfig.tagline,
      telephone: siteConfig.phone || undefined,
      email: siteConfig.email || undefined,
      url: siteConfig.siteUrl || undefined,
      address: Object.values(address).some(Boolean) ? address : undefined,
      openingHoursSpecification: hours.length ? hours : undefined,
    }),
  };
}
