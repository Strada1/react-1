import DetailsItem from './DetailsItem'
import { ForecastContext } from "./ForecastContext";
import { toCelsius, timestampToString } from './api';

function DetailsTab() {
    return (
        <ForecastContext.Consumer>
            {(forecast) => (
                <div className="tabcontent">
                    <div className="details-city">
                        <h1>{forecast.name}</h1>
                    </div>
                    <div className="details">
                        <DetailsItem name='Temperature' value={toCelsius(forecast.temperature)} />
                        <DetailsItem name='Feels like' value={toCelsius(forecast.feelsLike)} />
                        <DetailsItem name='Weather' value={forecast.description} />
                        <DetailsItem name='Sunrise' value={timestampToString(forecast.sunrise)} />
                        <DetailsItem name='Sunset' value={timestampToString(forecast.sunset)} />
                    </div>
                </div>
            )}
        </ForecastContext.Consumer>
    )
}

export default DetailsTab