export function addCityStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (error) {
        console.error(error)
    }
}

export function saveCityStorage(key, cities) {
    try {
        localStorage.setItem(key, JSON.stringify(cities));
    } catch (error) {
        console.error(error)
    }
}