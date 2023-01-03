import style from "./ContainerLocation.module.css";
import DeleteCity from "./DeleteCity/DeleteCity.jsx";

const ContainerLocation = ({favoriteCities,setFavoriteCities}) => {
    return (
        <section className={style.Container}>
            <h2 className={style.Title}>Added Locations:</h2>
            <div className={style.Content}>
                <DeleteCity setFavoriteCities={setFavoriteCities} favoriteCities={favoriteCities}/>
            </div>
        </section>
    );
};

export default ContainerLocation;