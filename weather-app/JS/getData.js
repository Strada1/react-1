const SERVER = {
    url: 'http://api.openweathermap.org/data/2.5/',
    apiKey: '45876c3eba84aaa58c57239678e80439',
    metric: `&units=metric`,
}
const URL_TYPE = {
    weather: "weather",
    forecast: "forecast",
}

async function getData(url, cityName) {
    const WeatherUrl = new URL(`${SERVER.url}${URL_TYPE.weather}?q=${cityName}&appid=${SERVER.apiKey}${SERVER.metric}`);
    const ForecastUrl = new URL(`${SERVER.url}${URL_TYPE.forecast}?q=${cityName}&cnt=3&appid=${SERVER.apiKey}${SERVER.metric}`);

    const selectUrl = url === URL_TYPE.weather ? WeatherUrl : ForecastUrl;

    try {
        const response = await fetch(selectUrl);
        if (!response.ok) {
            throw new Error(`Проверьте название города`)
        }
        const resolve = await response.json();
        return resolve;
    } catch (error) {
        alert(error.message);
    }
}


export {getData, URL_TYPE}