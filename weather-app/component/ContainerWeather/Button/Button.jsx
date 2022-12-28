import style from "./Button.module.css";

const Button = ({buttonName}) => {
    return (
        <button className={style.FooterButton}>{buttonName}</button>
    );
};

export default Button;