import favoriteIcon from '../assets/love_heart.svg';
export function Widgets({ cityName, cityTemp, weatherIcon, addCityFavorite }) {
  return (
    <div id="tab_1" className="weather_block">
      <div className="weather_widgets-now">
        <div className="weather_widgets-degrees">
          {`${Math.round(cityTemp)}`}&deg;
        </div>
        <div className="weather_widgets-img">
          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
            alt=""
            className="images_current_weather"
          />
        </div>
        <div className="city_selected">
          <div className="city_now">
            <span className="name__current_city">{cityName}</span>
          </div>
          <div className="favorite">
            <button className="favorite_btn" onClick={addCityFavorite}>
              <img src={favoriteIcon} className="favorites-city" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
