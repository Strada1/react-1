import './css/input.css';

function Input(props) {
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

export { Input };
