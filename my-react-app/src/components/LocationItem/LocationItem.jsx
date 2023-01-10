import './LocationItem.css'

const LocationItem = ({ name, deleteCity, chooseCity }) => {


    return (
        <li className='locations--item' onClick={chooseCity}>
            <span className='locations--text'>{name}</span>
            <button
                className='locations-btn'
                onClick={() => deleteCity(name)}
            ></button>
        </li>
    )
}
export default LocationItem;
