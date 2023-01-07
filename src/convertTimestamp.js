import dayjs from 'dayjs';

const SECOND = 1000;

export function getDay(seconds) {
	const timestamp = seconds * SECOND;
	const day = dayjs(timestamp).format('DD MMM');
	return day;
}

export function getTime(seconds) {
	const timestamp = seconds * SECOND;
	const time = dayjs(timestamp).format('HH:mm');
	return time;
}