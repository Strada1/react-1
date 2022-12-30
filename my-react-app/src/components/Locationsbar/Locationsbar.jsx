import LocationItem from '../LocationItem/LocationItem'
import './Locationsbar.css'

const Locationsbar = () => {

    const favouriteLocations = [
        { name: 'Bishkek' },
        { name: 'Kyiv' },
        { name: 'Los Angeles' },
        { name: 'Samara' },
        { name: 'Omsk' },
        { name: 'Talas'},
    ]

    const locationList = favouriteLocations.map((item, id) => <LocationItem key={id} name={item.name} />)

    return (
        <div className='weather--locatiosnbar'>
            <div className='weather--headerbox'>
                <div className='location-headerbox'>
                    <h3 className='location-header'>Added Locations:</h3>
                </div>
                <div className='weather--locations'>
                    <ul className='weather--locationslist'>
                        {locationList}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Locationsbar;
