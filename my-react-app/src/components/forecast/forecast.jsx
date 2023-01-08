import { ForecastItem } from "./forecastItem";

export function Forecast({ forecast, currentCity }) {
    if (!forecast) return;
    return(
        <div id="tab__03" className="tabs__block forecast">
            <div className="forecast__city">
                <h1>{currentCity}</h1>
            </div>
            <div className="forecast__list">
                {forecast.map((item) => (
                    <ForecastItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
