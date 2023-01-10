
import './MainBlock.css'
import Tabsbar from '../Tabsbar/Tabsbar';
import Locationsbar from '../Locationsbar/Locationsbar'
import { LOCAL_STORAGE } from '../../constans/constans';
import {  useEffect, useState } from 'react';


const MainBlock = ({setCurrentCity}) => {

    const [locationList, setlocationList] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE.FAVOURITE_CITIES)) || null);


    const deleteCity = (id) => {
        let newLocationList = locationList.filter(elem => elem.id !== id)
        setlocationList(newLocationList)
    }
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE.FAVOURITE_CITIES, JSON.stringify(locationList));
    }, [locationList])

    return (
        <div className='weather--main'>
            <Tabsbar
                locationList={locationList}
                setlocationList = {setlocationList}
            />
            <Locationsbar
                locationList={locationList}
                setlocationList={setlocationList}
                deleteCity={(id) => deleteCity(id)}
                setCurrentCity = {setCurrentCity}
            />
        </div>
    )
}
export default MainBlock;
