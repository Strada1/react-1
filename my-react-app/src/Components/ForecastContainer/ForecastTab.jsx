import { ForecastHeader } from '../ForecastHeader'
import { ForecastItems } from '../ForecastItems'
function ForecastTab({ forecastCity, activeTab }) {
    return (
        <div className={`forecast-table forecast ${activeTab}`} id="tab-03">
            <ForecastHeader forecastCity={forecastCity} />
            <div className="table-items">
                {forecastCity
                    ? forecastCity.map((city) => (
                          <ForecastItems forecastCity={city} key={city.id} />
                      ))
                    : null}
            </div>
        </div>
    )
}

export { ForecastTab }
