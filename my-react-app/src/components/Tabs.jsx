import { useState } from 'react';

function Tabs(props) {
    const { setNowIsActive, setDetailsIsActive, setForecastActive } = props;
    const [nowTabClassName, setNowTabClassName] = useState(true)
    const [DetailsClassName, setDetailsTabClassName] = useState(false)
    const [ForecastTabClassName, setForecastTabClassName] = useState(false)
  
    return (
        <div className="tabs-container">
            <button
                type="button"
                className={nowTabClassName ? "tab1 item-tab item-tab-active" : "tab1 item-tab"}
                onClick={() => {
                    setNowIsActive(true);
                    setDetailsIsActive(false);
                    setForecastActive(false);

                    setNowTabClassName(true)
                    setDetailsTabClassName(false)
                    setForecastTabClassName(false)
                }}
            >
                Now
            </button>
            <button
                type="button"
                className={DetailsClassName ? "tab2 item-tab item-tab-active" : "tab2 item-tab"}
                onClick={() => {
                    setNowIsActive(false);
                    setDetailsIsActive(true);
                    setForecastActive(false);

                    setNowTabClassName(false)
                    setDetailsTabClassName(true)
                    setForecastTabClassName(false)
                }}
            >
                Details
            </button>
            <button
                type="button"
                className={ForecastTabClassName ? "tab3 item-tab item-tab-active" : "tab3 item-tab"}
                onClick={() => {
                    setNowIsActive(false);
                    setDetailsIsActive(false);
                    setForecastActive(true);

                    setNowTabClassName(false)
                    setDetailsTabClassName(false)
                    setForecastTabClassName(true)
                }}
            >
                Forecast
            </button>
        </div>
    );
}

export { Tabs };
