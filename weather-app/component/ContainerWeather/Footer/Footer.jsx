import style from "./Footer.module.css";
import Button from "../Button/Button.jsx";
import {tabItems} from "./constTabName.js";




function Footer({setActive}) {
    return (
        <footer>
            <div className={style.TabItems}>
                {tabItems.map(({id, title}) =>
                    <Button
                        setActive={setActive}
                        key={id}
                        title={title}/>)}
            </div>
        </footer>
    );
}

export default Footer;