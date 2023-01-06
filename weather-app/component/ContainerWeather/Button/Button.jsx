import style from "./Button.module.css";

const name = {
    now: 'Now', details: 'Details', forecast: 'Forecast',
}

function Button({title, setActive}) {
    function setActiveTab(nameTab) {
        if (nameTab === name.now) {
            setActive({now: true})
        }
        if (nameTab === name.details) {
            setActive({
                now: false, details: true
            })
        }
        if (nameTab === name.forecast) {
            setActive({
                now: false,
                forecast: true
            })
        }
    }

    return (<button onClick={() => {
        setActiveTab(title)
    }} className={style.FooterButton}>{title}</button>);
}

export default Button;