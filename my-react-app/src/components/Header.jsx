import './css/Header.css';

function Header(props) {
    const { inputClass, inputPlaceholder } = props;
    return (
        <form className="">
            <input
                type="text"
                className={inputClass}
                placeholder={inputPlaceholder}
            />
            <button type="submit" className="button-add-task">
                +
            </button>
        </form>
    );
}

export { Header };
