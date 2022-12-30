import './ForecastCard.css'

const ForecastCard = ({card}) => {
    return (
        <div className='forecast--card'>
             <div className='forecast--dateblock'>
                    <div className='forecast--date'>{card.date}</div>
                <div className='forecast--date'>{ card.time }</div>
                </div>
                <div className='forecast--weatherblock'>
                    <div className='forecast--temperaturebox'>
                    <div className='forecast--tempereture'>Temperatue: {card.temperature}</div>
                    <div className='forecast--tempereture'>Feels Like: {card.feelsLike}</div>
                    </div>
                    <div className='forecast--weatherbox'>
                    <div className='forecast--weather'>{card.weather}</div>
                        <div className='forecast--icon'></div>
                    </div>
                </div>
        </div>
    )
}

export default ForecastCard;
