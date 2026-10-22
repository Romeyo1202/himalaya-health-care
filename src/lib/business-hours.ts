/**
 * Opening hours are written by the business in VITE_BUSINESS_HOURS, with "|"
 * separating lines, e.g. "Mon - Sat: 9:30 AM - 4:00 PM|Sunday: 9:30 AM - 2:00 PM".
 * These helpers split them for display and convert them into schema.org
 * openingHoursSpecification entries. A line that cannot be read with certainty
 * is not converted, so the site never publishes guessed or partial hours.
 */

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;
export type Weekday = (typeof DAYS)[number];

export interface HoursRange {
  days: Weekday[];
  opens: string;
  closes: string;
}

/** Split the raw env value into the lines the centre wrote. */
export function splitHoursLines(raw: string): string[] {
  return raw
    .split(/[|\n;]+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function dayFromToken(token: string): Weekday | null {
  const key = token.toLowerCase().replace(/[^a-z]/g, "");
  if (!key) return null;
  const matches = DAYS.filter((d) => d.toLowerCase().startsWith(key));
  return matches.length === 1 ? matches[0] ?? null : null;
}

function daysFromRange(start: Weekday, end: Weekday): Weekday[] {
  const first = DAYS.indexOf(start);
  const last = DAYS.indexOf(end);
  const span = last >= first ? last - first : DAYS.length - first + last;
  const days: Weekday[] = [];
  for (let i = 0; i <= span; i += 1) {
    const day = DAYS[(first + i) % DAYS.length];
    if (day) days.push(day);
  }
  return days;
}

function parseDays(part: string): Weekday[] | null {
  const text = part.trim();
  if (/^(daily|every\s*day|all\s*days)$/i.test(text)) return [...DAYS];

  const range = text.match(/^(.+?)\s*(?:-|–|to)\s*(.+)$/i);
  if (range) {
    const from = dayFromToken(range[1] ?? "");
    const to = dayFromToken(range[2] ?? "");
    if (from && to) return daysFromRange(from, to);
  }

  const listed = text
    .split(/[,/]|(?:\sand\s)/i)
    .map(dayFromToken)
    .filter((d): d is Weekday => Boolean(d));
  return listed.length ? [...new Set(listed)] : null;
}

/** "9:30 AM" -> "09:30", "4:00 PM" -> "16:00", "09:30" -> "09:30". */
function to24(raw: string): string | null {
  const m = raw.trim().toLowerCase().match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)?$/);
  if (!m) return null;
  const hourText = m[1] ?? "";
  const minuteText = m[2] ?? "";
  const meridiem = m[3] ?? "";
  // A single-digit hour with no am/pm is ambiguous, so it is not converted.
  if (!meridiem && hourText.length < 2) return null;
  let hour = Number(hourText);
  const minute = minuteText ? Number(minuteText) : 0;
  if (meridiem === "pm" && hour !== 12) hour += 12;
  if (meridiem === "am" && hour === 12) hour = 0;
  if (hour > 23 || minute > 59) return null;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

/** Parse one line such as "Mon - Sat: 9:30 AM - 4:00 PM". */
export function parseHoursLine(line: string): HoursRange | null {
  const cut = line.indexOf(":");
  if (cut === -1) return null;
  const days = parseDays(line.slice(0, cut));
  if (!days) return null;
  const times = line
    .slice(cut + 1)
    .split(/\s*(?:-|–|—|to)\s*/i)
    .map((t) => t.trim())
    .filter(Boolean);
  if (times.length !== 2) return null;
  const opens = to24(times[0] ?? "");
  const closes = to24(times[1] ?? "");
  if (!opens || !closes) return null;
  return { days, opens, closes };
}

/**
 * Schema.org opening hours, but only when every written line was understood.
 * Publishing a partial week would misstate when the centre is open.
 */
export function openingHoursSpecification(raw: string) {
  const lines = splitHoursLines(raw);
  if (!lines.length) return [];
  const ranges = lines.map(parseHoursLine);
  if (ranges.some((r) => !r)) return [];
  return ranges.map((r) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: r?.days ?? [],
    opens: r?.opens ?? "",
    closes: r?.closes ?? "",
  }));
}
