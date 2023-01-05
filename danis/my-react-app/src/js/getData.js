import { urlImage, beatifulImage } from "./consts";
import { convetData } from "./covertData";

export async function getData(urlMy) {
    try {
        const result = await fetch(urlMy);
        const response = await result.json();
        return  {
            temperature: Math.round(response.main.temp),
            feelsLike: response.main.feels_like,
            image: `${urlImage}${response.weather[0].icon}${beatifulImage}`,
            weather: response.weather[0].main,
            sunrice: convetData(response.sys.sunrise),
            sunset: convetData(response.sys.sunset),
            name: response.name
        }
    } catch (err) {
        alert(err.name)
    }
}