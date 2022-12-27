import {useState} from "react";

const defaultValue = '';
const Header = ({addTask}) => {
    const [name, setValue] = useState(defaultValue);
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!name) return;
        addTask(name);
        setValue(defaultValue)
    }

    return (
        <form onSubmit={onSubmit}>
            <input onChange={handleChange} value={name} type="text" placeholder="Добавить важных дел" className="inputTask"/>
            <button className="addTask"></button>
        </form>
    );
};

export default Header;
