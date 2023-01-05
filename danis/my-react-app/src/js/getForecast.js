import { formatDay } from "./converDay";
import { converHours } from "./converHours"
import { urlImage, beatifulImage } from "./consts";

export async function getForecast(urlMy) {
    try {
    const result = await fetch(urlMy);
    const response = await result.json();
        const forecast = response.list.map((item, index) => {
            return {
                id: response.city.id + index,
                day: formatDay(item.dt),
                hours: converHours(item.dt),
                temperature: Math.round(item.main.temp),
                feelsLike: item.main.feels_like,
                weather: item.weather[0].main,
                image: `${urlImage}${item.weather[0].icon}${beatifulImage}`,
            }
        })
        return forecast
    } catch (err) {
        alert (err.message)
    }
}