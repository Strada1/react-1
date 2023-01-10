import DetailsForecastTabCss from './DetailsForecastTab.module.css'

const DetailsForecastTab = ({currentForecast})=> {
    return (
      <div className={DetailsForecastTabCss.forecast} >
      <div className={DetailsForecastTabCss.locationsHeader}>
        <p className={DetailsForecastTabCss.textLocations}>{currentForecast?.forecastCity || 'City'}</p>
      </div>
      <ul className={DetailsForecastTabCss.detailsItems}>
        <li>
          <img src="./temperature.svg" alt="" />
          <span>{typeof currentForecast?.degrees === 'undefined' ? '--' : currentForecast.degrees}</span>&#176;</li>
        <li>Feels like: <span>{typeof currentForecast?.degrees === 'undefined' ? '--' : currentForecast.degrees}</span>&#176;</li>
        <li>Weather: <span>{currentForecast?.detailsWeather|| '--'}</span></li>
        <li>Sunrise: <span>{currentForecast?.sunrise|| '--'}</span></li>
        <li>Sunset: <span>{currentForecast?.sunset|| '--'}</span></li>
      </ul>
    </div>
    )
}

export {DetailsForecastTab}