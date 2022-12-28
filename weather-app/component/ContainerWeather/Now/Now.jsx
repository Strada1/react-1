import style from "./Now.module.css";

const Now = () => {
    return (
        <div className={style.Content}>
            <h2 className={style.Degrees}>14°</h2>
            <img src="src/img/icons8-cloud-96 1.png" alt=""/>
            <div className={style.NowFooter}>
                <p>Akdope</p>
                <button className={style.Like}></button>
            </div>
        </div>
    );
};

export default Now;