import { format } from 'date-fns'
function ForecastItems({ forecastCity }) {
    return (
        <div className="table-container">
            <div className="forecast-date">
                <p className="forecast-date1">
                    {forecastCity.date
                        ? format(new Date(forecastCity.date), 'd MMMM')
                        : null}
                </p>
                <p>
                    {forecastCity.date
                        ? format(new Date(forecastCity.date), 'H:mm')
                        : null}
                </p>
            </div>
            <div className="forecast-weather">
                <div className="forecast-temperature">
                    <p id="t12">
                        Temperature:{Math.trunc(forecastCity.degrees)}°
                    </p>
                    <p id="f12">
                        Feels like:{Math.trunc(forecastCity.feelsLike)}{' '}
                    </p>
                </div>
                <div className="weather-icon">
                    <p className="rain12">{forecastCity.weather}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${forecastCity.icon}@4x.png`}
                        className="forecast-icons12 forecast-icons"
                        alt="forecast-icons"
                    />
                </div>
            </div>
        </div>
    )
}

export { ForecastItems }
