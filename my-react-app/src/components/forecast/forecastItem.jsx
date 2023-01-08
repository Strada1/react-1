export function ForecastItem({ item }) {
    return(
        <div className = 'forecast__item'>
            <div className = 'forecast__time'>
                <span>{item.date}</span>
                <span>{item.time}</span>
            </div>
            <div className = 'forecast__weather'>
                <div className = 'forecast__temperature'>
                    <span>Temperature: {item.temperature}</span>
                    <span>Feels like: {item.feelsLike}</span>
                </div>
                <div className = 'forecast__icon'>
                    <span>{item.weather}</span>
                </div>
            </div>
        </div>
    )
}