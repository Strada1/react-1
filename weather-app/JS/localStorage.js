const STORAGE_KEY = "cityName"

function setStorage(cityName) {
    const cities = new Set(getStorage());
    cities.add(cityName);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...cities]))
}

function getStorage() {
    const favoriteCity = localStorage.getItem(STORAGE_KEY);
    return JSON.parse(favoriteCity);
}

export {setStorage, getStorage, STORAGE_KEY}