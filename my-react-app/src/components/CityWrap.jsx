function CityWrap(props) {
    const { town, getCity } = props;
    return (
        <div className="town-items">
            <div className="town">{town}</div>
            <button
                type="button"
                className="button-delete-town"
                onClick={() => {
					getCity(town)
				}}
            >
                +
            </button>
        </div>
    );
}

export {CityWrap}
