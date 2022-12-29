import './DetailsForecastTab.css'

const DetailsForecastTab = ({currentForecast})=> {
    return (
      <div className='forecast' >
      <div className="locations-header">
        <p className="text-locations">{currentForecast?.forecastCity || 'City'}</p>
      </div>
      <ul className="details-items">
        <li>Temperature: <span>{typeof currentForecast?.degrees === 'undefined' ? '--' : currentForecast.degrees}</span>&#176;</li>
        <li>Feels like: <span>{typeof currentForecast?.degrees === 'undefined' ? '--' : currentForecast.degrees}</span>&#176;</li>
        <li>Weather: <span>{currentForecast?.detailsWeather|| '--'}</span></li>
        <li>Sunrise: <span>{currentForecast?.sunrise|| '--'}</span></li>
        <li>Sunset: <span>{currentForecast?.sunset|| '--'}</span></li>
      </ul>
    </div>
    )
}

export {DetailsForecastTab}