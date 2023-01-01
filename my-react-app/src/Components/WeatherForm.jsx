function WeatherForm({ inputValue, weatherRequest, value }) {
    return (
        <form className="forecast-form" action="" onSubmit={weatherRequest}>
            <input
                type="text"
                className="inputForm"
                placeholder="Search"
                value={value}
                onChange={inputValue}
            />
            <button className="button" type="submit"></button>
        </form>
    )
}

export { WeatherForm }
