import React from 'react';

function Now({ temp, city, description, favorite, setFavorite, icon }) {
  const deg = Math.floor(temp - 273.15) + '°';

  const favoriteFilter = () => {
    if (favorite.length > 0) {
      favorite.find((item, index) => {
        if (item === city) {
          setFavorite(favorite.filter((item) => item !== city));
          localStorage.removeItem(`favorite[${index}]`);
        } else {
          setFavorite([...favorite, city]);
          localStorage.setItem('favorite', JSON.stringify([...favorite, city]));
        }
      });
    } else {
      setFavorite([city]);
      localStorage.setItem('favorite', JSON.stringify([city]));
    }
  };
  return (
    <div id="tab_01" className="tabsBlock">
      <h1>{deg}</h1>
      <img className="icon" src={'/img/' + icon(description)} alt={description} />
      <div>
        <p>{city}</p>
        <button className="buttonFavorite" onClick={favoriteFilter}>
          {favorite.find((item) => item === city) ? (
            <img src="/img/shaped.png" alt="shaped" />
          ) : (
            <img src="/img/shape.png" alt="shape" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Now;
