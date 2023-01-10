export function setStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (eror) {
    console.log(eror);
  }
}

export function getStorage(key) {
  try {
    if (localStorage.getItem(key) !== null) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      return []
    }
  } catch (eror) {
    console.log(eror);
  }
}
