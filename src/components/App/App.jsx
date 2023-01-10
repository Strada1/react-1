import React, { useState } from 'react';
import './App.sass';
import SearchCityForm from '../SearchCityForm/SearchCityForm';
import Now from '../Now/Now';
import FavoriteCities from '../FavoriteCities/FavoriteCities';
import Tabs from '../Tabs/Tabs';
import Details from '../Details/Details';
import ForecastList from '../ForecastList/ForecastList';
import Template from '../Template/Template';
import useRequests from '../../hooks/useRequest';
import Error from '../Error/Error';
import nowContext from '../../hooks/context';

const defaultActiveTab = 'tab-1';

function App() {
  const { getCityForecast, getCityWeather, error, setError } = useRequests();

  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const [nowDetails, SetNowDetails] = useState(null);
  const [forecast, SetForecast] = useState(null);
  const [favoriteCites, setFavoriteCities] = useState(new Set());

  const onChangeTabs = (event) => {
    setActiveTab(event.target.id);
  };
  const onRequest = (searchCity) => {
    setError(false);
    getCityWeather(searchCity).then((res) => SetNowDetails(res));
    getCityForecast(searchCity).then((res) => SetForecast(res));
  };

  const addFavoriteCities = (nameCity) => {
    setFavoriteCities(new Set([...favoriteCites, nameCity]));
  };

  const deleteFavoriteCities = (nameCity) => {
    favoriteCites.delete(nameCity);
    setFavoriteCities(new Set([...favoriteCites]));
  };

  let content;

  if (!error && nowDetails && activeTab === 'tab-2') {
    content = <Details />;
  } else if (!error && forecast && activeTab === 'tab-3') {
    content = <ForecastList cityWeather={forecast} />;
  } else if (!error && nowDetails && activeTab === 'tab-1') {
    content = (
      <Now
        deleteFavoriteCities={deleteFavoriteCities}
        favoriteCites={favoriteCites}
        addFavoriteCities={addFavoriteCities}
      />
    );
  } else {
    content = error ? <Error /> : <Template />;
  }

  return (
    <div className='weather'>
      <SearchCityForm onRequest={onRequest} />
      <div className='weather__body'>
        <div className='weather__tabs'>
          <nowContext.Provider value={nowDetails}>
            <div className='tabs-content'>{content}</div>
          </nowContext.Provider>
          <Tabs onChangeTabs={onChangeTabs} activeTab={activeTab} />
        </div>
        <FavoriteCities
          onRequest={onRequest}
          favoriteCites={new Set(favoriteCites)}
          deleteFavoriteCities={deleteFavoriteCities}
        />
      </div>
    </div>
  );
}

export default App;
