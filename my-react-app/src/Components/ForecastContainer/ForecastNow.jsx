/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import weatherLogo from '../../assets/img/weatherLogo.png'
function ForecastNow({ cityInfo, addFavoriteCity, activeTab, favoriteCities }) {
    let isFavorite = false
    favoriteCities.some((element) => {
        if (element.city === cityInfo.city) {
            isFavorite = true
        }
    })

    return (
        <div className={`forecast-now forecast ${activeTab}`} id="tab-01">
            <div className="degrees">
                <p>{Math.trunc(cityInfo.degrees)}°</p>
            </div>
            <img
                className="cloud"
                src={
                    cityInfo.icon
                        ? `https://openweathermap.org/img/wn/${cityInfo.icon}@4x.png`
                        : weatherLogo
                }
                alt=""
                width="150px"
                height="150px"
            />

            <div className="forecast-months">
                <p>{cityInfo.city}</p>
                <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill={isFavorite ? 'red' : 'none'}
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={addFavoriteCity}
                >
                    <path
                        opacity="0.54"
                        d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z"
                        stroke="black"
                    />
                </svg>
            </div>
        </div>
    )
}

export { ForecastNow }
