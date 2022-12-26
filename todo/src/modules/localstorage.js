const STORAGE_NAME = 'reactTodoList';

class Storage {
  static saveToStorage (data) {
    data =
      (data && data.length)
        ? data
        : null;
    localStorage.setItem(STORAGE_NAME, JSON.stringify(data));
  }

  static getFromStorage () {
    const data = localStorage.getItem(STORAGE_NAME);
    return data ? JSON.parse(data) : null;
  }
};


export { Storage };
