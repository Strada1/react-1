import { format } from "date-fns"

export function converHours (number) {
	return format((new Date(number * 1000)), "H':'mm")
}