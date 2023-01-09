
import './MainBlock.css'
import Tabsbar from '../Tabsbar/Tabsbar';
import Locationsbar from '../Locationsbar/Locationsbar'
import { LOCAL_STORAGE } from '../../constans/constans';
import {  useEffect, useState } from 'react';


const MainBlock = () => {

    const [locationList, setlocationList] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE.FAVOURITE_CITIES)) || null);


    // useEffect(() => setlocationList(JSON.parse(localStorage.getItem(LOCAL_STORAGE.FAVOURITE_CITIES)) || null), [])

    return (
        <div className='weather--main'>
            <Tabsbar
                locationList={locationList}
                setlocationList = {setlocationList}
            />
            <Locationsbar
                locationList={locationList}
                setlocationList = {setlocationList}
            />
        </div>
    )
}
export default MainBlock;
