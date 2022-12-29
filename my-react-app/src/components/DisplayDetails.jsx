import { motion } from 'framer-motion';

function DisplayDetalis(props) {
    const { cityName, DetailsIsActive } = props;
    return (
        <motion.div
            className={DetailsIsActive ? 'tab-active' : 'display'}
            id="display-details"
        >
            <div className="city-name-details">{cityName}</div>
        </motion.div>
    );
}

export { DisplayDetalis };
