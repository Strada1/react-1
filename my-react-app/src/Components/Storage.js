import { localStorageMethods, defaultCity } from './Const'
function Storage(method, key, value) {
    let getStorage
    switch (method) {
        case localStorageMethods.SET:
            setItem()
            break
        case localStorageMethods.GET:
            getItem()
            break
    }
    function setItem() {
        localStorage.setItem(key, JSON.stringify(value))
    }
    function getItem() {
        getStorage = JSON.parse(localStorage.getItem(key))
    }
    if (!getStorage && key == 'cityNow') {
        return defaultCity
    } else if (!getStorage && key == 'favoriteCities') {
        return ''
    } else if (!getStorage && key == 'forecastCity') {
        return [{}, {}, {}]
    } else {
        return getStorage
    }
}
export { Storage }
