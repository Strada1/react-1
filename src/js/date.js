const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'November',
	'December',
];

export function calcTime(time) {
	const convertTime = new Date(time * 1000);
	let hours = convertTime.getHours();

	if (hours < 10) {
		hours = '0' + hours;
	}

	let minutes = convertTime.getMonth();

	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	return `${hours}:${minutes}`;
}

export function getConvertDate(time) {
	const convertTime = new Date(time * 1000);
	let date = convertTime.getDate();

	if (date < 10) {
		date = '0' + date;
	}

	let month = convertTime.getMonth();

	return `${date} ${months[month]}`;
}

export function calcTimeSun(time) {
	const result = new Date(time * 1000);

	return result.toLocaleTimeString();
}
