import { useState } from 'react';
import { defaultValue } from '../js/const';
import { ShowResponse } from './ShowResponse';

function SearchBox(props) {
    const { setTemperature, setIcon, setCityName } = props;
    const [valueInput, setValueInput] = useState(defaultValue);

    const addTown = (event) => {
        event.preventDefault();
        if (valueInput === defaultValue) {
            alert('Пустая строка, введите город!');
            return null;
        }
        ShowResponse(valueInput, setValueInput, setTemperature, setIcon, setCityName)
    };

    const changeInput = (event) => {
        setValueInput(event.target.value);
    };

    return (
        <form action="" className="search-box" onSubmit={addTown}>
            <input
                className="input-town"
                type="text"
                placeholder="Actobe"
                value={valueInput}
                onChange={changeInput}
            />
            <button className="button-search" type="submit">
                <img
                    className="lupa-search"
                    src="../../public/lupa.png"
                    alt=""
                />
            </button>
        </form>
    );
}

export { SearchBox };
