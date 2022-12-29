import { useState } from 'react';
import { motion } from 'framer-motion';
import { ERROR_MESSAGE } from '../js/const';

function DisplayData(props) {
    const { temperature, icon, cityName, cityList, setCityList, nowIsActive } = props;
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
        <motion.div
            className={nowIsActive ? 'tab-active' : 'display'}
            id="display-data"
        >
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
                    <button
                        type="button"
                        className="button-close"
                        onClick={() => setError(false)}
                    >
                        +
                    </button>
                </div>
            )}
        </motion.div>
    );
}

export { DisplayData };
