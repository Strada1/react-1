import CurrentForecastTabCss from './CurrentForecastTab.module.css'

const CurrentForecastTab = ({currentForecast, addFavoriteCity, favoriteCities})=> {

    return (
        <div className={CurrentForecastTabCss.forecast} >
          <div className={CurrentForecastTabCss.degrees}>
            <img src="./temperature.svg" alt="" />
            <p className={CurrentForecastTabCss.degreesNum}>{` ${typeof currentForecast?.degrees === 'undefined' ? '--' : currentForecast.degrees}`}</p>
            <span>&#176;</span>
          </div>
          <img
            class={CurrentForecastTabCss.cloud}
            src={currentForecast?.icon ? `http://openweathermap.org/img/wn/${currentForecast.icon}@4x.png`: './cloud.svg'}
            alt="icon of cloud"
            width="90px"
          />

          <div className={CurrentForecastTabCss.forecastMonths}>
            <p>{currentForecast?.forecastCity || 'City'}</p>
            <button className={CurrentForecastTabCss.like} onClick = {addFavoriteCity}>
              <svg className={favoriteCities.find(item => item.city === currentForecast?.forecastCity) ? CurrentForecastTabCss.likeActive : ''}
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
    )
}

export {CurrentForecastTab}

