import moment from "moment";

/**
 * Convert a timestamp to a calendar time
 * @param date timestamp
 * @returns calendar time
 */
export default function toCalenderTime(date: number): string {
  return moment(date * 1000).calendar();
}
