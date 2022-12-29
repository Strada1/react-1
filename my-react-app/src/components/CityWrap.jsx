function CityWrap(props) {
    const { town, deleteFavoriteCity, showCity, lastSelectedCity } = props;
    return (
        <div className="town-items">
            <div
                className="town"
                onClick={() => {
                    showCity(town);
                    lastSelectedCity(town);
                }}
            >
                {town}
            </div>
            <button
                type="button"
                className="button-delete-town"
                onClick={() => {
                    deleteFavoriteCity(town);
                }}
            >
                +
            </button>
        </div>
    );
}

export { CityWrap };
