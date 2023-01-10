function ForecastHeader({ forecastCity }) {
    return (
        <div className="locations-header forecast-details " id="123">
            <p className="text-locations-forecast">{forecastCity[0].city}</p>
        </div>
    )
}

export { ForecastHeader }
