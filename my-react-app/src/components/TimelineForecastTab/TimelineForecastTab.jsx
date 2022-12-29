import { TimeLineItem } from "../TimeLineItem/TimeLineItem";
import './TimelineForecastTab.css'

const TimelineForecastTab = ({  timeLineForecast, currentForecast }) => {

  return (
    <div className="forecast-table forecast">
      <div className="locations-header">
        <p className="text-locations">{currentForecast?.forecastCity || 'City'}</p>
      </div>
      <div className="table-items">
        {timeLineForecast ? (timeLineForecast.map(
          ({ day, month, time, temperature, feelsLike, weather, icon }) => 
          <TimeLineItem
              day={day}
              month={month}
              time={time}
              temperature={temperature}
              feelsLike={feelsLike}
              weather={weather}
              icon={icon}
            />
          
        )) : <TimeLineItem/> }
      </div>
    </div>
  );
};

export { TimelineForecastTab };
