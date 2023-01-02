import style from "./ContainerWeather.module.css";
import Now from "./Now/Now.jsx";
import Footer from "./Footer/Footer.jsx";
import Details from "./Details/Details.jsx";
import Forecast from "./Forecast/Forecast.jsx";
import {useState} from "react";

const ContainerWeather = ({data}) => {
    const [active, setActive] = useState({
        now: true,
        details: false,
        forecast: false
    });

    return (
        <section className={style.Content}>
            { active.now && <Now data={data}/> }
            { active.details && <Details data={data}/> }
            { active.forecast &&<Forecast/> }
            <Footer setActive={setActive} />
        </section>
    );
};

export default ContainerWeather;