import { describe, expect, it } from "vitest";
import { openingHoursSpecification, parseHoursLine, splitHoursLines } from "./business-hours";

const REAL_HOURS = "Mon - Sat: 9:30 AM - 4:00 PM|Sunday: 9:30 AM - 2:00 PM";

describe("business hours", () => {
  it("splits the written lines for display", () => {
    expect(splitHoursLines(REAL_HOURS)).toEqual(["Mon - Sat: 9:30 AM - 4:00 PM", "Sunday: 9:30 AM - 2:00 PM"]);
  });

  it("reads a weekday range and 24-hour times", () => {
    expect(parseHoursLine("Mon - Sat: 9:30 AM - 4:00 PM")).toEqual({
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "16:00",
    });
  });

  it("reads a single day with a short time", () => {
    expect(parseHoursLine("Sunday: 9:30 AM - 2 PM")).toEqual({
      days: ["Sunday"],
      opens: "09:30",
      closes: "14:00",
    });
  });

  it("publishes structured hours covering the week the centre wrote", () => {
    const spec = openingHoursSpecification(REAL_HOURS);
    expect(spec).toHaveLength(2);
    expect(spec[0]).toMatchObject({ opens: "09:30", closes: "16:00" });
    const days = spec.flatMap((s) => s.dayOfWeek);
    expect(days).toHaveLength(7);
    expect(days).toContain("Sunday");
  });

  it("publishes nothing when a line cannot be read, rather than a partial week", () => {
    expect(openingHoursSpecification("Mon - Sat: 9:30 AM - 4:00 PM|Sunday: by appointment")).toEqual([]);
    expect(openingHoursSpecification("")).toEqual([]);
  });

  it("refuses an ambiguous single-digit time with no am or pm", () => {
    expect(parseHoursLine("Mon: 9:30 - 4:00")).toBeNull();
    expect(parseHoursLine("Mon: 09:30 - 16:00")).toMatchObject({ opens: "09:30", closes: "16:00" });
  });
});
