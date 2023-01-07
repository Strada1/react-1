import { DATA_TYPE } from "./url";
import { fetchJson } from "./fetchJson";
import { getIconUrl } from './url';
import { getDay, getTime } from "../convertTimestamp";

export async function getWeatherForecast(cityName) {
	const { list } = await fetchJson(cityName, DATA_TYPE.FORECAST);
	const forecast = [];
	let id = 0;

	list.forEach(item => {
		const { dt, main: { temp, feels_like }, weather: [{ main, icon }] } = item;

		const forecastItem = {
			day: getDay(dt),
			time: getTime(dt),
			temp: Math.round(temp),
			feelsLikeTemp: Math.round(feels_like),
			weatherType: main,
			iconURL: getIconUrl(icon),
			id
		};

		forecast.push(forecastItem);
		id++
	});

	return forecast;
}