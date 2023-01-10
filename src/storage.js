import { defaultCity } from './const';

function getCityList() {
  return JSON.parse(localStorage.getItem('cities'));
}

function saveCityList(cityList) {
  localStorage.setItem('cities', JSON.stringify(cityList));
}

function checkDupcicateCity(city, cityList) {
  if (cityList) {
    return cityList.includes(city);
  }
}

function getCityId(cityName, cityList) {
  const cityId = cityList.findIndex((city) => {
    if (city === cityName) {
      return true;
    }
  });
  return cityId;
}

function deleteCity(city, cityList) {
  const cityId = getCityId(city, cityList);
  const newCityList = cityList.slice(0);
  newCityList.splice(cityId, 1);
  return newCityList;
}

function saveCurrentCity(cityName) {
  localStorage.setItem('currentCity', cityName);
}

function getCurrentCity() {
  const currentCity = localStorage.getItem('currentCity');
  if (currentCity) {
    return currentCity;
  }
  return defaultCity;
}

export {
  getCityList, saveCityList, checkDupcicateCity, deleteCity, saveCurrentCity, getCurrentCity,
};
