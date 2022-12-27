function CityList(props) {
    const { cityList, setCityList } = props;

    const deleteFavoriteCity = (event) => {
        const deleteCity = event.target.parentNode.firstChild.textContent;
        console.log('deleteCity: ', deleteCity);
        console.log('cityList: ', cityList);

        const cityys = cityList.filter((town) => {
            town !== deleteCity;
            console.log('town: ', town);
        });

        console.log('cityys: ', cityys);
    };

    const allCityList = cityList.map((town) => (
        <div key={town} className="town-items">
            <div className="town"> {town}</div>
            <button
                type="button"
                className="button-delete-town"
                onClick={deleteFavoriteCity}
            >
                +
            </button>
        </div>
    ));

    return (
        <div className="container-city-list">
            <div className="header-city-list">Added Locations:</div>
            <div className="city-list">{allCityList}</div>
        </div>
    );
}

export { CityList };
