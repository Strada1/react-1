import './DeatilsScreen.css'

import { useContext } from 'react';
import { CitiesContext } from '../../context';
import { detailsGetTime } from '../../helpers/helpers';

const DeatilsScreen = () => {

    const currentCity = useContext(CitiesContext);

    const details = [
        { name: 'Temp', value: currentCity.temperature },
        { name: 'Feels like', value: currentCity.feelsLike },
        { name: 'Weather', value: currentCity.weather  },
        { name: 'Sunrise', value: detailsGetTime(currentCity.sunrise) },
        { name: 'Sunset', value: detailsGetTime(currentCity.sunset)},
    ]

    const detailsList = details.map((item, index) => {
        return <li className="details--item" key={index}> {`${item.name}: ${item.value}`}</li>})

    return (
        <div className="weather--details">
            <h3 className="location-header">
                {currentCity.name}
            </h3>
            <ul className="details--list">
                    {detailsList}
                </ul>
        </div>
    )
}
export default DeatilsScreen;
