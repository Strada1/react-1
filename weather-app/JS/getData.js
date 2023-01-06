const SERVER = {
    url: 'http://api.openweathermap.org/data/2.5/',
    imgUrl : `http://openweathermap.org/img/wn/`,
    apiKey: '06291dc6ae309f27a9d786ae6c788fd2',
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
        console.dir(error.message);
    }
}


export {getData, URL_TYPE,SERVER}