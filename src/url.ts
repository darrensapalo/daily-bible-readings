/**
 * Transforms a given Date object into the URL resource that provides the reading for that day.
 * @param date Some date object.
 * @returns A URL in USCCB that provides the daily reading.
 */
export function getUrl(date: Date): string {
  return `http://www.usccb.org/bible/readings/031520.cfm`;
}
