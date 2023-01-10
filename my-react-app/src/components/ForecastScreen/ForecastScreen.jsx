import './ForecastScreen.css'
import { useContext } from 'react';
import ForecastCard from '../ForecastCard/ForecastCard'
import { ForecastContext } from '../../context';
import { API, DEG } from '../../constans/constans';
import { getCurrentDay, detailsGetTime } from '../../helpers/helpers';

const ForecastScreen = () => {

    const nowCity = useContext(ForecastContext);
    console.log('FORECAST', nowCity);

    const forecastList = nowCity.list

    const forecastCards = forecastList.map((item, index) => {
        console.log(item);
        return (
            <ForecastCard
                key={index}
                temperature={`${Math.ceil(item.main.temp)} ${DEG}`}
                feelsLike={`${Math.ceil(item.main.feels_like)} ${DEG}`}
                icon={`${API.API_ICON}${item.weather[0].icon}.png`}
                weather={item.weather[0].main}
                day={getCurrentDay(item.dt_txt)}
                time={detailsGetTime(new Date(item.dt_txt))}
            />
        )
    })


    return (
        <div className='weather--forecast'>
            <h3 className='location-header'>{nowCity.name}</h3>
            <div className='forecast--cards'>
                {forecastCards}
            </div>
        </div>
    )
}
export default ForecastScreen;
