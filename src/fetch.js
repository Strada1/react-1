import { defaultForecastWeather, defaultWeather, SERVER } from './const';
import { formatTime } from './time';

async function getWeather(cityName) {
  try {
    const url = `${SERVER.URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;
    const responce = await fetch(url);
    const weather = await responce.json();
    const weatherObject = {
      city: weather.name,
      temp: weather.main.temp.toFixed(0),
      feels: weather.main.feels_like.toFixed(0),
      icon: `${SERVER.IMG_URL}${weather.weather[0].icon}@2x.png`,
      weather: weather.weather[0].main,
      sunrise: formatTime(weather.sys.sunrise),
      sunset: formatTime(weather.sys.sunset),
    };
    return weatherObject;
  } catch (error) {
    return defaultWeather;
  }
}

async function getForecastWeather(cityName) {
  try {
    const url = `${SERVER.FORECAST_URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;
    const responce = await fetch(url);
    const weather = await responce.json();
    const weatherObject = {
      city: weather.city.name,
      list: weather.list,
    };
    return weatherObject;
  } catch (error) {
    return defaultForecastWeather;
  }
}

export { getWeather, getForecastWeather };
