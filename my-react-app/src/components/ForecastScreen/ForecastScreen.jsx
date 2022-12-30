import './ForecastScreen.css'
import ForecastCard from '../ForecastCard/ForecastCard'

const ForecastScreen = () => {
    const forecast = [
        { date: 'December 30', time: '15:00', temperature: '-1', feelsLike: '-4', weather: 'Clouds' },
        { date: 'December 30', time: '15:00', temperature: '-1', feelsLike: '-4', weather: 'Clouds' },
        { date: 'December 30', time: '15:00', temperature: '-1', feelsLike: '-4', weather: 'Clouds' },
        { date: 'December 30', time: '15:00', temperature: '-1', feelsLike: '-4', weather: 'Clouds' },
        { date: 'December 30', time: '15:00', temperature: '-1', feelsLike: '-4', weather: 'Clouds' },
        { date: 'December 30', time: '15:00', temperature: '-1', feelsLike: '-4', weather: 'Clouds' },
        { date: 'December 30', time: '15:00', temperature: '-1', feelsLike: '-4', weather: 'Clouds' },
        { date: 'December 30', time: '15:00', temperature: '-1', feelsLike: '-4', weather: 'Clouds' },
    ]

    const forecastCards = forecast.map((item, index) => {
        return (
            <ForecastCard
                key={index}
                card = {item}
            />
        )
    })


    return (
        <div className='weather--forecast'>
            <h3 className='location-header'>Bishkek</h3>
            <div className='forecast--cards'>
                {forecastCards}
            </div>
        </div>
    )
}
export default ForecastScreen;
