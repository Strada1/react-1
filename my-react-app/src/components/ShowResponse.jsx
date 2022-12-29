import { mathRound } from '../js/mathRound';
import { RESPONSE, defaultValue } from '../js/const';
import { getData } from '../js/response';

const linkImg = (icon) => `//openweathermap.org/img/wn/${icon}@2x.png`;

async function ShowResponse(
    cityName,
    setValueInput,
    setTemperature,
    setIcon,
    setCityName
) {
    const url = `${RESPONSE.serverUrl}?q=${cityName}&appid=${RESPONSE.apiKey}&units=metric`;
    const response = await getData(url);
    setTemperature(mathRound(response.main.temp));
    setIcon(linkImg(response.weather[0].icon));
    setCityName(response.name);
    if (setValueInput !== null) {
        setValueInput(defaultValue);
    }
}

export { ShowResponse };
