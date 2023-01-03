async function getData(cityName) {
    try {
        const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
        const apiKey = '45876c3eba84aaa58c57239678e80439';
        const metric = `&units=metric`;
        const url = `${serverUrl}?q=${cityName}&appid=${apiKey}${metric}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Проверьте название города`)
        }
        const resolve = await response.json();
        return resolve;
    } catch (error) {
        alert(error.message);
    }
}

export {getData}