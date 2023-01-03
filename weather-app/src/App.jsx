import app from './App.module.css'
import ContainerWeather from "../component/ContainerWeather/ContainerWeather.jsx";
import ContainerLocation from "../component/ContainerLocation/ContainerLocation.jsx";
import {useState} from "react";
import {getData} from "../JS/getData.js";


function App() {
    const [value, setValue] = useState("")
    const [data, setData] = useState()
    const [favoriteCities, setFavoriteCities] = useState([])

    function handleChange(event) {
        setValue(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const DATA = await getData(value)
        setValue("")
        setData(DATA)
    }

    return (
        <div className={app.App}>
            <div className={app.Content}>
                <form onSubmit={handleSubmit}>
                    <input value={value} onChange={handleChange} placeholder="Введите название города" type="text"/>
                    <button className={app.Search}></button>
                </form>

                <article className={app.Wrapper}>
                    <ContainerWeather favoriteCities={favoriteCities} setFavoriteCities={setFavoriteCities} data={data}/>
                    <ContainerLocation setFavoriteCities={setFavoriteCities} favoriteCities={favoriteCities}/>
                </article>
            </div>

        </div>
    )
}

export default App
