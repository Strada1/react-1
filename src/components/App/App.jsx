import React, { useState } from 'react';
import './App.sass';
import SearchCityForm from '../SearchCityForm/SearchCityForm';
import Now from '../Now/Now';
import FavoriteCities from '../FavoriteCities/FavoriteCities';
import Tabs from '../Tabs/Tabs';
import Details from '../Details/Details';
import ForecastList from '../ForecastList/ForecastList';

const defaultInputValue = '';
const defaultActiveTab = 'tab-1';
function App() {
  const [searchCity, setSearchCity] = useState(defaultInputValue);
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const onChangeInput = (event) => {
    setSearchCity(event.target.value);
  };
  const clearingInput = () => {
    setSearchCity(defaultInputValue);
  };

  const onChangeTabs = (event) => {
    setActiveTab(event.target.id);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(`reg... ${searchCity}`);
    clearingInput();
  };

  let content = <Now />;
  if (activeTab === 'tab-2') {
    content = <Details />;
  } else if (activeTab === 'tab-3') {
    content = <ForecastList />;
  }

  return (
    <div className='weather'>
      <SearchCityForm
        inputValue={searchCity}
        onChangeInput={onChangeInput}
        onSubmit={onSubmit}
      />

      <div className='weather__body'>
        <div className='weather__tabs'>
          <div className='tabs-content'>{content}</div>
          <Tabs onChangeTabs={onChangeTabs} activeTab={activeTab} />
        </div>
        <FavoriteCities />
      </div>
    </div>
  );
}

export default App;
