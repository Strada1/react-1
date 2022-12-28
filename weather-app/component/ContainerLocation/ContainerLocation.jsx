import style from "./ContainerLocation.module.css";
import DeleteCity from "./DeleteCity/DeleteCity.jsx";

const ContainerLocation = () => {
    return (
        <section className={style.Container}>
            <h2 className={style.Title}>Added Locations:</h2>
            <div className={style.Content}>
                <DeleteCity/>
                <DeleteCity/>
                <DeleteCity/>
                <DeleteCity/>
                <DeleteCity/>
                <DeleteCity/>
                <DeleteCity/>
            </div>
        </section>
    );
};

export default ContainerLocation;