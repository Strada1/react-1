const SERVER_URL = 'https://api.genderize.io';

export async function fetchData(name) {
	const url = `${SERVER_URL}?name=${name}`;

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(ERROR_MESSAGE);
		}

		const body = await response.json();
		return body;
	} catch (e) {
		alert(e.message)
	};
};