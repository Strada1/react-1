export async function fetchData(name) {
	const SERVER_URL = 'https://api.genderize.io';
	const url = `${SERVER_URL}?name=${name}`;

	const response = await fetch(url);
	const body = await response.json();

	return body;
};