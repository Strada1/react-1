import { useContext } from "react";
import { WeatherContext } from "../../context";

export function Now({ addCity }) {

    const { dataWeather } = useContext(WeatherContext);

    function handleClick() {
        addCity(dataWeather.name)
    }

    return(
        <div id="tab__01" className="tabs__block now">
            <div className="now__temperature">
                <h1>{dataWeather.temperature}</h1>
            </div>
            <div className="now__icon">
                <img className="now__icon-img" src={dataWeather.imageUrl} alt="image" />
            </div>
            <div className="now__city">
                <span className="now__city-name">{dataWeather.name}</span>
                <button className="now__heart" onClick={handleClick}>
                    <img src="../public/heart.svg" />
                </button>
            </div>
        </div>
    )
}