import './DeatilsScreen.css'

const DeatilsScreen = () => {

    const details = [
        { name: 'Temp', value: '0' },
        { name: 'Feels like', value: '0' },
        { name: 'Weather', value: 'Clouds' },
        { name: 'Sunrise', value: '08:32' },
        { name: 'Sunset', value: '17:35'},
    ]

    const detailsList = details.map((item, index) => {
        return <li className="details--item" key={index}> {`${item.name}: ${item.value}`}</li>})

    return (
        <div className="weather--details">
            <h3 className="location-header">
                Bishkek
            </h3>
            <ul className="details--list">
                    {detailsList}
                </ul>
        </div>
    )
}
export default DeatilsScreen;
