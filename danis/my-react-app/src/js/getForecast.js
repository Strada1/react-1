import { convetData } from "./covertData";

export async function getForecast(urlMy) {
    const result = await fetch(urlMy);
    const response = await result.json();
    const forecast = response.list.map((item) => {
        return {
            day: item.dt_txt
        }
    });

    return forecast
}