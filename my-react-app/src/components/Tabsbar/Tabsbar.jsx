import { useEffect, useState } from 'react'
import './Tabsbar.css'
import NowScreen from '../NowScreen/NowScreen';
import TabButton from '../TabButton/TabButton.jsx';
import DeatilsScreen from '../DeatilsScreen/DeatilsScreen'
import ForecastScreen from '../ForecastScreen/ForecastScreen';

import { TABSBAR } from '../../constans/constans';



const Tabsbar = ({locationList, setlocationList}) => {

    const tabsName = [{
        name: TABSBAR.NOW,
        isActive: true,
        component: <NowScreen
            key='0'
            locationList={locationList}
            setlocationList = {setlocationList}
        />
    },
    {
        name: TABSBAR.DETAILS,
        isActive: false,
        component: <DeatilsScreen key='1' />
    },
    {
        name: TABSBAR.FORECAST,
        isActive: false,
        component: <ForecastScreen  key='2' />
    }]

    const [tabs, setTabs] = useState(tabsName)
    // useEffect(() => {
    //     setTabs(tabsName)
    //     console.log('useEffect Tabsbar');
    // }, [city])

    const changeTab = (button) => {
        const newTabs = tabsName.map(tab => {
            if (tab.name === button.name) {
                return {
                    name: tab.name,
                    isActive: true,
                    component: tab.component
                }
            }
                return {
                    name: tab.name,
                    isActive: false,
                    component: tab.component
                }

        })
       setTabs(newTabs)
    }

    // useEffect(() => {
    //     setTabs(tabsName)
    // }, [])


    return (
        <div className='weather--tabsbar'>
            <div className='weather--screens'>
                {tabs.map(item => item.isActive ? item.component : null)}
            </div>
            <div className='weather--tabs'>
                {tabs.map((item, index) => {
                    if (item.isActive) {
                        return (
                            <TabButton
                                tabName={item.name}
                                style='tabs--btn tabs--active'
                                key={index}
                                handleClick = {() => changeTab(item)}
                            />
                        )
                    }
                    return <TabButton
                                tabName={item.name}
                                style='tabs--btn'
                                key={index}
                                handleClick = {() => changeTab(item)}
                            />

                })}
            </div>
        </div>
    )
}
export default Tabsbar;
