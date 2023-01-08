import { format } from 'date-fns';

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

function CityForecast(forecast) {
    this.name = forecast.name;
    this.temperature = forecast.main?.temp;
    this.feelsLike = forecast.main?.feels_like;
    this.description = forecast.weather[0]?.description;
    this.sunrise = forecast.sys?.sunrise;
    this.sunset = forecast.sys?.sunset;
}

function getWeather(city) {
    const url = `${serverUrl}?q=${city}&appid=${apiKey}&units=metric`;
    return fetch(url)
        .then(response => {
            if (response.status === 404) {
                throw new Error('Cannot find city: ' + city);
            }
            return response.json();
        })
        .then(json => {
            return new Promise((res, rej) => {
                res(new CityForecast(json))
            })
        });
}

function timestampToString(timestamp) {
    return format(new Date(timestamp * 1000), "HH:mm");
}

function toCelsius(temperature) {
    return Math.round(temperature) + '°';
}

export { CityForecast, getWeather, timestampToString, toCelsius };