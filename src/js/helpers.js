export const calcTimeSun = time => {
	const result = new Date(time * 1000);
	return result.toLocaleTimeString();
};
