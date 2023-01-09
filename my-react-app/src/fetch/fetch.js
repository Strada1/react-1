import { API, DEG } from '../constans/constans';

async function fetchCity(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  }
}

export async function fetchWeather(city) {
  const url = `${API.SERVER_URL}weather/?q=${city}&appid=${API.API_KEY}&units=metric`;
  return fetchCity(url).then((result) => {
    return {
      name: result.name,
      icon: `${API.API_ICON}${result.weather[0].icon}@4x.png`,
      temperature: `${Math.ceil(result.main.temp)} ${DEG}`,
      feelsLike: `${Math.ceil(result.main.feels_like)} ${DEG}`,
      weather: result.weather[0].main,
      sunrise: result.sys.sunrise,
      sunset: result.sys.sunset,
      id: result.id,
    };
  });
}

export async function fethcForecast(city) {
  const url = `${API.SERVER_URL}/forecast/?q=${city}&appid=${API.API_KEY}&units=metric`;
  fetchCity(url);
}
