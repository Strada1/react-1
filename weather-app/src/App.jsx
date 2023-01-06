import {createContext, useState} from "react";
import app from './App.module.css'
import ContainerWeather from "../component/ContainerWeather/ContainerWeather.jsx";
import ContainerLocation from "../component/ContainerLocation/ContainerLocation.jsx";
import {getData, URL_TYPE} from "../JS/getData.js";
import {MyContextLocation, MyContextWeather} from "../JS/myContextLocation.js"

function App() {
    const [value, setValue] = useState("")
    const [data, setData] = useState()
    const [dataForecast, setDataForecast] = useState()
    const [favoriteCities, setFavoriteCities] = useState([])

    function handleChange(event) {
        setValue(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const DATA = await getData(URL_TYPE.weather, value)
        const DATA_FORECAST = await getData(URL_TYPE.forecast, value)
        setData(DATA)
        setDataForecast(DATA_FORECAST)
        setValue("")
    }

    return (

        <div className={app.App}>
            <div className={app.Content}>

                <form onSubmit={handleSubmit}>
                    <input value={value} onChange={handleChange} placeholder="Введите название города" type="text"/>
                    <button className={app.Search}/>
                </form>

                <article className={app.Wrapper}>

                    <MyContextWeather.Provider value={{setFavoriteCities, data, dataForecast}}>
                        <ContainerWeather/>
                    </MyContextWeather.Provider>

                    <MyContextLocation.Provider value={{favoriteCities, setFavoriteCities}}>
                        <ContainerLocation/>
                    </MyContextLocation.Provider>

                </article>
            </div>
        </div>

    )
}

export default App
