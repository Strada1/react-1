import { CityWrap } from "./CityWrap";

function CityList(props) {
    const { cityList, setCityList } = props;

    const deleteFavoriteCity = (event) => {
        const deleteCity = event.target.parentNode.firstChild.textContent;

        setCityList(cityList.filter((town) => town !== deleteCity));
    };

    const allCityList = cityList.map((town) => (
        <CityWrap key={town} town={town} deleteFavoriteCity={deleteFavoriteCity}/>
    ));

    return (
        <div className="container-city-list">
            <div className="header-city-list">Added Locations:</div>
            <div className="city-list">{allCityList}</div>
        </div>
    );
}

export { CityList };
