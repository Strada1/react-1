import { TimeLineItem } from "../TimeLineItem/TimeLineItem";
import TimelineForecastTabCss from './TimelineForecastTab.module.css'

const TimelineForecastTab = ({  timeLineForecast, currentForecast }) => {

  return (
    <div className={TimelineForecastTabCss.forecastTable}>
      <div className={TimelineForecastTabCss.locationsHeader}>
        <p className={TimelineForecastTabCss.textLocations}>{currentForecast?.forecastCity || 'City'}</p>
      </div>
      <div className={TimelineForecastTabCss.tableItems}>
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
