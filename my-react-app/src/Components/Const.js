import { nanoid } from 'nanoid'
export const localStorageMethods = {
    SET: 'set',
    GET: 'get',
}
export const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather'
export const forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast'
export const apiKey = '9b599321cf408e0fd605652c444f8035'
export const defaultCity = {
    id: nanoid(),
    city: 'City Name',
    degrees: 'City Temp',
    feelsLike: 'City FeelsLike',
    weather: 'City Weather',
    sunrise: 1672207003,
    sunset: 1672237348,
}
