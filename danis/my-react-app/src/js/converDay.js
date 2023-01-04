import {format} from 'date-fns'

export function formatDay (number) {
	return format((new Date(number * 1000)), "dd LLLL")
}