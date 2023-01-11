import { formatTime, formatDay } from '../js/formatDate';

function DisplayForecast(props) {
    const { tab, dataForecast, cityName } = props;
    if (tab !== 'tab3') {
        return null;
    }

    const data = dataForecast.map((city) => (
        <div key={Math.random()} className="data-container">
            <div className="date-forecast">{formatDay(city.dt)}</div>
            <div className="time-forecast">{formatTime(city.dt)}</div>
            <div className="temperature-forecast">
                Temperature: {Math.round(city.main.temp)}°
            </div>
            <div className="feels-like-forecast">
                Feels like: {Math.round(city.main.feels_like)}°
            </div>
            <div className="weather-forecast">{city.weather[0].main}</div>
            <img
                src={`//openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                alt="img"
                className="icon-forecast"
            />
        </div>
    ));

    return (
        <div className="tab-active display-forecast" id="display-forecast">
            <div className="city-forecast">{cityName}</div>
            {data}
        </div>
    );
}

export { DisplayForecast };
