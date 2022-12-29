import { useState, useEffect } from 'react';
import './App.css';
import { SearchBox } from './components/SearchBox';
import { DisplayData } from './components/DisplayData';
import { DisplayDetalis } from './components/DisplayDetails';
import { DisplayForecast } from './components/DisplayForecast';
import { CityList } from './components/CityList';
import { Tabs } from './components/Tabs';
import { ShowResponse } from './components/ShowResponse';

function App() {
    const [nowIsActive, setNowIsActive] = useState(true);
    const [DetailsIsActive, setDetailsIsActive] = useState(false);
    const [ForecastIsActive, setForecastActive] = useState(false);

    const [tab, setTab] = useState('tab1')

    const [temperature, setTemperature] = useState();
    const [icon, setIcon] = useState();
    const [cityName, setCityName] = useState();

    const [cityList, setCityList] = useState([]);
    

    useEffect(() => {
        if (cityList.length !== 0) {
            try {
                localStorage.setItem('cityList', JSON.stringify(cityList));
            } catch (error) {
                alert(error);
            }
        }
    }, [cityList]);

    useEffect(() => {
        const cities = JSON.parse(localStorage.getItem('cityList'));
        if (cities) {
            setCityList(cities);
        }
        ShowResponse("Варшава", null, setTemperature, setIcon, setCityName)
    }, []);
    return (
        <div className="wrapper">
            <div className="container">
                <div className="out-border">
                    <SearchBox
                        setTemperature={setTemperature}
                        setIcon={setIcon}
                        setCityName={setCityName}
                    />
                    <div className="content">
                        <DisplayData
                            temperature={temperature}
                            icon={icon}
                            cityName={cityName}
                            cityList={cityList}
                            setCityList={setCityList}
                            nowIsActive={nowIsActive}
                        />
                        <DisplayDetalis
                            cityName={cityName}
                            DetailsIsActive={DetailsIsActive}
                        />
                        <DisplayForecast ForecastIsActive={ForecastIsActive} />
                        <CityList
                            cityList={cityList}
                            setCityList={setCityList}
                            setTemperature={setTemperature}
                            setIcon={setIcon}
                            setCityName={setCityName}
                        />
                    </div>
                    <Tabs
                        setNowIsActive={setNowIsActive}
                        setDetailsIsActive={setDetailsIsActive}
                        setForecastActive={setForecastActive}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
