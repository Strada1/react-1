import './Tabsbar.css'
import NowScreen from '../NowScreen/NowScreen';
import TabButton from '../TabButton/TabButton.jsx';
import DeatilsScreen from '../DeatilsScreen/DeatilsScreen'
import ForecastScreen from '../ForecastScreen/ForecastScreen';

const tabsName = [{ name: 'Now', isActive: true }, { name: 'Details',  isActive: false }, { name: 'Forecast',  isActive: false }]

const Tabsbar = () => {
    return (
        <div className='weather--tabsbar'>
            <div className='weather--screens'>
                {/* <NowScreen /> */}
                {/* <DeatilsScreen /> */}
                { <ForecastScreen /> }
            </div>
            <div className='weather--tabs'>
                {tabsName.map((item, index) => {
                    if (item.isActive) {
                        return (
                            <TabButton
                                tabName={item.name}
                                style='tabs--btn tabs--active'
                                key={index}
                            />
                        )
                    }
                    return <TabButton
                                tabName={item.name}
                                style='tabs--btn'
                                key={index}
                            />

                })}
            </div>
        </div>
    )
}
export default Tabsbar;
