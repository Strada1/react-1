import { format } from 'date-fns'
function ForecastDetails({ cityInfo, activeTab }) {
    return (
        <div className={`forecast-details forecast ${activeTab}`} id="tab-02">
            <div className="locations-header forecast-details ">
                {cityInfo.city}
            </div>
            <ul className="details-items">
                <li>Temperature:{Math.trunc(cityInfo.degrees)}</li>
                <li>Feels like:{Math.trunc(cityInfo.feelsLike)}°</li>
                <li>Weather:{cityInfo.weather}</li>
                <li>
                    Sunrise:
                    {format(new Date(cityInfo.sunrise * 1000), 'k:mm')}
                </li>
                <li>
                    Sunset:
                    {format(new Date(cityInfo.sunset * 1000), 'k:mm')}
                </li>
            </ul>
        </div>
    )
}

export { ForecastDetails }
