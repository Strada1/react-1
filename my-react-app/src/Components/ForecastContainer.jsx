import { ForecastDetails } from './ForecastContainer/ForecastDetails'
import { ForecastNow } from './ForecastContainer/ForecastNow'
import { ForecastTab } from './ForecastContainer/ForecastTab'
import { FavoriteLocations } from './ForecastContainer/FavoriteLocations'
import { NavBar } from './ForecastContainer/NavBar'
import { useState } from 'react'
function ForecastContainer({
    cityInfo,
    favoriteCity,
    addFavoriteCity,
    removeFavoriteCity,
    forecastCity,
    refreshRequest,
}) {
    const [activeTab, setActiveTab] = useState('')
    function changeActiveTab(tab) {
        if (tab === 'tab-01') {
            setActiveTab('active-1')
        } else if (tab === 'tab-02') {
            setActiveTab('active-2')
        } else {
            setActiveTab('active-3')
        }
    }

    return (
        <div className="forecast-container">
            <section className="main-forecast">
                <ForecastNow
                    favoriteCities={favoriteCity}
                    activeTab={activeTab}
                    cityInfo={cityInfo}
                    addFavoriteCity={addFavoriteCity}
                />
                <ForecastDetails cityInfo={cityInfo} activeTab={activeTab} />
                <ForecastTab
                    forecastCity={forecastCity}
                    activeTab={activeTab}
                />
                <NavBar setActiveTab={changeActiveTab} activeTab={activeTab} />
            </section>
            <FavoriteLocations
                favoriteCity={favoriteCity}
                removeCity={removeFavoriteCity}
                refreshRequest={refreshRequest}
            />
        </div>
    )
}

export { ForecastContainer }
