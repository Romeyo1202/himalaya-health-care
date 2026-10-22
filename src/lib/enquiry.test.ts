import { describe, expect, it } from "vitest";
import { buildWhatsAppMessage, buildWhatsAppUrl, enquirySchema, normalizeWhatsAppNumber } from "./enquiry";

const base = {
  fullName: "Ravi Kumar",
  mobileNumber: "+91 98765 43210",
  currentLocation: "Patna, Bihar",
  destinationCountry: "Qatar",
  jobPosition: "Driver",
  privacyAcknowledged: true as const,
};

describe("enquiry rules", () => {
  it("accepts a submission without agency name", () => {
    expect(enquirySchema.safeParse(base).success).toBe(true);
  });
  it("rejects missing destination country", () => {
    expect(enquirySchema.safeParse({ ...base, destinationCountry: "" }).success).toBe(false);
  });
  it("requires privacy acknowledgement", () => {
    expect(enquirySchema.safeParse({ ...base, privacyAcknowledged: false }).success).toBe(false);
  });
  it("requires a job title when Other is chosen", () => {
    expect(enquirySchema.safeParse({ ...base, jobPosition: "Other" }).success).toBe(false);
  });
  it("marks missing agency as Not Provided", () => {
    expect(buildWhatsAppMessage(base)).toContain("Recruitment Agency: Not Provided");
  });
  it("normalizes the WhatsApp number to digits", () => {
    expect(normalizeWhatsAppNumber("+91 98765-43210")).toBe("919876543210");
    expect(normalizeWhatsAppNumber("")).toBeNull();
  });
  it("encodes the message in the wa.me URL", () => {
    expect(buildWhatsAppUrl("919876543210", "A & B\nC")).toBe("https://wa.me/919876543210?text=A%20%26%20B%0AC");
  });
});
