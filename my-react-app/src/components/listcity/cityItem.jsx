import { useContext } from "react";
import { CitiesContext } from "../../context";

export function CityItem({ nameCity }) {

    const { addCurrentCity, deleteTask } = useContext(CitiesContext);

    return(
        <li className = 'list-item'>
            <p className = 'list-item-city' onClick={() => addCurrentCity(nameCity)}>{nameCity}</p>
            <button className = 'locations__delete' onClick={() => deleteTask(nameCity)}>+</button>
        </li>
    )
}