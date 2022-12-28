import app from './App.module.css'
import Button from "../component/ContainerWeather/Button/Button.jsx";
import Footer from "../component/ContainerWeather/Footer/Footer.jsx";
import Now from "../component/ContainerWeather/Now/Now.jsx";
import ContainerWeather from "../component/ContainerWeather/ContainerWeather.jsx";
import ContainerLocation from "../component/ContainerLocation/ContainerLocation.jsx";

function App() {
    return (
        <div className={app.App}>

            <div className={app.Content}>
                <form>
                    <input placeholder="Введете название города" type="text"/>
                    <button className={app.Search}></button>
                </form>

                <article className={app.Wrapper}>
                    <ContainerWeather/>
                    <ContainerLocation/>
                </article>
            </div>

        </div>
    )
}

export default App
