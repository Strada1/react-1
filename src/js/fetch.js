const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '7241b7709d450b31ffd537fc2363b110';

export async function getCityWeather(cityName) {
	try {
		const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
		const data = await fetch(url);
		const city = await data.json();

		return city;
	} catch (error) {
		alert(error.name, error.message);
	}
}

export async function getCityForecast(cityName) {
	const forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast';

	try {
		const url = `${forecastUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
		const data = await fetch(url);

		return data.json();
	} catch (error) {
		alert(error.name, error.message);
	}
}
