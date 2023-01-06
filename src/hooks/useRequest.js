import {
  getConvertDate,
  getConvertTime,
  getImageLink,
} from '../services/helpers';
import { useHttp } from './useHttp';

const useRequests = () => {
  const CURRENT_WEATHER = 'http://api.openweathermap.org/data/2.5/weather';

  const FORECAST_WEATHER = 'http://api.openweathermap.org/data/2.5/forecast';

  const API_KEY = '358eaa62b262b36cac42f77b107308e8';

  const { request, error, setError } = useHttp();

  const transformWeather = (city) => ({
    id: city.id,
    name: city.name,
    temperature: `${Math.trunc(city.main.temp)}°`,
    image: getImageLink(city.weather[0].icon),
    feelsLike: city.main.feels_like,
    weather: city.weather[0].main,
    sunrise: getConvertTime(city.sys.sunrise),
    sunset: getConvertTime(city.sys.sunset),
  });

  const getCityWeather = async (cityName) => {
    const res = await request(
      `${CURRENT_WEATHER}?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    return transformWeather(res);
  };

  const transformForecastTime = (time) => ({
    day: getConvertDate(time.dt),
    hours: getConvertTime(time.dt),
    temperature: `${Math.trunc(time.main.temp)}°`,
    feelsLike: `${Math.trunc(time.main.feels_like)}°`,
    imageText: time.weather[0].main,
    imageSrc: getImageLink(time.weather[0].icon),
  });

  const transformForecast = (city) => [
    { timeDifference: transformForecastTime(city.list[0]) },
    { timeDifference: transformForecastTime(city.list[6]) },
    { timeDifference: transformForecastTime(city.list[12]) },
  ];

  const getCityForecast = async (cityName) => {
    const res = await request(
      `${FORECAST_WEATHER}?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    return transformForecast(res);
  };

  return {
    getCityForecast,
    getCityWeather,
    error,
    setError,
  };
};

export default useRequests;
