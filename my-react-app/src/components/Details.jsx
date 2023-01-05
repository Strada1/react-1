export function Details({
  cityName,
  tempFeelsLike,
  cityTemp,
  weathetMain,
  sunrise,
  sunset,
}) {
  return (
    <div id="tab_2" className="weather_block">
      <div className="name__current_city">{cityName}</div>
      <ul className="city-properties">
        <li className="city-properties_item temperature_block">
          Temperature: {Math.round(cityTemp)}&deg;
        </li>
        <li className="city-properties_item feels_like">
          Feels like: {Math.round(tempFeelsLike)}&deg;
        </li>
        <li className="city-properties_item weather_blockTabTwo">
          Weather: {weathetMain}
        </li>
        <li className="city-properties_item sunrise_block">
          Sunrise: {sunrise}
        </li>
        <li className="city-properties_item sunset_block">Sunset: {sunset}</li>
      </ul>
    </div>
  );
}
