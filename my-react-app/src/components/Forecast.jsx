export function Forecast() {
  return (
    <div id="tab_3" className="weather_block">
      <div className="name__current_city tab3__name ">Aktobe</div>
      <div className="current__item">
        <div className="data_wrapper">
          <div className="date_current">17 May</div>
          <div className="time_current">12:00</div>
        </div>
        <div className="temp_wrapper">
          <div className="temp_block">
            <div className="temp">Temperature: 13</div>
            <div className="feels_like">Feels like: 10</div>
          </div>
          <div className="temp_img">
            <div className="temp_text">Rain</div>
            <img src="../assets/rain.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="current__item">
        <div className="data_wrapper">
          <div className="date_current">17 May</div>
          <div className="time_current">15:00</div>
        </div>
        <div className="temp_wrapper">
          <div className="temp_block">
            <div className="temp">Temperature: 13</div>
            <div className="feels_like">Feels like: 10</div>
          </div>
          <div className="temp_img">
            <div className="temp_text">Rain</div>
            <img src="../assets/rain.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="current__item">
        <div className="data_wrapper">
          <div className="date_current">17 May</div>
          <div className="time_current">18:00</div>
        </div>
        <div className="temp_wrapper">
          <div className="temp_block">
            <div className="temp">Temperature: 13</div>
            <div className="feels_like">Feels like: 10</div>
          </div>
          <div className="temp_img">
            <div className="temp_text">Rain</div>
            <img src="../assets/rain.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
