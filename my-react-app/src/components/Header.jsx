import './css/input.css';

function Header(props) {
    const { inputClass, inputPlaceholder } = props;
    return (
        <div className="">
            <input
                type="text"
                className={inputClass}
                placeholder={inputPlaceholder}
            />
			<div className="add-task">+</div>
        </div>
    );
}

export { Header };
