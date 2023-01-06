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

const defaultActiveTab = 'tab-1';

function App() {
  const { getCityForecast, getCityWeather, error, setError } = useRequests();

  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const [nowDetailsData, SetNowDetailsData] = useState(null);
  const [forecastData, SetForecastData] = useState(null);
  const [favoriteCites, setFavoriteCities] = useState(new Set());

  const onChangeTabs = (event) => {
    setActiveTab(event.target.id);
  };
  const onRequest = (searchCity) => {
    setError(false);
    getCityWeather(searchCity).then((res) => SetNowDetailsData(res));
    getCityForecast(searchCity).then((res) => SetForecastData(res));
  };

  const addFavoriteCities = (nameCity) => {
    setFavoriteCities(new Set([...favoriteCites, nameCity]));
  };

  const deleteFavoriteCities = (nameCity) => {
    favoriteCites.delete(nameCity);
    setFavoriteCities(new Set([...favoriteCites]));
  };

  let content = <Template />;

  if (!error && nowDetailsData && activeTab === 'tab-2') {
    content = <Details cityWeather={nowDetailsData} />;
  } else if (!error && forecastData && activeTab === 'tab-3') {
    content = <ForecastList cityWeather={forecastData} />;
  } else if (!error && nowDetailsData && activeTab === 'tab-1') {
    content = (
      <Now
        deleteFavoriteCities={deleteFavoriteCities}
        favoriteCites={favoriteCites}
        addFavoriteCities={addFavoriteCities}
        cityWeather={nowDetailsData}
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
          <div className='tabs-content'>{content}</div>

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
