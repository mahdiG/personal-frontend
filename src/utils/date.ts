/**
 * Convert a datetime-local input string (e.g. "2026-05-25T11:30") to
 * an ISO 8601 string with UTC timezone (e.g. "2026-05-25T08:00:00.000Z").
 *
 * The browser treats the input value as local time. Constructing a `Date`
 * from it captures that local interpretation, and `.toISOString()` converts
 * to UTC, which is what the backend expects.
 */
export function toISOStringWithTZ(datetimeLocal: string): string {
  if (!datetimeLocal) return datetimeLocal;
  return new Date(datetimeLocal).toISOString();
}

/**
 * Convert an ISO 8601 UTC string (e.g. "2026-05-25T08:00:00.000Z") to
 * the format required by a datetime-local input (e.g. "2026-05-25T11:30").
 *
 * The browser expects datetime-local values in local time without seconds
 * or timezone suffix. Passing a raw ISO string would be rejected by the
 * input, resulting in an empty display.
 */
export function isoStringToDatetimeLocal(
  isoString: string | undefined | null,
): string {
  if (!isoString) return "";
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function formatDate(isoDate: Date): string {
  const date = new Date(isoDate);

  const now = new Date();
  const isThisYear = date.getFullYear() === now.getFullYear();

  const options: Intl.DateTimeFormatOptions = {
    hour12: false,
    year: isThisYear ? undefined : "numeric",
    month: isThisYear ? "short" : "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleDateString("en-ca", options);
}
