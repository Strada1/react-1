import './LocationItem.css'

const LocationItem = ({ name, deleteCity }) => {



    return (
        <li className='locations--item'>
            <span className='locations--text'>{name}</span>
            <button
                className='locations-btn'
                onClick={deleteCity}
            ></button>
        </li>
    )
}
export default LocationItem;
