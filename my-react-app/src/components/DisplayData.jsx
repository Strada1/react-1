import { useState } from 'react';
import { ERROR_MESSAGE } from '../js/const';

function DisplayData(props) {
    const { temperature, icon, cityName, cityList, setCityList } = props;
    const [error, setError] = useState(false);

    const favoriteCity = () => {
        const newCity = cityList.find((town) => town === cityName);
        if (newCity === undefined) {
            setCityList([...cityList, cityName]);
        } else {
            setError(true);
        }
    };

    return (
        <div className="display-data display" id="display-data">
            <div className="temperature-data">{temperature}°</div>
            <img src={icon} alt="" className="icon-data" />
            <div className="city-name-data">{cityName}</div>
            <button
                type="button"
                className="button-love"
                onClick={favoriteCity}
            >
                <img src="../../public/love.png" alt="" />
            </button>
            {error && (
                <div className="error">
                    <div className="city-repeat text-error">
                        {ERROR_MESSAGE.CITY_REPEAT}
                    </div>
                    <button type='button'
                        className="button-close"
                        onClick={() => setError(false)}
                    >
                        +
                    </button>
                </div>
            )}
        </div>
    );
}

export { DisplayData };
