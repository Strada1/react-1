import { getUrl } from "./url";

export async function fetchJson(cityName, dataType) {
	const url = getUrl(cityName, dataType);

	try {
		const response = await fetch(url);

		if(!response.ok) {
			throw new Error('Fetching error')
		}

		const body = await response.json();
		return body;

	} catch(e) {
		alert(e.message);
	}
}