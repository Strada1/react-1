import style from "./ContainerWeather.module.css";
import Now from "./Now/Now.jsx";
import Footer from "./Footer/Footer.jsx";
import Details from "./Details/Details.jsx";
import Forecast from "./Forecast/Forecast.jsx";
import {useState} from "react";

const ContainerWeather = ({data, setFavoriteCities, setDataForecast, dataForecast, favoriteCities}) => {
    const [active, setActive] = useState({
        now: true,
        details: false,
        forecast: false
    });

    return (
        <section className={style.Content}>
            {active.now && <Now favoriteCities={favoriteCities} setFavoriteCities={setFavoriteCities} data={data}/>}
            {active.details && <Details data={data}/>}
            {active.forecast && <Forecast setDataForecast={setDataForecast} dataForecast={dataForecast}/>}
            <Footer setActive={setActive}/>
        </section>
    );
};

export default ContainerWeather;