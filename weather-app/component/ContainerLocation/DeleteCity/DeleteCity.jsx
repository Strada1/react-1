import style from "../ContainerLocation.module.css";

const DeleteCity = () => {
    return (
        <div className={style.Name}>
            <button className={style.CityName}>Amur</button>
            <button className={style.Delete}></button>
        </div>
    );
};

export default DeleteCity;