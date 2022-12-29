import { useState } from 'react';

function Tabs(props) {
    const { setTab } = props;
    const [nowTabClassName, setNowTabClassName] = useState(true)
    const [DetailsClassName, setDetailsTabClassName] = useState(false)
    const [ForecastTabClassName, setForecastTabClassName] = useState(false)
  
    return (
        <div className="tabs-container">
            <button
                type="button"
                className={nowTabClassName ? "tab1 item-tab item-tab-active" : "tab1 item-tab"}
                onClick={() => {
                    setNowTabClassName(true)
                    setDetailsTabClassName(false)
                    setForecastTabClassName(false)
                    setTab("tab1")
                }}
            >
                Now
            </button>
            <button
                type="button"
                className={DetailsClassName ? "tab2 item-tab item-tab-active" : "tab2 item-tab"}
                onClick={() => {
                    setNowTabClassName(false)
                    setDetailsTabClassName(true)
                    setForecastTabClassName(false)
                    setTab("tab2")
                }}
            >
                Details
            </button>
            <button
                type="button"
                className={ForecastTabClassName ? "tab3 item-tab item-tab-active" : "tab3 item-tab"}
                onClick={() => {
                    setNowTabClassName(false)
                    setDetailsTabClassName(false)
                    setForecastTabClassName(true)
                    setTab("tab3")
                }}
            >
                Forecast
            </button>
        </div>
    );
}

export { Tabs };
