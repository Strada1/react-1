import { RESPONSE, DEFAULT } from '../js/const';
import { getData } from '../js/response';
import { formatDate } from '../js/formatDate';

const linkImg = (icon) => `//openweathermap.org/img/wn/${icon}@2x.png`;

async function ShowResponse(
    cityName,
    setValueInput,
    setTemperature,
    setIcon,
    setCityName,
    setFeelsLike,
    setWeatherStatus,
    setSunrise,
    setSunset,
    setDataForecast
) {
    const url = `${RESPONSE.serverUrl}?q=${cityName}&appid=${RESPONSE.apiKey}&units=metric`;
    const urlForecast = `${RESPONSE.serverUrlForecast}?q=${cityName}&appid=${RESPONSE.apiKey}&units=metric`;
    const response = await getData(url);
    if(response.cod !== '404') {
        const responseForecast = await getData(urlForecast);
        setDataForecast(responseForecast.list)
    }
    setTemperature(Math.round(response.main.temp));
    setIcon(linkImg(response.weather[0].icon));
    setCityName(response.name);
    setFeelsLike(Math.round(response.main.feels_like))
    setWeatherStatus(response.weather[0].main)
    setSunrise(formatDate(response.sys.sunrise))
    setSunset(formatDate(response.sys.sunset))
    
    if (setValueInput !== null) {
        setValueInput(DEFAULT.VALUE);
    }
}

export { ShowResponse };
