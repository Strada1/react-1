import './ForecastCard.css'

const ForecastCard = ({temperature, feelsLike,  icon, weather, day, time}) => {
    return (
        <div className='forecast--card'>
             <div className='forecast--dateblock'>
                    <div className='forecast--date'>{day}</div>
                <div className='forecast--date'>{ time }</div>
                </div>
                <div className='forecast--weatherblock'>
                    <div className='forecast--temperaturebox'>
                    <div className='forecast--tempereture'>Temperatue: {temperature}</div>
                    <div className='forecast--tempereture'>Feels Like: {feelsLike}</div>
                    </div>
                    <div className='forecast--weatherbox'>
                    <div className='forecast--weather'>{weather}</div>
                        <div className='forecast--icon' style={{backgroundImage: icon}}></div>
                    </div>
                </div>
        </div>
    )
}

export default ForecastCard;
