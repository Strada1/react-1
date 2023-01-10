import { useState } from 'react'

import NowTab from "./NowTab";
import DetailsTab from "./DetailsTab";
import ForecastTab from "./ForecastTab";
import TabButton from './TabButton'
import Locations from './Locations'

function Content(props) {
    const forecast = props.forecast;

    const [activeTab, setActiveTab] = useState('now');
    const [cityList, setCityList] = useState([]);

    function handleClick() {
        if (isSelected()) {
            setCityList(cityList.filter(city => city !== forecast.name));
        } else {
            cityList.push(forecast.name);
            setCityList([...cityList]);
        }
    }

    function isSelected() {
        return new Set(cityList).has(forecast.name);
    }

    function getActiveTab(tab) {
        switch (tab) {
            case 'forecast': return <ForecastTab />
            case 'details': return <DetailsTab />
            case 'now': return <NowTab
                handleClick={handleClick}
                selected={isSelected()} />
            default:
                throw new Error('tab is not defined');
        }
    }

    return (
        <div className="content">
            <div className="col">
                {getActiveTab(activeTab)}
                <div className="tab">
                    <TabButton
                        active={activeTab === 'now'}
                        name='Now'
                        handleClick={() => setActiveTab('now')} />
                    <TabButton
                        active={activeTab === 'details'}
                        name='Details'
                        handleClick={() => setActiveTab('details')} />
                    <TabButton
                        active={activeTab === 'forecast'}
                        name='Forecast'
                        handleClick={() => setActiveTab('forecast')} />
                </div>
            </div>
            <Locations cityList={cityList} handleClick={props.handleClick} />
        </div>
    )
}

export default Content