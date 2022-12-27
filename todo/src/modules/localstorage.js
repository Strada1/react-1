import { errorMessages } from './error';
const STORAGE_NAME = 'reactTodoList';

class Storage {
  static saveToStorage (data) {
    let error = null;

    data =
      (data && data.length)
        ? data
        : null;

    try {
      localStorage.setItem(STORAGE_NAME, JSON.stringify(data));
    } catch (e) {
      error = errorMessages.SET_DATA_ERROR;
    }

    return error;
  }

  static getFromStorage () {
    let error = null;
    let data = null;

    try {
      data = localStorage.getItem(STORAGE_NAME);
      data = JSON.parse(data) ?? data;
    } catch (e) {
      error = errorMessages.GET_DATA_ERROR;
    }

    return [data, error];
  }
};


export { Storage };
