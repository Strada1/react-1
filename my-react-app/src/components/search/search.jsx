import { useState } from "react"

export function FormSearch({ addCurrentCity }) {
  const [ city, setCity ] = useState('');

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(city) {
    if(!city.trim()) return;
    addCurrentCity(city);
  }

    return(
      <form className="search" onSubmit={() => handleSubmit(city)}>
        <input type="text" className="search__input" placeholder="Aktobe" onChange={handleChange} value={city} />
        <button className="search__btn" type="submit">
          <img src="../public/search.svg" alt="image" />
        </button>
      </form>
    )
}