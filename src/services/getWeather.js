import { getCurrentWeather } from "./getCurrentWeather";
import { getWeatherForecast } from "./getWeatherForecast";

export async function getWeather(city) {
	const weather = await getCurrentWeather(city);
	const forecast = await getWeatherForecast(city);
	return [weather, forecast];
}