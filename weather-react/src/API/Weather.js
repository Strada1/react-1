const WEATHER_ICON_URL = 'https://openweathermap.org/img/wn/';
const WEATHER_ICON_RESOLUTION = '4x';
const WEATHER_ICON_EXTENSION = 'png';

export default class Weather {
  constructor (data) {
    this.name = data.name;
    this.temperature = Math.round(data.main.temp);
    this.feelsLike = Math.round(data.main.feels_like);
    this.description = data.weather[0].description;
    this.title = data.weather[0].main;
    this.sunrise = data.sys.sunrise;
    this.sunset = data.sys.sunset;
    this.iconSource = `${WEATHER_ICON_URL}${data.weather[0].icon}@${WEATHER_ICON_RESOLUTION}.${WEATHER_ICON_EXTENSION}`;
    this.date = data.dt;
  }
}
