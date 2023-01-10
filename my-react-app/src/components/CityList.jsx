import { CityWrap } from './CityWrap';
import { ShowResponse } from './ShowResponse';

function CityList(props) {
    const {
        cityList,
        setCityList,
        setTemperature,
        setIcon,
        setCityName,
        setFeelsLike,
        setWeatherStatus,
        setSunrise,
        setSunset,
        setDataForecast
    } = props;

    const deleteFavoriteCity = (deleteCity) => {
        setCityList(cityList.filter((town) => town !== deleteCity));
    };

    const showCity = (city) => {
        ShowResponse(
            city,
            null,
            setTemperature,
            setIcon,
            setCityName,
            setFeelsLike,
            setWeatherStatus,
            setSunrise,
            setSunset,
            setDataForecast
        );
    };

    const lastSelectedCity = (city) => {
        localStorage.setItem('lastCity', JSON.stringify(city));
    };

    const allCityList = cityList.map((town) => (
        <CityWrap
            key={town}
            town={town}
            deleteFavoriteCity={deleteFavoriteCity}
            showCity={showCity}
            lastSelectedCity={lastSelectedCity}
        />
    ));

    return (
        <div className="container-city-list">
            <div className="header-city-list">Added Locations:</div>
            <div className="city-list">{allCityList}</div>
        </div>
    );
}

export { CityList };
