function Locations(props) {
    const locations = props.cityList
        .map(item => <div
            onClick={() => props.handleClick(item)}
            key={item}
            className="location">{item}</div>)

    return (
        <div className="col">
            <div className="locations-header">
                <h3>Added Locations:</h3>
            </div>
            <div className="locations">
                {locations}
            </div>
        </div>
    )
}

export default Locations