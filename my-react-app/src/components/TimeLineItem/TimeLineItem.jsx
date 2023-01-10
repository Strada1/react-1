import TimeLineItemCss from './TimeLineItem.module.css'

const TimeLineItem = ({day, month, time, temperature, feelsLike, weather, icon}) => {
    return (
      <div className={TimeLineItemCss.tableContainer}>
        <div className={TimeLineItemCss.forecastDate}>
          <p>
            <span>{day || '--'}</span> <span>{month || '--'}</span>
          </p>
          <p>{time || '--'}</p>
        </div>
        <div className={TimeLineItemCss.forecastWeather}>
          <div>
            <div className={TimeLineItemCss.temperatureWrapper}>
            <img className={TimeLineItemCss.temperatureImg} src="./temperature.svg" alt="" />
            <span>{typeof temperature === 'undefined' ? '--': temperature}</span>°
            </div>
            <p className={TimeLineItemCss.feelsLike}>
              Like: <span>{typeof feelsLike === 'undefined' ? '--': feelsLike}</span>°
            </p>
          </div>
          <div className={TimeLineItemCss.weatherIcon}>
            <p className={TimeLineItemCss.rain}>{weather || '--'}</p>
            <img className={TimeLineItemCss.forecastIcons} src={icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : "./rain.svg" }/>
          </div>
        </div>
      </div>
    );
  };

  export {TimeLineItem}