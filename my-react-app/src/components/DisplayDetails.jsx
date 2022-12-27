function DisplayDetalis(props) {
	const {cityName} = props
    return (
        <div className="display-details display" id="display-details">
            <div className="city-name-details">{cityName}</div>
        </div>
    );
}

export { DisplayDetalis };
