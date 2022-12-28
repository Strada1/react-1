import style from "./ContainerWeather.module.css";
import Now from "./Now/Now.jsx";
import Footer from "./Footer/Footer.jsx";
import Details from "./Details/Details.jsx";
import Forecast from "./Forecast/Forecast.jsx";

const ContainerWeather = () => {
    return (
        <section className={style.Content}>
            <Now/>
            <Details/>
            <Forecast/>
            <Footer/>
        </section>
    );
};

export default ContainerWeather;