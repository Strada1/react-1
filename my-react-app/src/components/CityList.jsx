import { CityWrap } from "./CityWrap";

function CityList(props) {
    const { cityList, setCityList } = props;

    const deleteFavoriteCity = (deleteCity) => {
        setCityList(cityList.filter((town) => town !== deleteCity));
    };

    const getCity = (town) => {
        deleteFavoriteCity(town)
    }

    const allCityList = cityList.map((town) => (
        <CityWrap key={town} town={town} getCity={getCity}/>
    ));

    return (
        <div className="container-city-list">
            <div className="header-city-list">Added Locations:</div>
            <div className="city-list">{allCityList}</div>
        </div>
    );
}

export { CityList };
