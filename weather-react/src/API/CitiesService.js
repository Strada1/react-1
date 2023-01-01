const SERVER_URL = 'http://api.openweathermap.org/data/2.5/';
const SERVICE = {
  WEATHER: 'weather',
  FORECAST: 'forecast'
};
const INTERVALS_COUNT = 24;
const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';
const UNITS = 'metric';

export default class CitiesService {
  static async getWeatherByCityName(city) {
    const url = `${SERVER_URL}${SERVICE.WEATHER}?q=${city}&appid=${API_KEY}&units=${UNITS}`;
    return await CitiesService.getFetching(url);
  }

  static async getForecastByCityName(city) {
    const url = `${SERVER_URL}${SERVICE.FORECAST}?q=${city}&appid=${API_KEY}&units=${UNITS}&cnt=${INTERVALS_COUNT}`;
    return await CitiesService.getFetching(url);
  }

  static async getFetching(url) {
    const response = await fetch(url);
    return response;
  }
}
