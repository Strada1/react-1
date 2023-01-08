import { useState, useEffect } from 'react'
import Search from './Search'
import Content from './Content'
import { getWeather } from './api'
import { ForecastContext } from './ForecastContext'

function App() {
    const [forecast, setForecast] = useState({});

    useEffect(() => {
        handleSubmit('Moscow');
    }, [])

    function handleSubmit(city) {
        getWeather(city).then(forecast => {
            setForecast(forecast);
        })
    }

    return (
        <ForecastContext.Provider value={forecast}>
            <div className="container">
                <Search handleSubmit={handleSubmit} />
                <Content forecast={forecast} handleClick={handleSubmit} />
            </div>
        </ForecastContext.Provider>
    )
}

export default App
