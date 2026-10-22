import type { ReactNode } from "react";

/** A decorative, section-contained sticky layer; foreground stays in normal flow. */
export function MedicalPhotoSection({
  children, image, mobileImage, tone = "sky", label,
}: {
  children: ReactNode;
  image: string;
  mobileImage: string;
  tone?: "sky" | "white";
  label: string;
}) {
  return (
    <section aria-label={label} className={`medical-photo-section medical-photo-section--${tone}`}>
      <div className="medical-photo-layer" aria-hidden="true">
        <picture>
          <source media="(max-width: 767px)" srcSet={mobileImage} />
          <img src={image} alt="" width={1536} height={1024} loading="lazy" decoding="async" />
        </picture>
      </div>
      <div className="medical-photo-content">{children}</div>
    </section>
  );
}