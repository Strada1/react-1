import { format } from 'date-fns'

function formatDate (number) {
	return (new Date(number * 1000)).toLocaleTimeString()
}

function formatTime (number) {
	return format((new Date(number * 1000)), "H':'mm")
}

function formatDay (number) {
	return format((new Date(number * 1000)), "dd LLLL")
}

export {formatDate, formatTime, formatDay}