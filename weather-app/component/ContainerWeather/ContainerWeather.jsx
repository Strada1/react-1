import {useState} from "react";
import style from "./ContainerWeather.module.css";
import Now from "./Now/Now.jsx";
import Footer from "./Footer/Footer.jsx";
import Details from "./Details/Details.jsx";
import Forecast from "./Forecast/Forecast.jsx";

function ContainerWeather({dataForecast}) {
    const [active, setActive] = useState({
        now: true,
        details: false,
        forecast: false
    });

    return (
        <section className={style.Content}>
            {active.now && <Now/>}
            {active.details && <Details/>}
            {active.forecast && <Forecast/>}
            <Footer setActive={setActive}/>
        </section>
    );
}

export default ContainerWeather;