import { useState, useEffect, useContext } from 'react';
import './App.css';
import { Wrapper } from './components/Wrapper';
import { SearchBox } from './components/SearchBox';
import { DisplayData } from './components/DisplayData';
import { DisplayDetalis } from './components/DisplayDetails';
import { DisplayForecast } from './components/DisplayForecast';
import { CityList } from './components/CityList';
import { Tabs } from './components/Tabs';
import { ShowResponse } from './components/ShowResponse';
import { DEFAULT } from './js/const';

function App() {
    const [tab, setTab] = useState('tab1');

    const [temperature, setTemperature] = useState();
    const [icon, setIcon] = useState();
    const [cityName, setCityName] = useState();
    const [feelsLike, setFeelsLike] = useState();
    const [weatherStatus, setWeatherStatus] = useState();
    const [sunrise, setSunrise] = useState();
    const [sunset, setSunset] = useState();

    const [dataForecast, setDataForecast] = useState([]);

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
        try {
            const cities = JSON.parse(localStorage.getItem('cityList'));
            if (cities) {
                setCityList(cities);
            }
            const lastCity = JSON.parse(localStorage.getItem('lastCity'));
            if (lastCity) {
                ShowResponse(
                    lastCity,
                    null,
                    setTemperature,
                    setIcon,
                    setCityName,
                    setFeelsLike,
                    setWeatherStatus,
                    setSunrise,
                    setSunset,
                    setDataForecast
                );
            } else {
                ShowResponse(
                    DEFAULT.CITY,
                    null,
                    setTemperature,
                    setIcon,
                    setCityName,
                    setFeelsLike,
                    setWeatherStatus,
                    setSunrise,
                    setSunset,
                    setDataForecast
                );
            }
        } catch (error) {
            alert(error);
        }
    }, []);
    return (
        <Wrapper>
            <SearchBox
                setTemperature={setTemperature}
                setIcon={setIcon}
                setCityName={setCityName}
                setFeelsLike={setFeelsLike}
                setWeatherStatus={setWeatherStatus}
                setSunrise={setSunrise}
                setSunset={setSunset}
                setDataForecast={setDataForecast}
            />
            <div className="content">
                <DisplayData
                    temperature={temperature}
                    icon={icon}
                    cityName={cityName}
                    cityList={cityList}
                    setCityList={setCityList}
                    tab={tab}
                />
                <DisplayDetalis
                    cityName={cityName}
                    tab={tab}
                    feelsLike={feelsLike}
                    weatherStatus={weatherStatus}
                    sunrise={sunrise}
                    sunset={sunset}
                    temperature={temperature}
                />
                <DisplayForecast
                    tab={tab}
                    dataForecast={dataForecast}
                    cityName={cityName}
                />
                <CityList
                    cityList={cityList}
                    setCityList={setCityList}
                    setTemperature={setTemperature}
                    setIcon={setIcon}
                    setCityName={setCityName}
                    setFeelsLike={setFeelsLike}
                    setWeatherStatus={setWeatherStatus}
                    setSunrise={setSunrise}
                    setSunset={setSunset}
                    setDataForecast={setDataForecast}
                />
            </div>
            <Tabs setTab={setTab} />
        </Wrapper>
    );
}

export default App;
