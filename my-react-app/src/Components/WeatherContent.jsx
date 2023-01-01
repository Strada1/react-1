import { WeatherForm } from './WeatherForm'
import { ForecastContainer } from './ForecastContainer'

function WeatherContent({
    onChange,
    request,
    cityNow,
    favoriteCity,
    addFavoriteCity,
    removeFavorite,
    forecastCity,
    value,
    refreshRequest,
}) {
    return (
        <div className="content">
            <WeatherForm
                weatherRequest={request}
                inputValue={onChange}
                value={value}
            />
            <ForecastContainer
                refreshRequest={refreshRequest}
                forecastCity={forecastCity}
                cityInfo={cityNow}
                favoriteCity={favoriteCity}
                addFavoriteCity={addFavoriteCity}
                removeFavoriteCity={removeFavorite}
            />
        </div>
    )
}
export { WeatherContent }
