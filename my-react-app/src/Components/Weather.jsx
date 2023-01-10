import { useEffect, useState } from 'react'
import { WeatherContent } from './WeatherContent'
import Snowfall from 'react-snowfall'
import { nanoid } from 'nanoid'
import { Storage } from './Storage'
import { localStorageMethods, weatherUrl, forecastUrl, apiKey } from './Const'

function Weather() {
    const [inputValue, setInputValue] = useState('')
    const [cityNow, setCityNow] = useState(
        Storage(localStorageMethods.GET, 'cityNow')
    )
    const [favoriteCities, setfavoriteCities] = useState(
        Storage(localStorageMethods.GET, 'favoriteCities')
    )
    const [forecastCity, setforecastCity] = useState(
        Storage(localStorageMethods.GET, 'forecastCity')
    )
    useEffect(() => {
        Storage(localStorageMethods.SET, 'cityNow', cityNow)
    }, [cityNow])
    useEffect(() => {
        Storage(localStorageMethods.SET, 'favoriteCities', favoriteCities)
    }, [favoriteCities])
    useEffect(() => {
        Storage(localStorageMethods.SET, 'forecastCity', forecastCity)
    }, [forecastCity])

    async function forecastRequest(e, value) {
        e.preventDefault()
        const URL = `${forecastUrl}?q=${
            inputValue ? inputValue : value
        }&cnt=3&appid=${apiKey}&units=metric`
        const weatcherInfo = await fetch(URL)
        const response = await weatcherInfo.json()
        setforecastCity([
            {
                id: nanoid(),
                city: response.city.name,
                degrees: response.list[0].main.temp,
                date: response.list[0].dt_txt,
                feelsLike: response.list[0].main.feels_like,
                weather: response.list[0].weather[0].main,
                icon: response.list[0].weather[0].icon,
            },
            {
                id: nanoid(),
                city: response.city.name,
                degrees: response.list[1].main.temp,
                date: response.list[1].dt_txt,
                feelsLike: response.list[1].main.feels_like,
                weather: response.list[1].weather[0].main,
                icon: response.list[1].weather[0].icon,
            },
            {
                id: nanoid(),
                city: response.city.name,
                degrees: response.list[2].main.temp,
                date: response.list[2].dt_txt,
                feelsLike: response.list[2].main.feels_like,
                weather: response.list[2].weather[0].main,
                icon: response.list[2].weather[0].icon,
            },
        ])
        setInputValue('')
    }
    async function weatherRequest(e, cityFavorite) {
        e.preventDefault()
        try {
            const URL = `${weatherUrl}?q=${
                inputValue ? inputValue : cityFavorite
            }&appid=${apiKey}&units=metric`
            const weatherInfo = await fetch(URL)
            const response = await weatherInfo.json()
            setCityNow({
                id: nanoid(),
                city: response.name,
                degrees: response.main.temp,
                feelsLike: response.main.feels_like,
                weather: response.weather[0].main,
                sunrise: response.sys.sunrise,
                sunset: response.sys.sunset,
                icon: response.weather[0].icon,
            })
            forecastRequest(e, cityFavorite)
        } catch (error) {
            console.log(error.message)
        }
    }
    function addFavoriteCity() {
        let person
        {
            favoriteCities
                ? favoriteCities.some((element) => {
                      if (element.city === cityNow.city) {
                          person = true
                      }
                  })
                : (person = false)
        }
        if (person) {
            alert('Сity is already in favorites')
        } else {
            setfavoriteCities([
                ...favoriteCities,
                { id: nanoid(), city: cityNow.city },
            ])
        }
    }
    function removeFavoriteCity(cityId) {
        setfavoriteCities(favoriteCities.filter((city) => city.id != cityId))
    }

    return (
        <div className="container">
            <Snowfall />
            <WeatherContent
                refreshRequest={weatherRequest}
                value={inputValue}
                forecastCity={forecastCity}
                addFavoriteCity={addFavoriteCity}
                removeFavorite={removeFavoriteCity}
                favoriteCity={favoriteCities}
                cityNow={cityNow}
                request={weatherRequest}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    )
}

export { Weather }
