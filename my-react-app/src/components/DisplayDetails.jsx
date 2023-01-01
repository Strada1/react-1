function DisplayDetalis(props) {
    const {
        city,
        tab,
        feelsLike,
        weatherStatus,
        sunrise,
        sunset,
        temperature,
    } = props;
    if (tab !== 'tab2') {
        return null;
    }
    return (
        <div className="tab-active" id="display-details">
            <div className="city-name-details">{city}</div>
            <div className="data-list">
                <div className="temperature-details">
                    Temperature: {temperature}°
                </div>
                <div className="feels-like-details">
                    Feels like: {feelsLike}
                </div>
                <div className="weather-details">Weather: {weatherStatus}</div>
                <div className="sunrise-details">Sunrise: {sunrise}</div>
                <div className="sunset-details">Sunset: {sunset}</div>
            </div>
        </div>
    );
}

export { DisplayDetalis };
