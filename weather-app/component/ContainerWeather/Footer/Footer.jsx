import style from "./Footer.module.css";
import Button from "../Button/Button.jsx";

const tabItems = [
    {
        id: 1,
        title: 'Now',
    },
    {
        id: 2,
        title: 'Details',
    },
    {
        id: 3,
        title: 'Forecast',
    }
];


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