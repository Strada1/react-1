import LocationItem from '../LocationItem/LocationItem'
import './Locationsbar.css'

const Locationsbar = ({ locationList, setCurrentCity , deleteCity }) => {

     const chooseCity = (city) => {
        setCurrentCity(city)
    }

    return (
        <div className='weather--locatiosnbar'>
            <div className='weather--headerbox'>
                <div className='location-headerbox'>
                    <h3 className='location-header'>Added Locations:</h3>
                </div>
                <div className='weather--locations'>
                    <ul className='weather--locationslist'>
                        {locationList ? locationList.map((item, id) => <LocationItem
                            key={id}
                            name={item.cityName}
                            id={item.id}
                            setCurrentCity={setCurrentCity}
                            chooseCity = {() => chooseCity(item.cityName)}
                            deleteCity={() => deleteCity(item.id)} />) : null

                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Locationsbar;
