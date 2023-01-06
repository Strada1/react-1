import React, { useState } from 'react';
import MenuButton from './MenuButton/MenuButton';
import TabNow from './TabNow/TabNow';
import TabDetails from './TabDetails/TabDetails';
import TabForecast from './TabForecast/TabForecast';
import './styleInformation.css';

function Information(props) {
  const { cityWeatherInfo, forecast, selectedCities, setSelectedCities } =
    props;
  const [activeButton, setActiveButton] = useState('1');
  return (
    <div className="block-info">
      {cityWeatherInfo !== null ? (
        <div className="info">
          {(() => {
            switch (activeButton) {
              case '1':
                return (
                  <TabNow
                    cityWeatherInfo={cityWeatherInfo}
                    setSelectedCities={setSelectedCities}
                    selectedCities={selectedCities}
                  />
                );
              case '2':
                return <TabDetails cityWeatherInfo={cityWeatherInfo} />;
              case '3':
                return <TabForecast forecast={forecast} />;
              default:
                return null;
            }
          })()}
        </div>
      ) : (
        <div className="info-null">Enter the city in the search for data</div>
      )}
      <div className="menu">
        <MenuButton text="Now" id="1" setActiveButton={setActiveButton} />
        <MenuButton text="Details" id="2" setActiveButton={setActiveButton} />
        <MenuButton text="Forecast" id="3" setActiveButton={setActiveButton} />
      </div>
    </div>
  );
}

export default Information;
