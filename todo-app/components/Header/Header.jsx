import {useState} from "react";

const defaultValue = '';
const Header = ({priority, addTask,placeholder}) => {
    const [name, setName] = useState(defaultValue);
    const handleChange = (e) => {
        setName(e.target.value);
    }



    const onSubmit = (e) => {
        e.preventDefault();
        if(!name) return;
        const task = {name, priority};
        addTask(task);
        setName(defaultValue)
    }

    return (
        <form onSubmit={onSubmit}>
            <input onChange={handleChange} value={name} type="text" placeholder={placeholder} className="inputTask"/>
            <button className="addTask"></button>
        </form>
    );
};

export default Header;
