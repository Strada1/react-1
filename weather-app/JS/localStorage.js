const STORAGE_KEY = "cityName"

function getStorage() {
    try {
        const favoriteCity = localStorage.getItem(STORAGE_KEY)
        return JSON.parse(favoriteCity)
    } catch (error) {
        console.error(error)
    }

}

function setStorage(cityName) {
    try {
        // TODO: Сделать проверку на сущ-ий город в localStorage
        // const cities = new Set();
        // cities.add(cityName)
        const stringValue = JSON.stringify([...cityName])
        localStorage.setItem(STORAGE_KEY, stringValue)
    } catch (error) {
        console.error(error)
    }
}

export {setStorage, getStorage, STORAGE_KEY}