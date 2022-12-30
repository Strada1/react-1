import './LocationItem.css'

const LocationItem = ({name}) => {
    return (
        <li className='locations--item'>
            <span className='locations--text'>{name}</span>
            <button className='locations-btn'></button>
        </li>
    )
}
export default LocationItem;
