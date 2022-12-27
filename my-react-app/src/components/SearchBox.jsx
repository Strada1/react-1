import { useState } from 'react';
import { RESPONSE, defaultValue } from '../js/const';
import { mathRound } from '../js/mathRound';
import { getData } from '../js/response';

function SearchBox(props) {
    const { setTemperature, setIcon, setCityName } = props;
    const [valueInput, setValueInput] = useState(defaultValue);

    const linkImg = (icon) => `//openweathermap.org/img/wn/${icon}@2x.png`;

    const addTown = async (event) => {
        event.preventDefault();
        const url = `${RESPONSE.serverUrl}?q=${valueInput}&appid=${RESPONSE.apiKey}&units=metric`;
        const response = await getData(url);
        setTemperature(mathRound(response.main.temp));
        setIcon(linkImg(response.weather[0].icon));
        setCityName(response.name)
        setValueInput(defaultValue)
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
