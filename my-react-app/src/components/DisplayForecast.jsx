import { motion } from 'framer-motion';

function DisplayForecast(props) {
    const { ForecastIsActive } = props;
    return (
        <motion.div
            className={ForecastIsActive ? 'tab-active' : 'display'}
            id="display-forecast"
        >
            display-forecast
        </motion.div>
    );
}

export { DisplayForecast };
