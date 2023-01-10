import React from 'react';

function Favorites({ favorite }) {
  return (
    <div className="rightWindow">
      <h1>Added Locations:</h1>
      <div>
        <ul id="rUl">
          {favorite.map((city, index) => {
            return (
              <li key={index}>
                {city}
                <button className="buttonDelete">
                  <img src="/img/close.png" alt="delete" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Favorites;
