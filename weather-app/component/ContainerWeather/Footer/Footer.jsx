import style from "./Footer.module.css";
import Button from "../Button/Button.jsx";

const name = {
    now: "Now",
    details: "Details",
    forecast: "Forecast"
}

const Footer = () => {
    return (
        <footer>
            <div className={style.TabItems}>
                <Button buttonName={name.now}/>
                <Button buttonName={name.details}/>
                <Button buttonName={name.forecast}/>
            </div>
        </footer>
    );
};

export default Footer;