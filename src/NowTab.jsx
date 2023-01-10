import { toCelsius } from "./api"
import { ForecastContext } from "./ForecastContext";

function NowTab(props) {
    const iconClass = (props.selected ? "fa-solid" : "fa-regular") + " fa-heart";

    return (
        <ForecastContext.Consumer>
            {(forecast) => (
                <div className="tabcontent">
                    <div className="temperature">
                        <h1>{toCelsius(forecast.temperature)}</h1>
                    </div>
                    <div className="icon-weather">
                        <i className="fa fa-cloud fa-3x"></i>
                    </div>
                    <div className="city">
                        <span>{forecast.name}</span>
                        <button onClick={props.handleClick}>
                            <i className={iconClass}></i>
                        </button>
                    </div>
                </div>
            )}
        </ForecastContext.Consumer>
    )
}

export default NowTab