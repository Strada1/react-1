import {ValidationError} from './validationError.js'
import { processingTime } from './processingTime.js';

async function loadWeather(url) {
    try {
      let response = await fetch(url);
      let json = await response.json();
  
      if (response.status === 400 || response.status === 404) {
        throw new ValidationError("отсутствует название города");
      }
      const sunriseTime = processingTime(json.sys.sunrise, json.timezone);
      const sunsetTime = processingTime(json.sys.sunset, json.timezone);
  
      return {
        degrees: Math.round(json.main.temp),
        degreesFeelsLike: Math.round(json.main.feels_like),
        icon: json.weather[0].icon,
        forecastCity: json.name,
        sunrise: sunriseTime,
        sunset: sunsetTime,
        detailsWeather: json.weather[0].main,
      };
    } catch (err) {
      if (err instanceof ValidationError) {
        alert("Данные введены некорректно:" + err.message);
      } else {
        alert(err);
      }
    }
  }

  export {loadWeather}