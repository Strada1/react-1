import { fetchJson } from "./fetchJson";
import { getIconUrl, DATA_TYPE } from './url';
import { getTime } from "../convertTimestamp";

export async function getCurrentWeather(cityName) {
	const {
		name,
		sys: { sunrise, sunset },
		main: { temp, feels_like },
		weather: [{ icon, main }]
	} = await fetchJson(cityName, DATA_TYPE.WEATHER);

	const weather = {
		city: name,
		sunriseTime: getTime(sunrise),
		sunsetTime: getTime(sunset),
		temp: Math.round(temp),
		feelsLikeTemp: Math.round(feels_like),
		iconURL: getIconUrl(icon),
		weatherType: main
	}

	return weather;
}