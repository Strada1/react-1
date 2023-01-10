import React from "react";
import { City } from "./City";

function ListCityes({ likedCity, deleteCity, request }) {
  return (
    <section className="main-locations">
      <div className="locations-header">
        <p className="text-locations">Added Locations:</p>
      </div>
      <ul className="locations-items">
        {likedCity.map((item) => (
          <City
            cityName={item.name}
            key={item.id}
            deleteFunc={() => deleteCity(item.name)}
            forecast={() => request(item.name)}
          />
        ))}
      </ul>
    </section>
  );
}

export { ListCityes };
