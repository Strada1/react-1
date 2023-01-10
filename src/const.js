const SERVER = {
  URL: 'http://api.openweathermap.org/data/2.5/weather',
  FORECAST_URL: 'http://api.openweathermap.org/data/2.5/forecast',
  IMG_URL: 'http://openweathermap.org/img/wn/',
  API_KEY: 'bf9941d6c63825e3c8b53a684f152d7b',
};

const defaultCity = 'Kazan';

const defaultWeather = {
  city: '',
  temp: '',
  feels: '',
  icon: '',
  weather: '',
  sunrise: '',
  sunset: '',
};

const defaultForecastWeather = {
  city: '',
  list: [],
};

export {
  SERVER, defaultCity, defaultForecastWeather, defaultWeather,
};
