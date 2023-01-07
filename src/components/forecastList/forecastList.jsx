import './forecastList.css';
import { Temperature } from '../temperature/temperature';
import { useContext } from 'react';
import { WeatherContext } from '../../context/weatherContext';

export function ForecastList() {
	const { weather: {forecast} } = useContext(WeatherContext);

	return (
		<ul className="forecast-list">
			{forecast.map(item => {
				const {
					day,
					time,
					temp,
					feelsLikeTemp,
					iconURL,
					weatherType,
					id
				} = item;

				return (
					<li key={id} className="forecast-item">
						<div className="forecast-item__box">
							<div className="forecast-item__day">
								{day}
							</div>
							<div className="forecast-item__time">
								{time}
							</div>
						</div>
						<div className="forecast-item__box">
							<div className="forecast-item__col">
								<div className="forecast-item__temp">
									Temperature: <Temperature size="sm" temperature={temp} />
								</div>
								<div className="forecast-item__temp">
									Feels like: <Temperature size="sm" temperature={feelsLikeTemp} />
								</div>
							</div>
							<div className="forecast-item__col">
								<div className="forecast-item__weather-type">{weatherType}</div>
								<div className="forecast-item__icon">
									<img src={iconURL} alt="" />
								</div>
							</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
}

