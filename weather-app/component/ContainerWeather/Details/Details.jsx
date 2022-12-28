import style from "./Details.module.css";

const Details = () => {
    return (
        <div className={style.Container}>
            <h2>Aktobe</h2>
            <p>Temperature: 14</p>
            <p>Feels like: 10</p>
            <p>Weather: Clouds</p>
            <p>Sunrise: 03:21</p>
            <p>Sunset: 18:54</p>
        </div>
    );
};

export default Details;