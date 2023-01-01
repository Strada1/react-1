import { ERROR } from './error';

const LOCATIONS_STORAGE_NAME = 'favouriteLocations';
const CURRENT_LOCATION_STORAGE_NAME = 'currentLocation';

const storage = {
  saveFavouriteLocations (favouriteLocations) {
    let error = null;

    favouriteLocations =
      (favouriteLocations && favouriteLocations.length)
        ? favouriteLocations
        : [];
    try {
      localStorage.setItem(LOCATIONS_STORAGE_NAME, JSON.stringify(favouriteLocations));
    } catch (e) {
      error = ERROR.SET_DATA_ERROR;
    }

    return error;
  },

  getFavouriteLocations () {
    let error = null;
    let data = null;

    try {
      data = localStorage.getItem(LOCATIONS_STORAGE_NAME);
      data = JSON.parse(data) ?? data;
    } catch (e) {
      error = ERROR.GET_DATA_ERROR;
    }

    return [data, error];
  },

  saveCurrentLocation (name) {
    let error = null;

    name = (name && name.length) ? name : '';

    try {
      localStorage.setItem(CURRENT_LOCATION_STORAGE_NAME, JSON.stringify(name));
    } catch (e) {
      error = ERROR.SET_DATA_ERROR;
    }

    return error;
  },

  getCurrentLocation () {
    let error = null;
    let data = null;

    try {
      data = localStorage.getItem(CURRENT_LOCATION_STORAGE_NAME);
      data = JSON.parse(data) ?? data;
    } catch (e) {
      error = ERROR.GET_DATA_ERROR;
    }

    return [data, error];
  }
};

export default storage;
