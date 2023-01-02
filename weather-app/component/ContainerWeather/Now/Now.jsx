import style from "./Now.module.css";

const Now = ({data}) => {
    if (!data) {
        return;
    }
    const serverImgUrl = `http://openweathermap.org/img/wn/`;

    const nowData = {
        cityName: data.name,
        degrees: data.main.temp.toFixed(0),
        src: `${serverImgUrl}${data.weather[0]['icon']}@2x.png`,
    }

    //TODO: ПРОДОЛЖИТЬ ТУТ
    function setFavoriteCity(cityName) {
        localStorage.setItem("cityName", JSON.stringify(cityName))
    }

    return (
        <div className={style.Content}>
            <h2 className={style.Degrees}>
                <span>{nowData.degrees}°</span>
            </h2>
            <img src={nowData.src}/>
            <div className={style.NowFooter}>
                <p>{nowData.cityName}</p>
                <button onClick={() => setFavoriteCity(nowData.cityName)} className={style.Like}>
                </button>
            </div>
        </div>
    );
};
//
export default Now;