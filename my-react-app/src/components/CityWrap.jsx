function CityWrap(props) {
    const { town, deleteFavoriteCity } = props;
    return (
        <div className="town-items">
            <div className="town">{town}</div>
            <button
                type="button"
                className="button-delete-town"
                onClick={deleteFavoriteCity}
            >
                +
            </button>
        </div>
    );
}

export {CityWrap}
