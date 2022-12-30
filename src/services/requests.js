import { getConvertDate, getConvertTime, getImageLink } from './helpers';

class WeatherRequests {
  CURRENT_WEATHER = 'http://api.openweathermap.org/data/2.5/weather';

  FORECAST_WEATHER = 'http://api.openweathermap.org/data/2.5/forecast';

  API_KEY = '358eaa62b262b36cac42f77b107308e8';

  getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`status:${res.status}`);
    }
    return res.json();
  };

  transformWeather = (city) => ({
    id: city.id,
    name: city.name,
    temperature: `${Math.trunc(city.main.temp)}°`,
    image: getImageLink(city.weather[0].icon),
    feelsLike: city.main.feels_like,
    weather: city.weather[0].main,
    sunrise: getConvertTime(city.sys.sunrise),
    sunset: getConvertTime(city.sys.sunset),
  });

  async getCityWeather(cityName) {
    try {
      const res = await this.getResource(
        `${this.CURRENT_WEATHER}?q=${cityName}&appid=${this.API_KEY}&units=metric`
      );
      console.log(res);
      return this.transformWeather(res);
    } catch (error) {
      throw new Error(`status:${error.message}`);
    }
  }

  transformForecastTime = (time) => ({
    day: getConvertDate(time.dt),
    hours: getConvertTime(time.dt),
    temperature: `${Math.trunc(time.main.temp)}°`,
    feelsLike: `${Math.trunc(time.main.feels_like)}°`,
    imageText: time.weather[0].main,
    imageSrc: getImageLink(time.weather[0].icon),
  });

  transformForecast = (city) => [
    { timeDifference: this.transformForecastTime(city.list[0]) },
    { timeDifference: this.transformForecastTime(city.list[6]) },
    { timeDifference: this.transformForecastTime(city.list[12]) },
  ];

  async getCityForecast(cityName) {
    try {
      const res = await this.getResource(
        `${this.FORECAST_WEATHER}?q=${cityName}&appid=${this.API_KEY}&units=metric`
      );

      console.log(res);
      return this.transformForecast(res);
    } catch (error) {
      throw new Error(`status:${error.message}`);
    }
  }
}

export default WeatherRequests;
