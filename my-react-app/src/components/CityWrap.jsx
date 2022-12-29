function CityWrap(props) {
    const { town, deleteFavoriteCity, showCity } = props;
    return (
        <div className="town-items">
            <div
                className="town"
                onClick={() => {
                    showCity(town);
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
