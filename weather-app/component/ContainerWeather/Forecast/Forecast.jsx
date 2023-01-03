import style from "./Forecast.module.css"
import Content from "./Content.jsx";

const Forecast = ({setDataForecast, dataForecast}) => {
    if (!dataForecast) {
        return "НЕТ ДЫННЫХ"
    }
    return (
        <div className={style.Container}>
            <h2 className={style.Title}>{dataForecast.city.name}</h2>
            <div className={style.Wrapper}>
                {dataForecast.list.map((item, index) => <Content key={index} item={item}/> )}
            </div>

        </div>
    );
};

export default Forecast;