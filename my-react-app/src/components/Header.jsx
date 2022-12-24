import './css/Header.css';
import { CreateTask } from './PushTask';

function Header(props) {
    const { inputClass, inputPlaceholder } = props;
    return (
        <form onSubmit={CreateTask}>
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
